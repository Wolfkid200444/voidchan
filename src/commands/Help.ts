import { Command } from 'discord-akairo';
import { Message, MessageEmbed } from 'discord.js';

export default class PingCommand extends Command {
	public constructor() {
		super('help', {
			aliases: ['help', 'commands'],
		});
	}

	public async exec(message: Message) {
		const handler = this.handler;

		let description: string = 'Below are all commands listed which are available to use. The default prefix is: ';

		const prefix: string | Array<string> | any = handler.prefix;

		if (Array.isArray(prefix)) {
			description += `\`${prefix[0]}\``;
		} else {
			description += `\`${prefix}\``;
		}

		const helpEmbed: MessageEmbed = new MessageEmbed()
			.setTitle('Commands from ' + this.client.user.username)
			.setDescription('Below are all commands listed which are available to use.');

		handler.categories.forEach((cat) => {
			helpEmbed.addField(cat.id, cat.map((v) => `\`${v.id}\``).join(', '), false);
		});

		return message.util.send({ embed: helpEmbed, replyTo: message.id });
	}
}
