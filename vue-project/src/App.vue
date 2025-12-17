<template>
  <div id="app">
    <AppHeader/>

    <main>
      <router-view/>
    </main>

    <AppFooter/>
  </div>
</template>

<script>

  import AppHeader from "./components/layout/AppHeader.vue"
  import AppFooter from "@/components/layout/AppFooter.vue"

  export default {
    name: 'App',
    components : {
      AppHeader,
      AppFooter,
    }
  }
</script>

<style scoped>

</style>
