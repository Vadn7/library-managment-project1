import Book from "./book.mjs";

export default class Ebook extends Book {


    constructor(title,author,isbn,copies,fileSize)
    
    {
    super(title,author,isbn,copies);
this.fileSize=fileSize;
}

getFormat () {  return "Ebook " + this.fileSize+ " MB" }


    }
