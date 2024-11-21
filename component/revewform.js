
app.component("review-form", {
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommend:null
        };
    },
    template: `
    <form @submit.prevent="onSubmit" class="review-form">
        <h3>Laisser un commentaire</h3>
        <label for="name">Name: </label>
        <input type="text" id="name" v-model="name" >
        
        <label for="review">Commentaire: </label>
        <textarea id="review" v-model="review" ></textarea>
        
        <label for="rating">Evaluation</label>
        <select id="rating" v-model.number="rating" >
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
        </select>
        <label for="recommend">Recommanderiez-vous ce produit?</label>
<select id="recommend" v-model="recommend">
<option>Yes</option>
<option>No</option>
</select>
        
        <input type="submit" class="button" value="Envoyer">
    </form>
    `,
    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || this.rating === null || this.recommend === null) {
                alert('Commentaire incomplet');
                return;
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommend:this.recommend
            };
            console.log(productReview);
            this.$emit('review-submitted', productReview);

            this.name = '';
            this.review = '';
            this.rating = null;
            this.recommend=null;
        }
    }});