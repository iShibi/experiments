import { Client } from 'tspotify';

const client = new Client();

client.on('ready', () => {
    console.log(`Logged in at ${client.readyAt.toLocaleString('hi-IN')}`);
    setInterval(async () => {
        let searchedArtists = await client.artists.search({
            query: 'Clairo',
            limit: 1,
            market: 'IN'
        });
        let artist = searchedArtists.items.first();
        console.log(`Logging at ${new Date().toLocaleString('hi-IN')}: ${artist.name}`);
    }, 1200000);
});

client.on('accessTokenUpdate', async accessToken => {
    console.log(`Access token updated at: ${new Date().toLocaleString('hi-IN')}, readyAt: ${client.readyAt.toLocaleString('hi-IN')}, lastUpdate: ${client.lastTokenUpdateAt.toLocaleString('hi-IN')}`);
});

const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
client.login({
    clientID,
    clientSecret
});