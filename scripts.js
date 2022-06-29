let TodosQuizz = ""
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
            `<div class="tema">
                <img src=${TodosQuizz[i].image}>
                <p class="TituloQuizz">${TodosQuizz[i].title}</p>
            </div>`
    }
    console.log(TodosQuizz);

}

function erro() {
    alert("Estamos com problema no servidor,favor tentar mais tarde!")
}
/*Aqui é uma função para alterar da página 1 para página 2*/
function proximaPagina(){
    let pagina1 = document.querySelector(".listaQuizz");
    pagina1.classList.add("invisivel");
    let nextpage = document.querySelector(".pagina2");
    nextpage.classList.remove("invisivel");
}