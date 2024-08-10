const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.')
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
		const userInfo = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle("User Info")
		.addFields(
			{name: "Username", value: `${user.displayName}`},
			{name: "User ID", value: `${user.id}`},
			{name: "Joined At", value: `${user.joinedAt}`},
		)
		.setImage(user.displayAvatarURL({ dynamic: true}))
		interaction.reply({ embeds: [userInfo] })
	},
};
