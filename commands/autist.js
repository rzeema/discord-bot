module.exports = {
	name: 'autist',
	description: 'Sends a random autist',
	aliases: ['aut'],
	execute(message) {
		const fs = require('fs');
		const Discord = require('discord.js');
		const files = fs.readdirSync('./media/autist/');
		const chosenFile = files[Math.floor(Math.random() * files.length)];
		const attachment = new Discord.Attachment('./media/autist/' + chosenFile);
		message.channel.send(attachment);
	},
};