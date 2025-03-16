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
        actualizarLista();
    }

}

function actualizarLista(){
    let lista= document.getElementById('listaAmigos');
    lista.innerHTML= "";
    
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent= listaAmigos[i];
        lista.appendChild(li);
        console.log(listaAmigos.length);
    }
}


function sortearAmigo() {
    if (listaAmigos.length > 0){
        var i= Math.floor(Math.random()*listaAmigos.length)+1;
        //console.log(i);
        var nombre= listaAmigos[i];
        var res = document.getElementById('resultado');
        res.innerHTML= nombre; 
    }
    else {
        alert("Carga amigos para poder sortear");
    }
}