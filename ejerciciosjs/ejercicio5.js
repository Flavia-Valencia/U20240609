const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la cadena de texto: ', (cadena) => {
  rl.question('Ingrese el índice inicial de la subcadena: ', (iniciosubcadena) => {

    rl.question('Ingrese el final inicial de la subcadena: ', (finsubcadena) => {

      let subcadenaExtraida = cadena.substring(iniciosubcadena, finsubcadena);
      
      console.log(`La subcadena extraída es: ${subcadenaExtraida}`);
      process.exit()
    });
  });
});