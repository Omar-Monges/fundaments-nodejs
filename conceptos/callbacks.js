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
console.log("Init process...")
hello("Omar", function (nombre) {
    bye(nombre, function () {
        console.log("End process...")
    })
})