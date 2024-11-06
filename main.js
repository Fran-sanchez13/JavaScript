// //VARIABLES

// //DECLARACION
// var numeroA
// //ASIGNACION / INICIALIZACION
// numeroA = 15

// //tambien se puede en una sola linea
// var numeroB = 20 //esto seria un codigo DEBILMENTE TIPADO
// var resultado = numeroA + numeroB /* valor para concatenar
// el resultado */

// //VAMOS A DECLARAR CONSOLE LOG PARA MOSTRAR ALGO
// console.log(numeroA)
// console.log(numeroB)
// console.log(resultado)

// //podemos consolidar variables tipo TEXT
// var textoA = 'Harry'
// var textoB = 'Potter'
// console.log(textoA + textoB)
// //podemos darle un espacio solo adelante del 'Harry '
// /* Tambien podemos darle un espacio con un string
// dentro de los parentesis ==> (textA + " " + textB) */

// //podemos concatenar texto con numeros

// console.log(numeroA + textoB)

// //transformacion de STRING a NUMBER

// var edad = '18' // STRING
// console.log(+edad)// pasarlo a NUMBER

// //como saber que tipo de dato es una variable, con el typeof

// console.log(typeof resultado) //number
// console.log(typeof edad) //string

// //VAR
// console.log(tipoVAR)
// var tipoVAR = 'Soy un Var'// no encuentra el VAR porque no esta inicializada, te las declara al principio (copy paste) pero no te las inicializa

// //LET
// // console.log(tipoLET) //no conoce el tipo LET
// // let tipoLET = 'soy un Let'

// //CONST
// const constante = 25
// console.log(constante)
// // constante = 30 // no se puede reasignar y tampoco reagrupar

// //OPERADORES
// var numeroUNO = 10
// var numeroDOS = 5
//  //suma
//  console.log(numeroUNO + numeroDOS) //15
//  //resta
//  console.log(numeroUNO - numeroDOS)//5
//  //multiplicacion
//  console.log(numeroUNO * numeroDOS)//50
//  //division
//  console.log(numeroUNO / numeroDOS)//2
//  //incrementacion
//  numeroUNO++
//  console.log(numeroUNO)//11
//  //decrementacion
//  numeroDOS--
//  console.log(numeroDOS)//4
//  //modulo
 
//  //PROMPT

//  var nombreUsuario = prompt('ingresa tu nombre:')
//  console.log(`Hola ${nombreUsuario}`)

//  alert (`che estas seguro?`)

//esto de aca arriba ⬆ ⬆ ⬆  es para practicar lo de las clases jajaja


                
              //PRIMERA ENTREGA DE JS



//EJERCICIO NUMERO 1

 function ParImpar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " es un número par.");
    } else {
        console.log(numero + " es un número impar.");
    }
}

ParImpar(4);  
ParImpar(7);  

//EJERCICIO NUMERO 2


function compararNum(num1, num2){
    if (num1 > num2){
        console.log(num1 + " mayor que " + num2);
    }
    else if(num1 < num2){
        console.log(num1 + " menor que " + num2)
    }
    else{
        console.log(" ambos son iguales ")
    }
        
}

compararNum(7,2);
compararNum(3,4);
compararNum(5,5);

//EJERCICIO NUMERO 3


function multiplo(numero){
    if(numero % 5 === 0){
        console.log(numero + " si es multiplo de 5")
    }
    else{
        console.log(numero + " no es multiplo de 5")
    }
}

multiplo(80);
multiplo(1);

//EJERCICIO NUMERO 4


function contar(numero){
    for (i = 0;
         i <= numero;
         i++ ){
        console.log(i)
    }
    
}

contar(2);

//EJERCICIO NUMERO 5

function palabraRepeat (palabra, numero){
    for (let i = 0;
        i < numero;
        i++){
            console.log(palabra);
            }
}

palabraRepeat("hola mundo", 5);


//EJERCICIO NUMERO 6

