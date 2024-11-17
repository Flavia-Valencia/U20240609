let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese un mensaje de texto: ', (mensaje)=>{

    const mayusculas = mensaje.toUpperCase()
    
        console.log(`El mensaje de texto en mayusculas es: ${mayusculas}` );
        process.exit()
    })