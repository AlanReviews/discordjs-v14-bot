const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('react')
		.setDescription('Shows a message where you can react with emojis'),
	async execute(interaction) {
		const message = await interaction.reply({ content: 'You can react with emojis', fetchReply: true });
		message.react('😄');
		message.react('😄');
	},
};
