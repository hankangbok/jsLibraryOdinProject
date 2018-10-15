let myLibrary=[]
//These are just some preliminary books for example sake
const og1= new Book("book1","author1");
myLibrary.push(og1);
const og2= new Book("book2","author2");
myLibrary.push(og2);

function Book(title,author) {
  this.title=title;
  this.author=author;
}

function addBookToLibrary() {
  //do stuff here
  var title = prompt("What is the book title?");
  var author = prompt ("What is the author's name?");
  const newBook = new Book(title,author);
  myLibrary.push(newBook);
  renderBook(newBook);
  // for (i in myLibrary) {
  //   console.log(i);
  //   console.table(myLibrary);
  // }
  return myLibrary;
}

// This function should make a visible display of each book 
//as they are added to the library
function renderBook(Book) {
  const container=document.querySelector('#container');
  
  const content = document.createElement('div');
  content.classList.add('buttondiv');
  content.textContent=Book.title+Book.author;
  var removeBook=document.createElement('button');
  var buttonText=document.createTextNode("Remove book from library");
  removeBook.appendChild(buttonText);
  content.appendChild(removeBook);
  //initialize the item to the DOM
  container.appendChild(content);
  

}

function showAllBooks(){
i=0;
while (i<myLibrary.length){
  renderBook(myLibrary[i]);
  console.log("this is book" + i);
  i++;
}
}

showAllBooks();
//window.onload=addBookToLibrary();
