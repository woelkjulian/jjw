<template>
  <div id="app">
    <NavigationBar />
    <LandingPage />
    <BandInfo />
    <GigInfo />
    <MediaCollection />
    <FooterBar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavigationBar from './components/NavigationBar.vue';
import LandingPage from './components/LandingPage.vue';
import BandInfo from './components/BandInfo.vue';
import GigInfo from './components/GigInfo.vue';
import MediaCollection from './components/MediaCollection.vue';
import FooterBar from './components/FooterBar.vue';

@Component({
  components: {
    NavigationBar,
    LandingPage,
    BandInfo,
    GigInfo,
    MediaCollection,
    FooterBar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
