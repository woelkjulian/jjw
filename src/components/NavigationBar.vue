<template>
  <div class="parent">
    <nav class="navigation">
      <div class="navigation__logo">LOGO</div>
      <div class="navigation__item">
        <div class="navigation__item-link">Link</div>
        <div class="navigation__item-link">Link</div>
        <div class="navigation__item-link">Link</div>
        <div class="navigation__item-link">Link</div>
      </div>
    </nav>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class NavigationBar extends Vue {}
</script>

<style scoped lang="scss">
.navigation {
  display: flex;
  flex-direction: row;
  border: solid 1px black;
  color: black;
  text-align: center;

  &__logo {
    border: solid 1px black;
    padding: 1em;
    font-size: 1.5em;
    flex-grow: 1;
  }

  &__item {
    border: solid 1px black;
    font-size: 1em;
    text-align: center;
    display: flex;
    flex-direction: row;
    flex-grow: 3;

    @media  (max-width: $breakpoint-tablet) {
      flex-direction: column;
      flex: 3 0 auto
    }

    &-link {
      border: solid 1px black;
      flex: 1 1 auto;
    }
  }
}
</style>
