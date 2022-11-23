//EXERCICIO 01 DISCIPLINA PROGRAMAÇÃO WEB COM NODE JS

//console.log("hello word!");
/*
PASSO 6 e 7
const prompt = require("prompt");
prompt.start();
prompt.get(
  ["nome", "sobrenome", "endereco", "email", "cpf"],
  function (_, result) {
    console.log("Nome: " + result.nome);
    console.log("sobrenome: " + result.sobrenome);
    console.log("endereço: " + result.endereco);
    console.log("email: " + result.email);
    console.log("cpf: " + result.cpf);
  }
);
*/
// PASSO 08

const prompt = require("prompt");
var schema = {
  properties: {
    nome: {
      pattern: /^[a-zA-Z\s\-]+$/,
      message: "Nome não deve conter números.",
      required: true,
    },
    sobrenome: {
      pattern: /^[a-zA-Z\s\-]+$/,
      message: "Sobrenome não deve conter números.",
      required: true,
    },
    email: {
      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: "E-mail deve ser válido.",
    },
    cpf: {
      pattern: /\d{3}\.\d{3}\.\d{3}\-\d{2}/g,
      message: "CPF deve ser válido.",
    },
  },
};

prompt.start();
prompt.get(schema, function (err, result) {
  console.log("nome:" + result.nome);
  console.log("sobrenome: " + result.sobrenome);
  console.log("email: " + result.email);
  console.log("cpf: " + result.cpf);
});
