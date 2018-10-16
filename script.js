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
const og5= new Book("Lord of the Rings","JRR Tolkien",true);
myLibrary.push(og5);

function Book(title,author,read=false) {
  this.title=title;
  this.author=author;
  this.read=read;
}
// This function should make a visible display of each book 
//as they are added to the library
function renderBook(Book) {
  const container=document.querySelector('#container');
  
  const content = document.createElement('div');
  content.classList.add('buttondiv');
  
  singleBookHTML='';
  for (i in myLibrary) {
    let currentBook = myLibrary[i];
    singleBookHTML+=`
      <div class = "buttondiv">
      <h2>${currentBook.title}</h2>
      <h3>${currentBook.author}<h3>
      <button onclick='readToggle(${i});'>I have read this book</button>
      <button onclick='removeBook(${i});'>Remove this book</button>`
      
    if (currentBook.read==true) {
      singleBookHTML+=`<h2>I've read this Book</h2>`
    }
    else {singleBookHTML+='<h2>...I have not finished this book.</h2>'}

    singleBookHTML+=`</div>`
  }

  container.innerHTML=singleBookHTML;

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
function removeBook(i) {
  myLibrary.splice(i,1);
  showAllBooks();
}
function readToggle(i) {
  isRead=myLibrary[i].read;
  if (isRead==true) {myLibrary[i].read=false;}
  else {myLibrary[i].read=true;}
  console.log(myLibrary[i].read);
  renderBook(myLibrary[i]);
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
