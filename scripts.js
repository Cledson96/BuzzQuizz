let TodosQuizz = "";
let Titulo = "";
let URl_imagem = "";
let quantidade_perguntas = "";
let quantidade_niveis = "";
let valida_url = false;
let txt_pergunta = "";
let cor_fundo = "";
let txt_resposta = "";
let url_resposta = "";
let Resposta = 0
let testee = "";
let enviar_quizz = {};
let Tdsperguntas = [];
let Tdslevels = [];
let nivel0 = [];
let verifica = 0;
let titulo_nivel = "";
let acertos = "";
let URL_nivel = false;
let descricao_nivel = "";
let id_criado = "";
let lista_criado = localStorage;
let apaga = "";
let meusQuizz = [];
let idd = "";
let reffir = 0;
puxarQuizz();
function puxarQuizz() {
    const promessa = axios.get('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes');
    promessa.then(adicionarQuizz);
    promessa.catch(erro);
}

function adicionarQuizz(ref) {
    TodosQuizz = ref.data;
    if (lista_criado.length > 0) {
        for(let ii = 0; ii < TodosQuizz.length; ii++) {
            if (TodosQuizz[ii].id == lista_criado["id" + TodosQuizz[ii].id]) {
                document.querySelector(".criados").innerHTML = 
        `<div class="criaquizz2">
            <h1>Seus Quizzes</h1>
            <img onclick="criarQuizz()" src="/ArquivosDeMídia/Rectangle 33.png">
        </div> 
        <div class="oscriados"> 
        </div>`
        ii=TodosQuizz.length;
            }
        }



    } 

    for (let i = 0; i < TodosQuizz.length; i++) {
        if (TodosQuizz[i].id == lista_criado["id" + TodosQuizz[i].id]) {
           
            let quarda = TodosQuizz[i];
            idd = TodosQuizz[i].id;
            meusQuizz.push(quarda) ;
            console.log(meusQuizz);
            console.log(quarda);
            let SeuQuiz = document.querySelector(".oscriados");
            SeuQuiz.innerHTML += 
            `<div onclick="proximaPagina(this)" class="tema ${TodosQuizz[i].id} i${reffir}">
                    <div class="veu"> 
                    <p class="TituloQuizz">${TodosQuizz[i].title}</p></div>
                    <div class="editar_bonus">
                        <img onclick="editar_quizz(this)" class="editar_img ${TodosQuizz[i].id}" src="/ArquivosDeMídia/editar_pronto.png" >
                        <img onclick="apagar_quizz(this)" class="editar_img ${TodosQuizz[i].id}" src="/ArquivosDeMídia/lixeira_pronto.png" >
                    </div>
                 <img class="img_servidor" src=${TodosQuizz[i].image}>
                 
            </div>`
            reffir ++
        } else {
        let caixa = document.querySelector(".todos");
        caixa.innerHTML +=
            //`<div onclick="proximaPagina(${i})" class="tema"> //Se usar esse a funcao proxima pagina vai ser ativada
            `<div onclick="proximaPagina(${i})" class="tema id${TodosQuizz[i].id}">
            <div class="veu"> 
            <p class="TituloQuizz">${TodosQuizz[i].title}</p></div>
                <img class="img_servidor" src=${TodosQuizz[i].image}>
                
            </div>`
        }
    }
    console.log(TodosQuizz);

}
function editar_quizz(ref) {

   
}

