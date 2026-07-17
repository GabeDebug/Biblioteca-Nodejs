const { error } = require('console');
const fs = require('fs');
const { resourceLimits } = require('worker_threads');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro,texto) => {
    capturaPalavra(texto)
});


function capturaPalavra(texto){
    const listapalavras = texto.split(" ");
    const resultado = {};

    listapalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1
    });

    console.log(resultado);
}