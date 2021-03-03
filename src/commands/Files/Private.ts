import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

export default class PingCommand extends Command {
	public constructor() {
		super('private', {
			aliases: ['private'],
		});
	}

	public async exec(message: Message) {

	}
}
