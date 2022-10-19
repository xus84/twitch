require('dotenv').config()
const tmi = require('tmi.js');

const client = new tmi.Client({
        connection: { reconnect: true},
        identity: {
		username: process.env.TWITCH_BOT_USERNAME,
		password: process.env.TWITCH_OAUTH_TOKEN
	},
	channels: [ '' ]
});


client.connect();

client.on('message', (channel, tags, message, self) => {
        console.log(process.env.TWITCH_BOT_USERNAME)
	const isNotBot = tags.username.toLowerCase() !== process.env.TWITCH_BOT_USERNAME
        
        if ( isNotBot) {
                client.say(channel, `Message "${message}" was sent by ${tags.username}`)
        }
        // "Alca: Hello, World!"
	console.log(`${tags['display-name']}: ${message}`);
});
			
