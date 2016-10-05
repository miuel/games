var palabra; 
var palabraRandom = [ "Argelia", "Andorra", "Argentina", "Australia", "Bahamas", "Bangladesh" ,
"Belgica", "Bolivia", "Bulgaria", "Camerun", "Chile", "China", "Colombia", "Cuba", "Dinamarca", "Etiopia", "Egipto", 
"Francia", "Grecia", "Groenlandia", "Irlanda", "Italia", "Jamaica", "Japon", "Mexico", "Inglaterra", "Nigeria", "Rusia" ];

var hombre, l, tablero, espacio;

var tecla = {
	enter: 13
}

var fondo = {
	imagenURL: "img/fondo.png",
	fondoOK: false,	
};
var poste = {
	imagenURL: "img/poste.png",
	posteOK: false
};
var cabeza = {
	imagenURL: "img/cabeza.png",
	cabezaOK: false
};
var torso = {

	imagenURL: "img/torso.png",
	torsoOK: false
};
var brazos = {
	imagenURL:  "img/brazos.png",
	brazosOK: false	
};
var piernas = {
	imagenURL: "img/piernas.png",
	piernasOK: false
};
var muerto = {
	imagenURL: "img/muerto.png",
	muertoOK: false
};
var Ahorcado = function (con) {

	this.contexto = con;
	this.maximo = 5;
	this.intentos = 0;
	this.vivo = true;

	this.dibujar();
}
Ahorcado.prototype.trazar = function ()
{
	this.intentos++;
	this.dibujar();
	if (this.intentos >= this.maximo)
	{
		this.vivo = false;
		alert("you failed ! 😲");
	}	
}
function iniciar ()
{
	 
	//Se elige la palabra aleatoria
    palabra = palabraRandom[Math.floor(Math.random()*29)];
    // alert("Palabra elegida: "+palabra);   

	//me traigo el click de la caja de texto
	l = document.getElementById("letra");
	var b = document.getElementById("boton");

	var canvas = document.getElementById("c");
	canvas.width = 500;
	canvas.height = 300;
	contexto = canvas.getContext("2d");
	hombre = new Ahorcado(contexto);

	//CARGO LAS IMAGENES ---------------------------
    //---------------------------------------------
	//fondo
	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload = confirmarFondo;
	
	//poste
	poste.imagen = new Image();
	poste.imagen.src = poste.imagenURL;
	poste.imagen.onload = confirmarPoste;
	//cabeza
	cabeza.imagen = new Image();
	cabeza.imagen.src = cabeza.imagenURL;
	cabeza.imagen.onload = confirmarCabeza;
	//torso
	torso.imagen = new Image();
	torso.imagen.src = torso.imagenURL;
	torso.imagen.onload = confirmarTorso;
	//brazos
	brazos.imagen = new Image();
	brazos.imagen.src = brazos.imagenURL;
	brazos.imagen.onload = confirmarBrazos;
	//piernas
	piernas.imagen = new Image();
	piernas.imagen.src = piernas.imagenURL;
	piernas.imagen.onload = confirmarPiernas;
	//muerto
	muerto.imagen = new Image();
	muerto.imagen.src = muerto.imagenURL;
	muerto.imagen.onload = confirmarMuerto;
	//------------------------------- IMAGENES CARGADAS 

//convierte en mayuscula la palabra
	palabra = palabra.toUpperCase();
	//las pone en miniscula --> toLowerCase();
	// con .length se cuantas letras tiene mi palabra

	//declaro un array con 'n' espacios de acuerdo al largo de la palabra
	espacio = new Array(palabra.length);
//agregamos una función que se dispare al dar click al botón
	b.addEventListener("click", agregarLetra);
	// t.addEventListener("keydown", agregarLetra);

	document.addEventListener("keydown", teclado);

	// dosth();

	
//mostrar pista
	mostrarPista(espacio);

}
function teclado(datos) {

	var codigo = datos.keyCode;

	if (codigo == tecla.enter) {
		agregarLetra();
	}

}
//función para agregar letra
function agregarLetra ()
{
	//me guardo la letra escrita en una variable llamada letra
	var letra = l.value;
	// limpio el input luego de ingresar una letra
	l.value = "";
	 // con focus situo el cursor en el input
	l.focus(); 
		
	mostrarPalabra(palabra, hombre, letra);

}
function mostrarPalabra (palabra, ahorcado, letra)
{
	var encontrado = false;
	var z;
	letra = letra.toUpperCase();
	for(z in palabra)
	{
		// alert(palabra[z]);
		if (letra == palabra[z]) 
		{
			espacio[z] = letra;
			encontrado = true;
		}
	}
	mostrarPista(espacio);

	//si NO lo encontré
	if(!encontrado)
	{
		ahorcado.trazar();
	}
	if(!ahorcado.vivo)
	{
		alert("This is the word you musted guess: " + palabra);
	}	
		// aqui se deberia volver a recargar una palabra aleatoria

}
function mostrarPista (espacio)
{
	var pista = document.getElementById("pista");
	var texto = "";
	var compara = "";
	var i;
	var largo = espacio.length;

	for (i = 0; i < largo; i++) 
		{
			if (espacio[i] != undefined)
			{
				texto = texto + espacio[i] + " ";
				compara = compara + espacio[i];
			}	
				else
				{
					texto += "_ ";
				}		
		}
	pista.innerText = texto;	
	if (compara == palabra) {
		alert("You Win !!" + " " + "right word which looking for was: " + palabra);
	}
}


// cargando imagenes
function confirmarFondo ()
{
	fondo.fondoOK = true;
	hombre.dibujar();
}
function confirmarPoste ()
{
	poste.posteOK = true;
	hombre.dibujar();
}
function confirmarCabeza ()
{
	cabeza.cabezaOK = true;
	hombre.dibujar();
}	
function confirmarTorso ()
{
	torso.torsoOK = true;
	hombre.dibujar();
}
function confirmarBrazos ()
{
	brazos.brazosOK = true;
	hombre.dibujar();
}
function confirmarPiernas ()
{
	piernas.piernasOK = true;
	hombre.dibujar();
}
function confirmarMuerto ()
{
	muerto.muertoOK = true;
	hombre.dibujar();
}
Ahorcado.prototype.dibujar = function ()
{

	var dibujo = this.contexto;	
	//dibujo el fondo y el poste siempre, da igual la condicion de intentos
	// if (fondo.fondoOK) {		
	// 	dibujo.drawImage(fondo.imagen, 0, 0);	
	// }
	if (poste.posteOK) {
		dibujo.drawImage(poste.imagen, 250, 5);
	}
	//dibujo la cabeza si fallo 1 vez ó intentos = 1
		if(this.intentos > 0) 
		{	
			contexto.drawImage(cabeza.imagen, 230, 50);
	//dibujo el torso si intentos = 2
	   		if(this.intentos > 1) 
	   		{
			contexto.drawImage(torso.imagen, 236, 100);
			//brazos
		   		if(this.intentos > 2) 
		    	{
			 		contexto.drawImage(brazos.imagen, 227, 100);	
	//dibujo las piernas si intentos = 4
		    		if(this.intentos > 3) 
		     		{
						contexto.drawImage(piernas.imagen, 226, 183);
			//dibujos los ojos muertos , intentos = 5
					    if(this.intentos > 4)
				 		{	
				 			// muerto
				 			// contexto.drawImage(muerto.imagen, 230, 50);	
				 			// document.write("GAME OVER");
				 			

				 	 	}	
		     		}		   	
		    	}

			}
	    }

}

