var textoE = document.querySelector(".texto-entrada")

function validarTexto() {
    let texto = textoE.value.toLowerCase();
    texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // elimina los acentos
    textoE.value = texto.replace(/[^a-z]/g, ''); // elimina los caracteres que no sean letras minúsculas
}

function encriptar(){

    validarTexto();

    var frase = document.getElementById("textoEntrada").value.toLowerCase();

    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    if(textoEncriptado.trim() === ""){
        alert("No es encontró ningún mensaje");
        return;
    }

    document.getElementById("textoSalida").innerHTML = textoEncriptado;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";

    var fondo = document.getElementsByClassName("texto-salida")[0];
    fondo.style.backgroundImage = "none";

    document.getElementById("textoEntrada").value = "";

    
}

function desencriptar(){

    validarTexto();

    var frase = document.getElementById("textoEntrada").value.toLowerCase();

    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    if(textoEncriptado.trim() === ""){
        alert("No es encontró ningún mensaje");
        return;
    }

    document.getElementById("textoSalida").innerHTML = textoEncriptado;

    var fondo = document.getElementsByClassName("texto-salida")[0];
    fondo.style.backgroundImage = "none";
}

function copiar(){
    
    var contenido = document.querySelector("#textoSalida");
    contenido.select();
    document.execCommand("copy");
}