const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('topic')
		.setDescription('Provides a question to keep the conversation going'),
	async execute(interaction) {
        const topics = ["What is your favourite book?", "What is your favourite game?", 
		"What is your favourite song with a positive message?", "What is your favourite place to visit?", 
		"Did you apply what you learned in school?", "What is your favourite programming language?", "What are your computer specs?"]
		let number = Math.floor(Math.random() * topics.length);
        await interaction.reply(topics[number]);
	},
};
