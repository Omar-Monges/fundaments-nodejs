//const buffer = Buffer.alloc(3)
// let buffer = Buffer.from([12, 1, 2])
let buffer = Buffer.from('Welcome')

console.log(buffer.toString())


let abc = Buffer.alloc(26)
console.log(abc)
for(let i = 0; i < 26; i++){
    abc[i] = i + 97 //letra x la tabla ascii
}
console.log(abc.toString())