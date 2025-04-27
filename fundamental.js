// variables  

// Tipo de datos primitivos 

let numOrden= 127//int
let modulo="Mis ordenes"//Sting
let status= true//boolean
let tipoPago= 'E'//char
let precioFinal= 155.99 //float
const ci=172895628555//int inmutable

//Tipos de datos Compuestos
let ordenes =["Balon ", "Camiseta ","Zapatos"] //array
let detalleOrden={
    id:1,
    estado:"Activo",
    items: ["Balon ", "Camiseta ","Zapatos"],
    percio:155.99
}


let detalleOrdenJson={
    "id":1,
    "estado":"Activo",
    "items": ["Balon ", "Camiseta ","Zapatos"],
    "percio":155.99
}
// Stings
    let nombreCompleto="    Misael Garcia                 "
nombreCompleto.length // longitud
nombreCompleto.toUpperCase() //Mayusculas
nombreCompleto.toLowerCase() // Minusculas
nombreCompleto.trim() // Eliminar espacios en blanco
nombreCompleto.charAt(0) // Obtener el primer valor
nombreCompleto.includes("Misael") // Verificar si existe un texto 


console.log(nombreCompleto.length)
console.log(nombreCompleto.trim());
console.log(nombreCompleto.includes("BY") )

// ES6 - Template String
console.log(`Bienvenido - ${nombreCompleto}`)


// numbers 
let cuotas="6"
console.log(cuotas+3)


//ES6 caracteristica para cambiar numeros
console.log(+cuotas+3);// conversion de numero a entero 
console.log(typeof(cuotas)) // sabe que tipo de valor es un dato


//orden de presedencia de los operadores en este caso se ejecuta primero la potencia luego la multiplicacion 
console.log(4*3**2)

// booleans
let saldoUsuario=10000
let SaldoTarjeta="10000"

//comparacion de valor
console.log(saldoUsuario==SaldoTarjeta)

// ES6 Comparacion estricta
console.log(saldoUsuario === SaldoTarjeta) 


// condicionales
const carritoCompras =[]
if (carritoCompras.length === 0){
    console.log("El carrito de compras está vacío")
}
else {
    console.log("El carrito de compras tiene productos")
}

//ES6 operador ternario 
const mensaje =carritoCompras.length ===0? "el carrrito vacio"  : "El carrito con productos"

