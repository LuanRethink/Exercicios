const fs = require("fs");
const path = require("path");

function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      let arquivos = fs.readdirSync(caminho);
      arquivos = arquivos.map((arquivo) => path.join(caminho, arquivo));
      resolve(arquivos);
    } catch (e) {
      reject(e);
    }
  });
}

function elementosTerminadosCom(array, padrao) {
  return array.filter((el) => el.endsWith(padrao));
}

function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: "utf-8" });
      resolve(conteudo.toString());
    } catch (e) {
      reject(e);
    }
  });
}

function lerArquivos(caminhos) {
  return Promise.all(caminhos.map((caminho) => lerArquivo(caminho)));
}

function removerSeVazio(array) {
  return array.filter((el) => el.trim());
}
function removerSeIncluir(array, padraoTextual) {
  return array.filter((el) => !el.includes(padraoTextual));
}

function removerSeApenasNumero(array) {
  return array.filter((el) => {
    const num = parseInt(el.trim());
    return num !== num; // quero saber se funcionaria !!!num (não parece fazer sentido mas nunca se sabe)
  });
}

module.exports = {
  lerDiretorio,
  elementosTerminadosCom,
  lerArquivo,
  lerArquivos,
  removerSeVazio,
  removerSeIncluir,
  removerSeApenasNumero,
};
