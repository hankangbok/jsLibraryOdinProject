let myLibrary=[]
//These are just some preliminary books for example sake
const og1= new Book("Doctor Who","David Tennant");
myLibrary.push(og1);
const og2= new Book("Giancoli Physics","Giancoli");
myLibrary.push(og2);
const og3= new Book("BLueJ and JS","Joo");
myLibrary.push(og3);
const og4= new Book("Alice in WonderLand","Lewis Carroll",true);
myLibrary.push(og4);
const og5= new Book("Harry Potter","JK Rowling",true);
myLibrary.push(og5);

function Book(title,author,read=false) {
  this.title=title;
  this.author=author;
  this.read=read;
}

function addBookToLibrary() {
  //do stuff here
  var title = prompt("What is the book title?");
  var author = prompt ("What is the author's name?");
  var read= prompt("Have you read this book?")
  const newBook = new Book(title,author,read);
  myLibrary.push(newBook);
  renderBook(newBook);
  return myLibrary;
}

// This function should make a visible display of each book 
//as they are added to the library
function renderBook(Book) {
  const container=document.querySelector('#container');
  
  const content = document.createElement('div');
  content.classList.add('buttondiv');

  buttonHTML='THIS IS TEXT<h2> ${Book.title}</h2>';
  

  content.textContent=Book.title+" "+Book.author+Book.read;
  var removeBook=document.createElement('button');
  var buttonText=document.createTextNode("Remove book from library");
  
  removeBook.addEventListener('click',function() {
    container.removeChild(content);        
  })


  var isRead=document.createElement('button');
  var isReadText=document.createTextNode('Read this book');
    
  isRead.appendChild(isReadText);
  removeBook.appendChild(buttonText);
  
  content.appendChild(isRead);
  content.appendChild(removeBook);
  
  //initialize the item to the DOM
  container.appendChild(content);
  
  isRead.addEventListener('click',function(Book) {
    if (Book.read==true) {
      Book.read=false;
      console.log(Book.read);
    }
    else{
      Book.read=true;
      console.log(Book.read);
    }
    // Change the text content so the correct 'read' value is displayed.
    //content.textContent=Book.title+Book.author+Book.read;
    // isRead.appendChild(isReadText);
    //content.appendChild(isRead);
    // removeBook.appendChild(buttonText);
    //content.appendChild(removeBook);

    //container.appendChild(content);
  })


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
