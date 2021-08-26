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
  flex-wrap: wrap;
  text-align: center;
  background-color: gainsboro;
  font-size: 2em;
  height: 100%;

  &__date {
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
