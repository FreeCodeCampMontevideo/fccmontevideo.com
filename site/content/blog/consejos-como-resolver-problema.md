---
date: 2017-09-21T20:35:30-03:00
title: Consejos para nuevos programadores a la hora de resolver un problema.
draft: false
author: alvarom
categories: ["Consejos"]
image: /img/como-crear-articulo.jpg
images: ["/img/como-crear-articulo.jpg"]
description: Bienvenidos al blog de freeCodeCamp Montevideo.
---

### Introducción

Uno de los problemas que  más escucho en los nuevos programadores a la hora de  trabajar con un nuevo problema  es por donde comenzar.

Cuando entiendes el problema, la logica, la sintaxis basica, si puedes ver el codigo de otro o tienes a alguien que te pueda guiar pero sientes que no estas seguro en hacerlo tu mismo y tienes problemas en convertir tus pensamientos en codigo  aunque entienes la sintaxis y logica.
Aqui comparto un proceso y algunos consejos para enfrentar un problema que puedan serte utiles a lo largo de tu camino.

#### 1)Lee el problema al menos 3 veces( o lo suficiente como para sentirte comodo).

No puedes resolver el problema si no lo entiendes.Hay una gran diferencia entre el problema a resolver y el problema que tu crees estas resolviendo.

Es facil comenzar a leer algunas lineas y asumir el resto solo porque es similar a otros  problemas resueltos en el pasado.
Aunque estes trabajando en algo que asumas ya lo entiendes, cerciorate de comprender todas las reglas y requisitos que necesites cumplir de antemano.

Aveces para comprender mejor el problema, trato de explicar el problema a un amigo o en mi grupo de estudio  y ver si el razonamiento que  entienden  del problema concuerda con el problema que tengo a resolver.
No aconsejo encontrarte a mitad de camino que  y ver que comprendiste erroneamente el problema.
Tomarse un tiempo extra al comienzo vale todo el tiempo en tener que volver a comenzar o modificar gran parte del programa.
Lo mejor que entiendas el problema, más facil puede ser resolverlo.

Probemos con una simple función elegirNumerosPares(),  que tomara como parametro un listado de numeros y retornara un listado de  solo los numeros Pares, en el caso de que no haya numero Pares, retornara un array vacio.
```javascript
	function elegirNumerosPares(_array){
			//codigo aqui.
	}
```

Algunas preguntas para tener en mente:

	Como la computadora puede saber cuales son los numeros Pares?
	Divides el numero por 2 y el resto es 0.
	Que debe tomar la funcion? Un array.
	Que contendra el array? Uno o varios numeros.
	Cual es el tipo de dato de los elementos del array? Number
	Cual es el objetivo de la función, que retorna  al final?
	El objetivo es tomar todos los numeros pares y retornarlos en un array, en el caso de que no tenga numeros pares, retornar un array vacio.

#### 2)Trabajar con varios ejemplos de datos a resolver, al menos tres distintos.

Toma un pedazo de papel y trabaja manualmente con almenos tres ejemplos, considera ejemplos distintos.
Ejemplo de datos:
```javascript
[1];
[1,2,3,4];
[1,2,3,5,6,7,8];
[1,-23.5 , 301];
[-600.1, "400" , 2.2 , -103, 42, 6.6];
```

Cuando comienzas con el problema, es facil obviar algunos pasos.
Tu cerebo ya es familiar con los numeros pares, puedes ver un ejemplo de datos y  retirar  numeros como  2,4,6  en adelante sin prestar atencion en cada uno y todos los pasos que el cerebro tomo en resolverlo.Intenta usar ejemplos más extremos de manera que tu cerebro no lo resuelva solo por verlo, esto ayuda en crear un algoritmo real.

Veamos el primer array [1].

0. Creas el array numerosPar.
1. Miras el unico elemento del array [1]
2. Decides si es un numero par, no lo es.
3. Notas que no hay más elementos en el array.
4. Determinas que no hay ningun numero par en el array brindado.
5. Retornas un array vacio.

Veamos el segundo ejemplo [1,2,3,4].

0. Creas el array numerosPar.
1. Miras al primero de los elementos del array[1,2,3,4]
2. Es 1.
3. Decides si es par, no lo es.
4. Miras al siguiente elemento.
5. Es 2.
6.  Dedice si es par, es par.
7. Agregas 2  al array numerosPar.
8. Pasas al siguiente numero 3.
9. No es par.
10. Pasas al siguiente numero 4.
11. Dedice si es par, es par.
12. Agregas 4  al array numerosPar.
13. No hay más numeros en el ejemplo.
14. Retornas numerosPar.

