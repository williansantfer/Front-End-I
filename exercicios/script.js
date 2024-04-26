// 1.

var nomes = ["Ana", "Carlos", "Bruna", "Juca", "Zezé", "Lulu"];
var notas = [8.3, 7.2, 9, 7.5, 8.2, 10];

function maiorNota(nomes, notas) {

    let notao = 0;
    let melhorAluno = "nenhum";

    for (let i = 0; i < notas.length; i++) {
        if (notao < notas[i]) {
            notao = notas[i];
            melhorAluno = nomes[i];
        }
    }

    console.log(melhorAluno + " tirou a maior nota: " + notao);

}

maiorNota(nomes, notas);

// 2.

var inteiros =  [1,2,3,4,5,6,7,8,9,10];

function inverteArray(inteiros) {

    let invertido = [];

    for (numero of inteiros) {
        invertido.unshift(numero);
    }

    for (numero of invertido) console.log(numero);

}

inverteArray(inteiros);

// 3.

var menores = [1,2,3,4,5];
var maiores = [6,7,8,9,10];

function uneArrays(menores, maiores) {

    /*let total = new Array(menores.length + maiores.length);

    for (let i = 0; i < menores.length; i++) {
        total[i] = menores[i];
    }

    for (let i = 0; i < maiores.length; i++) {
        total[menores.length + i] = maiores[i];
    }

    console.log(total);*/

    // Outra forma de fazer:

    /*let total = [];

    for (numero of menores) {
        total.push(numero);
    }

    for (numero of maiores) {
        total.push(numero);
    }

    console.log(total);*/

    //Mais uma forma de fazer:

    let total = [...menores, ...maiores];

    console.log(total);

}

uneArrays(menores, maiores);