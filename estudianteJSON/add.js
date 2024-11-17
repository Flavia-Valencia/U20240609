const fs = require('fs');
const fileName = 'estudiantes.json';

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo JSON:', err);
        return;
    }

    // Convertir una cadena JSON en un objeto de JavaScript
    const estudiantes = JSON.parse(data);

    // Crear un nuevo objeto estudiante
    const nuevoEstudiante = { nombre: 'Carlos', edad: 18, carrera: 'Ingeniería Industrial' };

    // Agregar el nuevo estudiante al arreglo
    estudiantes.push(nuevoEstudiante);

    fs.writeFile(fileName, JSON.stringify(estudiantes, null, 2), (err) => {
        if (err) {
            console.error('Error al escribir en el archivo JSON:', err);
        } else {
            console.log('Nuevo estudiante agregado al archivo JSON.');
        }
    });
});