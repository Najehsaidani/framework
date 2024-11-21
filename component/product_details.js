app.component("product_details",{
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    data(){
        return {

        }

    },
    template:`<ul>
                    <li v-for="detail in details" :key="detail">{{ detail }}</li>
                </ul>`,
    
})