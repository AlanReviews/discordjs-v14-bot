const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('secret')
		.setDescription('An emphemeral response'),
	async execute(interaction) {
		await interaction.reply({ content: 'Secret Pong! There is nothing.', ephemeral: true });
	},
};
