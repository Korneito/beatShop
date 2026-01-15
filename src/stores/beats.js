import { ref, computed } from 'vue'
// stores/beats.js
import { defineStore } from 'pinia'

export const useBeatStore = defineStore('beats', {
    state: () => ({
        beats: [
            {id: 1, title: 'test', price: 25.99},
            {id: 2, title: 'test2', price: 25.99},
            {id: 3, title: 'test3', price: 25.99},
            {id: 4, title: 'test4', price: 25.99},
            {id: 5, title: 'test5', price: 25.99},
            {id: 6, title: 'test6', price: 25.99},
            {id: 7, title: 'test7', price: 25.99},
            {id: 8, title: 'test8', price: 25.99},
            {id: 9, title: 'test9', price: 25.99},
            {id: 10, title: 'test10', price: 25.99},
            {id: 11, title: 'test11', price: 25.99},
            {id: 12, title: 'test12', price: 25.99},
            {id: 13, title: 'test13', price: 25.99},
            {id: 14, title: 'test14', price: 25.99},
            {id: 15, title: 'test15', price: 25.99},

        ],
        cart: [

        ]
    }),
    getters: {

    },
    actions: {
        increment() {
            this.count++
        },
    },
})