app.component("product-display", {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img v-bind:src="inStock ? image : 'assets/images/out-of-stock.jpg'" :alt="product">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <a :href="lien">vers site Vue JS</a>
                <p v-if="inStock > 10">En Stock</p>
                <p v-else-if="inStock <= 10 && inStock > 0">Presque épuisé</p>
                <p v-else>En rupture de Stock</p>
                <p>Expédition</p>
                <product-details :details="details"></product-details>
                <div v-for="(variant, index) in variants" 
                     :key="variant.id" 
                     @mouseover="updateImage(index)" 
                     class="color-circle"
                     v-bind:style="{ 'background-color': variant.color }">
                </div>
                <button class="button" 
                        @click="addToCart" 
                        :disabled="!inStock" 
                        :class="{ disabledButton: !inStock }">
                    Add to cart
                </button>
                <button class="button" 
                        @click="remove" >
                    Remove from cart
                </button>
            </div>
        </div>
        <review-form @review-submitted="addReview"></review-form>
        <product-list v-if="reviews.length" :reviews="reviews"></product-list>
    </div>
    `,
    data() {
        return {
            brand: 'Vue JS',
            product: 'chaussettes',
            lien: 'https://vuejs.org/',
            selectedVariant: 0,
            details: ['50% coton', '20% polyester', '30% laine'],
            variants: [
                { id: 2001, color: 'green', image: 'assets/images/socks_green.jpg', quantity: 50 },
                { id: 2002, color: 'blue', image: 'assets/images/socks_blue.jpg', quantity: 7 }
            ],
            reviews: []
        };
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
        },
        remove() {
            this.$emit('remove-cart', this.variants[this.selectedVariant].id);
        },
        updateImage(index) {
            this.selectedVariant = index;
        },
        addReview(review) {
            this.reviews.push(review);
        }
    },
    computed: {
        title() {
            return this.product + " " + this.brand;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        }
    }
});

