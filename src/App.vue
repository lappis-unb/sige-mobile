<template>
  <div id="q-app">
    <popup/>
    <router-view />
  </div>
</template>

<script>
import popup from './components/popup.vue'
export default {
  name: 'App',
  components: {
    popup: popup
  }
}
</script>

<style lang="scss">
  body {
    background-color: $stdBackgroundColor;
  }
</style>
