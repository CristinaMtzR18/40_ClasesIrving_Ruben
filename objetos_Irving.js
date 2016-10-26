//Los objetos pueden tener otros objetos en su descripcion
var auto = {
	'color de la tela' : 'azul',
	color : 'rojo',
	llantas : {
		delanteras : {
			cantidad : 2,
			tamano : 'mediano'
		},
		traseras : {
			cantida : 2,
			tamano : 'grande'
		}
	},
	puertas: 2
};

console.log(auto);

//ENCODE, para usar simbolos especiales
//ASCII
//UTF-8
//UNICODE

//Métodps
var auto = {
	//propiedades
	'color de la tela' : 'azul',
	color : 'rojo',
	llantas : {
		delanteras : {
			cantidad : 2,
			tamano : 'mediano'
		},
		traseras : {
			cantida : 2,
			tamano : 'grande'
		}
	},
	puertas: 2
	//Métodos
	avanzar : function (){
		console.log("avanzar");
	},
	frenar : function (){
		console.log("frenar");
	}
};

console.log(auto);

//Obtener propiedades
console.log(auto.color);
console.log(auto['color de tela']);
console.log(auto['1']);

//Crear propiedad, llamandolo por punto una nueva se agrega al objeto
auto.colo = 'cafe';

//Objetos en paginas web
var button ={};
button.color = 'verde';

//Ejercicios de OBJETOS
var irving ={}
irving.nombre ='Irving';
irving.edad = 25;

var francisco = {
	nombre: Francisco,
	edad : 50;
};

function compararEdad(persona1,persona2){
	if(persona1.edad > persona2.edad){
		return persona2.nombre;
	}else{
		return persona1.nombre;
	}
};

//Expresion if de forma distinta que siempre retorna un valor. Condicion terniario
// condicion ? si se cumple: si no;
// return persona1.edad > persona2.edad ? persona2.nombre : persona1.nombre;


//Escribir una funcion que clasifique los numero en mayor y menor
//{mayor:5, menor:2}
function clasifica(numero1,numero2){
	var resultado ={};
	if(numero1>numero2){
		resultado.mayor = numero1;
		resultado.menor = numero2
		return resultado;
	}else{
		resultado.mayor = numero2;
		resultado.menor = numero1
		return resultado;
	}
}


//Funcion que maneja objetos para devolver el resultado
function clasifica(numero1,numero2){
	var resultado ={};
	if(numero1>numero2){
		return{
			mayor : numero1,
			menor : numero2
		};
	}
		return{
			mayor : numero2,
			menor : numero1
		};
	}

clasifica(87,89999);

//JSON, es un objeto de javaScript que se puede compartir. JSON.stringifi y pasre.
//java
//script
//objeto
//notation
//{
//	foo : 'bar'
//}
//{
//	'foo' : 'bar'
//}
var objeto = "{'foo' : 'bar'}";
objeto = JSON.parse(objeto);
console.log(objeto.foo);

//Instancia
var auto1 = {
	color : 'verde'
	getColor : funtion(){
		return this.color;
	}
};

var auto2 = {
	color : 'rojo'
	getColor : funtion(){
		return this.color;
	}
};

//Constructor
var objeto = {};
//objeto. -> despues del punto ya hay metodos predefinidos
//
//Ejercicio de factura
var cliente ={
	nombre : 'Kaito Shion',
	direccion : 'djiojiewjriero',
	telefono : '+45435453'
};
//no existe esto
var propiedad = 'telefono';
console.log(cliente[propiedad]);