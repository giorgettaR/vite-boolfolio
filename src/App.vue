<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  data() {
    return {
    }
  }
}
</script>

<style lang ="scss">
@use './style/general.scss';
</style>