let readline = require ('readline')

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
}) 

rl.question('Ingrese la palabra que desea verificar: ', (palabra) => {

    const Invertida = palabra.split('').reverse().join('');

    if (Invertida===palabra) {
        console.log(`La palabra: "${palabra}" si es palíndromo`);
    
    }else{
        console.log(`La palabra: "${palabra}" No es palíndromo`);
    }
    process.exit()
})