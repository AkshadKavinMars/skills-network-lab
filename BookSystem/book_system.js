let books = []
let editIndex = -1;

class Book {
                    constructor(bookName,authorName,bookDescription,pagesNumber) {
                        this.bookName = bookName;
                        this.authorName = authorName;
                        this.bookDescription = bookDescription;
                        this.pagesNumber = pagesNumber;
                    }
                getinfo() {
                    console.log(`Book Name - ${this.bookName} , Author Name - ${this.authorName}`)
                }}

function addBook() {
            const bookName = document.getElementById('bookName').value;
            const authorName = document.getElementById('authorName').value;
            const bookDescription = document.getElementById('bookDescription').value;
            const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

            if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
                
                const book = new Book(bookName, authorName, bookDescription, pagesNumber);
                books.push(book);

                book.getinfo();   // optional
                showbooks();
                clearInputs();

            } else {
                alert('Please fill in all fields correctly.');
            }
}

function showbooks() {
    const BooksDiv = books.map((book,index) => `
    <h1>Book Number: ${index+1}</h1>
    <p><strong>Book Name:</strong>${book.bookName}</p>
    <p><strong>Author Name:</strong> ${book.authorName}</p>
    <p><strong>Book Description:</strong> ${book.bookDescription}</p>        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
    <button onclick="editBook(${index})">Edit</button>
    <hr>
    `);

    document.getElementById('books').innerHTML = BooksDiv.join('');
}

function clearInputs() {
    document.getElementById('bookName').value = "";
    document.getElementById('authorName').value = "";
    document.getElementById('bookDescription').value = "";
    document.getElementById('pagesNumber').value = "";
}

            
function editBook(index) {
  const book = books[index];

  document.getElementById('bookName').value = book.bookName;
  document.getElementById('authorName').value = book.authorName;
  document.getElementById('bookDescription').value = book.bookDescription;
  document.getElementById('pagesNumber').value = book.pagesNumber;

  editIndex = index;

  document.getElementById("addBtn").innerText = "Update Book";
}

