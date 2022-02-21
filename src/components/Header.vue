<template>
  <aside class="header">
    <Title />
    <section class="header__search">
      <!-- this section can be componetized -->
      <input
        type="search"
        name="search"
        id="search__input"
        class="header__search__input"
        @input="debounceSearch"
        placeholder="Search"
      />
      <button
        class="header__search__button header__search__button__search"
        @click="search"
      >
        <SearchIcon />
      </button>
    </section>
    <section class="header__search__params">
      <!-- need to componetize these checkboxes -->
      <div class="header__search_params__checkbox">
        <input
          type="checkbox"
          name="artist"
          value="artist"
          id="artist"
          v-model="mainStore.resultFilters"
        />
        <label for="artist">Artists</label>
      </div>

      <div class="header__search_params__checkbox">
        <input
          type="checkbox"
          name="album"
          value="album"
          id="album"
          v-model="mainStore.resultFilters"
        />
        <label for="artist">Albums</label>
      </div>

      <div class="header__search_params__checkbox">
        <input
          type="checkbox"
          name="track"
          value="track"
          id="track"
          v-model="mainStore.resultFilters"
        />
        <label for="artist">Tracks</label>
      </div>
    </section>
  </aside>
</template>

<script>
import SearchIcon from '../components/icons/SearchIcon.vue';
import Title from './Title.vue';
import { useMainStore } from '../stores/index.js';
import { mapStores } from 'pinia';

export default {
  components: {
    SearchIcon,
    Title,
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
  async mounted() {
    await this.mainStore.getToken();
  },
  methods: {
    debounceSearch(event) {
      clearTimeout(this.debounce);
      this.$emit('debounce', true);
      this.debounce = setTimeout(() => {
        this.searchInput = event.target.value;
        this.mainStore.search(event.target.value, false);
        this.$emit('debounce', false);
      }, 300);
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
  margin-top: 1rem;
  width: 100%;
  align-items: center;

  &__search {
    background-color: white;
    width: 40%;
    height: 4vh;
    display: flex;
    flex-flow: row;

    &__input {
      background-color: white;
      width: 100%;
      height: 4vh;
      border: 0;

      &:focus {
        outline-width: 0;
      }
    }

    &__button {
      background-color: transparent;
      border: 0;
      width: 48px;
      display: flex;
      place-items: center;
      place-content: center;
      position: relative;

      :hover {
        cursor: pointer;
      }

      &__x {
        color: $green-primary;
      }

      &__search {
        background: $green-primary;
        color: white;
        padding: 1rem;
        width: 10%;
      }
    }

    &__params {
      display: grid;
      grid-template-columns: 30% 30% 30%;
      flex-grow: 1;
      gap: 5%;
      align-content: center;
      justify-items: center;

      label {
        color: white;
      }
    }
  }
}
</style>
