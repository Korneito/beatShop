<template>
  <div class="flex flex-col">
    <div
        class="w-200 h-30 border-3 border-red-600  bg-zinc-800 flex justify-center items-center rounded-2xl  hover:bg-white transition hover:text-zinc-800 ">
      <div class="flex items-center justify-between w-full p-10">
        <img src="/img/beat.png" alt="" class="w-20 h-25 object-contain">
        <p class="pl-5 w-full">{{ beat.title }}</p>
      </div>
      <div class="flex items-center justify-center w-full p-10">
        <p class="p-5">{{ beat.price.toFixed(2) }}€</p>
        <button @click="beatStore.addToCart(beat)" class="bg-red-600 p-3 m-2 active:bg-red-800 w-full">TO CART</button>
      </div>
      <div class="flex justify-center w-full pr-20">
        <Badge v-if="beat.badge" :text="beat.badge"/>
      </div>
      <div @click="togglePlayer" class="flex justify-center w-full pr-20">
        <img src="/img/playerArrow.png" alt="home" class="w-20 h-20 ml-10 mr-10"/>
      </div>
    </div>

    <div v-if="isPlayerOpen"
         class="w-200 bg-zinc-900 p-4 mt-4 rounded-2xl border border-zinc-700 flex justify-center items-center">
      <audio controls autoplay>
        <source :src="beat.audio" type="audio/mp3">
      </audio>
    </div>

  </div>
</template>

<script>
import {useBeatStore} from "@/stores/beats.js";
import Badge from "@/components/Badge.vue";

export default {
  name: "BeatCard",
  props: {
    beat: {type: Object, required: true},
  },
  data() {
    return {
      beatStore: useBeatStore(),
      isPlayerOpen: false
    }
  },
  components: {
    Badge,
  },
  methods: {
    togglePlayer() {
      this.isPlayerOpen = !this.isPlayerOpen;
    }
  }
}
</script>

<style scoped>

</style>