const os = require('os')

//Arquitectura
// console.log(os.arch())

//Plataforma
// console.log(os.platform())

//cpus and cant cpus
// console.log(os.cpus())
// console.log(os.cpus().length)

//Errores y segnals of system
// console.log(os.constants)

const SIZE = 1024

const kb = bytes =>  bytes / SIZE
const mb = bytes =>  kb(bytes) / SIZE
const gb = bytes =>  mb(bytes) / SIZE

// //Total Ram Memory in byte
// console.log(os.totalmem())

// //Total Ram Memory in KB
// console.log(kb(os.totalmem()))

// //Total Ram Memory in MB
// console.log(mb(os.totalmem()))

// //Total Ram Memory in GB
// console.log(gb(os.totalmem()))

// //Free memory in byte
// console.log(os.freemem())

// //Free memory in KB
// console.log(kb(os.freemem()))

// //Free memory in MB
// console.log(mb(os.freemem()))

// //Free memory in GB
// console.log(gb(os.freemem()))

//Directory for the user root
console.log(os.homedir())

//Directory for temporal file
console.log(os.tmpdir())

//Hostname of a server
console.log(os.hostname())

//Network interfaces
console.log(os.networkInterfaces())