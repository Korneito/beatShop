<template>
  <div class="min-h-screen flex flex-col justify-between bg-zinc-900 text-white">
    <header class="mb-15">
      <Navbar/>
    </header>
    <main class="pt-6">
      <router-view/>
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
</template>


<script>
import {RouterLink, RouterView} from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>


<style scoped>

</style>
