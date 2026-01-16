<template>
    <nav class="fixed w-full flex justify-between items-center  bg-black text-red-500  ">
      <div class="flex justify-center items-center hover:bg-white transition rounded-2xl w-full">
      <router-link to="/">
        <img src="/logo.png" alt="home" class="w-20 h-20 ml-10 mr-10" />
      </router-link>
      </div>
      <div class="flex justify-center items-center hover:bg-white transition rounded-2xl w-full">
          <router-link to="/contact">
            <img src="/contact.png" alt="contact" class="w-20 h-20 ml-10 mr-10 ">
          </router-link>
      </div>
      <div class="flex justify-center items-center hover:bg-white transition rounded-2xl w-full">
        <router-link to="/cart">
          <img src="/cart.png" alt="contact" class="w-20 h-20 ml-10 mr-10">
        </router-link>
      </div>
    </nav>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style scoped>

</style>