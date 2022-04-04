const fs = require('fs');

class Contenedor {
  constructor(nombre){
    this.nombre = [nombre];
    this.count = 0
  }

  async save(obj) {
    try{
      let data = await fs.promises.readFile(`./${this.nombre}`, 'utf-8')
      let producto = JSON.parse(data)
      // let write = await fs.promises.writeFile(`./${this.nombre}`, JSON.stringify(obj), "utf-8")
      let agregar = producto.push({Hola : "Mudno",price : 123})
      await fs.promises.appendFile("./practica.json", JSON.stringify(producto), "utf-8")
      console.log(producto)
      // console.log(write)
    }catch{
      console.log("Error al crear el archivo")
    }

  } 

  async getAll(){
    try{
      let read = await fs.promises.readFile(`./${this.nombre}`, 'utf-8')
      console.log(JSON.parse(read))
    }catch (err){
      console.log('Error al leer 3')
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

archivo.save([                                                                                                                                          
    {                                                                                                                                        
      title: 'zapadits',                                                                                                                     
      price: 123.45,                                                                                                                        
      thumbnail: 'https://www.imagen.com/imagen1',                        
    },                                                                                                                                       
    {                                                                                                                                       
      title: 'Calculadora',                                                                                                                 
      price: 234.56,                                                                                                                       
      thumbnail: 'https://www.imagen.com/imagen2',                            
    },                                                                                                                                      
    {                                                                                                                                        
      title: 'Globo Terráqueo',                                                                                                              
      price: 345.67,                                                                                                                         
      thumbnail: 'https://www.imagen.com/imagen3',                       
    }                                                                                                                                        
  ]
)
// archivo.save()
// archivo.getById(2)
// archivo.getAll()
// archivo.deleteById(0)
// archivo.deleteAll() 