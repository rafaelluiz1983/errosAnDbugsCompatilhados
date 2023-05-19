function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

/* a palavra const é para torar uma declaração constante e não variavel.*/
const listaDeTeclas = document.querySelectorAll('.tecla');



//emquanto
for (let contador = 0; contador < listaDeTeclas.length; contador ++ ){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];    
    const idAudio = `#som_${instrumento}`; // template string
  //console.log(instrumento);
  

    tecla.onclick = function (){
        tocaSom(idAudio);
    }
    //console.log(contador);
    
}


