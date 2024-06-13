<template>
  <main>
    <AppMain />
  </main>
</template>

<script>
import AppMain from './components/AppMain.vue'

export default {
  components: {
    AppMain,
  },
  data() {
    return {
      message: 'Ciao mondo'
    }
  }
}
</script>

<style lang ="scss">
@use './style/general.scss';
</style>