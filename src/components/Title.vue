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

  &__icon {
    width: 20%;
  }
  &__text {
    color: $green-primary;
    font-size: $h1;
  }
}
</style>
