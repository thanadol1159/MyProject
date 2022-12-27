const { template } = require('@babel/core')
//your student id, firstname, and lastname here
// 64130500035  thandol saengsawang
class BookStore {
  constructor (){
    this.stores = []
  }
  findBookIndex(isbn){
    

    return this.stores.findIndex(a=> a.isbn === isbn)

  }
  addNewBook(isbn, stocks){


    if (this.findBookIndex(isbn) === -1){
      this.stores.push({isbn,stocks})
     return stocks}

    return -1



  }
  sellBook(isbn, quantity){


    const c =this.findBookIndex(isbn)
    if (c !== -1) {
      if (this.stores[c].stocks < quantity) {
        return 0
      }
      this.stores[c].stocks -= quantity
      return quantity
    }
    return -1
  
  }
}
module.exports = BookStore
