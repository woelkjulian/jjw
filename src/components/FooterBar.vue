<template>
  <div class="footer">IMPRESSUM KONTAKT</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class FooterBar extends Vue {}
</script>

<style scoped lang="scss">
.footer {
  height: 10%;
  background-color: gainsboro;
  border: solid 1px black;
  font-size: 2em;
  padding: 2em;
}
</style>
