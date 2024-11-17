let readline = require ('readline')

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
})

rl.question('Ingrese la cadena que desea invertir: ', (cadena) => {

    let cadenainvertida = cadena.split('').reverse().join('')

    console.log(`La cadena invertida es: ${cadenainvertida}`);
    
    process.exit()
}) 