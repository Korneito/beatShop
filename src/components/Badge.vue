<template>
  <div class="bg-red-600 flex justify-center">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "Badge",
  props: {
    text: {type: String, required: true},
  }
}
</script>

<style scoped>

</style>