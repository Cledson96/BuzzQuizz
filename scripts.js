let TodosQuizz = "" ;
puxarQuizz();
function puxarQuizz() {
    const promessa = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
    promessa.then(adicionarQuizz);
    promessa.catch(erro);
}

function adicionarQuizz(ref) {
    TodosQuizz = ref.data;

    for (let i = 0; i < TodosQuizz.length; i++) {
        let caixa = document.querySelector(".todos");
        caixa.innerHTML +=
            `<div onclick="proximaPagina(this)" class="tema id${i}">
                <img src=${TodosQuizz[i].image}>
                <p class="TituloQuizz">${TodosQuizz[i].title}</p>
            </div>`            
    }
    console.log(TodosQuizz);

}

function erro() {
    alert("Estamos com problema no servidor,favor tentar mais tarde!")
}

function criarQuizz(){
    document.querySelector(".listaQuizz").classList.add("invisivel") ;
    document.querySelector(".info_basica").classList.add("adiciona") ;
    document.querySelector(".info_basica").classList.remove("invisivel") ;
}
function ir_perguntas(){
    document.querySelector(".info_basica").classList.add("invisivel") ;
    document.querySelector(".info_basica").classList.remove("adiciona") ;
    document.querySelector(".perguntasquizz").classList.add("adiciona") ;
    document.querySelector(".perguntasquizz").classList.remove("invisivel") ;
}
function ir_niveis() {
    document.querySelector(".perguntasquizz").classList.add("invisivel") ;
    document.querySelector(".perguntasquizz").classList.remove("adiciona") ;
    document.querySelector(".niveis").classList.add("adiciona") ;
    document.querySelector(".niveis").classList.remove("invisivel") ;
}