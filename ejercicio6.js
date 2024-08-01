let readline = require ('readline')

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
})

rl.question('Ingrese una frase: ', (frase) => {

    let palabras = frase.split(' ')

    let numeropalabras = palabras.length

    console.log(`El número total de palabras en el mensaje es: ${numeropalabras}`);
    process.exit()
})