const app = Vue.createApp({
    data() {
        return {
            cart:[],
            premium: true
        };
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },remove(id){
            index=this.cart.indexOf(id);
            if(index != -1){
                this.cart.splice(index,1);
            }
            
        }
    }
});

app.component("cliqued-button", {
    data() {
        return {
            count: 0
        };
    },
    template: `<button class="button" v-on:click="count++"> Vous m'avez cliqué {{ count }} fois </button>`
});


