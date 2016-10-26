function funciones_basicas()
{
	var array = ["Hola","mundo","?",32,"otro","elemento"]

	ultimo_elemento = array.pop(); //Se usa en Pilas
	primer_elemento = array.shift(); //Se usa en filas (Las notificaciones suelen tener este tipo de estructuras)

	console.log(primer_elemento); //Debe imprimir "Hola" y el arreglo ahora tendra 5 elementos
	console.log(ultimo_elemento); //Debe imprimir "elemento" y ahora tendra 4 elementos

	array.unshift(primer_elemento); //Vuelve a poner "Hola" al inicio y ahora son 5 elementos

	console.log(array);		//Debe imprimir  ['Hola', 'mundo', '?', 32, 'otro' ]
	console.log( array.indexOf('elemento') ); //Debe darnos -1 por que ya no existe en el arreglo
	console.log( array.sort() ); //Lo ordena de acuerdo como Javascript considera que se debe ordenar
}

function funciones_callback_arreglos() //Callback por que le pasaremos una funcion al sort
{
	var textos = ["Juan","Maria","Pedro","Alix"]; //Declaramos un arreglo

	var importancia = function (a,b) 
	{
		return a[2]>b[2];
	}
	//Para poder pasarle una funcion callback a array.sort( AQUI_VA_LA_FUNCION ) debemos crear una funcion
	//Que reciba como parametro 2 elementos y regrese un Booleano, en nuestra funcion "importancia"
	//compara la 3er letra de los elementos del arreglo, singifica que si metemos nombres con menos de 3 
	//letras o algo que no sea texto puede que no sirva nuestra funcion 

	textos.sort(importancia); //Aqui los ordena usando nuestra funcion
	console.log(textos);	  //Debe imprimirnos [ 'Juan', 'Pedro', 'Alix', 'Maria' ]
							  //                     'a'  >  'd'  >   'i'   > 'r'
}

function funciones_callback_foreach()
{
	var friends = ["Giuli","Cesar","Diego","Edward"]; //Iniciamos arreglo

	var imprimir = function (name,index) //Con esta func imprimiremos los nombres
	{
		letras = name.split('');
		letras = letras.join('|');
		console.log("El usuario en el indice: " +index+ " . "+letras);
	}

	/*
		forEach recibe una funcion que recibe 2 parametros los cuales son 
			func(valor_dentro_del_arreglo,index_de_ese_valor)
		y la ejecuta 1 vez por cada elemento del arreglo, la funcion no tiene que regresar nada
	*/
	friends.forEach(imprimir); 

	//Este ciclo FOR es lo mismo que el friends.foreach(imprimir)
	for(var i = 0; i<friends.length; ++i) //Va de 0 hasta el (total de elementos - 1) 
	{
		imprimir(friends[i],i)	//Lo manda a llamar igual que el foreach, valor del elemento
								//en el arreglo y con su respectivo indice
	}
}

//funciones_basicas()
//funciones_callback_arreglos()
//funciones_callback_foreach()