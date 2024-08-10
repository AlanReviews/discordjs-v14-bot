const { SlashCommandBuilder, messageLink } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('links')
		.setDescription('Provides a list of links in an embed'),
	async execute(interaction) {
		const serverInfo = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle("Links")
		.addFields(
			{name: "YouTube channel", value: "https://www.youtube.com/c/TheAlanReviews"},
			{name: "Website", value: "https://alanreviews.github.io/alan-reviews-updates/"},
			{name: "Review List", value: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSWIyo2ktAkKEQqLVwAdy3DvQLO9YzbPntU65-13nfNvZa-d5ohtd5lHEiijEz_erW8qeKwlS7wuoYW/pubhtml"},
			{name: "Discord server", value: "https://discord.gg/K9BdChUCMN"},
			{name: "GitHub", value: "https://github.com/AlanReviews/Discordpy-bot"},)
		interaction.reply({ embeds: [serverInfo] });
	},
};
