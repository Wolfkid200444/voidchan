import { Command } from 'discord-akairo';
import { Message, MessageEmbed } from 'discord.js';
import { stripIndents } from 'common-tags';

export default class PingCommand extends Command {
	public constructor() {
		super('settings-account', {
			aliases: ['settings', 'preferences'],
		});
	}

	public *args() {
		const keyArg = yield {
			type: (_message: Message, key: string): string => {
				key = key !== null ? key.toLowerCase() : null;

				return ['color', 'username', 'title', 'background'].includes(key) ? key : 'default';
			},
		};

		const valueArg = yield {
			type: (message: Message, value: string): string => {
				if (keyArg !== 'default' && !value) return null;
				if (keyArg === 'color' || keyArg === 'background' && !/^#[0-9a-f]{3,6}$/i.test(value)) return null;

				return message.content.split(' ').slice(2).join(' ') || 'default';
			},
			prompt: {
				prompt: 'Please provide a new value.',
				retry: 'Please provide a valid color hex.',
			},
		};

		return { keyArg, valueArg };
	}

	public async exec(message: Message, args: any) {
		const account = await this.client.router.accounts.findOne({ user: message.author.id });
		if (!account) return message.util.send("You don't have an account! To create one please do `!create`", { replyTo: message.id });

		if (args.keyArg === 'default') {
			const embed = new MessageEmbed()
				.setColor(account.embed_color)
				.setTitle('Your embed settings.')
				.setDescription(stripIndents`
					Title: ${account.embed_title}
					Username: ${account.embed_username}
					Color: ${account.embed_color}
					Site Background Color: ${account.embed_background}
				`);

			await message.util.send({ embed, replyTo: message.id });
		} else {

			/**
			 * Check if the value, while the type is one of the two ('title', 'username'), has a length of more or equal 1000
			 * (2048 (Max embed description length) - 31 (length of: "title: \nusername: \ncolor: <Hex Code>") / 2 = 1008.5 ≈ 1000)
			 * characters
			 */
			if (['title', 'username'].includes(args.keyArg.toLowerCase()) && args.valueArg.length >= 1000) return message.util.send(`The value of the key ${args.keyArg.toLowerCase()} can only have a length of less than 1000 character (${args.valueArg.length}/999).`, { replyTo: message.id });

			account[`embed_${args.keyArg.toLowerCase()}`] = args.valueArg;

			await this.client.router.accounts.save(account);

			await message.util.send('Your preferences have been updated!', { replyTo: message.id });
		}
	}
}
