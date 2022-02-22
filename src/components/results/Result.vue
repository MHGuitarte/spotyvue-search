<template>
  <div class="result" :style="backgroundImage" @click="toggleSmallContent">
    <img
      :id="formattedId"
      v-if="!screenIsMediumOrSmall"
      class="result__image"
      :src="
        item.image?.url ||
        'https://via.placeholder.com/640/FFFFFF/000000?Text=' + this.item.name
      "
      :alt="item.name"
    />
    <div class="result__info" :id="formattedId">
      <div class="result__info__container">
        <h4 class="result__info__attribute">{{ item.name }}</h4>
        <h5 class="result__info__attribute">{{ item.artists }}</h5>
        <h5 class="result__info__attribute">{{ item.album }}</h5>
      </div>
      <a class="result__info__link" :href="item.href" target="_blank">
        <PlayIcon />
      </a>
    </div>
  </div>
</template>

<script>
import PlayIcon from '../icons/PlayIcon.vue';

export default {
  components: { PlayIcon },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showData: false,
    };
  },
  computed: {
    screenIsMediumOrSmall() {
      return window.innerWidth >= 960;
    },
    backgroundImage() {
      const url =
        this.item.image?.url ??
        'https://via.placeholder.com/640/FFFFFF/000000?Text=' + this.item.name;
      return {
        ...(this.screenIsMediumOrSmall && { backgroundImage: `url(${url})` }),
      };
    },
    formattedId() {
      return this.item.id.replaceAll(/[0-9]/gu, '');
    },
  },
  methods: {
    toggleSmallContent() {
      if (this.showData) {
        console.log('true');
        document
          .querySelector(`.result__info#${this.formattedId}`)
          .classList.add('result--shown');
        document
          .querySelector(`.result__image#${this.formattedId}`)
          .classList.remove('result--shown');
      } else {
        console.log('false');
        document
          .querySelector(`.result__info#${this.formattedId}`)
          .classList.remove('result--shown');
        document
          .querySelector(`.result__image#${this.formattedId}`)
          .classList.add('result--shown');
      }

      this.showData = !this.showData;
    },
  },
  mounted() {
    this.toggleSmallContent();
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

  @media screen and (max-width: $md) {
    display: grid;
    grid-template-columns: 100%;
    column-gap: 5%;
    border: 1px solid white;
    height: 320px;
  }

  &__image {
    @media screen and (max-width: $md) {
      display: none;
      width: 100%;
      height: 320px;
      object-fit: cover;

      &.result--shown {
        display: block;
      }
    }
  }

  &__info {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 30%;
    display: grid;
    grid-template-columns: 80% 10%;
    gap: 5%;
    padding-left: 0.5rem;

    @media screen and (max-width: $md) {
      height: 320px;
      display: none;
      flex-flow: column;
      justify-content: space-evenly;
      align-items: center;

      &.result--shown {
        display: flex;
      }
    }

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

      @media screen and (max-width: $md) {
        margin: 0.2rem 1rem;
      }
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

      @media screen and (max-width: $md) {
        width: 64px;
        height: 64px;
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
