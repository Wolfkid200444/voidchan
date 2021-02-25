import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

export default class PingCommand extends Command {
	public constructor() {
		super('ping', {
			aliases: ['ping'],
		});
	}

	public async exec(message: Message) {
		return message.util.send(`Pong! \`${this.client.ws.ping}ms\``, { replyTo: message.id });
	}
}
