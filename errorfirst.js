
function asincrona(myCallback){
    setTimeout(() => {
        try{
            let a = 4 + rw
            myCallback(null, a)
        } catch (e) {
            myCallback(e)
        }
    }, 132)
}
asincrona((err, dato) => {
    if(err){
        console.error('Tenemos un error')
        console.error(err)
        return false
        //throw err; NO VA A FUNCIONAR EN UNA FUNCION ASINCRONA
    }
    console.log(`Todo ha salido bien, el dato es ${dato}`)
})