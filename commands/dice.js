const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice')
		.setDescription('Generates a random number between 1 - 6'),
	async execute(interaction) {
		let number = Math.floor(Math.random() * 6);
        await interaction.reply(`${number}`);
	},
};
