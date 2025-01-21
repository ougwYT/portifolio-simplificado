//variaveis: fragmentos de memorias guardadas pra uso futuro
//-let/const/var(descontinuado)

//funções: trecho de um código, executado somente quando é chamado.

let input = document.getElementById("input-principal");
let botao = document.getElementById("botao-adicionar");
let listacompleta = document.getElementById("tarefas");

let arraydetarefas = [];

function cliqueiNobotao() {
  arraydetarefas.push(input.value);
  mostrarnatela();
}

function mostrarnatela() {
  let novalista = "";

  arraydetarefas.forEach((tarefa) => {
    novalista =
      novalista +
      `
    <li class="item-tarefa">
<p>${tarefa}</p>

    </li>
    
    `;
  });

  listacompleta.innerHTML = novalista;
}

botao.addEventListener("click", cliqueiNobotao);
