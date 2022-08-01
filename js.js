window.onload = function () {
    document.getElementById("try").onkeypress = function (e) {
        if (!e) e = window.event;
        var keyCode = e.code || e.key;
        if (keyCode == 'Enter') {
            check();
            return false;
        }
    }
    var Lista = ["coche", "casa", "caracol", "cocina", "rata", "luna", "sol", "gato"]
    rnd = Math.floor(Math.random() * Lista.length)
    var word = Lista[rnd]
    var mask = word.split("").map((e)=>{return "-"}).join("")
    document.getElementById("mask").innerText=mask
    save(word)
    window.vida = 5;
    document.getElementById("vida").innerText=window.vida;
}

function check() {
    var intento = document.getElementById("try").value;
    document.getElementById("try").value=""
    if(intento.length>1)window.palabra==intento?document.getElementById("mask").innerText="HAS GANADO":document.getElementById("mask").innerText="HAS PERDIDO"

    if(window.palabra.split("").includes(intento)){window.palabra.split("").map((e,i)=>{if(e==intento){
       let mask= document.getElementById("mask").innerText.split("")
       mask[i]=e;
       document.getElementById("mask").innerText=mask.join("")
    }})}else{
        
        window.vida=window.vida-1;
        document.getElementById("vida").innerText=window.vida;
    }
    if( document.getElementById("mask").innerText==palabra)document.getElementById("mask").innerText="HAS GANADO"
    if(window.vida==0)document.getElementById("mask").innerText="HAS PERDIDO"
}
function save(word){
    window.palabra = word;
}