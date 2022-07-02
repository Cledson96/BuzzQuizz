let TodosQuizz = "";
let Titulo = "adsfsdfsdffsfsafsfsfsfgtrybtrytybtynu7nuimyui";
let URl_imagem = "https://bootcampra.notion.site/API-BuzzQuizz-b3f0bdbcba6d4f65968971715c930e24";
let quantidade_perguntas = "4";
let quantidade_niveis = "2";
let valida_url = false;

puxarQuizz();
function puxarQuizz() {
    const promessa = axios.get('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes');
    promessa.then(adicionarQuizz);
    promessa.catch(erro);
}

function adicionarQuizz(ref) {
    TodosQuizz = ref.data;

    for (let i = 0; i < TodosQuizz.length; i++) {
        let caixa = document.querySelector(".todos");
        caixa.innerHTML +=
            `<div onclick="proximaPagina(this)" class="tema id${TodosQuizz[i].id}">
                <img src=${TodosQuizz[i].image}>
                <p class="TituloQuizz">${TodosQuizz[i].title}</p>
            </div>`
    }
    console.log(TodosQuizz);

}

function erro() {
    alert("Estamos com problema no servidor,favor tentar mais tarde!")
}

function criarQuizz() {
    document.querySelector(".listaQuizz").classList.add("invisivel");
    document.querySelector(".info_basica").classList.add("adiciona");
    document.querySelector(".info_basica").classList.remove("invisivel");
}
function ir_perguntas() {
    //Titulo = document.querySelector(".titulo_quizz").value
   // URl_imagem = document.querySelector(".url_img").value;
  //  quantidade_perguntas = document.querySelector(".qtd_perguntas").value;
//quantidade_niveis = document.querySelector(".qtd_niveis").value;

    if (Titulo.length < 20 || Titulo.length > 65 ) {
        alert("Seu titulo deve conter no minimo 20 caracteres e no maximo 65 caracteres");
        return
    }
    try {
        let url = new URL(URl_imagem)
        valida_url = true;
      } catch(err) {
          valida_url = false;
      }
    
    if (valida_url === false ) {
        alert("Sua URL da imagem esta invalido!");
        return
    }

    if (quantidade_perguntas < 3 || isNaN(quantidade_perguntas)) {
        alert("Obrigatório escolher no minimo três perguntas!");
        return
    }
    if ( quantidade_niveis < 2) {
        alert("Obrigatório escolher no minimo dois niveis!");
        return
    }


    console.log(Titulo)
    console.log(URl_imagem)
    console.log(quantidade_perguntas)
    console.log(quantidade_niveis)

    //for (let i = 0; i < quantidade_perguntas; i ++) {
       // document.querySelector(".perguntasquizz").innerHTML =+ ``
    

    document.querySelector(".info_basica").classList.add("invisivel");
    document.querySelector(".info_basica").classList.remove("adiciona");
    document.querySelector(".perguntasquizz").classList.add("adiciona");
    document.querySelector(".perguntasquizz").classList.remove("invisivel");

}
function ir_niveis() {
    document.querySelector(".perguntasquizz").classList.add("invisivel");
    document.querySelector(".perguntasquizz").classList.remove("adiciona");
    document.querySelector(".niveis").classList.add("adiciona");
    document.querySelector(".niveis").classList.remove("invisivel");
}
function perguntasaparece(ref) {
    console.log(ref);
    ref.nextElementSibling.classList.remove("invisivel");
    console.log(ref.nextElementSibling)
    ref.nextElementSibling.classList.add("adiciona");


}