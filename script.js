// while
// do/while
// for

// Crie uma lista com 5 nomes usando um while

// enquanto (condição verdadeira) faça alguma coisa
let numeroDeVezes = 0
while (numeroDeVezes < 5) {
    console.log("Passou aqui!")
    numeroDeVezes = numeroDeVezes + 1
}

//Lista, array ou vetor
let lista = ['banana', 'maça', 'kiwi', 'morango', 'laranja', 'pera']
// Matriz
let listaDeListas = [
    ['banana', 'maça', 'kiwi', 'morango', 'laranja', 'pera'],
    ['banana', 'maça', 'kiwi', 'morango', 'laranja', 'pera'],
    ['banana', 'maça', 'kiwi', 'morango', 'laranja', 'pera']
]
// Cria uma variável de contador
let posicao = 0
// Cria uma lista não ordenada
const listaEmTela = document.createElement("ol")
 
while (posicao < lista.length) {
console.log(lista[posicao])
const itemLista = document.createElement("li")
itemLista.textContent = lista[posicao]
listaEmTela.appendChild(itemLista)
posicao = posicao + 1
}

document.body.appendChild(listaEmTela)


posicao = 0
const listaEmTelaDoWhile = document.createElement("ol")

do {
        console.log(lista[posicao])
        const itemLista = document.createElement("li")
        itemLista.textContent = lista[posicao]
        listaEmTela.appendChild(itemLista)
        posicao = posicao + 1
        } while (posicao < lista.length);