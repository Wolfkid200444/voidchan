import {Command} from "discord-akairo";
import {Collection, Message, MessageEmbed} from "discord.js";

export default class PingCommand extends Command {
    public constructor() {
        super("help", {
            aliases: ["help", "commands"]
        });
    }

    public exec(message: Message) {
        const handler = this.handler;

        let description: string = "Below are all commands listed which are available to use. The default prefix is: ";

        const prefix: string | Array<string> | any = handler.prefix;

        /**
         * Check whether the prefix is an array of strings or a string or a PrefixSupplier
         * If It is an array -> Get the first value
         * If it is a string -> Just append the prefix to the description
         * If it is a PrefixSupplier -> Use a default prefix (!)
         */
        if (Array.isArray(prefix))                // Array
            description += `\`${prefix[0]}\``;
        else if (typeof prefix == "string")       // String
            description += `\`${prefix}\``;
        else                                      // PrefixSupplier
            description += `\`!\``;
        
        const helpEmbed: MessageEmbed = new MessageEmbed()
            .setTitle("Commands from " + this.client.user.username)
            .setDescription(description);

        const commandsWithDescription: Collection<string, Array<Command>> = new Collection<string, Array<Command>>();

        /**
         * Check whether the category is:
         *  - Inside the Collection (commandsWithDescription) -> Push just the command into the collection entry
         *  - Not inside the Collection (commandsWithDescription) -> Create a new entry with the category id into the collection and set the command as an array as value
         */
        handler.modules.map((v: Command) => {
            const filepath = v.filepath.split(/\\+/g);
            if (filepath.length <= 1) return;
            const categoryID = filepath[filepath.length - 3 >= 0 ? filepath.length - 3 : 0] == "commands" ? filepath[filepath.length - 2 >= 0 ? filepath.length - 2 : 0] : "Default";
            if (!commandsWithDescription.has(categoryID)) {
                commandsWithDescription.set(categoryID, [v]);
            } else {
                const arr = commandsWithDescription.get(categoryID);
                arr.push(v);
                commandsWithDescription.set(categoryID, arr);
            }
        });

        /**
         * Loop through each entry from commandsWithDescription and add each category as a field into the embed (helpEmbed)
         */
        commandsWithDescription.forEach((cat, k: string) => {
            helpEmbed.addField(k, cat.map((v) => `\`${v.id}\``).join(", "), false);
        });

        // Send the embed with a reply to the executing message
        return message.util.send({ embed: helpEmbed, replyTo: message.id });
    }
}
