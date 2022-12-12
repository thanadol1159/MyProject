class Product {
    static runningId = 1

    static setRunningId (id){
        this.runningId = id
    }

    constructor(item, amount){
        this.id = Product.runningId++
        this.item = item
        this.amount = amount
        this.status = false
    }

    getItem() {
        return this.item
    }

    getAmount() {
        return this.amount
    }

    setDone() {
        this.status = true
    }
}

export {Product}