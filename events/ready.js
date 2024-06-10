const { Client, GatewayIntentBits, ActivityType, Events } = require('discord.js');


module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setPresence({
			activities: [{ name: `Created in discord.js v14`, type: ActivityType.Playing }],
			status: 'online',
		  });
	},
};
