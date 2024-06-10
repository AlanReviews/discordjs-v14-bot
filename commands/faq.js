const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('faq')
		.setDescription('Sends the link to the FAQ page'),
	async execute(interaction) {
		await interaction.reply({ content: "What does Alan review? How do I request a review? All answers are in here: https://alanreviews.github.io/alan-reviews-updates/ Created with Zola template engine.", fetchReply: true , ephemeral: false });
	},
};
