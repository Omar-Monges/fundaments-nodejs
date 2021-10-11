function hello(nombre, miCallback) {
    setTimeout(function () {
        console.log(`Hola, ${nombre}`)
        miCallback(nombre)
    }, 1500)
}
function bye(nombre, otherCallback) {
    console.log(`bye, ${nombre}`)
    otherCallback()
}
function talk(callback) {
    setTimeout(function () {
        console.log("Bla bla bla...")
        callback()
    }, 304)
}
function conversaciones(name, cant, callback) {
    if(cant > 0) {
        talk(function () {
            conversaciones(name, --cant, callback)
        }, 1000)
    } else {
        bye(name, callback)
    }
}
//-----------------------

console.log("Init process...")
hello("Omar", function (nombre) {
    conversaciones(nombre, 7, function () {
        console.log("End process...")
    })
})