function apagar_quizz(ref){
    testee = ref;
    var result = confirm("Tem certeza que deseja excluir o Quizz?")
    if (result == true){
    const deletei = axios.delete(`https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes/${ref.classList[1]}`,
    { headers: 
        { 'Secret-Key': localStorage[ref.classList[1]]}
    }
    )
    
    deletei.then(reiniciar);
    
    
    } else {
        return
    }
    
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
    Titulo = document.querySelector(".titulo_quizz").value
    URl_imagem = document.querySelector(".url_img").value;
    quantidade_perguntas = document.querySelector(".qtd_perguntas").value;
    quantidade_niveis = document.querySelector(".qtd_niveis").value;

    if (Titulo.length < 20 || Titulo.length > 65) {
        alert("Seu titulo deve conter no minimo 20 caracteres e no maximo 65 caracteres");
        return
    }
    try {
        let url = new URL(URl_imagem)
        valida_url = true;
    } catch (err) {
        valida_url = false;
    }

    if (valida_url === false) {
        alert("Sua URL da imagem esta invalido!");
        return
    }

    if (quantidade_perguntas < 3 || isNaN(quantidade_perguntas)) {
        alert("Obrigatório escolher no minimo três perguntas!");
        return
    }
    if (quantidade_niveis < 2) {
        alert("Obrigatório escolher no minimo dois niveis!");
        return
    }

    enviar_quizz.title = Titulo;
    enviar_quizz.image = URl_imagem;

    console.log(enviar_quizz)
    console.log(URl_imagem)
    console.log(quantidade_perguntas)
    console.log(quantidade_niveis)

    for (let i = 0; i < quantidade_perguntas; i++) {
        document.querySelector(".perguntasquizz").innerHTML += ` <div onclick="perguntasaparece(this)" class="pergunta_1 adiciona ">
        <h1>Pergunta ${i + 1}</h1>
        <img src="/ArquivosDeMídia/editar.png">
    </div>
    <div class="perguntas p${i} invisivel">
        <h1>Pergunta ${i + 1}</h1>
        <input class="txt_pergunta${i}" type="text" placeholder="Texto da pergunta">
        <div class="input_color"> <span class="corzinha" > Cor de fundo da pergunta </span> <input class="cor${i}" type="color" placeholder="Cor de fundo da pergunta" / > </div>

        <h1>Resposta correta</h1>
        <input class="respostacorreta${i} type="text" placeholder="Resposta correta">
        <input class="urlcorreta${i} type="text" placeholder="URL da imagem">

        <h1>Respostas incorretas</h1>
        <input class="respostaincorretaum${i} type="text" placeholder="Resposta incorreta 1">
        <input class="urlincorretaum${i} type="text" placeholder="URL da imagem 1">
        <br />
        <input class="respostaincorretadois${i} type="text" placeholder="Resposta incorreta 2">
        <input class="urlincorretadois${i} type="text" placeholder="URL da imagem 2">
        <br />
        <input class="respostaincorretatres${i} type="text" placeholder="Resposta incorreta 3">
        <input class="urlincorretatres${i} type="text" placeholder="URL da imagem 3">
        <br />

    </div>`
    }
    document.querySelector(".perguntasquizz").innerHTML += `<button onclick="ir_niveis()">Prosseguir pra criar níveis</button>`;


    document.querySelector(".info_basica").classList.add("invisivel");
    document.querySelector(".info_basica").classList.remove("adiciona");
    document.querySelector(".perguntasquizz").classList.add("adiciona");
    document.querySelector(".perguntasquizz").classList.remove("invisivel");

}
function ir_niveis() {
    for (let i = 0; i < quantidade_perguntas; i++) {
        let cont_resp = 0;

        if (document.querySelector(".txt_pergunta" + i).value.length < 20) {
            alert("A pergunta tem que possuir no minimo 20 caracteres!")
            return
        }


        if (document.querySelector(".respostacorreta" + i).value.length === 0) {
            alert("A resposta não pode estar vazia!")
            return
        }

        try {
            let url = new URL(document.querySelector(".urlcorreta" + i).value)
            url_correta = true;

        } catch (err) {
            url_correta = false;

        }
        try {
            let url = new URL(document.querySelector(".urlincorretaum" + i).value)
            url_incorreta = true;

        } catch (err) {
            url_incorreta = false;

        }


        if (url_correta === false) {
            alert("A URL da imagem da resposta correta esta errado!")
            return
        }
        if (url_incorreta === false) {
            alert("A URL da imagem da respoata incorreta esta errado!")
            return
        }
        if (document.querySelector(".respostacorreta" + i).value.length === 0) {
            alert("A resposta não pode estar vazia!")
            return
        }
        if (document.querySelector(".respostaincorretaum" + i).value.length === 0) {
            alert("A resposta não pode estar vazia!")
            return
        }
        Tdsperguntas[i] = {};   
        Tdsperguntas[i].title = document.querySelector(".txt_pergunta" + i).value;
        Tdsperguntas[i].color = document.querySelector(".cor" + i).value;
        Tdsperguntas[i].answers = [{},{}];
        Tdsperguntas[i].answers[0].text = document.querySelector(".respostacorreta" + i).value;
        Tdsperguntas[i].answers[0].image = document.querySelector(".urlcorreta" + i).value;
        Tdsperguntas[i].answers[0].isCorrectAnswer = true;
        Tdsperguntas[i].answers[1].text = document.querySelector(".respostaincorretaum" + i).value;
        Tdsperguntas[i].answers[1].image = document.querySelector(".urlincorretaum" + i).value;
        Tdsperguntas[i].answers[1].isCorrectAnswer = false;

        if (document.querySelector(".respostaincorretadois" + i).value.length != 0) {
            try {
                let url = new URL(document.querySelector(".urlincorretadois" + i).value)
                url_incorretadois = true;
    
            } catch (err) {
                url_incorretadois = false;
            }
            if(url_incorretadois === false) {
                alert("A URL da imagem esta errado!" + "Resposta errada dois" + i )
                return
            }
            Tdsperguntas[i].answers[2] = {};
            Tdsperguntas[i].answers[2].text = document.querySelector(".respostaincorretadois" + i).value;
            Tdsperguntas[i].answers[2].image = document.querySelector(".urlincorretadois" + i).value;
            Tdsperguntas[i].answers[2].isCorrectAnswer = false;

        }
        if (document.querySelector(".respostaincorretatres" + i).value.length != 0) {
            try {
                let url = new URL(document.querySelector(".urlincorretatres" + i).value)
                url_incorretatres = true;
    
            } catch (err) {
                url_incorretatres = false;
            }
            if(url_incorretatres == false) {
                alert("A URL da imagem esta errado!" + "Resposta errada tres" + i)
                return
            }
            Tdsperguntas[i].answers[3] = {};
            Tdsperguntas[i].answers[3].text = document.querySelector(".respostaincorretatres" + i).value;
            Tdsperguntas[i].answers[3].image = document.querySelector(".urlincorretatres" + i).value;
            Tdsperguntas[i].answers[3].isCorrectAnswer = false;

        }
        console.log(Tdsperguntas);
        enviar_quizz.questions = Tdsperguntas;
        console.log(enviar_quizz);
    }

    for (let ii = 0; ii < quantidade_niveis; ii++) {
        document.querySelector(".niveis").innerHTML += ` 
        <div onclick="perguntasaparece(this)" class="pergunta_1 adiciona">
            <h1>Nível ${ii + 1}</h1>
            <img src="/ArquivosDeMídia/editar.png">
         </div>

        <div class="nivel um invisivel">
            <h1>Nível ${ii + 1}</h1>
            <input class="titulonivel${ii}" type="text" placeholder="Título do nível">
            <input class="acertominimo${ii}" type="text" placeholder="% de acerto mínima">
            <input class="URl_nivel${ii}" type="text" placeholder="URL da imagem do nível">
            <input class="descricaonivel${ii}" type="text" placeholder="Descrição do nível">
        </div>`
    }
    document.querySelector(".niveis").innerHTML += `<button onclick="concluirCadastro(this)">Finalizar Quizz</button>`
    document.querySelector(".perguntasquizz").classList.add("invisivel");
    document.querySelector(".perguntasquizz").classList.remove("adiciona");
    document.querySelector(".niveis").classList.add("adiciona");
    document.querySelector(".niveis").classList.remove("invisivel");

}
function perguntasaparece(ref) {
    ref.nextElementSibling.classList.toggle("invisivel");
    ref.nextElementSibling.classList.toggle("adiciona");


}

