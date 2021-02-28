<template>
  <div class="gig">
    <div class="gig__date">A</div>
    <div class="gig__date">B</div>
    <div class="gig__date">C</div>
    <div class="gig__date">D</div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GigInfo extends Vue {}
</script>

<style scoped lang="scss">
.gig {
  display: flex;
  flex-direction: row;
  text-align: center;
  background-color: gainsboro;
  height: 50%;

  &__date {
    flex: 1 0 auto;

    @media (max-width: $breakpoint-tablet) {
      flex: 1 0 50%;
    }

    @media (max-width: $breakpoint-mobile) {
      flex: 1 0 100%;
    }

    border: solid 1px black;
    font-size: 2em;
  }
}
</style>
