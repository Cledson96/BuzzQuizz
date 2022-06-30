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
/*Função que "pega dados no servidor"*/
let dadosDoServidor = {};
armazenarDados();
function armazenarDados(){
    let dados = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    dados.catch(CasodeErro);
    dados.then(processarDados);
}
function processarDados(resposta){
    dadosDoServidor = resposta.data;
    console.log(dadosDoServidor);
}
function CasodeErro(erro){
    console.log("Dados não foram processados");
}
