const fs = require('fs')

class Contenedor{
  constructor(nombre){
    this.nombre = nombre
  }

  async save(obj){
    obj.forEach((o,i) => o['id'] =i);
    try{ 
      await fs.promises.writeFile(`./${this.nombre}`, JSON.stringify(obj))
      console.log('Se Creo el archivo')
    }catch{
      console.log('Error al crear el archivo')
    }
  }
  
  async getAll(){
    try{
      let read = await fs.promises.readFile(`./${this.nombre}`, 'utf-8')   
      console.log(JSON.parse(read))
    }catch{
      console.log('erro al leer') 
    }
  }
}

let archivo = new Contenedor('text.json')

archivo.save([                                                                                                                                                    
  {                                                                                                                                                   
    title: 'Escuadra',                                                                                                                                
    price: 123.45,                                                                                                                                    
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                    
  },                                                                                                                                                  
  {                                                                                                                                                   
    title: 'Calculadora',                                                                                                                             
    price: 234.56,                                                                                                                                    
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                         
  },                                                                                                                                                  
  {                                                                                                                                                   
    title: 'Globo Terráqueo',                                                                                                                         
    price: 345.67,                                                                                                                                    
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                  
  },
  {                                                                                                                                                   
    title: '',                                                                                                                         
    price: 67,                                                                                                                                    
    thumbnail: 'saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',                                  
  },
]) 

archivo.getAll()

// let id = objeto.forEach((o,i)=>o['id']=i);
// console.log(objeto);
