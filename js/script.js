// Criando as variáveis
const button = document.querySelector("button");
const inputLogin = document.querySelector("#login");
const inputSenha = document.querySelector("#senha");

// criando um elemento p para o erro
const error = document.createElement('p');

// Função que limpa os blocos de input
function clearForm() {
  inputLogin.value = '';
  inputSenha.value = '';
  error.textContent = '';
}

// Criando o evento de botão
button.addEventListener(("click"), function(event) {
  event.preventDefault();

  // validações do formulário
  //Login
  if (inputLogin.value === '') {
    error.textContent = "Este campo é obrigatório";
    inputLogin.insertAdjacentElement("afterend", error);
    error.setAttribute("class", "error");
    return false;
  }

  //senha
  if (inputSenha.value === '') {
    error.textContent = "Este campo é obrigatório";
    inputSenha.insertAdjacentElement("afterend", error);
    error.setAttribute("class", "error");
    return false;
  }

  // Imprime os valores no console
  console.log(inputLogin.value)
  console.log(inputSenha.value)
  
  // Chamando a função criada para limpar os blocos
  clearForm();
});