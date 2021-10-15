const { exec, spawn } = require('child_process')
//Is equal
//const exec = require('child_process').exec

// console.log('Call other process.')
// exec('node conceptos/asyncAwait.js', (err, stdout, sterr) => {
//     if (err){
//         console.error(err)
//         return false
//     }
//     console.log(stdout)
// })
// console.log('Hello thread principal')
// console.log('Hello new line in thread principal')
let proceso = spawn('ls', ['-la'])
console.log(`Process id: ${proceso.pid}`)
console.log(`Process condected: ${proceso.connected}`)
proceso.stdout.on('data', (data) => {
    console.log(`Is dead?: ${proceso.killed}`)
    console.log(data.toString())
})
proceso.on('exit', () => {
    console.log('End process...')
    console.log(`Is dead?: ${proceso.killed}`)
})