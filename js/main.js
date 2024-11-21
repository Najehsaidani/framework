const app= Vue.createApp({
    data: function(){
        return{
            product:'chaussettes',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque facere, ducimus et velit earum quod quasi eaque nam voluptates ab totam nihil tempora laborum possimus nemo voluptate voluptatem quaerat blanditiis'
        }
    }
})
const mountedApp= app.mount('#app');