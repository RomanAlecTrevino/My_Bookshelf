// Add Event Listeners to display and hide card
const showAddCard = () => {
    showCard.style.display = 'block';
}

const deleteAddCard = () => {
   showCard.style.display = 'none'; 
}

const appendBook = event => {
    event.preventDefault();

    let title = document.querySelector('.input-title').value;
    let author = document.querySelector('.input-author').value;

    let userInput = new Book()
}

const showCard = document.querySelector('.book-card');
const addBtn = document.querySelector('.add-button');
const closeBtn = document.querySelector('.close-add-button');
const appendBookBtn = document.querySelector('.add-book-button');
addBtn.addEventListener('click', showAddCard);
closeBtn.addEventListener('click', deleteAddCard);
appendBookBtn.addEventListener('click', appendBook);

// Create Book Object
class Book {

    constructor(title, author, read, pages, pagesRead) {
        this.title = title;
        this.author = author;
        this.read = read;
        this.pages = pages;
        this.pagesRead = pagesRead;
    }

    haveRead() {
        const radios = document.querySelectorAll('.input-read');
        const radioValue = '';
        radios.forEach(radio => {
            if(radio[i].checked) {
                radioValue = radio[i].value;
            }
        })
        return radioValue;
    }
}

