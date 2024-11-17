let readline = require('readline')

let rl=readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese un mensaje de texto: ', (mensaje)=>{

    const numeroCaracteres=mensaje.length
    
    console.log(`El número de caracteres que tiene su mensaje de texto es de: ${numeroCaracteres}`)
    process.exit()
})