function obtenerTextoEntrada() {
    return document.getElementById("textoEntrada").value;
}

function cifrarTexto() {
    var texto = obtenerTextoEntrada();
    var reglasCifrado = [
        ["e", "enter"],
        ["o", "ober"],
        ["i", "imes"],
        ["a", "ai"],
        ["u", "ufat"]
    ];

    if (/[^a-z\s]/.test(texto)) {
        alert("Solo se permiten letras minúsculas sin acentos.");
        return;
    }
    
    var textoCifrado = texto;

    for (var i = 0; i < reglasCifrado.length; i++) {
        var letra = reglasCifrado[i][0];
        var reemplazo = reglasCifrado[i][1];
        var regex = new RegExp(letra, "g");
        textoCifrado = textoCifrado.replace(regex, reemplazo);
    }

    mostrarTextoCifrado(textoCifrado)
}

function descifrarTexto() {
    var texto = obtenerTextoEntrada();
    var reglasDescifrado = [
        ["enter", "e"],
        ["ober", "o"],
        ["imes", "i"],
        ["ai", "a"],
        ["ufat", "u"]
    ];

    var textoDescifrado = texto;

    for (var i = 0; i < reglasDescifrado.length; i++) {
        var reemplazo = reglasDescifrado[i][0];
        var letra = reglasDescifrado[i][1];
        var regex = new RegExp(reemplazo, "g");
        textoDescifrado = textoDescifrado.replace(regex, letra);
    }

    mostrarTextoCifrado(textoDescifrado)
}

function copiarTexto() {
    var textoResultado = document.querySelector(".resultadoTexto").textContent;
    navigator.clipboard.writeText(textoResultado).then(function() {
            alert("Texto copiado: " + textoResultado);
        })
}

function limpiarCampos() {
    document.getElementById("textoEntrada").value = "";
    document.querySelector(".resultadoTexto").textContent = "";
    
    var figura = document.getElementById("figura");
    var mensajes = document.getElementById("mensajes");
    var botonCopiarTexto = document.getElementById("botonCopiarTexto");
    var botonLimpiarTexto = document.getElementById("botonLimpiarTexto");

    if (window.innerWidth > 767) {
        figura.style.display = "block";
    } else {
        figura.style.display = "none";
    }

    mensajes.style.display = "block";
    botonCopiarTexto.style.display = "none";
    botonLimpiarTexto.style.display = "none";
}

function mostrarTextoCifrado(texto) {
    var figura = document.getElementById("figura");
    var textoResultado = document.querySelector(".resultadoTexto");
    figura.style.display = "none";
    textoResultado.textContent = texto;
    textoResultado.classList.add("visible");
    document.getElementById("mensajes").style.display = "none"; 
    document.getElementById("botonCopiarTexto").style.display = "block";
    document.getElementById("botonLimpiarTexto").style.display = "block";
}

function ajustarAlturaTexto() {
    var textarea = document.getElementById("textoEntrada");
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
}

document.getElementById("textoEntrada").addEventListener("input", ajustarAlturaTexto);
window.addEventListener("load", ajustarAlturaTexto);
