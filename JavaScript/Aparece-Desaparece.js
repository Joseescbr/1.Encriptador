
botonEncriptar=document.getElementById("boton__encriptar");
botonDesencriptar=document.getElementById("boton__desencriptar");
botonCopiar=document.getElementById("boton__copiar");
 
// toma el div resultado y lo oculta 
document.getElementById("resultBox__aparece").style.display = "none";

//hace la funcion de aparecer el div oculto con el resultado y ocultar el div de con la imagen con el mensaje de alerta
function apareceDesaparece(){
  document.getElementById("resultBox__desaparece").style.display = 'none';
  document.getElementById("resultBox__aparece").style.display = 'block';
}
//hace la funcion de encriptar 
function encriptar (){
    var texto = document.getElementById("textbox__textarea").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById("resultBox__mensaje").value = textoCifrado;
    document.getElementById("textbox__textarea").value; 

}
//toma los eventos de las funciones y las ejecuta 
botonEncriptar.addEventListener("click",apareceDesaparece);
botonEncriptar.addEventListener("click",encriptar);

function desencriptar(){
  var texto = document.getElementById("textbox__textarea").value;
  var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
  document.getElementById("resultBox__mensaje").value = textoCifrado;
  document.getElementById("textbox__textarea").value;

}

function copiar(){
    
  var copia = document.getElementById("resultBox__mensaje").value;
  navigator.clipboard.writeText(copia);
  alert("Texto copiado al portapapeles" );

}


botonDesencriptar.addEventListener("click",apareceDesaparece);
botonDesencriptar.addEventListener("click",desencriptar);
botonCopiar.addEventListener("click",copiar);



