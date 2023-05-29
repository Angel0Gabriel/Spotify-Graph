import axios from 'axios'

const SPOTIFY_CLIENT_ID = '43605d8686414032be5dbbb5efe68b77'
const SPOTIFY_CLIENT_SECRET = '1de9c4f818414f00bd56e3c4cc1b7b21'

const api = axios.create({
  baseURL: 'https://accounts.spotify.com/api',
  headers: {
    Authorization: `Basic ${Buffer.from(
      `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`,
    ).toString('base64')}`,
  },

  params: {
    grant_type: 'client_credentials',
  },

  responseType: 'json',
})

export default api
