const menor = 50
const maior = 1000
const numerSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maior + 1)
}

console.log(numerSecreto)
const elementoMenorValor = document.getElementById('menor_valor')
elementoMenorValor.innerHTML = menor
const elementoMaiorValor = document.getElementById('maior_valor')
elementoMaiorValor.innerHTML = maior