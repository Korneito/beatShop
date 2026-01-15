<template>
    <div class="w-100 h-25 border-3 border-red-600  bg-zinc-800 flex justify-center items-center rounded-2xl  hover:bg-white transition hover:text-zinc-800 " >
        
        <div class="flex items-center justify-between w-full p-10">
          <img src="/beat.png" alt="" class="w-20 h-25 object-contain">
            <p class="pl-5">{{ beat.title }}</p>
        </div>
        <div class="flex items-center justify-center w-full p-10">
            {{ beat.price }}
        </div>
    </div>
</template>

<script>
  export default {
    name: "BeatCard",
    props: {
      beat: {type: Object,required: true},
    }
  }
</script>


<style scoped>

</style>