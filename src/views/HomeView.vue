<template>
  <div  class="flex justify-center w-full">
    <div class="grid grid-cols-4 gap-6 flex-col gap-6">
      <BeatCard v-for="beat in beatStore.beats" :key="beat.id" :beat="beat"/>
    </div>
  </div>
</template>

<script>
import {useBeatStore} from "@/stores/beats.js";
import BeatCard from "@/components/BeatCard.vue";

export default {
  name: "HomeView",
  components: {BeatCard},

  data() {
    return {
      beatStore: useBeatStore()
    }
  },
}

</script>


<style scoped>

</style>