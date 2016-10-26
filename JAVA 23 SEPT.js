/*VENTANA EMERGENTE PARA PREGUNTAR E INTRODUCIR DATOS*/

var respuesta = prompt("¿Cuantos chamacos tienes?", "0");

console.log("Tengo " + respuesta + " hijos");

var numero = Number(respuesta);


if ( isNaN (numero) ) 
{
	//No es un numero
	
alert("¡Esto no es un número!")
} 
else {
	//Si es un numero
}


/* ENCONTRAR TODOS LOS NUMEROS BISISESTOS ENTRE EL AÑO 1 Y EL AÑO N DADO*/
//DIVISIBLE entre cuatro pero no entre cien... divisible entre 400
//
/*var year = 800;

if ( ( (year % 4 === 0) && (year % 100 !== 0) ) 
	|| 
	(year % 400 === 0)
	) {
	//Si es bisiesto
	console.log("Si es bisisesto")
} else {
	console.log("No es bisiseto");
}*/



var n = prompt("Ingresa el año", "0");
n=Number(n);
console.log("Años bisiestos entre el año 1 y el año "+ n + ":" )
// i++ es igual a i=i+1;
for (var i=1; i<=n; i++) {
	if ( ( (i % 4 === 0) && (i % 100 !==0) )
	||
	(i % 400 === 0)
	) {
		//si es bisisesto 
		console.log(i + " Si es bisiesto");
	} else {
		console.log(i + " No es bisisesto")
	}
}



function esBisiesto(year) {
	if ( ( (i % 4 === 0) && (i % 100 !==0) )
	|| (i % 400 === 0) ) {
		console.log(i + " Si es bisiesto");
	} else {
		console.log(i + " No es bisisesto")
	}	
}

//ó también se puede escribir así, ya que, arriba le estamos diciendo, si es si, devuelve si, si es no, devuelve no
function esBisiseto(year) {
	return ( ( (year % 4 === 0) && (year % 100 !== 0) ) || 	(year % 400 === 0) ); 	
}







/*CON WHILE*/
/*la declaración de variables va fuera, a diferencia de for*/
var n = prompt("Ingresa el año", "0");
n=Number(n);
console.log("Años bisiestos entre el año 1 y el año "+ n + ":" )

 var i = 1;
 while (i<=n) {
 	if ( ( (i % 4 === 0) && (i % 100 !==0) )
	||
	(i % 400 === 0)
	) {
		//si es bisisesto 
		console.log(i + " Si es bisiesto");
	} else {
		console.log(i + " No es bisisesto")
	}	
	i++;
 }

 /*DO WHILE*/
var n = prompt("Ingresa el año", "0");
n=Number(n);
console.log("Años bisiestos entre el año 1 y el año "+ n + ":" )

 var i = 1;
 do {
 	if ( ( (i % 4 === 0) && (i % 100 !==0) ) || (i % 400 === 0)) {
		console.log(i + " Si es bisiesto");
	} else {
		console.log(i + " No es bisisesto");
	}
 
 i++;
 
 } while (i<=n);






 ////////////// 27 DE SEPTIEMBRE

Usar las variables del for dentro del mismo for, en un ámbito local, no afuera.

for (var i=1; i<=20; i++) {
	console.log("\nTabla del " + i); //Salto de renglon: \n
	var j = 1; //está declarado fuera del scope, porque se utilizará afuera--->
	for(j = 1; j<=20; j++) {
		var r = i*j;
		console.log(i + "x" + j + "=" + r)
	}
	console.log("Término de tabla del " + j); //aquí se está utilizando
}



Camel Case
Toda las variables deben ser sustantivos; 
nunca deben ser un verbo; 
siempre deben iniciar con minúscula, si quieres juntar dos palabras, la segunda será mayúscula;

deben declararse las variables cuando se van a usar, no hasta arriba; deben inicializarse, es decir, 
tener un valor inicial





var n = prompt("Escribe el número de elementos requeridos");
var a = 0;
var b = 0;
var cont = 2;
console.log(a);
console.log(b);
while (cont<=n) {
	a=a+b; 
	cont=cont+1;
	console.log(a);
	b=b+a;
	cont=cont+1;
	console.log(b);
}



//28 SEPT

function saludar () {
	console.log("Hola");
}

saludar(); //llamamos a la función, no tiene parámetros

//Display: Hola

function saludarAAlguien(persona) { //persona aqui solo es un parámetro
	console.log("Hola" + persona);
}

saludarAAlguien("Pedro Páramo"); //persona es ahora una variable, llamada en la función

//display: Hola Pedro Páramo

