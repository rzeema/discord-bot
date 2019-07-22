const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === `${prefix}help`) {
		const embed =
        new Discord.RichEmbed()
        	.setTitle('Help Menu')
        	.setColor(0xFF0000)
        	.setDescription('!help\n!kpop\n!shocking\n!autist\n!yike');
		message.channel.send(embed);
	}
	else if (message.content.startsWith(`${prefix}shocking`)) {
		const user = message.mentions.users.first();
		const attachment = new Discord.Attachment('./media/reddit.jpg');

		// If we have a user mentioned
		if (user) {
			// Now we get the member from the user
			const member = message.guild.member(user);
			if (member) {
				message.delete();
				message.channel.send(member, attachment);
			}
		}
		else {
			message.channel.send(attachment);
		}
	}

	else if (message.content === `${prefix}autist`) {
		const attachment = new Discord.Attachment('./media/autist.jpg');
		message.channel.send(attachment);
	}

	else if (message.content === `${prefix}yike`) {
		const attachment = new Discord.Attachment('./media/yike.jpg');
		message.channel.send(attachment);
	}

	else if (message.content === `${prefix}kpop`) {
		message.channel.send('Lol kys faggot you fucking thought');
	}

	else if (message.content.includes('android')) {
		const attachment = new Discord.Attachment('./media/android.mov');
		message.channel.send(attachment);
	}

	else if (message.content.includes('no cap')) {
		message.channel.send('🚫🧢');

		message.react('🚫')
			.then(() => message.react('🤠'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}

	else if (message.content.includes('keyboard')) {
		message.react('♿');
	}

	else if (message.content.includes('reddit')) {
		message.react('♿');
		const attachment = new Discord.Attachment('./media/reddit.jpg');
		message.channel.send(attachment);
	}

	else if (message.content.includes('thinkpad')) {
		message.react('😍')
			.then(() => message.react('🍆'))
			.then(() => message.react('💦'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}

	else if ((message.content.includes('im') && message.content.includes('big')) || (message.content.includes('you') && message.content.includes('small'))) {
		const attachment = new Discord.Attachment('./media/tall.jpg');
		message.channel.send(attachment);
	}

	else if (message.content.includes('im') && message.content.includes('sad')) {
		message.channel.send('https://open.spotify.com/track/6rPO02ozF3bM7NnOV4h6s2');
	}

	else if (message.content.includes('no') && message.content.includes('gf')) {
		const fs = require('fs');
		const files = fs.readdirSync('./media/no gf/');
		/* now files is an Array of the name of the files in the folder and you can pick a random name inside of that array */
		const chosenFile = files[Math.floor(Math.random() * files.length)];
		const attachment = new Discord.Attachment('./media/no gf/' + chosenFile);
		message.channel.send(attachment);
	}

	// else if(message.author.id == 185537418601037824) {
	// 	message.react('♿');
	// }
});

client.login(token);