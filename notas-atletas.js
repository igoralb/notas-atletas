let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calcularMedia(notas) {
  let soma = 0;
  let notasOrdenadas = notas.slice().sort(function (a, b) {
    return a - b;
  });
  notas.sort()

  for (let i = 1; i < notasOrdenadas.length - 1; i++) {
    soma += notasOrdenadas[i];
  }

  let media = (soma) / (notasOrdenadas.length - 2);
  return media;
}

for (let i = 0; i < atletas.length; i++) {
  let atleta = atletas[i];
  let media = calcularMedia(atleta.notas);
  console.log(`Atleta: ${atleta.nome}`);
  console.log(`Notas Obtidas: ${atleta.notas.join(", ")}`);
  console.log(`Média: ${media.toFixed(2)}\n`);

}