/*MINHAS VARIAVEIS GLOBAIS*/
let divClicada;
let n;
function proximaPagina(elemento){
    divClicada = elemento;
    console.log(divClicada);    
    adicionandoDados();
    //irParaPagina2();
}
function irParaPagina2(){
    document.querySelector(".listaQuizz").classList.add("invisivel");
    //preciso adicionar o displayflex apenas quando nao estiver usando com o display none
    /*document.querySelector(".pagina2").classList.remove("invisivel");
    document.querySelector(".pagina2").classList.add("adiciona");
    document.querySelector(".tituloDoQuizz").classList.add("adiciona");
    document.querySelector(".caixaDePergunta").classList.add("adiciona");
    document.querySelector(".pergunta").classList.add("adiciona");
    document.querySelector(".respostas").classList.add("adiciona");
    document.querySelector(".emTexto").classList.add("adiciona");
    document.querySelector(".porcentagemAcerto").classList.add("adiciona");
    document.querySelector(".porcentagem").classList.add("adiciona");
    document.querySelector(".porcentagemTexto").classList.add("adiciona");
    document.querySelector(".porcentagemTexto img").classList.add("adiciona");
    document.querySelector(".botaoReiniciar").classList.add("adiciona");
    document.querySelector(".voltarHome").classList.add("adiciona");*/
}
function adicionandoDados(){ 
    /*se a div for clicada,comparo ela com minha lista
    eu retorno o indice
    a partir dele eu armazeno as minhas informaçoes*/
    n=0;
    console.log(n);

}

//funcao que seleciona
function selecionarAlternativa(elemento){
    let paiDoElemento = elemento.parentNode;   //Aqui ele "pega" respostas (o pai do elemento selecionado)
    let imagem = paiDoElemento.querySelectorAll("img");//pega seus filhos, o que estão selecionados e os que não estão
    let texto = paiDoElemento.querySelectorAll(".emTexto");//pega seus filhos, o que estão selecionados e os que não estão
    let imagemelemento = elemento.querySelector("img");//elemento selecionado
    let textoelemento = elemento.querySelector(".emTexto");//elemento selecionado
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
}
//fim da funcao que seleciona

