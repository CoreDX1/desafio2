const fs = require('fs');

class Contenedor {
  constructor(nombre){
    this.nombre = nombre;
    this.count = 0
  }

  async save(obj) {
    try{
      let data = await fs.promises.readFile(`./${this.nombre}`, 'utf-8')
      let producto = JSON.parse(data)
      producto.push(obj)
      producto.forEach((o,i) => o['id'] = i + 0); 
      await fs.promises.appendFile(`./${this.nombre}`, JSON.stringify(producto,null, 2), 'utf-8')
      console.log(producto)
      
      // let items = this.getAll()
      // if (items !== "undefined") {
      //   await fs.promises.writeFile(`./${this.nombre}`, JSON.stringify([]), 'utf-8')
      //   console.log('Se crear el archivo')
      // }else{
      //   let data = await fs.promises.readFile(`./${this.nombre}`, 'utf-8')
      //   let producto = JSON.parse(data)
      //   // producto.push({title: 'Hola'})
      //   // await fs.promises.appendFile(`./${this.nombre}`, JSON.stringify(producto), "utf-8")
      //   console.log(producto)
      // }
    }catch{
      console.log("Error al crear el archivo")
    }

  } 

  async getAll(){
    try{
      let read = await fs.promises.readFile(`./${this.nombre}`, 'utf-8')
      console.log(JSON.parse(read))
    }catch (err){
      console.log('Error al leer')
    }
  }

  async deleteAll(){
    try{
      await fs.promises.unlink(`./${this.nombre}`)
      console.log('Se borro el contendio')
    }catch(err){
      console.log('No se puedo borrar el contendio')
    }
  }

  async getById(id){
    try{
      let data = await fs.promises.readFile(`./${this.nombre}`, 'utf-8')
      let producto = JSON.parse(data).find(x => {return x.id == id})
      console.log(producto)
    }catch{
      console.log('Error al buscar el id')
    }
  }

  async deleteById(id){
      try{
        let data = await fs.promises.readFile(`./${this.nombre}`, 'utf-8')
        let producto = JSON.parse(data)
        producto = producto.filter(i => i.id != id);
        producto.forEach((o,i) => o['id'] = i + 0); 
        console.log(producto)
        fs.writeFileSync(`./${this.nombre}`, JSON.stringify(producto),(err) => {
        if (err) throw err;
         });
        console.log("Archivo guardado correctamente.");
      }catch{
        console.log("Error al buscar el id")
      }
  }
}


let archivo = new Contenedor('practica.json')

archivo.save(                                                                                                                           
    {                                                                                                                                  
      title: 'Silla',                                                                                                               
      price: 400,                                                                                                                  
      thumbnail: 'https://www.imagen.com/imagen4',                  
    },                                                                                                                                 
    // {                                                                                                                               
    //   title: 'Calculadora',                                                                                                         
    //   price: 234.56,                                                                                                               
    //   thumbnail: 'https://www.imagen.com/imagen2',                    
    // },                                                                                                                              
    // {                                                                                                                                
    //   title: 'Globo Terráqueo',                                                                                                      
    //   price: 345.67,                                                                                                                 
    //   thumbnail: 'https://www.imagen.com/imagen3',               
    // }                                                      
)
// archivo.save()
// archivo.getById(2)
// archivo.getAll()
// archivo.deleteById(0)
// archivo.deleteAll() 

