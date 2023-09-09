const app = Vue.createApp({

    data() {
        return {
            showContainer: true,

            books: [
                {
                    bookName: "Honigtot",
                    bookImg: "./images/Honigtot.jpg",
                    authorName: " Hanni Münzer",
                    bookId: "97512348",
                    price: "22.00 €",
                    isFav: true
                },
                {
                    bookName: "Flammengeküsst",
                    bookImg: "./images/Flammengeküsst.jpg",
                    authorName: "Rebecca Yarros",
                    bookId: "75410398",
                    price: "18.00 €",
                    isFav: true
                },
                {
                    bookName: "Melody",
                    bookImg: "./images/melody.jpg",
                    authorName: "Martin Suter",
                    bookId: "46812794",
                    price: "14.00 €",
                    isFav: true
                }
            ]
        };
    },

    methods: {
        hideBtn() {
            this.showContainer = !this.showContainer;
        },
        changeFav(book) {
            book.isFav = !book.isFav;
        }
    }, computed: {
        filteredBooks() {
            return this.books.filter(book => book.isFav)
        }
    }

})

app.mount("#app")
