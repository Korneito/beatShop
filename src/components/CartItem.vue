<template>
  <div
      class="w-100 h-25 border-3 border-red-600  bg-zinc-800 flex justify-center items-center rounded-2xl  hover:bg-white transition hover:text-zinc-800 ">
    <div class="flex items-center justify-between w-full p-10">
      <img src="/img/beat.png" alt="" class="w-20 h-25 object-contain">
      <p class="pl-5">{{ item.title }}</p>
    </div>
    <div class="flex items-center justify-center w-full p-10">
      <p>{{ item.price.toFixed(2) }}</p>
      <button @click="beatStore.removeFromCart(item.id)" class="bg-red-600 p-3 m-2">REMOVE</button>
    </div>
  </div>
</template>

<script>
import {useBeatStore} from "@/stores/beats.js";

export default {

  name: "CartItem",
  props: {
    item: {type: Object, required: true}
  },
  data() {
    return {
      beatStore: useBeatStore()
    }
  }
}

</script>


<style scoped>

</style>