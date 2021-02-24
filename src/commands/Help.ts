import {Command} from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";

export default class PingCommand extends Command {
    constructor() {
        super("help", {
            aliases: ["commands"]
        });
    }

    public exec(message: Message) {
        let Handler = this.handler;

        let description: string = "Below are all commands listed which are available to use. The default prefix is: ";

        let prefix: string | Array<string> | any = Handler.prefix;

        if (Array.isArray(prefix)) {
            description += `\`${prefix[0]}\``;
        } else {
            description += `\`${prefix}\``;
        }

        let helpEmbed: MessageEmbed = new MessageEmbed()
            .setTitle("Commands from " + this.client.user.username)
            .setDescription("Below are all commands listed which are available to use.");

        Handler.categories.forEach((cat) => {
            helpEmbed.addField(cat.id, cat.map((v) => `\`${v.id}\``).join(", "), false);
        });

        return message.util.send(helpEmbed, { replyTo: message.id });
    }
}
