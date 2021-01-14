const app = Vue.createApp({
    //data to react to events inside of the app
    data() {     //Shorthand to make a function
        return { //be sure to return an object
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    //Functions that can be called
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        }
    }
})

app.mount('#app')