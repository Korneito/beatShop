<template>
 <div>
 <Navbar />
   <main class="pt-6">
     <router-view/>
   </main>
   <Footer />
 </div>
</template>


<script>
  import { RouterLink, RouterView } from 'vue-router'
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
