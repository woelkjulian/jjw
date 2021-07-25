<template>
  <nav class="navigation">
    <label class="navigation__toggle" for="navigation__toggle">&#9776;</label>
    <input type="checkbox" class="navigation__toggle" id="navigation__toggle" />

    <a class="navigation__link">Link</a>
    <a class="navigation__link">Link</a>
    <a class="navigation__link">Link</a>
    <a class="navigation__link">Link</a>
  </nav>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class NavigationBar extends Vue {}
</script>

<style scoped lang="scss">
.navigation {
  border: solid 1px black;
  color: black;
  display: flex;
  flex-direction: row;
  font-size: 1em;
  text-align: center;

  &__toggle,
  label {
    display: none;
  }

  &__link {
    border: solid 1px black;
    flex: 1 1 auto;
  }

  @media (max-width: $breakpoint-tablet) {
    flex-direction: column;
    text-align: center;

    &__link {
      display: none;
    }

    label {
      display: block;
    }

    input:checked ~ &__link {
      display: block;
    }
  }
}
</style>
