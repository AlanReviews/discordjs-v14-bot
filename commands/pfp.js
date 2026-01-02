const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pfp')
		.setDescription('Provides the avatar of the user.')
		.addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(false)),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		if (interaction.options.getUser('user') == null){
			user = await interaction.guild.members.fetch(interaction.user.id)
		}
		else {
			user = await interaction.guild.members.fetch(interaction.options.getUser('user').id) 
		}
		interaction.reply(user.displayAvatarURL({ dynamic: true, size: 4096}))
	},
};
