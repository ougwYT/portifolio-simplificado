function adicionartarefa() {
  let valordoinput = document.querySelector("input").value;

  let li = document.createElement("li");
  li.innerHTML =
    valordoinput + '<span onclick= "deletartarefa(this)">❌</span>';

  document.querySelector("ul").appendChild(li);
  document.querySelector("input").value = "";
}

function deletartarefa(li) {
  li.parentElement.remove();
}
