const fs = require('fs')

class ProductsManager {
    file = `${process.cwd()}/src/files/Products.json`;
    async loadProducts(){
        if(fs.existsSync(this.file))  {
            const data = await fs.promises.readFile(this.file, 'utf-8')
            const prodcuts = JSON.parse(data)
            return prodcuts
        }
        return "El archivo no existe"
    }
}

module.exports = ProductsManager