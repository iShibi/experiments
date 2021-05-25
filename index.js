import { Client } from 'tspotify';

const client = new Client();

client.on('ready', () => {
    console.log(`Logged in at ${client.readyAt.toLocaleString()}`);
    setInterval(async () => {
        let searchedArtists = await client.artists.search({
            query: 'Clairo',
            limit: 1,
            market: 'IN'
        });
        let artist = searchedArtists.items.first();
        console.log(artist);
    }, 300000);
});

const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
client.login({
    clientID,
    clientSecret
});