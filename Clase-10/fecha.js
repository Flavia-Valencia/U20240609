let Fecha = new Date(2012, 1, 20, 3, 12);
let orden = {year :'numeric', month:'short', day:'numeric', hour: 'numeric', minute: 'numeric'}
console.log(Fecha.toLocaleString('en-us', orden));
