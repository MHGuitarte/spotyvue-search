<template>
  <section class="search">
    <input
      type="search"
      name="search"
      id="search__input"
      class="search__input"
      @input="$emit('input', $event)"
      placeholder="Search"
    />
    <button class="search__button" @click="$emit('click')">
      <SearchIcon />
    </button>
  </section>
</template>

<script>
import SearchIcon from '../../components/icons/SearchIcon.vue';

export default {
  components: { SearchIcon },
};
</script>

<style lang="scss">
.search {
  background-color: white;
  width: 40%;
  height: 4vh;
  display: flex;
  flex-flow: row;

  @media screen and (max-width: $md) {
    height: 6vh;
    width: 100%;
    display: grid;
    grid-template-columns: 80% 20%;
  }

  &__input {
    background-color: white;
    width: 100%;
    height: 4vh;
    border: 0;

    &:focus {
      outline-width: 0;
    }

    @media screen and (max-width: $md) {
      height: 6vh;
    }
  }

  &__button {
    border: 0;
    height: 4vh;
    display: flex;
    place-items: center;
    place-content: center;
    position: relative;
    background: $green-primary;
    color: white;
    padding: 1rem;
    width: 10%;

    @media screen and (max-width: $md) {
      width: 100%;
      height: 6vh;
      padding: 0.5rem;

      > * {
        width: $h3;
      }
    }

    :hover {
      cursor: pointer;
    }
  }
}
</style>
