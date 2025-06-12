// Carrossel
const imagens = [
  "imgmor/1.jpeg",
  "imgmor/2.jpeg",
  "imgmor/3.jpeg",
  "imgmor/6.jpeg",
  "imgmor/7.jpeg",
  "imgmor/8.jpeg"
];

let index = 0;

function atualizarImagem() {
  const img = document.getElementById("imagem-carrossel");
  img.src = imagens[index];
}

function anterior() {
  index = (index - 1 + imagens.length) % imagens.length;
  atualizarImagem();
}

function proxima() {
  index = (index + 1) % imagens.length;
  atualizarImagem();
}

// Contador de tempo
const dataInicio = new Date("2025-04-03T00:00:00");

function atualizarContador() {
  const agora = new Date();
  const diff = agora - dataInicio;

  const segundosTotais = Math.floor(diff / 1000);
  const minutosTotais = Math.floor(segundosTotais / 60);
  const horasTotais = Math.floor(minutosTotais / 60);
  const diasTotais = Math.floor(horasTotais / 24);
  const mesesTotais = Math.floor(diasTotais / 30.44);

  const dias = diasTotais % 30;
  const horas = horasTotais % 24;
  const minutos = minutosTotais % 60;
  const segundos = segundosTotais % 60;

  document.getElementById("tempo").innerText =
    `${mesesTotais} meses, ${dias} dias, ${horas} horas, ${minutos} min, ${segundos} seg`;
}

setInterval(atualizarContador, 1000);

  const musica = document.getElementById("musica");
  const botaoPlay = document.getElementById("botao-play");
  const icone = document.getElementById("icone");

  let tocando = false;

  botaoPlay.addEventListener("click", () => {
    if (tocando) {
      musica.pause();
      icone.textContent = "▶";
    } else {
      musica.play();
      icone.textContent = "❚❚";
    }
    tocando = !tocando;
  });

  // Opcional: toca automaticamente
  window.addEventListener("load", () => {
    musica.play().then(() => {
      tocando = true;
      icone.textContent = "❚❚";
    }).catch(() => {
      // navegador bloqueou autoplay, aguardar clique
    });
  });
