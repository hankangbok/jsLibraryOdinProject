let myLibrary=[]

function Book(title,author) {
  this.title=title;
  this.author=author;
}

//This is not the right way to make a constructor
// function Book(title,author) {
//  //the constructor.. 
//  const newbook = {
//    thetitle=title
//    theauthor=author
//    readIt=false
//  }
// }

function addBookToLibrary() {
  //do stuff here
  var title = prompt("What is the book title?");
  var author = prompt ("What is the author's name?");
  const newBook = new Book(title,author);
  myLibrary.push(newBook);
  for (i in myLibrary) {
    console.log(i);
    console.table(myLibrary);
  }
  return myLibrary;
}



// This function should make a visible display of each book 
//as they are added to the library
function renderBook() {
  const container=document.querySelector('#container');
  
  const content = document.createElement('div');
  content.classList.add('buttondiv');
  content.textContent='This is a new book';
  
  container.appendChild(content);

}

const og1= new Book("book1","author1");
myLibrary.push(og1);
const og2= new Book("book2","author2");
myLibrary.push(og2);

renderBook();