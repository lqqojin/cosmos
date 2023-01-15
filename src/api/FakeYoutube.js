import axios from 'axios';

export class FakeYoutube {
  async search(keyword) {
    return keyword ? this.#searchByKeyword() : this.#mostPopular();
  }
  async #searchByKeyword() {
    return axios
      .get('/videos/search.json')
      .then(res => {
        console.log(res.data.items);
        return res.data.items;
      })
      .then(items => items.map(item => ({ ...item, id: item.id.videoId })));
  }
  async #mostPopular() {
    return axios.get('/videos/popular.json').then(res => res.data.items);
  }
}
