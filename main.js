class ProductManager {
    constructor() {
      this.products = []; 
      this.nextProductId = 1; 
    }
}

addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            throw new Error("Deben completarse los campos obligatorios.");
        }
            const codeExists = this.products.some(product => product.code === code);
            if (codeExists) {
            throw new Error("El codigo del producto se repite.");
            }
        
            const product = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            };
        
        this.products.push(product);
        this.nextProductId++;
    }    
      
    getProductById(productId) {
        const product = this.products.find(product => product.id === productId);
        if (product) {
          return product;
        } else {
          console.log("Not Found");
        }
    }  
        
    getProducts() {
            return this.products;
    }


      

      