import { defineStore } from 'pinia';
import { getAccessInfo, search } from '../services';

const mountQuery = (query) =>
  `https://api.spotify.com/v1/search?q=${query}&type=track,album,artist&market=US&limit=40&offset=0`; // Default US market

const mapItem = (item) => ({
  id: item.id,
  name: item.name,
  href: item.external_urls?.spotify,
  image: (item.images || item.album.images)?.sort((a, b) =>
    a.width > b.width ? -1 : 1
  )[0], // retrieve biggest image based on width size comparison
  ...(['track', 'album'].includes(item.type) && {
    artists: item.artists?.map((artist) => artist.name).join(','),
  }), // add artists only for albums and tracks
  ...('track' === item.type && { album: item.album?.name }), // album name only needed in tracks
});

const mapResponse = (response) => ({
  nextSearch: response.next,
  totalResults: response.total,
  items: response.items.map((item) => mapItem(item)),
});

export const useMainStore = defineStore('main', {
  state: () => ({
    albums: undefined,
    artists: undefined,
    tracks: undefined,
    resultFilters: ['artist', 'album', 'track'],
  }),
  actions: {
    async search(query = '', loadMore = undefined) {
      try {
        const hasAnyResults = this.albums || this.artists || this.tracks;

        const url =
          loadMore && hasAnyResults
            ? this.$state[loadMore].nextSearch
            : mountQuery(query);

        if (!loadMore) {
          this.albums = undefined;
          this.artists = undefined;
          this.tracks = undefined;
        }

        const token = await this.getToken();
        const response = await search(url, token);

        // TODO: this needs control for empty responses
        if (loadMore) {
          this[loadMore].nextSearch = response[loadMore].next;
          this[loadMore].items = [
            ...this[loadMore].items,
            ...response[loadMore].items.map((item) => mapItem(item)),
          ];
        } else {
          this.artists = mapResponse(response.artists);
          this.albums = mapResponse(response.albums);
          this.tracks = mapResponse(response.tracks);
        }
      } catch (error) {
        console.error('Error while fetching results', error);
      }
    },

    async getToken() {
      const currentToken = JSON.parse(sessionStorage.getItem('accessInfo'));

      if (!currentToken || currentToken.expireDate <= Date.now()) {
        sessionStorage.removeItem('accessToken');
        const newToken = await this.getNewToken();
        sessionStorage.setItem('accessInfo', JSON.stringify(newToken));

        return newToken?.token;
      }

      return currentToken?.token;
    },

    async getNewToken() {
      try {
        const accessInfo = await getAccessInfo();

        const parsedData = {
          token: accessInfo.access_token,
          expireDate: Date.now() + 3600000,
        };

        return parsedData;
      } catch (error) {
        console.error('Error while fetching api credentials', error);
        return undefined;
      }
    },
    changeResultFilter (filter) {
      if (this.resultFilters.includes(filter)) {
        this.resultFilters = this.resultFilters.filter(rF => rF !== filter);
      } else {
        this.resultFilters.push(filter);
      }
    }
  },
});
