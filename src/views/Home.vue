<template>
  <Header @debounce="isDebouncing = $event" />
  <section v-if="showResults" class="home">
    <ResultGrid
      v-if="
        mainStore.artists?.totalResults > 0 &&
        mainStore.resultFilters.includes('artist')
      "
      class="home__results"
      title="Artists"
      type="artists"
      :results="mainStore.artists"
    />
    <ResultGrid
      v-if="
        mainStore.albums?.totalResults > 0 &&
        mainStore.resultFilters.includes('album')
      "
      class="home__results"
      title="Albums"
      type="albums"
      :results="mainStore.albums"
    />
    <ResultGrid
      v-if="
        mainStore.tracks?.totalResults > 0 &&
        mainStore.resultFilters.includes('track')
      "
      class="home__results"
      title="Tracks"
      type="tracks"
      :results="mainStore.tracks"
    />
  </section>
  <h2 v-else class="home__noresult">{{ noResultText }}</h2>
</template>

<script>
import Header from '../components/Header.vue';
import ResultGrid from '../components/results/ResultGrid.vue';
import { useMainStore } from '../stores/index.js';
import { mapStores } from 'pinia';

export default {
  components: { Header, ResultGrid },
  data() {
    return {
      isDebouncing: false,
    };
  },
  computed: {
    ...mapStores(useMainStore),
    showResults() {
      return (
        this.mainStore.artists?.totalResults > 0 ||
        this.mainStore.albums?.totalResults > 0 ||
        this.mainStore.tracks?.totalResults > 0
      );
    },
    noResultText() {
      return this.isDebouncing ? 'Searching...' : 'There are no results';
    },
  },
  async mounted() {
    await this.mainStore.getToken();
  },
};
</script>
<style lang="scss">
.home {
  padding: 4rem;

  @media screen and (max-width: $md) {
    padding: 1rem;
  }

  &__results {
    width: 100%;
    margin-bottom: 6rem;

    * {
      color: white;
    }

    @media screen and (max-width: $md) {
      margin-bottom: 4rem;
    }
  }

  &__noresult {
    width: 100%;
    margin-top: 6rem;
    color: white;
    text-align: center;
    font-size: $h2;

    @media screen and (max-width: $md) {
      font-size: $h3;
      margin-top: 16rem;
    }
  }
}
</style>
