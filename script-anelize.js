/*Aqui é uma função para alterar da página 1 para página 2*/
function proximaPagina(){
    let pagina1 = document.querySelector(".listaQuizz");
    pagina1.classList.add("invisivel");
    let nextpage = document.querySelector(".tituloDoQuizz");
    nextpage.classList.remove("invisivel");
    let nextpage2 = document.querySelector(".caixaDePergunta");
    nextpage2.classList.remove("invisivel");
}
/*Fim da função de avançar para tela 2*/
/*Função que adiciona a escolha da resposta certa*/
let n = 0;//variavel global
function executarResposta(elemento){
    console.log("executado");
}
/*Fim da função que adiciona a resosta certa"*/
