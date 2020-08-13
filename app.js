let myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
    this.info = function() {
        return `${this.title} by ${this.author}`;
    }
}

const createBook = () => {
    event.preventDefault();

    // Get user input and create new Book
    let userTitle = document.getElementById('title').value;
    let userTitleFocus = document.getElementById('title');
    let userAuthor = document.getElementById('author').value;
    let userBook = new Book(userTitle, userAuthor);

    // Create new HTML element and append it to UL
    const bookUl = document.querySelector('.new-books');
    let newBook = document.createElement('li');
    newBook.innerHTML = 
                `<div class="new-book">
                    <li class="book">${userBook.info()}</li>
                    <button class="read-button">Read?</button>
                    <button class="delete-button">Delete</button>
                </div>`;
    bookUl.appendChild(newBook);

    // Store new book in myLibrary
    myLibrary.push(userBook);

    // Reset form and reset focus
    const form = document.querySelector('form');
    form.reset();
    userTitleFocus.focus();
}

const deleteBook = event => {
    // Set item to the delete button
    const item = event.target;

    // Delete function
    if(item.classList[0] === 'delete-button') {
        const book = item.parentElement;
        const delBook = book.parentElement;
        delBook.remove();
    } else if(item.classList[0] === 'read-button') {
        const book = item.parentElement;
        const readBook = book.parentElement;
        readBook.classList.toggle('has-read');
    }

}

const isRead = event => {
    console.log(event.target);
    const item = event.taret;
    
    
}

const btn = document.querySelector('.button');
const toDelete = document.querySelector('.new-books');

toDelete.addEventListener('click', deleteBook);

btn.addEventListener('click', createBook);
