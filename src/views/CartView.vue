<template>
  <div class="bg-black min-h-screen flex flex-col items-center">

    <h1 class=" text-white text-3xl text mt-10">Your cart</h1>

    <div v-if="beatStore.cart.length === 0" class="flex items-center bg-zinc-900 text-white mt-20 rounded-2xl p-50 ">
      <p class="text-3xl ">Your cart is empty</p>
    </div>

    <div v-else class="flex flex-col items-center">
      <div class="flex flex-col gap-2  bg-zinc-900 text-white mt-20 rounded-2xl p-50">
        <CartItem v-for="item in beatStore.cart" :key="item.id" :item="item"/>
        <p class="text-white text-2xl ">
          Total: {{ beatStore.total.toFixed(2) }} €
        </p>
      </div>
      <div class="flex flex-col gap-2  bg-zinc-900 text-white mt-20 rounded-2xl p-50">
        <input v-model="name" type="text" placeholder="Your name"
               class="w-150 p-3 m-3 rounded bg-zinc-800 text-white border-5 border-zinc-700 focus:border-red-500">
        <input v-model="surname" type="text" placeholder="Your surname"
               class="w-150 p-3 m-3 rounded bg-zinc-800 text-white border-5 border-zinc-700 focus:border-red-500">
        <input v-model="email" type="email" placeholder="Your email"
               class="w-150 p-3 m-3 rounded bg-zinc-800 text-white border-5 border-zinc-700 focus:border-red-500">
      </div>
      <div class="flex items-center justify-between mt-20 rounded-2xl p-5">
        <button @click="buy"
                class="text-white font-bold py-6 px-6   rounded bg-red-500 hover:bg-white hover:text-red-500 transition focus:bg-red-500">
          BUY
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import {useBeatStore} from "@/stores/beats.js";
import CartItem from "@/components/CartItem.vue";

export default {
  name: "CartView",
  data() {
    return {
      beatStore: useBeatStore(),
      name: "",
      surname: "",
      email: ""
    }
  },
  components: {
    CartItem
  },
  methods: {
    buy() {
      if (!this.name || !this.surname || !this.email) {
        alert("Please fill in a valid information");
        return;
      }


      this.beatStore.cart.forEach(item => {
        this.beatStore.removeBeat(item.id);
      })
      this.beatStore.clearCart()
      this.$router.push({
        name: 'success',
        params: {
          email: this.email,
          name: this.name
        }
      })
      this.name = "";
      this.surname = "";
      this.email = "";
    }
  }
}
</script>


<style scoped>

</style>