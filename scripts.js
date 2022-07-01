let TodosQuizz = ""
function puxarQuizz() {
    const promessa = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
    promessa.then(adicionarQuizz);
    promessa.catch(erro);
}
puxarQuizz();
function adicionarQuizz(ref) {
    TodosQuizz = ref.data;

    for (let i = 0; i < TodosQuizz.length; i++) {
        let caixa = document.querySelector(".todos");
        caixa.innerHTML +=
            `<div onclick="proximaPagina(this)" class="tema">
                <img src=${TodosQuizz[i].image}>
                <p class="TituloQuizz">${TodosQuizz[i].title}</p>
            </div>`            
    }
    console.log(TodosQuizz);

}

function erro() {
    alert("Estamos com problema no servidor,favor tentar mais tarde!")
}
