<<<<<<< HEAD
import Book from "./book.js";

class Ebook extends Book {


    constructor(title,author,isbn,copies,fileSize)
    
    {
    super(title,author,isbn,copies);
this.fileSize=fileSize;
}

getFormat () {  return "Ebook " + this.fileSize+ " MB" }


    }

    module.exports=Ebook;
=======
import Book from "./book.mjs";

export default class Ebook extends Book {


    constructor(title,author,isbn,copies,fileSize)
    
    {
    super(title,author,isbn,copies);
this.fileSize=fileSize;
}

getFormat () {  return "Ebook " + this.fileSize+ " MB" }


    }
>>>>>>> 8ef3df2ec2e0bdaff0f9537404f882ad944c2321
