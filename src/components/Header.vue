<template>
  <aside class="header">
    <Title />
    <SearchBar @input="debounceSearch" @click="search" />
    <section class="header__search__params">
      <ResultFilter filterName="artist" />
      <ResultFilter filterName="album" />
      <ResultFilter filterName="track" />
    </section>
  </aside>
</template>

<script>
import Title from './Title.vue';
import SearchBar from './search/SearchBar.vue';
import ResultFilter from '../components/search/ResultFilter.vue';
import { useMainStore } from '../stores/index.js';
import { mapStores } from 'pinia';

export default {
  components: {
    Title,
    SearchBar,
    ResultFilter,
  },
  data() {
    return {
      searchInput: '',
      debounce: undefined,
    };
  },
  computed: {
    ...mapStores(useMainStore),
  },
  methods: {
    debounceSearch(event) {
      if (event.target.value && event.target.value !== '') {
        clearTimeout(this.debounce);
        this.$emit('debounce', true);
        this.debounce = setTimeout(() => {
          this.searchInput = event.target.value;
          this.mainStore.search(event.target.value, false);
          this.$emit('debounce', false);
        }, 300);
      }
    },

    search() {
      this.mainStore.search(this.searchInput, false);
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  flex-flow: row;
  max-height: 100px;
  padding-top: 1rem;
  width: 100%;
  align-items: center;
  position: fixed;
  background-color: black;
  z-index: 2;
  top: 0;

  @media screen and (max-width: $md) {
    display: grid;
    grid-template-columns: 90%;
    row-gap: 1rem;
    position: static;
    width: 100%;
    justify-content: center;
    max-height: max-content;
    padding-bottom: 1rem;
    border-bottom: 2px solid white;
  }

  &__search {
    &__params {
      display: grid;
      grid-template-columns: 30% 30% 30%;
      flex-grow: 1;
      gap: 2%;
      align-content: center;
      justify-items: center;

      @media screen and (max-width: $md) {
        display: flex;
        width: 100%;
        flex-flow: row;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
}
</style>
