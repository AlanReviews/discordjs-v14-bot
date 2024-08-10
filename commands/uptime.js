const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('uptime')
		.setDescription('Provides bot uptime.'),
	async execute(interaction) {
		const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        interaction.reply(duration)
	},
};
