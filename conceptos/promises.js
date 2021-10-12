function hello(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`Hola, ${nombre}`)
            resolve(nombre)
        }, 1500)
    })
}
function bye(nombre) {
    return new Promise((resolve, reject) => {
        console.log(`bye, ${nombre}`)
        reject("Send error!!!")
    })
}
function talk(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Bla bla bla...")
            resolve(name)
        }, 304)
    })
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
hello("Omar")
    .then(talk)
    .then(talk)
    .then(talk)
    .then(talk)
    .then(name => {
        bye(name)
    })
    .then(() => {
        console.log("End process...")
    })
    .catch((err) => {
        console.error(err)
    })