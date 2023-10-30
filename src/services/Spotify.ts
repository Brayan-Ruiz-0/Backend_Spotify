
var SpotifyWebApi = require('spotify-web-api-node');


// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '408ac5da9a524c1897d23f5a765077aa',
  clientSecret: 'fd8ac7c9eeb04190b17dcaed8aea8e94',
  redirectUri: 'http://localhost:5000/login/callback'
});

export default spotifyApi