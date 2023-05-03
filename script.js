// let botonEncriptar = document.getElementById("encriptador");
// let botonDesencriptar = document.getElementById("desencriptador");
// let botonCopiar = document.getElementById("copiar");


// Encriptar
function encriptar() {
    let input = document.getElementById("input");
    let text = document.getElementById("input").value;
    let textOut = document.getElementById("output");
    let modal1 = document.getElementById("modal-1");
    
    let textEncriptado = text.replaceAll("e", "enter")
                             .replaceAll("i","imes")
                             .replaceAll("a","ai")
                             .replaceAll("o","ober")
                             .replaceAll("u","ufat");

    if (input.value != "") {
        document.getElementById("output").value = textEncriptado.toLowerCase();
        textOut.focus();
    } else{
        modal1.style = "visibility: visible";
        textOut.value = "";
    }
}


// Desencriptar
    function desencriptar() {
    let input = document.getElementById("input");
    let modal1 = document.getElementById("modal-1");
    let text = document.getElementById("output").value;

    let textEncriptado = text.replaceAll("enter","e")
                              .replaceAll("imes","i")
                              .replaceAll("ai","a")
                              .replaceAll("ober","o")
                              .replaceAll("ufat","u");
    if (text.value =! "") {
        document.getElementById("output").value = textEncriptado
        input.focus();

        if (input.value == ""){
            modal1.style = "visibility: visible";
            input.focus();
        }
    }
}


// Copiar
    function copiar() { 
        let textEncriptado = document.getElementById("output");
        let text = document.getElementById("input");
        let copy = document.getElementById("modal-2");
        let nocopy = document.getElementById("modal-3");

        textEncriptado.select(); 
        navigator.clipboard.writeText(textEncriptado.value);
        if (textEncriptado.value != ""){
            copy.style = "visibility: visible";
        }else {
            nocopy.style = "visibility: visible";
        }
        textEncriptado.value = "";
        text.focus();
        text.value = "";
       }


// Modal
       function cerrar1(){
        let botonCerrar = document.getElementById("modal-1");
        botonCerrar.style = "visibility: hidden";
        input.focus();
       }

       function cerrar2() {
        let botonCopiar = document.getElementById("modal-2");
        botonCopiar.style = "visibility: hidden";
        input.focus();
       }

       function cerrar3() {
        let nocopy = document.getElementById("modal-3");
        nocopy.style = "visibility: hidden";
        input.focus();
       }