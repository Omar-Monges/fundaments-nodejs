const fs = require('fs')
const stream = require('stream')
const util = require('util')
//Leyendo

let data = ''
let readbleStream = fs.createReadStream(__dirname + '/input.txt')
// readbleStream.setEncoding('utf-8')
// readbleStream.on('data', (chunk) => {
//     data += chunk
// })
// readbleStream.on('end', () => {
//     console.log(data)
// })


// Escribiendo

//Creamos una constante q se encargara de las transfomaciones
const Transform = stream.Transform
//En esta funcion sera el encaragado de ejecutar la transformacion
function Mayus() {ta = ''
let read
    //Iniciando el llamado de secuencas de datos con this indicamos q se hara 
    //dentro del metodo
    Transform.call(this)
}
//Crea una instancia de la clase Transform y estableciendolo como prototipo
//a la funcion Mayus
util.inherits(Mayus, Transform)
//Mis transformaciones
Mayus.prototype._transform = function(chunk, codi, cb){
    chunkMayus = chunk.toString().toUpperCase()
    this.push(chunkMayus)
    cb()
}
//Instanciando 
let mayus = new Mayus()


readbleStream
    .pipe(mayus)
    .pipe(process.stdout)