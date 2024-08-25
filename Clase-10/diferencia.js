let f1 = new Date(2022, 5, 6)
let f2 = new Date(2022, 5, 23)

const milisegundos = f2-f1
const milisegundosporDia = 24 * 60 * 60 * 1000
const diasDeDiferencia = milisegundos / milisegundosporDia
console.log(`Los dias de diferencia en las fechas proporcionadas son: ${diasDeDiferencia}`)
