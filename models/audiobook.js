<<<<<<< HEAD

import Book from "./book.js";

class AudioBook extends Book {

    constructor(title,author,isbn,copies,fileDuration)
    
    {
    super(title,author,isbn,copies)
    
    this.fileDuration=fileDuration;
        
    }
    
    getFormat () {  return `audioBook (${this.fileDuration} hours)` }
    
    
    }

    module.exports=AudioBook;
=======

import Book from "./book.mjs";

export default class AudioBook extends Book {

    constructor(title,author,isbn,copies,fileDuration)
    
    {
    super(title,author,isbn,copies)
    
    this.fileDuration=fileDuration;
        
    }
    
    getFormat () {  return `audioBook (${this.fileDuration} hours)` }
    
    
    }
>>>>>>> 8ef3df2ec2e0bdaff0f9537404f882ad944c2321
    