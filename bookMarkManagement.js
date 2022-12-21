const { template } = require('@babel/core')
//write your student id, firstname, and lastname here
// 64130500035 นายธนาดล แสงสว่าง 
class BookMark {
  constructor( isbn,totalPages = 0) {
    this.isbn = isbn
    this.totalPages = totalPages 
    this.bookMarks = [] 
  }

  addBookMark(pageNumber){
    if(pageNumber >= 1 || pageNumber <= this.totalPages){return  this.bookMarks.push(pageNumber)}
    return  this.bookMarks.length
  }

  removeBookMark(pageNumber){
    if(pageNumber < 1 || pageNumber > this.totalPages){return undefined}
    let rm =  this.bookMarks.shift(pageNumber)
    return rm
  }

  goToFirstBookMark(){
    if (this.bookMarks === 0) {return undefined}
    return this.bookMarks[0]
  }

  goToLastBookMark(){
    if (this.bookMarks === undefined || this.bookMarks.length === 0) {return undefined}
    return this.bookMarks[this.bookMarks.length - 1]
  }

  getBookMarks(){
    return this.bookMarks;
  }
}
module.exports = BookMark
