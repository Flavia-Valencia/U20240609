let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Menu() {
    console.log('\n---- Menú ----');
    console.log('1. Crear archivo JSON con estudiantes');
    console.log('2. Leer archivo JSON de estudiantes');
    console.log('3. Agregar nuevo estudiante');
    console.log('4. Actualizar información de estudiantes');
    console.log('5. Eliminar un estudiante');
    console.log('6. Contar estudiantes');
    console.log('7. Salir');
}

function menuOption() {
    rl.question('Selecciona una opción: ', (answer) => {
        switch (parseInt(answer)) {
            case 1:
                require('./create')
                break;
            case 2:
                delete require.cache[require.resolve('./read')];
                require('./read')
                break;
            case 3:
                require('./add')
                break;
            case 4:
                require('./update')
                break;
            case 5:
                require('./delete')
                break;
            case 6:
                require('./count')
                break;
            case 7:
                console.log('Saliendo del programa...')
                rl.close()
                return;
            default:
                console.log('Opción no válida. Intente nuevamente.')
                break;
        }

        setTimeout(promptMenu, 100);
    });
}

function promptMenu() {
    Menu();
    menuOption();
}

promptMenu();
