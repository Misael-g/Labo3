// variables  

// Tipo de datos primitivos 

let numOrden= 127//int
let modulo="Mis ordenes"//Sting
let status= true//boolean
let tipoPago= 'E'//char
let precioFinal= 155.99 //float
const ci=1171765322//int inmutable

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

// sumary
// internet - Puente que conecta dos dispositivos para intercambiar informacion
// web- puente que conecta dos dispositivos para intercambiar pagians web 
// Api -  puente que conecta dos dispositivos para intercambiar recursos 

// js - leguaje de programacion que permite crear páginas web dinámicas e interactivas 
//v8 compilador de js 
// node herramienta + v8  que permite ejecutar js en el servidor 
//ECMASCRIPT reglas para escribir en js 
//JSON o XML es un estandar abierto  para el cambio de informacion 





//Iteradores 
//objetos :variable de tipo compuesto que permite almacenar varios datos a partir de pares de clave valor

let user ={
    name : "Misael",
    lastname:"Garcia",
    age:30,
    email:"misael@gmail.com",
    address:{
        city:"Quito",
        telephone:"0967775223"
    },
    password:"123456",
}
delete user.password
user.image="avatar.png"
console.log(user)


// ES6 destructuracion 
let{name,lastname,age,email:correo,address}= user
console.log(name)
console.log(lastname)
console.log(correo)
console.log(address.city)


const friends={
    status:true,
    friendlist:["Juan","María"],
    sendMail(){ return `Send mail to ${friends.friendlist[0]}`}
}
const allinformacion={...user,...friends} // para unir la informacion de diferentes objetos 
console.log(allinformacion)
console.log(friends.sendMail)


console.log(Object.values(user).includes(""))


// Funciones conjunto de pasos para realizar una tarea especifica 

//Funcion declarada
function validateUser(){
    console.log("usuario validado")
}
//Funcion expresada 
const validateRol= function () {
    console.log("Rol validado")
}


//ES6 Funcion de flecha 
const validateMail=()=>{
    console.log("Mail Validado")
}


//Rest operator vs Spread operator 
//parametros por defecto (a=56)
const finalPrice= function({a=56,b},...Rest){
    console.log(a,b,...Rest)
}
finalPrice({b:99},1,2,3,4)



//Return 
function typeofReturn(){
    //return 123
    //return true
    //return "Misael"
    //return ["Juan","Anita"]
    //return{city:"Quito", country:"Ecuador"}
    return function(){
       console.log("Hola")
    }
}

console.log(typeofReturn())
let retsul =typeofReturn()
retsul()

