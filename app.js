const app = Vue.createApp({
    data(){
        return{
            books:[],
            removeBtn: 'btn btn-danger'
        
        }
    },
    methods:{
        handleClick(select){
            fetch('http://localhost:3000/books')
            .then(res => res.json())
            .then(data => {
                data.forEach(book => {
                    if(select === book.id){
                        document.getElementById(select).remove()
                    }
                })
            })
        }
    },
    mounted(){
            fetch('http://localhost:3000/books')
            .then(res => res.json())
            .then(data => this.books = data)
        
    }
})

app.mount('#app')