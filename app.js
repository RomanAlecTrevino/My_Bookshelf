// Add Event Listeners to display and hide card
const showAddCard = () => { showCard.style.display = 'block'; }

const deleteAddCard = () => { showCard.style.display = 'none'; }

const appendBook = event => {
    event.preventDefault();

    // Create Object
    const title = document.querySelector('.input-title').value;
    const author = document.querySelector('.input-author').value;
    const read = document.getElementById('radio-yes').checked ? document.getElementById('radio-yes').value : document.getElementById('radio-no').value;
    const pages = document.querySelector('.input-pages').value;
    const pagesRead = document.querySelector('.input-pages-read').value;
    let userInput = new Book(title, author, read, pages, pagesRead)

    // Append Object to DOM
    const bookshelf = document.querySelector('.bookshelf');
    const newBook = document.createElement('div');
    newBook.classList.add('new-book');

    newBook.innerHTML = `
    <button class="remove-button">X</button>
    <h2>${userInput.title}</h2>
    <h3><i>by<br>${userInput.author}</i></h3>
    <div class="progress-div">
        <h5>Progress</h5>
        <progress class="progress" max="${userInput.pages}" value="${userInput.pagesRead}"></progress>
    </div>
    <button class="finished-button">Finished!</button>
    </div>`;

    bookshelf.appendChild(newBook);

    // Push Object To Storage Array
    bookshelfArray.push(userInput);

    document.querySelector('.form').reset();

    showCard.style.display = 'none';

}

const handleBook = event => {
    const item = event.target;
    const book = item.parentElement;
    if(item.classList[0] === 'finished-button') {
        item.style.display = 'none';
        book.style.opacity = '0.7';
    } else if(item.classList[0] === 'remove-button') {
        book.remove();
    }
}


const showCard = document.querySelector('.book-card');
const addBtn = document.querySelector('.add-button');
const closeBtn = document.querySelector('.close-add-button');
const appendBookBtn = document.querySelector('.add-book-button');
addBtn.addEventListener('click', showAddCard);
closeBtn.addEventListener('click', deleteAddCard);
appendBookBtn.addEventListener('click', appendBook);
window.addEventListener('click', handleBook);

// Create Book Object
class Book {

    constructor(title, author, read, pages, pagesRead) {
        this.title = title;
        this.author = author;
        this.read = read;
        this.pages = pages;
        this.pagesRead = pagesRead;
    }

}

const bookshelfArray = [];