const { template } = require('@babel/core')
//your student id, firstname, and lastname here
// 64130500035 thanadol saengsawang
class Book {
    constructor(isbn, title = 'untitled', ebook = false){
        this.isbn = isbn
        this.title = title
        this.ebook = ebook
        this.authors = []
    }

    addAuthor(fn, ln){
        let name = {firstname:fn,lastname:ln}
        this.authors.push(name)
        return this.authors.length
    }        

    getFirstAuthor(){
        return this.authors[0]
    }   

    getCoAuthors(){
        if (this.authors.length === 0) {return []}
        return this.authors.slice(1,this.authors.length)
    }

    findAuthor(firstname, lastname) {
        return this.authors.find(author => author.firstname.toLowerCase() === firstname.toLowerCase() && author.lastname.toLowerCase() === lastname.toLowerCase())
        
    } 

    hasEbook(){
        return this.ebook
    }

}
module.exports = Book
