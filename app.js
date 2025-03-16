// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos= [];


function limpiarCaja(){
    document.getElementById('amigo').value= "";
}


function agregarAmigo(){
    let amigo = (document.getElementById('amigo').value);
    console.log(amigo);
    
    if (amigo === ""){
        alert("Por favor ingrese un nombre valido");
    }
    else {
        listaAmigos.push(amigo);
        limpiarCaja();
    }

}