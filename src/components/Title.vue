<template>
  <section class="title">
    <img src="../assets/logo.png" alt="page logo" class="title__icon" />
    <h1 class="title__text">SpotiVue Search</h1>
  </section>
</template>
<style lang="scss">
.title {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: $md) {
    display: grid;
    grid-template-columns: 20% 80%;
    align-content: center;
    justify-items: center;
  }

  &__icon {
    width: 20%;

    @media screen and (max-width: $md) {
      width: 100%;
    }
  }

  &__text {
    color: $green-primary;

    @media screen and (max-width: $md) {
      font-size: $h3;
    }
  }
}
</style>
