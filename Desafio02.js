const fs = require('fs');

class Contenedor {
  constructor(nombre){
    this.nombre = [nombre];
    this.count = 0
  }

  async save(obj) {
    if (archivo <= 1) {
      try{
        await fs.promises.writeFile(`./${this.nombre}`, JSON.stringify(obj), 'utf-8')
        console.log('Se creo archivo')
      }catch(err){
        console.log('Error al crear el archivo')
      }
    }else{
      try {
        await fs.promises.appendFile(`./${this.nombre}`, JSON.stringify(obj),'utf-8')
        console.log('Se agrego Contendio')
      }catch(err){
        console.log('Error al crear el archivo')
      }
    }
  }
  
  async readFile(){
    try{
      let read = await fs.promises.readFile(`./${this.nombre}`, 'utf-8')
      console.log(read)
    }catch (err){
      console.log('Error al leer 3')
    }
  }

  async daleteAll(){
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

  async deleteById(){
    fs.readFile('./text.json', 'utf8', (err, data) => {
      if (err) {
        return console.log(err);
      }
      const result = data.replace(/string to be replaced/g, 'replacement');

      fs.writeFile('./text.json', result, 'utf8', (err) => {
        if (err) {
          return console.log(err);
        }
      });
    });
  }
}

let archivo = new Contenedor('text.json')

archivo.save([                                                                                                                                                
    {                                                                                                                                               
      title: 'Escuadra',                                                                                                                            
      price: 123.45,                                                                                                                                
      thumbnail: 'https://www.imagen.com/imagen1',                                
      id: 1                                                                                                                                         
    },                                                                                                                                              
    {                                                                                                                                               
      title: 'Calculadora',                                                                                                                         
      price: 234.56,                                                                                                                                
      thumbnail: 'https://www.imagen.com/imagen2',                                     
      id: 2                                                                                                                                         
    },                                                                                                                                              
    {                                                                                                                                               
      title: 'Globo Terráqueo',                                                                                                                     
      price: 345.67,                                                                                                                                
      thumbnail: 'https://www.imagen.com/imagen3',                              
      id: 3                                                                                                                                         
    }                                                                                                                                               
  ]
)

// archivo.getById(2)

archivo.deleteById()