Si repites los ejemplos, puedes claramente notar varias diferencias entre el primer y segundo ejemplo.
Por eso es necesario trabajar con distintos ejemplos, de esta forma puedes utilizar distintos valores, numeros enteros, reales y/o palabras para probar la función.

#### 3)Simplifica y optimiza los pasos.

Mira el anterior proceso y los patrones que sigue, ve si hay algo que ocurre de manera repetida.

Piensa si estas repitiendo pasos y si puedes reducirlos:

0. Crear la función elegirNumerosPares.
1. Creas un array vacio numerosPar donde almacenas los numeros pares si hay.
2. Recorre cada el elemento del array[1,2,3,5,6,7,8].
3. Toma el primer elemento.
4. Decide si el numero es Par, si lo es, incluyelo en el array numerosPar.
5. Toma el siguiente elemento.
6. Repite el paso 4.
7. Repite el paso 5 y el paso 4 hasta que no queden elementos en el array de ejemplo.
8. Retorna el array numerosPar sin importar los valores que posea.

#### 4)Escribe Pseudocodigo.

Luego de trabajar con varios patrones, escribir pseudocodigo para convertirlo en codigo te sera de gran utilidad.

Escribe pseudocodigo linea por linea.
Puedes hacer esto en papel o en comentarios en tu editor de codigo.
Si encuentras que tu monitor vacio te impide comenzar o te distrae, es recomendado comenzar en papel.

El pseudocodigo generalmente no tiene ninguna regla especifica pero aveces, uno termina incluyendo sintaxis de un lenguaje, solo por ser familiar con un lenguaje de programación.No te preocupes de la sintaxis, ocupate de la logica y los pasos.

Para este ejemplo de problema, hay diversas maneras de resolverlo, por ejemplo filtrar(filter) seria una manera sencilla, pero por razón de querer dar un ejemplo lo más sencillo de entender, utilizare un loop por(for) para aplicar el pseudocodigo y luego lo podremos modificar.

funcion elegirNumerosPares  tomar array de  ejemplo.

	crear un array  numerosPar   que sea igual a un array vacio.

	por cada elemento en el array ejemplo.
		ver  si ese elemento es par.
			si ese elemento es par(el resto de dividir el numero por 2 es igual a 0).
			 agregar el elemento a numerosPar.


	retornas numerosPar.

Otro ejemplo con menos palabras.

```javascript
funcion elegirNumerosPares(ejemplo)
	numerosPar = []
	por (iteración = 0 a el largo de ejemplo)
		si ( elemento % 2 === 0)
			agregas el numero a numerosPar

	retorna numerosPar
```

Ambos ejemplos son validos siempre y cuando escribas linea por linea entendiendo la logica.
Vuelve a releer el problema para cerciorarte que estas en buen camino.


#### 5)Traducir el pseudocodigo a codigo y eliminar errores(bugs).

Cuando el pseudocodigo esta listo, traducelo a codigo real del lenguaje a trabajar.
En este ejemplo utilizare javascript.

Si lo tienes escrito en papel, traelo al editor de texto en tu maquina.
Entonces invocas la funcion y le das como parametros los ejemplos que teniamos de antes.
De esta manera veremos si retorna los resultados que buscamos.
Generalmente usare console.log() luego de cada variable o linea, esto me ayuda a revisar en la consola, que valores tiene las variables y como se comporta el codigo a medida que avanzo.


Ejemplo:


```javascript
elegirNumerosPares([1]);
elegirNumerosPares([1,2,3,4]);
elegirNumerosPares([1,2,3,5,6,7,8]);
elegirNumerosPares([1,-23.5 , 301]);
elegirNumerosPares([-600.1, "404" , 2.2 , -103, 42, 6.6]);

function elegirNumerosPares(_arrayNumeros){
	console.log(_arrayNumeros); //Luego de revisar la consola los valores, remuevo esto.

	var numerosPar = [];
	console.log(numerosPar); //Luego de revisar la consola los valores,  remuevo esto.

}
```
Luego  incluir el pseudo codigo como comentario.
```javascript
	//funcion elegirNumerosPares(ejemplo)
function elegirNumerosPares(_arrayNumeros){

   	//numerosPar = []
	var numerosPar = [];
 
 	//por (iteración = 0 a el largo de ejemplo)
 	for(var i = 0 ; i < _arrayNumeros.length; i++ ){

 		//si ( elemento % 2 === 0)
 		if(_arrayNumeros[i] % 2 ===0){

 			//agregas el numero a numerosPar
 			numerosPar.push(_arrayNumeros[i]);
 		}

 	}
 

	//retorna numerosPar
	return numerosPar;
}
```

