var btnEntrar = document.querySelector("#Entrar");
var btninscrever = document.querySelector("#inscrever");

var body = document.querySelector("body");

btnEntrar.addEventListener("click" , function (){
    body.className = "Entrar-js";
});

btninscrever.addEventListener("click", function () {
    body.className = "inscrever-js";
});
