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
        resolve()
    })
}
function talk() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Bla bla bla...")
            resolve()
        }, 304)
    })
}
// function conversaciones(name, cant, callback) {
//     if(cant > 0) {
//         talk(function () {
//             conversaciones(name, --cant, callback)
//         }, 1000)
//     } else {
//         bye(name, callback)
//     }
// }
//-----------------------

async function main() {
    let name = await hello("Maria")
    await talk()
    await talk()
    await talk()
    await talk()
    await bye(name)
    console.log("End process...")
}

//--------------------------

console.log("Init process...")
main()