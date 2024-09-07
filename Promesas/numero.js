let numero = 5

const promesa = new Promise((resolve, reject) => {
    if (numero==5) {
        resolve("Numero si es 5")
    } else {
        reject("El numero no es 5 ")
        
    }
})

promesa.then( res =>{
    console.log("Mensaje: " + res);
    
})
.catch(error =>{
    console.log("Error: " + error);
    
})