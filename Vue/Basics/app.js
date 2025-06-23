// now we create a vue app.
// how do we do that?
// Why do we need app?
// Answer: We need app to create a Vue instance that will manage our application.
// A Vue instance is the root of our application.

// this represents the root element of our Vue application.
const app = Vue.createApp({
    // inside here we can setup data, functions
    // also the component template.

    // template: '<h2> Vue Template </h2>'
    // this is the template that will be rendered by Vue.
    // this is not good for large applications.


    data() {
        return {
            title: 'Vue Basics',
            show: true,
            age: 21,
            inputTitle: '',
            x: 0,
            y: 0,
            books:[
                { id: 1, title: 'Book 1', author: 'Author 1', isFav: true , img:'assets/1.png'},
                { id: 2, title: 'Book 2', author: 'Author 2', isFav: false , img:'assets/2.png'},
                { id: 3, title: 'Book 3', author: 'Author 3', isFav: true, img:'assets/3.png' },
                { id: 4, title: 'Book 4', author: 'Author 4', isFav: false , img:'assets/4.png'}
            ],
            newBookTitle: '',
            newBookAuthor: '',
            newBookFav: false,
            newBookImg: ''
        }
    },


    methods: {
        toggleShow(){
            this.show = !this.show
        },
        changeTitle(){
           this.title = this.inputTitle
        },
        ageDec(){
            if (this.age > 0) {
            this.age--
            } else {
                alert('Age cannot be less than 0')
            }
        },
        handleEvent(e) {
            console.log(e)
        },
        handleMouseMove(event){
            this.x = event.offsetX
            this.y = event.offsetY
        },
        removeBook(bookId) {
            this.books = this.books.filter(book => book.id !== bookId);
        },
        addBook() {
            // Type checking for title and author (must be non-empty strings)
            if (
                typeof this.newBookTitle === 'string' && this.newBookTitle.trim() !== '' &&
                typeof this.newBookAuthor === 'string' && this.newBookAuthor.trim() !== ''
            ) {
                const newId = this.books.length
                    ? Math.max(...this.books.map(book => book.id)) + 1
                    : 1;
                this.books.push({
                    id: newId,
                    title: this.newBookTitle.trim(),
                    author: this.newBookAuthor.trim(),
                    img: this.newBookImg || 'assets/default.png', // Default image if not provided
                    isFav: Boolean(this.newBookFav) || false // Convert to boolean
                });
                // Optionally clear input fields
                this.newBookTitle = '';
                this.newBookAuthor = '';
                this.newBookFav = false;
                this.newBookImg = '';
            } else {
                alert('Please enter a valid book title and author.');
            }
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        }
    }
})


app.mount('#app')
// We create a Vue app using Vue.createApp() and then mount it to the DOM element with the id 'app'.
// anything inside the app will be managed by Vue.
// The mount method is used to attach the Vue instance to a DOM element.

