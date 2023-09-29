import{SlashCommandBuilder} from'discord.js'


export const command = new SlashCommandBuilder()
.setName('reload')
.setDescription('reload bot')
.addStringOption(option =>
    option.setName('command')
        .setDescription('The command to reload.')
        .setRequired(true))


export const action = async(ctx) => {
    const commandName = ctx.options.getString('command', true).toLowerCase();
		const command = ctx.application.commands.get(commandName);

		if (!command) {
			return ctx.reply(`There is no command with name \`${commandName}\`!`);
		}
	}