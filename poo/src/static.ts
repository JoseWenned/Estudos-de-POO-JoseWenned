class ProductList{

    static productList: string[] = []

    static addProduct(product: string){
        this.productList.push(product)
    }

    static getProduct(){
        console.log(`${this.productList}`)
    }

}

ProductList.addProduct("Computador")
ProductList.getProduct()