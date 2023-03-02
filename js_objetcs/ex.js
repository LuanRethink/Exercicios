let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

// 1. Crie uma função para adicionar uma nova linguagem à chave
// "languages".
const addLanguage = (obj, language) => obj.languages.push(language);
// addLanguage(programming, "Rafael");

// 2. Crie uma função para alterar o valor do nível de dificuldade
// ("difficulty").
const changeDifficulty = (obj, newDifficulty) =>
  (obj.difficulty = newDifficulty);
// changeDifficulty(programming, 4);

// 3. Crie uma função para excluir uma chave do objeto.

const deleteKey = (obj, keyToDelete) => delete obj[keyToDelete];
//deleteKey(programming, "difficulty");

// 4. Crie uma função para adicionar uma nova chave. Faça um teste
// criando uma chave com nome isFun e valor true.

const addNewKey = (obj, keyName, keyValue) => {
  obj[keyName] = keyValue;
};
//addNewKey(programming, "isFun", true);

// 5. Crie uma função para exibir no console todas as linguagens de
// programação armazenadas na chave "languages".

const showAllLanguages = (obj) => obj.languages;
//showAllLanguages(programming)

// 6. Crie uma função para exibir no console o nome de todas as chaves
// do objeto.

const showKeys = (obj) => Object.keys(obj);

//showKeys(programming);
// 7. Crie uma função para exibir no console todos os valores do objeto.

const showObjectValue = (obj) => Object.values(obj);

console.log(showObjectValue(programming));
