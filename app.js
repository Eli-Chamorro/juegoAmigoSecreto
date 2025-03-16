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
    else if (listaAmigos.includes(amigo)) {
        alert("El nombre de su amigo ya esta cargado, por favor digite otro nombre o agregue diferenciadores");
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
    if (0 === parseInt(listaAmigos.length)){
        alert("Carga amigos para poder sortear"); 
    }
    else {
        var i= Math.floor(Math.random()*parseInt(listaAmigos.length));
        console.log(i);
        var nombre= listaAmigos[i];
        console.log(nombre);
        var res = document.getElementById('resultado');
        res.innerHTML= nombre;
    }
}