function concluirCadastro() {
    for (let i = 0; i < quantidade_niveis; i++) {
        if (document.querySelector(".titulonivel" + i).value.length < 10) {
            alert("O titulo do nível deve possuir no minimo 10 caracteres!")
            return
        }
        if (document.querySelector(".acertominimo" + i).value < 0 || document.querySelector(".acertominimo" + i).value > 100 || isNaN(document.querySelector(".acertominimo" + i).value) || document.querySelector(".acertominimo" + i).value === "") {
            alert("A porcentagem deve ser um numero entre 0 a 100!")
            return
        }
        try {
            let url = new URL(document.querySelector(".URL_nivel" + i).value)
            url_correta = true;

        } catch (err) {
            url_correta = false;

        }
        if (url_correta === false) {
            alert("A URL da imagem esta errada!!")
            return
        }
        if (document.querySelector(".descricaonivel" + i).value.length < 30) {
            alert("A descrição exige no minimo 30 caracteres!!")
            return
        }
        nivel0[i] = document.querySelector(".acertominimo" + i).value;
        Tdslevels[i] = {};   
        Tdslevels[i].title = document.querySelector(".URL_nivel" + i).value;
        Tdslevels[i].image = document.querySelector(".cor" + i).value;
        Tdslevels[i].text = document.querySelector(".descricaonivel" + i).value;
        Tdslevels[i].minValue = document.querySelector(".acertominimo" + i).value;
        
    }
    for (let iii=0; iii<nivel0.length; iii++) {
        if(nivel0[iii] == 0) {
            verifica = 1;
        }
    }

    if (verifica != 1) {
        alert("Obrigatório um dos niveis ter acerto minimo 0!")
        return
    }

    console.log(Tdslevels);
    enviar_quizz.levels = Tdslevels ;
    console.log (enviar_quizz);
    document.querySelector(".niveis").classList.add("invisivel");
    document.querySelector(".niveis").classList.remove("adiciona");
    document.querySelector(".quizz_pronto").classList.add("adiciona");
    document.querySelector(".quizz_pronto").classList.remove("invisivel");
    const promessa = axios.post('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes', enviar_quizz);
    promessa.then(enviar);
    promessa.catch(erro);

    document.querySelector(".quizz_pronto").innerHTML += ` 
            <div class="tema">
                <img src=${enviar_quizz.image}>
                <p class="TituloQuizz">${enviar_quizz.title}</p>
            </div>
            <button onclick="Acessar_Quizz()">Acessar Quizz</button>
            <p onclick="reiniciar()" class="Voltar">Voltar pra home</p>
            `

}
function reiniciar(){
    window.location.reload();
}





function enviar(ref){
    id_criado = ref;
    localStorage.setItem("id" + id_criado.data.id, id_criado.data.id);
    localStorage.setItem(id_criado.data.id, id_criado.data.key);
    console.log(id_criado.data)
    const mostrar = localStorage.getItem("ID");
}