const fs = require('fs');

class Contenedor {
  constructor(nombre){
    this.nombre = nombre;
  }

  async save(obj) {
    let idDinamic 
    try{
      let data = await fs.promises.readFile(`./${this.nombre}`, 'utf-8')
      let producto = JSON.parse(data)
      if (data !== "") {
        producto = JSON.parse(data)
        let count = producto.length
        obj.id = producto[count - 1].id + 1
        producto.push(obj)
      }else{
        obj.id = 1
        producto = [obj]
      }


      try{
        await fs.promises.writeFile(`./${this.nombre}`, JSON.stringify(producto,null, 2), 'utf-8')
        idDinamic = obj.id
        console.log(producto)
        console.log('Se agrego con exito el ID:' + idDinamic)
      }catch (err){
        throw err
      }
      
    }catch (err){
      obj.id = 1
      try{
        await fs.promises.writeFile(`./${this.nombre}`, JSON.stringify([obj], null, 2), 'utf-8')
        console.log('Se agrego con exito el ID:' + obj.id)
      }catch{
        throw err
      }
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
      title: 'Silla 3',                                                                                                               
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

