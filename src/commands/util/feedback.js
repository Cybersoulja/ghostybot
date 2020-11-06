const { feedBackChannelId } = require("../../../config.json");
const BaseEmbed = require("../../modules/BaseEmbed");

module.exports = {
  name: "feedback",
  description: "Give feedback about the bot",
  category: "util",
  execute(bot, message, args) {
    const feedback = args.join(" ");

    if (!feedback)
      return message.channel.send(
        "If u wanna be nice please give some feedback."
      );

    if (!feedBackChannelId || feedBackChannelId === "") return;

    const embed = BaseEmbed(message)
      .setTitle(`${message.author.username} New Feedback`)
      .setDescription(feedback);

    bot.channels.cache.get(feedBackChannelId).send(embed);

    message.channel.send("Successfully send feedback!");
  },
};
