// 1. Soma dos elementos: Crie uma função que recebe um array de números inteiros e imprime a soma de todos os elementos.

let numeros = [1,2,3,4,5,6,7,8];

function somaElementos(numeros) {
    
    let soma = 0;

    for (numero of numeros) {
        soma += numero;
    }

    return soma;

}

console.log(somaElementos(numeros));

// 2. Média dos elementos: Crie uma função que calcula a média dos elementos em um array de números inteiros.

let elementos = [8,7,9,8];

function mediaElementos(elementos) {

    let somaAc = 0;

    for (numero of elementos) {
        
        somaAc += numero;

    }

    return somaAc / elementos.length;

}

console.log(mediaElementos(elementos));

// 3. Menor elemento: Desenvolva uma função que encontre e exiba o menor elemento em um array de números inteiros.

let numInt = [22, 7, 15, 3, 8, 12];

function menorElemento (numInt) {

    let menor = numInt[0];

    for (numero of numInt) {

        if (numInt[i] < menor) {

            menor = numInt[i];

        }
    }

}

console.log(menorElemento(numInt));