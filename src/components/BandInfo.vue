<template>
  <div class="band">
    <div class="band__member">J</div>
    <div class="band__member">J</div>
    <div class="band__member">W</div>
    <div class="band__member">H</div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BandInfo extends Vue {}
</script>

<style scoped lang="scss">
.band {
  display: flex;
  flex-direction: row;
  height: 100%;
  flex-wrap: wrap;
  text-align: center;
  font-size: 2em;
  background-color: wheat;

  &__member {
    flex: 1 0 45%;
    border: solid 1px black;
  }
}
</style>
