<template>
      <div class="flex flex-col justify-center items-center  w-full">
          <h1 class="font-bold text-xl leading-tight">
              Contact
          </h1>
          <p>
            If you want to collaborate, buy exlusive beats or ask something - write me.
          </p>
          <form class="flex flex-col justify-center items-center w-full">
            <input type="text" placeholder="Your name" class ="w-150 p-3 m-3 rounded bg-zinc-800 text-white border-5 border-zinc-700 focus:border-red-500">
            <input type="email" placeholder="Your email" class ="w-150 p-3 m-3 rounded bg-zinc-800 text-white border-5 border-zinc-700 focus:border-red-500">
            <textarea placeholder="Your message" class ="w-150 p-3 m-3 rounded bg-zinc-800 text-white border-5 border-zinc-700 focus:border-red-500"></textarea>
            <button type="submit" class="text-white font-bold py-2 px-2 py-1 rounded bg-red-500 hover:bg-white hover:text-red-500 transition focus:bg-red-500">
              Submit
            </button>
          </form>
      </div>
</template>

<script>
export default {
  name: "ContactView"
}
</script>


<style scoped>

</style>