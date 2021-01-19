const app = Vue.createApp({
    //data to react to events inside of the app
    data() {     //Shorthand to make a function
        return { //be sure to return an object
            showBooks: true,
            url:"https://www.google.com",
            books: [
                {title: 'name of the wind', author: 'Patrick Ruffus', img: './imgs/placeholder2.jpg', isFav: true},
                {title: 'The Hobbit', author: 'Tolkein', img: './imgs/placeholder2.jpg', isFav: true},
                {title: 'Harry Potter', author: 'The Lady', img: './imgs/placeholder3.jpg', isFav: false}
            ]
            // author: 'Brandon Sanderson',
            // age: 45,
            // x: 0,
            // y: 0
        }
    },
    //Functions that can be called
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(e, data) {
            console.log(e, e.type);
            if(data) {
                console.log(data);
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        isFavChange(book) {
            console.log(book);
            book.isFav = !book.isFav;
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter( (book) => book.isFav)
        }
    }
})

app.mount('#app')