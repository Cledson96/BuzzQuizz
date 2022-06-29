let TodosQuizz = ""
function puxarQuizz() {
    const promessa = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
    promessa.then(adicionarQuizz);
    promessa.catch(erro);
}

function adicionarQuizz(ref) {
TodosQuizz=ref.data;
console.log(TodosQuizz);
}

function erro() {
    alert("Estamos com problema no servidor,favor tentar mais tarde!")
}
