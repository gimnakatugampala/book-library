const app = Vue.createApp({
    data(){
        return{
            books:[]
        
        }
    },
    methods:{
      

    },
    mounted(){
            fetch('http://localhost:3000/books')
            .then(res => res.json())
            .then(data => this.books = data)
        
    }
})

app.mount('#app')