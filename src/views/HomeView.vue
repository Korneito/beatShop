<template>
  <div class="flex justify-center w-full">
    <div v-if="beatStore.beats.length === 0" class="flex justify-center w-full">
      <h1 class="text-3xl">There are currently no beats available for purchase. Stay tuned for updates. If you have any
        questions, you can reach out to me in the Contact section.</h1>
    </div>

    <div v-else class="grid grid-cols-1 gap-6 flex-col gap-6">
      <BeatCard v-for="beat in beatStore.beats" :key="beat.id" :beat="beat"/>
    </div>
  </div>
</template>

<script>
import {useBeatStore} from "@/stores/beats.js";
import BeatCard from "@/components/BeatCard.vue";

export default {
  name: "HomeView",
  components: {
    BeatCard
  },

  data() {
    return {
      beatStore: useBeatStore()
    }
  },
}

</script>


<style scoped>

</style>