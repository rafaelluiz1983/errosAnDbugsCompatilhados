function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

/* a palavra const é para torar uma declaração constante e não variavel.*/
const listaDeTeclas = document.querySelectorAll('.tecla');

let =contador = 0;

//emquanto
while(contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = function (){
        tocaSom('#som_tecla_pom');
    }
    contador ++;
    console.log(contador);
}


