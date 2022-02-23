var accessToken 
const clientID = '7a8caf6b652d4cbda8eba6dbcd3a9f52'
const redirectURI = "http://localhost:3000/"

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken
    }
      // check for match
      const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1] 
      const expiresIn = Number(expiresInMatch[1])

      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    }
    else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
      window.location = accessUrl
    }
  }
}

module.exports = Spotify