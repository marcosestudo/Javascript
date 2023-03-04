// High order functions
// Funções de alta-ordem, ou high-order functions, são funções que
// recebem outras funções como parâmetro ou retornam uma função
function calcular(a, b, operacao) {
  console.log("Realizando uma operação.");
  const resultado = operacao(a, b);
  return resultado;
}



// Referenciar função vs chamar / executar função
// Repare que não usamos os () ao lado do nome da função,
// porque ao fazer isso estaríamos executando a função
function somar(x, y) {
  console.log("Realizando soma.")
  return x + y;
}
console.log(calcular(3, 5, somar));
console.log(somar);      // Printa a própria função
console.log(somar(1, 1)); // Chama a função (printa o retorno da função)



// Função anõnima como parâmetro
// Também podemos escrever funções anônimas dentro da própria chamada da high-order function
calcular(9, 2, function (x, y) {
  console.log("Realizando substração.");
  return x - y;
});


// Callbacks
// Essas funções que são passadas como parâmetros geralmente são chamadas de callbacks
// Um exemplo comum de high-order function no javascript é a função .forEach() dos arrays
function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  });
}

const lista = ["Maçã", "Banana", "Laranja", "Limão", "Uva"];
// Forma tradicional
for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista);
}
// Forma funcional
lista.forEach(exibirElemento);
// Também poderia ser feito:
lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  });
});