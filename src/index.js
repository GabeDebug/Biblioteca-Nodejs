const { error } = require('console');
const fs = require('fs');
const { resourceLimits } = require('worker_threads');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (error,texto) => {
    if(error) {
        console.log("Qual e o erro?", error.code)
        return
    }
   contaPalavras(texto)
});

function contaPalavras(texto) {
    const extrair = extrairParagrafo(texto);
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.flatMap((paragrafos) => {
        if(!paragrafos) return []
        return capturaPalavra(paragrafos)

    })
    console.log(contagem)
};

function extrairParagrafo(texto) {
    const paragrafos = texto.toLowerCase().split('\n');
}

function limpaPalavra(palavra) {
    return palavra.replace(/[{¨!.,;:@#$%¨&*()^~=+-<>}]/g)
}


function capturaPalavra(texto){
    const listapalavras = texto.split(" ");
    const resultado = {};

    listapalavras.forEach(palavra => {
        if(palavra.length >= 3){
            const palavraLimpa = limpaPalavra(palavra);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
        }
    });

    return resultado;
}