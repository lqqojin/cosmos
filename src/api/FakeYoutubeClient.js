import axios from 'axios';

export class FakeYoutubeClient {
  async search() {
    return axios.get('/videos/search.json');
  }
  async videos() {
    return axios.get('/videos/popular.json');
  }
}
