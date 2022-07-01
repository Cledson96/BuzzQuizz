/*let n;//variavel global que vai armazenar o indice i para que eu consiga identificar qual item é
function proximaPagina(elemento){
    adicionandoDados();
    irParaPagina2();
}
function irParaPagina2(){
    //aqui vou acrescentar o display none
}
function adicionandoDados(){
  
}*/

//funcao que seleciona
function selecionarAlternativa(elemento){
    let paiDoElemento = elemento.parentNode;   //Aqui ele "pega" respostas (o pai do elemento selecionado)
    let imagem = paiDoElemento.querySelectorAll("img");//pega seus filhos, o que estão selecionados e os que não estão
    let texto = paiDoElemento.querySelectorAll(".emTexto");//pega seus filhos, o que estão selecionados e os que não estão
    let imagemelemento = elemento.querySelector("img");//elemento selecionado
    let textoelemento = elemento.querySelector(".emTexto");//elemento selecionado
   /* for(let i=0;i<texto.length;i++){            
            let novoTexto = texto[i];
            let verificar = novoTexto.querySelector(".selecionado");
            if(verificar !== null){
                verificar.classList.toogle("selecionado");
                verificar.classList.toogle("naoSelecionado");
            }//precisa arrumar essa função          
    }   */   
    for(let j=0;j<imagem.length;j++){
        let armazenaImagem = imagem[j];
        let armazenaemTexto = texto[j];
        armazenaImagem.classList.add("naoSelecionado");
        armazenaemTexto.classList.add("naoSelecionado2");
        armazenaemTexto.classList.remove("selecionado");
    } 
    imagemelemento.classList.remove("naoSelecionado");
    textoelemento.classList.remove("naoSelecionado2");
    textoelemento.classList.add("selecionado");

    /*for(let j=0;j<todosElementos.length;j++){
        console.log(todosElementos[i]);
        let minhaDiv = todosElementos[i];

        let imagem = minhaDiv.querySelector("img");
        let texto = minhaDiv.querySelector("div");
        imagem.classList.add("naoSelecionado");
        texto.classList.add("naoSelecionado");
    }    
    elemento.classList.add("selecionado");  */
    

    /*let selecionado = document.querySelector(".selecionado");
    let elementoimagem = elemento.querySelector(".img");
    let elementodiv = elemento.querySelector(".div");
    if(selecionado !== Null){
        elemento.classList.remove("selecionado");                
    }*/
}

