<template>
  <div class="results">
    <h2 class="results__title">
      {{ title }} - {{ results.totalResults }} coincidences
    </h2>
    <div class="results__grid">
      <Result v-for="item in results.items" :key="item.id" :item="item" />
    </div>
    <button
      v-if="results.nextSearch"
      class="results__more"
      @click="mainStore.search('', type)"
    >
      LOAD MORE
    </button>
  </div>
</template>

<script>
import Result from './Result.vue';
import { useMainStore } from '../../stores/index.js';
import { mapStores } from 'pinia';

export default {
  components: { Result },
  props: {
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      required: true,
    },
    results: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapStores(useMainStore),
  },
};
</script>

<style lang="scss">
.results {
  display: flex;
  flex-flow: column;

  &__title {
    margin-bottom: 2rem;

    @media screen and (max-width: $md) {
      font-size: $h4;
      margin-bottom: 1rem;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    column-gap: 1%;
    justify-items: center;

    @media screen and (max-width: $md) {
      grid-template-columns: 100%;
      row-gap: 0.2%;
    }
  }

  &__more {
    justify-self: center;
    align-self: center;
    background-color: $green-primary;
    width: 20%;
    height: 60px;

    @media screen and (max-width: $md) {
      width: 60%;
      margin-top: 60rem;
    }

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
