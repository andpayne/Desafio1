// La clase ProductManager administra los productos que van a ser visualizados.
class ProductManager {
    constructor() {
      this.products = []; 
    }

    addProducts(product) {
      const prod = this.products.find(prod => prod.code === prod.code)

      if(prod){
        console.log("Producto ya encontrado")
      } else {
        this.products.push(product)
      }
    } 

    getProducts() {
      console.log(this.products)
    }

    getProductById(id) {
      const prod = this.products.find (prod => prod.id === id)

      if(prod) {
        console.log(prod)
      } else {
        console.log("Producto no encontrado")
      }
    }
}

// Creo clase Product para tener un control individual de los productos. 
class Product {
  constructor (title, description, price, thumbnail, code, stock) {
    this.title = title 
    this.description = description
    this.price = price 
    this.thumbnail = thumbnail 
    this.code = code 
    this.stock = stock 
    this.id = Product.incrementarId() // Mi Id es el resultado de lo que devuelva este metodo. 
  }
  // Defino un metodo de CLASE 
  static incrementarId () {
    //Si existe esta propiedad, la auemento en 1 o la creo. 
    if(this.idIncrement) {
      this.idIncrement++
    } else {
      this.idIncrement = 1 
    }
    return this.idIncrement
  }
}

const producto1 = new Product("Arroz", "Rico", 300, "AA123LE", 20, [])
const producto2 = new Product("Lentejas", "Rico", 300, "AA123LE", 20, [])
const producto3 = new Product("Garbanzos", "Rico", 300, "AA123LE", 20, [])

const productManager = new ProductManager()

productManager.addProducts(producto1)
productManager.addProducts(producto2)
productManager.addProducts(producto3)

productManager.getProducts()

productManager.getProductById(2)