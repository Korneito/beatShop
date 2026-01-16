import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBeatStore = defineStore('beats', {
    state: () => ({
        beats: [
        { id: 1,  title: 'Midnight Drift', price: 19.99, badge: 'NEW' },
        { id: 2,  title: 'Neon Samurai',   price: 29.99, badge: 'HOT🔥' },
        { id: 3,  title: 'Cold Streets',   price: 17.50 },
        { id: 4,  title: 'Shadow Pulse',   price: 24.99, badge: 'HOT🔥' },
        { id: 5,  title: 'VKRNNK Anthem',  price: 34.99, badge: 'EXCLUSIVE' },
        { id: 6,  title: 'Toxic Skyline',  price: 21.49 },
        { id: 7,  title: 'Nightcrawler',   price: 27.00, badge: 'HOT🔥' },
        { id: 8,  title: 'Ghost Runner',   price: 18.99 },
        { id: 9,  title: 'Cyber Blood',    price: 31.99, badge: 'HOT🔥' },
        { id: 10, title: 'Red Horizon',    price: 22.50 },
        { id: 11, title: 'Voltage Dreams', price: 26.99, badge: 'NEW' },
        { id: 12, title: 'Broken Signal',  price: 15.99 },
        { id: 13, title: 'Dark Alley',     price: 19.49 },
        { id: 14, title: 'Chrome Tears',   price: 28.99, badge: 'SALE' },
        { id: 15, title: 'Blood Circuit',  price: 33.50, badge: 'HOT🔥' },



        ],
        cart: [
            {id: 15, title: 'test15', price: 25.99},
        ]
    }),
    getters: {

    },
    actions: {
        addToCart(beat){
            const exist = this.cart.find(item => item.id === beat.id)
            if (!exist) {
                this.cart.push(beat)
            }

        },
        clearCart(){
            this.cart = []
        },
        removeFromCart(id){
            this.cart = this.cart.filter(item => item.id !== id)
        }
    },
})