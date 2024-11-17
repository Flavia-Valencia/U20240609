let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una frase original: ', (fraseoriginal) => {

    rl.question('Ingrese la palabra a modificar: ', (palabra)=>{

        rl.question('Ingrese la nueva palabra: ', (nueva)=>{

            let nuevafrase = fraseoriginal.replace(palabra, nueva)
            
            console.log(`La frase después de la modificación es: ${nuevafrase}`);
            process.exit()
        })
    })
})