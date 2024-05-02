// 1. Soma dos elementos: Crie uma função que recebe um array de números inteiros e imprime a soma de todos os elementos.

let numeros = [1,2,3,4,5,6,7,8];

function somaElementos(numeros) {
    
    let soma = 0;

    for (let numero of numeros) {
        soma += numero;
    }

    return soma;

}

console.log(somaElementos(numeros));

// 2. Média dos elementos: Crie uma função que calcula a média dos elementos em um array de números inteiros.

let elementos = [8,2,9,6,8,3,7,5];

function mediaElementos(elementos) {

    let somaAc = 0;

    for (let numero of elementos) {
        
        somaAc += numero;

    }

    return somaAc / elementos.length;

}

console.log(mediaElementos(elementos));

// 3. Menor elemento: Desenvolva uma função que encontre e exiba o menor elemento em um array de números inteiros.

let numInt = [22, 7, 15, 3, 8, 12];

function menorElemento (numInt) {

    let menor = numInt[0];

    for (let numero of numInt) {

        if (numero < menor) {

            menor = numero;

        }
    }

    return menor;

}

console.log(menorElemento(numInt));

// 4. Segundo maior elemento: Escreva uma função para encontrar o segundo maior número em um array de inteiros.

let inteiros = [7,4,8,2,5,9,3,9];

function segundoMaiorElemento (inteiros) {

    let maior = 0;

    let segMaior = 0;

    for (let numero of inteiros) {

        if (numero > maior) {
            maior = numero;
        }

    }

    for (let numero of inteiros) {

        if (numero > segMaior && numero < maior) {
            segMaior = numero;
        }

    }

    return segMaior;

}
console.log(segundoMaiorElemento(inteiros));

// 5. Contagem de elementos ímpares: Implemente uma função que conte e exiba a quantidade de números ímpares em um array de inteiros.

let numInteiros = [1,2,3,4,5,6,7,8,9,10];

function contaImpares (numInteiros) {

    let impares = 0;

    for (let numero of numInteiros) {

        if (numero%2 == 1) {

            impares++;

        }

    }

    return impares;

}
console.log(contaImpares(numInteiros));

//6. Frequência de um número: Crie uma função que conte e exiba a frequência de um número específico em um array de inteiros.

let arrayInteiros = [2,7,5,9,6,4,5,8,3,5,10,7,5,15,8];

function freqNumero (arrayInteiros) {

    let numEspecifico = 5;

    let quantNumero = 0;

    for (let numero of arrayInteiros) {

        if (numero == numEspecifico) {

            quantNumero++;

        }

    }

    return quantNumero;

}
console.log(freqNumero(arrayInteiros));

// 7. Inversão do array: Escreva uma função que inverta a ordem dos elementos em um array e exiba o array resultante.

let array = [1,2,3,4,5,6,7,8,9,10];

function inverteArray (array) {

    return array.reverse();

}
console.log(inverteArray(array));

// 8. Verificar se um número está presente: Crie uma função que verifica se um determinado número está presente em um array de inteiros e exibe “Sim” ou “Não”.

let arrayInt = [3,7,5,2,8,4,9,1];

function verificaNumero (arrayInt) {

    if (arrayInt.find((elemento) => elemento == 5)) {

        return "Sim";

    } else {

        return "Não";

    }

}
console.log(verificaNumero(arrayInt));