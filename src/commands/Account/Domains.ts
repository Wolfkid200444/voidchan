import { URL } from 'url';
import { Command } from 'discord-akairo';
import { Message, MessageEmbed } from 'discord.js';

export default class PingCommand extends Command {
	public constructor() {
		super('domains-account', {
			ownerOnly: true,
			aliases: ['domains', 'domain'],
		});
	}

	public *args() {
		const actionArg = yield {
			type: (_message: Message, action: string): string => {
				action = action.toLowerCase();

				return ['add', 'del', 'delete'].includes(action) ? action : null;
			},
			prompt: {
				prompt: 'Please provide an action `add, del, delete`.',
				retry: 'That is an invalid action!',
			},
		};

		const domainArg = yield {
			type: (message: Message, _: string): Array<string> | string => {
				const domains = message.content.split(' ').slice(2);
				if (!domains) return null;
				const validDomains = [];

				for (const domain of domains) {
					try {
						const hostname = new URL('https://' + domain);
						validDomains.push(hostname);
					} catch (e) {
						return null;
					}
				}

				return validDomains;
			},
			prompt: {
				prompt: 'Please provide a domain.',
				retry: 'That is an invalid domain. Please provide me with a valid one.',
			},
		};

		return { actionArg, domainArg };
	}

	public async exec(message: Message, args: any) {
		const account = await this.client.router.accounts.findOne({ user: message.author.id });
		if (!account) return message.util.send("You don't have an account! To create one please do `!create`", { replyTo: message.id });

		console.log(args);
	}
}
