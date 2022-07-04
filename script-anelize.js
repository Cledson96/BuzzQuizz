/*MINHAS VARIAVEIS GLOBAIS*/
const acessandoPagina2 = document.querySelector(".pagina2");//nunca vai mudar
const elementoQueQueroQueApareca = document.querySelector(".respostas");
const scrollarInicio = document.querySelector(".tituloDoQuizz");
let quizzSelecionado = 0;//vai receber o id
let acessarLista = [];//recebe as caracteristicas do quizz que foi selecionado
let questoes = [];//vai recebe uma parte de acessar lista
let quantidadeDeRespostas="";//essa variavel vai falar a quantidade de respostas que cada pergunta vai ter (pode ser 2,3 ou 4)
let respostaQuizz;
let respostasUsuario = [];
let numeroDePergunta = 0;
let numeroDeRespostas=0;
let n = 0;
let questaoSelecionada = 0;
let respostaSelecionada = 0;
let p =0;

let niveis = 0;
let listaNiveis = [];

function proximaPagina(id){
    quizzSelecionado = id; 
    irParaPagina2();
    adicionandoDados();    
}
function irParaPagina2(){
    document.querySelector(".listaQuizz").classList.add("invisivel");  

}
function adicionandoDados(){ 
    //carrega dados necessários no meu html
    acessarLista = TodosQuizz[quizzSelecionado];            
    acessandoPagina2.innerHTML = `<div class="tituloDoQuizz">
    <img src=${acessarLista.image}>
    <div class="escurecido"></div>
    <div>${acessarLista.title}</div>    
    </div>`;
    numeroDePerguntas = acessarLista.questions.length;//a partir daqui vou saber quantas perguntas ezistem para cada quizz
    questoes = acessarLista.questions;   
    for(let i=0;i<numeroDePerguntas;i++){     
        numeroDeRespostas = questoes[i].answers.length;
        for(let j=0;j<numeroDeRespostas;j++){
            quantidadeDeRespostas += `<div class="resposta" onclick="selecionarAlternativa(this,${i},${j})">
            <img src=${questoes[i].answers[j].image}>
            <div class="emTexto">${questoes[i].answers[j].text}</div>
        </div>`;}
        acessandoPagina2.innerHTML += `<div class="caixaDePergunta">
        <div class="pergunta">${questoes[i].title}</div>
        <div class="respostas">
            ${quantidadeDeRespostas}
        </div>
    </div>`;
        quantidadeDeRespostas = "";
            }
            //se todas forem selecionadas aparecer resposta
}

//funcao que seleciona
function selecionarAlternativa(elemento,i,j){
        questaoSelecionada = i;
        respostaSelecionada = j;
    let paiDoElemento = elemento.parentNode;   
    let imagem = paiDoElemento.querySelectorAll("img");
    let texto = paiDoElemento.querySelectorAll(".emTexto");
    let imagemelemento = elemento.querySelector("img");
    let textoelemento = elemento.querySelector(".emTexto"); 
        for(let k=0;k<imagem.length;k++){
        let armazenaImagem = imagem[k];
        let armazenaemTexto = texto[k];
        armazenaImagem.classList.add("naoSelecionado");
        armazenaemTexto.classList.add("naoSelecionado2");
        armazenaemTexto.classList.remove("selecionado");
    }
    imagemelemento.classList.remove("naoSelecionado");
    textoelemento.classList.remove("naoSelecionado2");
    textoelemento.classList.add("selecionado"); 
    //aqui vai uma funçao par desabilitar onclick
    let desabilitar = paiDoElemento.querySelectorAll(".resposta");
    for(let m=0;m < desabilitar.length;m++){
        desabilitar[m].onclick = null;
    }
    //armazenando a resposta do item selecionado
    let perguntaQueFoiSelecionada = questoes[questaoSelecionada];    
    let asRespostas = perguntaQueFoiSelecionada.answers[respostaSelecionada].isCorrectAnswer;      
    respostasUsuario.push(asRespostas);
    //Após 2 segundos de respondida, deve-se scrollar a página para a próxima pergunta
   // setTimeout(scrollarPagina,2000);
    verificaSelecionados();

   }
   function scrollarPagina(){
    document.querySelector(".respostas").scrollIntoView();
   }
   function verificaSelecionados(){
       let verificacao = document.querySelectorAll(".emTexto.selecionado");               
       if(numeroDePerguntas == verificacao.length){
        exibirAcerto();
        ativaBotoes();
        setTimeout(scrollarParaResultado,2000);
       }      
   }
function exibirAcerto(){
    let url;
    let texto;
    for(let i=0;i<respostasUsuario.length;i++){
        if(respostasUsuario[i]== true){
            n = n+1;
                }
    }
    let calculo = (n/(respostasUsuario.length));  
    let calculo2 = calculo.toFixed(2);
    let calculo3 =calculo2*100; 
    niveis = acessarLista.levels;      
    console.log(niveis);
     let valor1 = niveis[0].minValue; 
     let valor2 = niveis[1].minValue;      
         console.log(valor1);
         console.log(parseInt(valor2));
         for(let i=0;i<niveis.length;i++){
             if(calculo3>niveis[i].minValue){
                 url = niveis[i].image;
                 texto = niveis[i].text;
             }
         }                 
    
    acessandoPagina2.innerHTML += ` <div class="porcentagemAcerto">
    <div class="porcentagem">Você acertou ${calculo3}%</div>
    <div class="porcentagemTexto">
        <img src=${url}>
        <div>${texto}</div>
    </div>
</div>`;
}
function ativaBotoes(){
    let acessandoPagina2 = document.querySelector(".pagina2");
    acessandoPagina2.innerHTML += `<div onclick="reiniciandoQuizz()" class="botaoReiniciar"><div class="textoReiniciar">Reiniciar Quizz</div></div>`;
    acessandoPagina2.innerHTML += `<div onclick="voltarPaginaInicial()" class="voltarHome">Voltar para home</div>`;
}
function voltarPaginaInicial(){
    acessandoPagina2.innerHTML = "";
    quizzSelecionado = 0;
    acessarLista = [];
    questoes = [];
    quantidadeDeRespostas;
    respostasUsuario = [];
    numeroDePergunta = 0;
    numeroDeRespostas=0;
    n = 0;
    questaoSelecionada = 0;
    respostaSelecionada = 0;
    p =0;
    niveis = 0;
    listaNiveis = [];
    document.querySelector(".listaQuizz").classList.remove("invisivel");  
    document.querySelector(".listaQuizz").scrollIntoView();
    }
    
    
function reiniciandoQuizz(){    
    acessandoPagina2.innerHTML = "";
    acessarLista = [];//recebe as caracteristicas do quizz que foi selecionado
    questoes = [];//vai recebe uma parte de acessar lista
    quantidadeDeRespostas=0;//essa variavel vai falar a quantidade de respostas que cada pergunta vai ter (pode ser 2,3 ou 4)
    respostaQuizz;
    respostasUsuario = [];
    numeroDePergunta = 0;
    numeroDeRespostas=0;
    n = 0;
    questaoSelecionada = 0;
    respostaSelecionada = 0;
    p =0;
    niveis = 0;
    listaNiveis = [];
    proximaPagina(quizzSelecionado);    
    scrollarParaInicio();
        }        
        function scrollarParaInicio(){
            document.querySelector(".tituloDoQuizz").scrollIntoView();
        }
        function scrollarParaResultado(){
            document.querySelector(".porcentagemAcerto").scrollIntoView();
        }