import { Command } from 'discord-akairo';
import { MessageEmbed, Message } from 'discord.js';

export default class PingCommand extends Command {
	public constructor() {
		super('recent', {
			aliases: ['recent'],
		});
	}

	public async exec(message: Message, args: any) {
		const account = await this.client.router.accounts.findOne({ user: message.author.id });
		if (!account) return message.util.send("You don't have an account! To create one please do `!create`", { replyTo: message.id });

		const files = await this.client.router.files.createQueryBuilder()
			.select('FileEntry')
			.where('FileEntry.uploadedBy = :id', { id: account.id })
			.orderBy('FileEntry.uploadDate', 'ASC')
			.limit(10)
			.getMany();

		if (!files || files.length === 0) return message.util.send("You don't have any files uploaded.");

		const embed = new MessageEmbed()
			.setColor(`#${account.embed_color}`)
			.setTitle(`The last ${files.length} files you've uploaded.`);

		let description = '';
		for (const file of files) {
			description += `\`${file.id}\` (${file.mimetype})\n`;
		}

		embed.setDescription(description);

		return message.util.send({ embed, replyTo: message.id });
	}
}
