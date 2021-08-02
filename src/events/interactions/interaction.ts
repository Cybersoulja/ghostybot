import * as DJS from "discord.js";
import Bot from "structures/Bot";
import Event from "structures/Event";
import { IGuild } from "models/Guild.model";

export default class InteractionEvent extends Event {
  constructor(bot: Bot) {
    super(bot, "interactionCreate");
  }

  async execute(bot: Bot, interaction: DJS.CommandInteraction) {
    if (!interaction.isCommand()) return;

    await bot.application?.commands.fetch(interaction.commandId).catch(() => null);
    if (!interaction.guildId) return;

    const lang = await this.bot.utils.getGuildLang(interaction.guild?.id);

    try {
      const command = bot.interactions.get(interaction.command?.name ?? "");

      if (!command) {
        if (!interaction.commandId) return;

        const guild = await bot.utils.getGuildById(interaction.guildId);
        const command = guild?.slash_commands.find((c) => c.slash_cmd_id === interaction.commandId);
        if (!command) return;

        return interaction.reply({ content: command.response });
      }

      const dbGuild = await bot.utils.getGuildById(interaction.guildId!);

      if (dbGuild?.disabled_categories.includes(command.options.category)) {
        return interaction.reply({
          ephemeral: true,
          content: lang.MESSAGE.CATEGORY_DISABLED.replace("{category}", command.options.category),
        });
      }

      if (this.isSubCommandDisabled(dbGuild!, interaction)) {
        return interaction.reply({
          ephemeral: true,
          content: lang.MESSAGE.COMMAND_DISABLED,
        });
      }

      if (command.options.botPermissions) {
        const neededPerms: bigint[] = [];
        const channel = interaction.channel as DJS.TextChannel;

        command.options.botPermissions.forEach((perm) => {
          if (!channel?.permissionsFor(interaction.guild!.me!)?.has(perm)) {
            neededPerms.push(perm);
          }
        });

        if (neededPerms.length > 0) {
          return interaction.reply({
            ephemeral: true,
            embeds: [bot.utils.errorEmbed(neededPerms, interaction, lang.PERMISSIONS)],
          });
        }
      }

      if (command.options.memberPermissions) {
        const perms = bot.utils.formatMemberPermissions(
          command.options.memberPermissions,
          interaction,
          lang,
        );

        if (perms) {
          return interaction.reply({ content: perms, ephemeral: true });
        }
      }

      if (command.options.ownerOnly && !this.isOwner(interaction)) {
        return interaction.reply({
          content: lang.MESSAGE.OWNER_ONLY,
          ephemeral: true,
        });
      }

      await command?.execute(interaction);
    } catch (e) {
      if (interaction.replied) return;
      bot.utils.sendErrorLog(e, "error");

      if (interaction.deferred) {
        interaction.editReply({ content: lang.GLOBAL.ERROR });
      } else {
        interaction.reply({ ephemeral: true, content: lang.GLOBAL.ERROR });
      }
    }
  }

  isOwner(interaction: DJS.CommandInteraction) {
    const owners = process.env["OWNERS"];
    return owners?.includes(interaction.user.id);
  }

  isSubCommandDisabled(dbGuild: IGuild, command: DJS.CommandInteraction) {
    const commands = dbGuild.disabled_commands;

    let subCommand: string;

    try {
      subCommand = command.options.getSubcommand();
    } catch {
      subCommand = command.commandName;
    }

    return commands.includes(subCommand);
  }
}
