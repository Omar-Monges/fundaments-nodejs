

//Porcess es un modulo global

process.on('beforeExit', () => {
    console.log('El proceso va a terminar')
})

process.on('exit', () => {
    //Una vez entrado aqui el event loop se desconecta
    console.log('Ale, el proceso acabo')
})

// Exvepcion no capturada

process.on('uncaughtException', (err, origen) => {
    console.error(err)
    console.error('Vaya me olvide capturar un error')
    console.log(origen)
})

//Promesas q se han rechasado

// process.on('uncaughtRejection')

// funcionQueNoExist()
console.log('Esto aparece si no hubo error')