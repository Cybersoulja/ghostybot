module.exports = {
    name: "ctopic",
    description: "Update the channel topic",
    async execute(bot, message, args) {

        let channel = message.mentions.channels.first();
        let topic;
        if (!channel) {
            channel = message.channel;
            topic = args.join(" ");
        } else {
            topic = args
                .slice(1)
                .join(" ")
                .trim();
        }

        if (!topic) return message.reply("Please provide a new topic");

        if (!message.member.hasPermission("MANAGE_CHANNELS"))
            return message.channel.send("You don't the correct permissions for this command");

        console.log(topic);

        await channel.setTopic(topic);
        await message.channel.send(`Successfully updated channel topic to ${topic}`)
    }
}