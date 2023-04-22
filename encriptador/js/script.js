var texto = document.getElementById("texto1");
var texto2 = document.getElementById("texto2");

var no_resultado = document.getElementById('no_resultado');
var resultado = document.getElementById('resultado');
resultado.style.display = 'none'

var btnEncriptar = document.getElementById("encriptar");
var btnDesencriptar = document.getElementById("desencriptar");
var btnCopiar = document.getElementById("copiar");

function encriptarTexto() {
    var txt = texto.value.toLowerCase();
    var txtEncriptado = txt
        .replace(/a/mg, 'ai')
        .replace(/e/mg, 'enter')
        .replace(/i/mg, 'imes')
        .replace(/o/mg, 'ober')
        .replace(/u/mg, 'ufat');
    no_resultado.style.display = "none";
    resultado.style.display = 'flex';
    texto.value = '';
    texto2.innerHTML = txtEncriptado;
}

function desencriptarTexto() {
    var txt = texto.value.toLowerCase();
    var txtDesencriptado = txt
        .replace(/ai/mg, 'a')
        .replace(/enter/mg, 'e')
        .replace(/imes/mg, 'i')
        .replace(/ober/mg, 'o')
        .replace(/ufat/mg, 'u');
    no_resultado.style.display = "none";
    resultado.style.display = 'flex';
    texto.value = '';
    texto2.innerHTML = txtDesencriptado;
}

function copiarTexto() {
    var copyText = document.querySelector(".resultado textarea");
    copyText.select();
    document.execCommand("copy");
}

btnEncriptar.onclick = encriptarTexto;
btnDesencriptar.onclick = desencriptarTexto;
btnCopiar.onclick = copiarTexto;
