<template>
  <div class="media">
    <div class="media__audio">SONG</div>
    <div class="media__audio">SONG</div>
    <div class="media__audio">SONG</div>
    <div class="media__audio">SONG</div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MediaCollection extends Vue {}
</script>

<style scoped lang="scss">
.media {
  display: flex;
  flex-direction: column;
  background-color: wheat;

  &__audio {
    flex: 1 0 auto;
    font-size: 2em;
    padding: 2em;
  }
}
</style>
