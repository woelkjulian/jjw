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
  flex-wrap: wrap;
  height: 100%;
  text-align: center;
  font-size: 2em;
  background-color: wheat;

  &__member {
    flex: 1 0 20%;
    border: solid 1px black;

    @media (max-width: $breakpoint-tablet) {
      flex: 1 0 40%;
    }

    @media (max-width: $breakpoint-mobile) {
      flex: 1 0 100%;
    }
  }
}
</style>