function saludarAAlguien (nombre,apellido); {
	console.log("Hola " + nombre + " " + "apellido");
}
var x = "Varinia"
var y = "Super"
saludarAAlguien(x, y);

//Display Hola Varinia Super
//Aquí lo que pasa es que, nombre y apellido son x,y--- y x,y son varinia, super

function crearNombre(nombre, apellido) {
	var nombreCompleto = 
		nombre + " " + apellido;

	return nombreCompleto;
}
crearNombre("vari","padilla") //toda esta oración es igual a nombreCompleto que es igual a nombre + " " + apellido

//cuando llamas la función, lo que te regresa será lo que está delante de *return*, toda la llamada de la función se intercambiará
//return lo devuelve al mismo programa, no al display, para lo que usamos la funcion console.log


function promediar(numero1, numero2, numero3) {
	var suma = numero1 + numero2 + numero3;
	var promedio = suma / 3;
	return promedio;
}
promediar(3,6,9);

//es necesario poner RETURN, ya que será la respuesta del intérprete, si no se escribe, regresará undefined (será return undefinined). 
//Cuando se pone return se acaba la funcion, es decir regressa

function decirMenor(numero1,numero2) {
	if(numero1 == numero2) {
		return "iguales";
	} //else
	if (numero1 < numero2) {
		return numero1;
	} //else
		return numero2;
}
console.log("el menor es " + decirMenor (1,5));
console.log(decirMenor (5,8));
console.log(decirMenor (11,11));



//29 SEPTIEMBREEE

//Definir la cantidad de ventas
//Saber si es mayor a $1000
//Saber si es mayor a 500 o Igual a $1000
//Saber si fue menor o igual 500
//Saber el monto global y por categoria

function imprimirVenta(tipoDeVenta,totalDeVentas,montoDeVentas) //Esta funcion imprime las ventas en el formato ya establecido
{
	console.log("Total de ventas "+tipoDeVenta+" : "+totalDeVentas+" ; Un total de $"+montoDeVentas);
}

function get_cantidad_de_ventas()	//Obtiene las ventas totales sacadas de un prompt
{
	total_ventas = prompt("Cuantas ventas se realizaron?");
	total_ventas = Number(total_ventas);
	return total_ventas;
}

function venta_es_mayor_a_mil(venta) //Nos dice si la venta es mayor a mil
{
	if (venta > 1000)
		return true;
	else
		return false;
}
function venta_mayor_quinientos_o_igual_a_mil(venta) //Regresa un Booleano, si es mayor a 500 y menor igual a 1000
{
	return venta > 500 && venta <= 1000
}

// Aqui empieza el codigo, arriba son solo funciones

var cantidad_de_ventas = get_cantidad_de_ventas(); //variable cantidad de ventas
//Variables para ventas >1000
var venta_mayor = 0;
var montos_venta_mayor = 0;
//Variables 1000=>ventas>500
var venta_media = 0;
var montos_venta_media = 0;
//ventas <500
var venta_chica = 0;
var montos_venta_chica = 0;

for(var i = 0; i < cantidad_de_ventas; ++i)
{
	var venta_actual = prompt("Ingresa la venta " + (i+1) );
	venta_actual = Number(venta_actual);
	
	if ( venta_es_mayor_a_mil(venta_actual) )
	{
		venta_mayor++;
		montos_venta_mayor=montos_venta_mayor+venta_actual;
	}
	else if( venta_mayor_quinientos_o_igual_a_mil(venta_actual) )
	{
		venta_media++;
		montos_venta_media=montos_venta_media+venta_actual;
	}
	else 
	{
		venta_chica++;
		montos_venta_chica= montos_venta_chica+venta_actual;
	}
}

imprimirVenta("Mayores a 1000",venta_mayor,montos_venta_mayor);
imprimirVenta("Mayor a 500 o igual a 1000",venta_media,montos_venta_media);
imprimirVenta("Menores a 500",venta_chica,montos_venta_chica);





//CALLBACKS--
//statement recibe una función como parámetro
function statement(func)
{
	console.log("Corriendo statement"):
	if(typeof func == "function")
	{
		func()
	} else {
		console.log("el argumento que pasaste no es una funcion");
	}
	console.log("termine de correr func")
}
var sc = function nueva() {
	console.log("estoy corriendo sc")
}
statement(sc)


//CLOSURE: funcion que tiene mas funciones, funciones anidadas
function padre() {
	var name = "Mozilla"
}

//pop
var array = ["hola", "mundo" , "?"]

//forEach
/*Lo que hace el forEach es un for(var=0; i<friends.lenght; i++)*/