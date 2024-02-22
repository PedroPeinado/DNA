let nomeusuario = "";
let elemento = document.querySelector("#nome-usuario");

while(nomeusuario == ""){
    nomeusuario = prompt('Digite seu nome para uma experiência imersiva!');
}

if(nomeusuario == null){
    elemento.textContent = "seja muito bem-vindo!";
}else{
    elemento.textContent = nomeusuario;
}

