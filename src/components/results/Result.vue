<template>
  <div class="result" :style="backgroundImage">
    <div class="result__info">
      <div class="result__info__container">
        <h4 class="result_info_attribute">{{ item.name }}</h4>
        <h5 class="result_info_attribute">{{ item.artists }}</h5>
        <h5 class="result_info_attribute">{{ item.album }}</h5>
      </div>
      <a class="result__info__link" :href="item.href" target="_blank">
        <PlayIcon />
      </a>
    </div>
  </div>
</template>

<script>
import PlayIcon from '../icons/PlayIcon.vue';
/*
{
  id,
  name,
  href,
  image,
  artists (for tracks & albums),
  album (for tracks)
}
*/
export default {
  components: { PlayIcon },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    backgroundImage() {
      const url =
        this.item.image?.url ??
        'https://via.placeholder.com/640/FFFFFF/000000?Text=' + this.item.name;
      return {
        backgroundImage: `url(${url})`,
      };
    },
  },
};
</script>

<style lang="scss">
.result {
  width: 100%;
  height: 480px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  place-items: end;
  place-content: end;

  &__info {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 30%;
    display: grid;
    grid-template-columns: 80% 10%;
    gap: 5%;
    padding-left: 0.5rem;

    * {
      margin: 0;
    }

    &__container {
      display: flex;
      flex-flow: column;
      justify-content: center;
      height: 100%;
    }

    &__attribute {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__link {
      border-radius: 100%;
      background-color: $green-primary;
      align-self: center;
      width: 48px;
      height: 48px;
      display: flex;
      place-items: center;
      place-content: center;
    }
  }
}
</style>
