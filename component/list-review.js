app.component('product-list',{
    props: {
        reviews : {
          type : Array,
          required : true

        }
    },     
    template: 
    `
     <div class="review-container">
            <h3>commentaires</h3>
            <ul>
                <li v-for="(review, index) in reviews" :key="index">
                    name :{{review.name}}a rating {{review.rating}} etoils est  </br>
                    {{review.review}} <br>
                     recommender : {{review.recommend}}
                   </br>
                  
                </li>
            </ul>
        </div>

    `,
    
})