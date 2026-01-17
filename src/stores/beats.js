import {defineStore} from 'pinia'
import beats from '@/data/beats.json'

export const useBeatStore = defineStore('beats', {
    state: () => ({
        beats: beats,
        cart: [],

        currentBeat: null,
    }),
    getters: {
        total(state) {
            return state.cart.reduce((acc, curr) => acc + curr.price, 0)
        }
    },
    actions: {
        addToCart(beat) {
            const exist = this.cart.find(item => item.id === beat.id)
            if (!exist) {
                this.cart.push(beat)
            }

        },
        clearCart() {
            this.cart = []
        },
        removeFromCart(id) {
            this.cart = this.cart.filter(item => item.id !== id)
        },
        removeBeat(id) {
            this.beats = this.beats.filter(beat => beat.id !== id)
        }
    },
})