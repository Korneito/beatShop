<template>
  <div class="flex flex-col justify-center w-full">
    <div class="flex flex-col gap-3 items-center justify-between">
      <h1 class="text-3xl">Thanks for your order, <strong>{{ name }}</strong>! The materials will be sent to your email:
        <strong>{{ email }}</strong></h1>
    </div>
    <div class="flex gap-3 justify-center w-full mt-10">
      <button @click="$router.back()"
              class="text-white font-bold py-6 px-6 rounded bg-red-500 hover:bg-white hover:text-red-500 transition focus:bg-red-500">
        GO BACK
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "SuccessView",
  props: {
    email: {
      type: String, required: true
    },
    name: {
      type: String, required: true
    }

  }
}
</script>

<style scoped>

</style>