Un ejemplo sin pseudocodigo ahora:

 ```javascript
function elegirNumerosPares(_arrayNumeros){

	var numerosPar = [];
 	for(var i = 0 ; i < _arrayNumeros.length; i++ ){
 		if(_arrayNumeros[i] % 2 ===0){
 			numerosPar.push(_arrayNumeros[i]);
 		}
 	}
	return numerosPar;
}
```


Algunas veces para los nuevos programadores se le dificulta avanzar, recuerda que la sintaxis del lenguaje se vuelve más natural con el tiempo y practica, no temas en buscar material de referencia para utilizar el codigo correcto.


#### 6)Simplifica y optimiza tu codigo.
Creo que probablemente ves ahora como es un tema repetido el simplificar y optimizar tus pasos.

En este ejemplo, una manera de optimizar el codigo seria filtrar los elementos del array y retornar un nuevo array utilizando filter.

De esta manera no es necesario  definir una nueva array   numerosPar vacia ya que filter retorna una nueva array con las copias de los elementos que cumplen con el filtrado.
Esto no modificara el array original.Tampoco sera necesario un for loop en este ejemplo.Usando  filter este recorrera cada elemento filtrando    array y retornara los elementos true y saltara los false.

```javascript
	function elegirNumerosPares(_arrayNumeros){
		var numerosPar = _arrayNumeros.filter(i => i % 2 === 0 );
		return numerosPar;
	}
```

Simplificar y optimizar tu codigo puede requerir que reiteres la lectura del codigo varias veces, identificando maneras para lograrlo.

Algunas preguntas en mente:

	Cuales son los objetivos de simplificar y optimizar?
		Los objetivos dependen en el estilo de tu grupo o preferencias personales.Intentas disminuir la cantidad de codigo? o intentas que sea más facil de leer?.En este ultimo caso, quizas prefieras ingresar esa linea extra con la variable de array vacia, o ingresar las lineas del codigo for loop if al contrario de hacer todo en una sola linea.
	Como puede ser el codigo más entendible?.
	Hay más pasos que puedan ser eliminados?.
	Hay variables o funciones que no sean necesarias o no utilices?.
	Estas repitiendo pasos y codigo?.
	Hay mejores maneras de comprobar todos los casos de ejemplo?.


#### 7)Probar el codigo.

Este paso debe ser a lo largo del proceso, probar el codigo te ayuda a encontrar errores en la sintaxis o  vacios en la logica  más vale temprano que tarde.

Cuando encuentro errores trato de recorrer linea por linea, leer el codigo en voz alta y tratar de explicar que resultado se espera de cada linea.

Algunas técnicas que utilizo:

1. Revisar la consola y ver que errores recibo. Algunas veces la consola indica en que numero de linea esta el error que debo revisar.Esto me da un idea por donde comenzar, aunque no siempre los errores se originan ahi.

2. Comentar fuera  grupos o lineas de codigos y revisar el resultado de manera de ver como se comporta, luego puedo retirar el comentario y seguir con el codigo.

3. Usar otros datos de ejemplos y ver si el codigo funciona.

4. Guardar distintas versiones de mi codigo si intento algo totalmente diferente. 
No quiero perder mi trabajo si debo revertir todo de nuevo.(Esto lo puedes hacer con GIT pero eso sera en otra nota).

#### 8) Escribe comentarios utiles.
En el mejor de los casos, en una semana recuerdes que   significaba esa linea de codigo pero lo normal es que tu o el resto que lea el codigo en   un mes   no entiendan que buscabas hacer.
Por eso es importante escribir comentarios utiles para evitar problemas y no perder tiempo luego cuando debes volver a trabajar en el.

Mantente lejos de comentarios como :

	//Esto es un array a iterar
	//Esto es una variable

Escribe breves pero de alto nivel comentarios que te ayude a entender algo que no es tan obvio.
Esto es de ayuda cuando trabajas en problemas más complejos.

Te ayuda a comprender que hace una funcion en particular, como  y porque, a ti y al resto poder entender.

Para que es este codigo?
Que esta haciendo?
Porque es necesario?

#### 9) Obten revisiones de tu codigo.

Comparte y recibe opiniones de tus compañeros, profesores y otros programadores.
Revisa   [stackOverflow](https://stackoverflow.com/) y ve como otros enfrentan el problema y aprende de ellos. Hay muchas maneras de resolver un problema, encuentralas y te sera más facil y más rapido llegar a resolverlos tu mismo.

#### 10) Practica, practica, practica.

Todos, hasta los programadores más experimentados siempre estan practicando y aprendiendo.

Si recibes ayuda para mejorar tu codigo, implementalo.
Repite un problema o busca problemas similares. Con cada problema que resulves, te vuelves un mejor programador.

Celebra cada exito y recuerda lo lejos que has llegado. Recuerda que programar como todo, se vuelve más facil y natural con el tiempo.

