<template>
  <span
    class="filter"
    :id="'filter__' + filterName"
    :class="{
      'filter--checked': filterIsSelected,
    }"
    @click="mainStore.changeResultFilter(filterName)"
  >
    {{ filterName }}
  </span>
</template>

<script>
import { useMainStore } from '../../stores/index.js';
import { mapStores } from 'pinia';

export default {
  props: {
    filterName: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapStores(useMainStore),
    filterIsSelected() {
      return this.mainStore.resultFilters.includes(this.filterName);
    },
  },
};
</script>

<style lang="scss">
.filter {
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-style: solid;
  border-width: 2px;
  box-sizing: border-box;
  color: white;
  user-select: none;
  text-transform: capitalize;

  &:hover {
    cursor: pointer;
  }

  &--checked {
    &#filter {
      &__artist {
        background-color: red;
      }

      &__album {
        background-color: blue;
      }

      &__track {
        background-color: $green-primary;
      }
    }
  }

  &#filter {
    &__artist {
      border-color: red;
    }

    &__album {
      border-color: blue;
    }

    &__track {
      border-color: $green-primary;
    }
  }
}
</style>
