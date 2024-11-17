let readline = require('readline')

let rl=readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una palabra para contar las vocales: ', (palabra) => {

    const vocales = 'aeiouAEIOU'

    let contador = 0;

    for (let caracter of palabra) {
        if (vocales.includes(caracter)) {
            contador++
        }
    }

    console.log(`La cantidad de vocales en la palabra es: ${contador}`)
    rl.close();
});