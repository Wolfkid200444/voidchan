import { Command } from 'discord-akairo';
import { Collection, Message, MessageEmbed } from 'discord.js';

export default class PingCommand extends Command {
	public constructor() {
		super('help', {
			aliases: ['help', 'commands'],
		});
	}

	public *args() {
		const keyArg = yield {
			type: (_message: Message, key: string): Command | null => {
				key = key !== null ? key.toLowerCase() : null;
				return this.handler.modules.filter((v: Command) => v.aliases.includes(key)).size > 0
					? this.handler.modules.filter((v: Command) => v.aliases.includes(key)).first()
					: null;
			},
		};

		return { keyArg };
	}

	public async exec(message: Message, args: any) {

		const account = await this.client.router.accounts.findOne({ user: message.author.id });

		const color = account?.embed_color || '#ff2a6d';

		if (args.keyArg != null) {
			const command: Command = args.keyArg;

			const embedCommandHelp = new MessageEmbed()
				.setTitle(`Detailed help ${command.aliases[0]}`)
				.addField('Aliases', command.aliases.map((v, i) => {
					if (i != 0) return `\`${v}\``; return "";
				}).join("\n"), true)
				.setColor(color)
				.setFooter(`Detailed command usage for "${command.aliases[0]}"`);

			if (command.description?.length > 0) {
				embedCommandHelp.setDescription(command.description);
			}

			return message.util.send({ embed: embedCommandHelp, replyTo: message.id });
		}

		const handler = this.handler;

		let description: string = 'Below are all commands listed which are available to use. The default prefix is: ';

		const prefix: string | Array<string> | any = handler.prefix;

		/**
		 * Check whether the prefix is an array of strings or a string or a PrefixSupplier
		 * If It is an array -> Get the first value
		 * If it is a string -> Just append the prefix to the description
		 * If it is a PrefixSupplier -> Use a default prefix (!)
		 */
		if (Array.isArray(prefix)) {
			description += `\`${prefix[0]}\``;
		} else if (typeof prefix == 'string') {
			description += `\`${prefix}\``;
		} else {
			description += '`!`';
		}

		const helpEmbed: MessageEmbed = new MessageEmbed()
			.setTitle('Commands from ' + this.client.user.username)
			.setDescription(description)
			.setColor(color);

		const commandsWithDescription: Collection<string, Array<string>> = new Collection<string, Array<string>>();

		/**
		 * Check whether the category is:
		 *  - Inside the Collection (commandsWithDescription) -> Push just the command into the collection entry
		 *  - Not inside the Collection (commandsWithDescription) -> Create a new entry with the category id into the collection and set the command as an array as value
		 */
		handler.modules.map((v: Command, k: string) => {
			const filepath = v.filepath.split(/\/+/);
			const categoryID = filepath[filepath.length - 2] !== 'commands' ? filepath[filepath.length - 2] : 'Default';
			if (!commandsWithDescription.has(categoryID)) {
				commandsWithDescription.set(categoryID, [v.aliases[0]]);
			} else {
				const arr = commandsWithDescription.get(categoryID);
				arr.push(v.aliases[0]);
				commandsWithDescription.set(categoryID, arr);
			}
		});

		/**
		 * Loop through each entry from commandsWithDescription and add each category as a field into the embed (helpEmbed)
		 */
		commandsWithDescription.forEach((cat, k: string) => {
			helpEmbed.addField(k, cat.map((v) => `\`${v}\``).join(', '), false);
		});

		// Send the embed with a reply to the executing message
		return message.util.send({ embed: helpEmbed, replyTo: message.id });
	}
}
