const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];



const nomes = []
for (let i = 0; i < personagens.length; i++) {
  const personagem = personagens[i];
  nomes.push(personagem.nome);
}
console.log(nomes);



// map: permite obter um novo array a partir de um array existenste, não modifica o array original
// Está "mapeando" o retorno da callback no novo array
const nomes2 = personagens.map(function (personagem) {
  return `${personagem.nome} 2`; // o retorno da callback vai pra variável
});
console.log(nomes2);