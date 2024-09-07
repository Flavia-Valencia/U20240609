
function edadsuficiente(edad) {
    return new Promise((resolve, reject) => {
        if (edad >= 18) {
            resolve("Edad valida para acceder al contenido")
        } else {
            reject("Edad insuficiente para acceder al contenido")
            
        }
    })
}

edadsuficiente(18)
.then(res =>{
    console.log("Mensaje: " + res);
})
.catch(error =>{
    console.log("Error: " + error);  
})