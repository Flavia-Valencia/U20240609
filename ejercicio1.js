let readline = require('readline')

let rl=readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Holi, Ingrese su nombre: ', (nombre)=> {
    rl.question('Ingrese su apellido: ', (apellido)=>{
        console.log(`Bienvenid@, un gusto saludarte ${nombre } ${apellido} :) `)
        process.exit()
    })
})