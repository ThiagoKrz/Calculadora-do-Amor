

// variaveis globais
var yourName = document.getElementById("yourname"),
  theirName = document.getElementById("theirname"),
  calcBtn = document.querySelector("button"),
  yourlovescoreis = document.getElementById("yourlovescoreis"),
  loveScore = Math.random() * 100,
  loveInfo = document.getElementById("loveinfo"),
  reloadBtn = document.getElementById("reload");
loveScore = Math.floor(loveScore) + 1;

//valores input
function capitalize_Words(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// Calculo de Amor
function love() {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  (async function () {
    var i = 0;
    while (i < loveScore) {
      document.getElementById("score").innerHTML = i + "%";
      await sleep(20);
      i++;
    }
  })();
}

// eventilistener
calcBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (yourName.value == "" && theirName.value == "") {
    alert("Você não pode deixar este campo vazio");
  }
  if (yourName.value == "") {
    alert("Por favor escreva seu nome");
  }
  if (theirName.value == "") {
    alert("Por favor escreva o nome do seu parceiro");
  }

  //condicoes
  else if (loveScore <= 10) {
    yourlovescoreis.innerHTML = "O seu nivel de amor é";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Você</b> e " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " se amam como água e óleo. Me desculpe, mas isso não é suficiente para um relacionamento perfeito.";
  } else if (loveScore <= 20) {
    yourlovescoreis.innerHTML = "O seu nivel de amor é";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Você</b> e " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " se amam desse tiquinho 🤏. Precisam colocar um pouco de concentração no seu amor.";
  } else if (loveScore <= 30) {
    yourlovescoreis.innerHTML = "O seu nivel de amor é";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Você</b> e " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " se amam até que bem. Acho que deveriam melhorar isso! ";
  } else if (loveScore <= 40) {
    yourlovescoreis.innerHTML = "O seu nivel de amor é";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Você</b> e " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " se amam como Romeu & Julieta. Não há falsidade em seu amor. Vá em frente!";
  } else if (loveScore <= 50) {
    yourlovescoreis.innerHTML = "O seu nivel de amor é";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Você</b> e " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " se amam como personagem de romance. Essa é uma boa combinação, e um bom exemplo de amor verdadeiro.";
  } else if (loveScore <= 60) {
    yourlovescoreis.innerHTML = "O seu nivel de amor é";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Você</b> e " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " se amam como a Lua e a Terra. Vocês não podem viver separados.";
  } else if (loveScore <= 70) {
    yourlovescoreis.innerHTML = "O seu nivel de amor é";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Você</b> e " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " se amam como um Rio ama o Mar. Espalhem o amor, não o ódio.";
  } else if (loveScore <= 80) {
    yourlovescoreis.innerHTML = "O seu nivel de amor é";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Você</b> e " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " se amam como cola. Nada pode separar vocês. Amor é para sempre.";
  } else if (loveScore <= 90) {
    yourlovescoreis.innerHTML = "O seu nivel de amor é";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Você</b> e " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " se amam mais do que tudo no mundo! Vocês são o melhor exemplo de amor verdadeiro.";
  } else if (loveScore <= 100) {
    yourlovescoreis.innerHTML = "O seu nivel de amor é";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Você</b> e " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " são almas gêmeas. É bom se casar com " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " logo. Desejo toda a sorte do mundo!";
  }
});
