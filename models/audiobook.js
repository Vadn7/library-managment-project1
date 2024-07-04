
import Book from "./book.mjs";

export default class AudioBook extends Book {

    constructor(title,author,isbn,copies,fileDuration)
    
    {
    super(title,author,isbn,copies)
    
    this.fileDuration=fileDuration;
        
    }
    
    getFormat () {  return `audioBook (${this.fileDuration} hours)` }
    
    
    }
    