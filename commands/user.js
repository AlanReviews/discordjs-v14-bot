const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.')
		.addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(false)),
	async execute(interaction) {
		const user = interaction.options.getUser('user')
		const userPresence = user.presence?.status
		const userInfo = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle("User Info")
		.addFields(
			{name: "Username", value: `${user.displayName}`},
			{name: "User ID", value: `${user.id}`},
			{name: "Joined At", value: `${user.joinedAt}`},
			{name: "Status", value: `${userPresence}`},
			{name: "Activities", value: `${user.presence?.activities}`},
		)
		.setImage(user.displayAvatarURL({ dynamic: true}))
		interaction.reply({ embeds: [userInfo] })
	},
};
