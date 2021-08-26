<template>
  <nav class="navigation">
    <label class="navigation__toggle" for="navigation__toggle"
      ><span>&#9776;</span></label
    >
    <input type="checkbox" class="navigation__toggle" id="navigation__toggle" />

    <a class="navigation__link"><span>Link</span></a>
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
    flex: 1 1 auto;
  }

  @media (max-width: $breakpoint-tablet) {
    flex-direction: column;
    text-align: right;

    &__link {
      display: none;
      flex: 0 1 50%;
      padding: 0.5em 1em 0.5em;
    }

    label {
      display: block;
      padding: 0.5em 1em 0.5em;

      span {
        border: solid 1px black;
        padding: 0.1em 0.4em 0.1em 0.4em;
      }
    }

    input:checked ~ &__link {
      display: block;
    }
  }
}
</style>
