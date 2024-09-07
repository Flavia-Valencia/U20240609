function correoelectronico(correo) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        if (correo) {
            resolve(`El correo, ${correo} enviado a [direccion]`)
           } else {
            reject("Direccion de correo no proporcionado")
           } 
       }, 2000);
    })
}
correoelectronico("yasuriyamileth23@gmail.com")
.then( res =>{
    console.log("Mensaje: " + res);
    
})
.catch(error =>{
    console.log("Error: " + error);
    
})