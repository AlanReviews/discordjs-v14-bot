const { SlashCommandBuilder, messageLink } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
	async execute(interaction) {
		const serverInfo = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle("Server Info")
		.addFields(
			{name: "Member Count", value: `${interaction.guild.memberCount}`},
			{name: "NSFW Level", value: `${interaction.guild.nsfwLevel}`},
			{name: "MFA Level", value: `${interaction.guild.mfaLevel}`},
			{name: "Creation Date", value: `${interaction.guild.createdAt}`},)
		interaction.reply({ embeds: [serverInfo] });
	},
};