function mostrarArray (array){
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

const miArray = [1, 2, 3];
mostrarArray(miArray); 


//EJERCICIO NUMERO 7:

function sinElQuinto(array){
    if (array.length !== 10){
        console.log("tiene 10 numeros");
        return;
    }
    for (let i = 0; i < array.length; i++){
        if (i !== 4){
            console.log(array[i]);
        }
    }
    
}
const myArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
 sinElQuinto(myArray);


 //EJERCICIO NUMERO 8:


function multiplicadorArray(array, multiplicador){
    for (let i = 0; i < array.length; i++){
        console.log(array[i] * multiplicador);
        
    }
}

const myArray2 = [1, 2, 3, 4, 5]
const multiplicador = 3;
multiplicadorArray(myArray2, multiplicador);
                      //PARA PRACTICAR YO MISMO  ⬇
        //ARRAY

var mysArray = ['Nucba', 20, 'Mundo', 'francisco']
//console.log(mysArray[2]);
//console.log(mysArray[3]);

let transportes = ['auto', 'moto', 'camion', 'barco']
    console.log(transportes)// auto, moto, camion, barco
    console.log(transportes[3]);// barco
    console.log(transportes.length);// 4, todos los elementos q tiene dentro


        
                 //METODOS DE ARRAY

// INDEX OF


let animales = ["gato", "perro", "tortuga", "serpiente"]
    console.log(animales);
    
   // console.log(animales.indexOf("perro"));
    //console.log(animales.indexOf("tortuga"));

        /*====TO STRING===== */
 
    //console.log(animales.toString());

//let masanimales = ["caballo", "iguana", "chancho"]

         /*====CONCAT===== */

    //console.log(animales.concat(masanimales));
    
         /*====PUSH===== */

   animales.push("Rinoceronte");
    console.log(animales);
    
         /*====POP===== */

   /* let animalEliminado = animales.pop();
    console.log(animales);
    console.log(animalEliminado);*/
    

         /*====UNSHIFT===== */

    /*let caballo = "caballo"
    animales.unshift(caballo);
    console.log(animales);*/


         /*====SHIFT===== */

   /* let animalEliminado = animales.shift();
    console.log(animales);
    console.log(animalEliminado);*/

         /*====JOIN===== */

    //console.log(animales.join(", "));

         /*====REVERSE===== */

    // console.log(animales.reverse());

         /*====SLICE===== */

    /*console.log(animales.slice(1,3));
    console.log(animales.slice(2));
    console.log(animales.slice(-2));
    console.log(animales.slice(-3, -1));*/
  
         /*====METODOS AVANZADOS===== */

        // FUNCIONES CALLBACK

    function saludar(nombre){
        //alert('hola ' + nombre)
    }

    function ProcesarEntradaUsuario(callback){
        //var nombre = prompt('por favor ingresa tu nombre')

        callback(nombre)
    }

    //ProcesarEntradaUsuario(saludar)

      /*====METODO FOREACH===== */

    const numero = [1, 2, 3];
    // numero.forEach((numero) => {
        //console.log(`hola, soy el numero ${numero}`);});


    // const numeros = [4,5,6,7,8,9,10];
    // numeros.forEach((valor, indice) => {
        //console.log(`soy el numero ${valor} en el indice ${indice}`);})

    const user = ['Francisco', 'Camila', 'Joaquin', 'Clara'];

    // user.forEach( (user, indice) => {
        //console.log(`El usuario ${indice}: ${user}`);} );

    /*====METODO MAP===== */

    // const duplicados = numeros.map((numeros) => {
        // return numeros * 2;
    // })

    //console.log(numeros);
    //console.log(duplicados);


    // const suma = numero.map((numero) => {
        // return numero + 20
    // })
    //console.log(suma);

        /*====METODO FILTER===== */

    const numeros = [4,5,6,7,8,9,10];
    
    const numerosPares = numeros.filter((numero) => {
        return numero % 2 === 0;
    });
   // console.log(numeros);
    //console.log(numerosPares);

        /*====METODO FIND===== */

    // aca ya habia sido definida la variable CONST y se uso solo log para hacer el motodoFIND
    
    //console.log(numeros.find((numero) => numero % 2 ===0));
    
        /*====METODO EVERY===== */

    //console.log(numeros.every((numero) => numero < 10));
    

        /*====METODO SOME===== */

        // console.log(numeros.some((numero) => numero < 10));
        

        /*====METODO SORT===== */
    
        const numerosDesordernados = [10,2,5,8,7,4,9,6,1,3]
       // console.log(numerosDesordernados);
        
         //console.log( numerosDesordernados.sort( (a, b) => {return a - b}));
        
        //console.log(numerosDesordernados.sort((a, b) => { return b - a} ));
                
        /*====METODO REDUCE===== */
            
        /*const suma = numerosDesordernados.reduce( (acumulador, numero) => {
            return acumulador + numero
        }, 200)*/

        //console.log(suma);
        
        /*const palabras = ['hola', 'mundo', '!']
        const frase = palabras.reduce( (acc, val) => {
            return acc + ' ' + val 
        })*/ 

        //console.log(frase);//reducimos las variables a un solo string
        