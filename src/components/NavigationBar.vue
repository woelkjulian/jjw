<template>
  <div class="parent">
    <nav class="navigation">
      <div class="navigation__item">LINK</div>
      <div class="navigation__item">LINK</div>
      <div class="navigation__item">LOGO</div>
      <div class="navigation__item">LINK</div>
      <div class="navigation__item">LINK</div>
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

  :nth-child(3) {
    flex-grow: 2;
  }

  &__item {
    border: solid 1px black;
    padding: 1em;
    font-size: 2em;
    text-align: center;
    flex-grow: 1;
  }
}
</style>
