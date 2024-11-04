// Função para exibir o número clicado no campo de entrada
function displaynum(n1) {
  // Seleciona o campo de entrada pelo id 'display' e adiciona o valor do botão clicado ao valor atual
  const display = document.getElementById('display');
  display.value = display.value + n1;
}

// Seleciona os elementos importantes para a calculadora
const display = document.getElementById('display'); // Campo de entrada onde os números aparecem
const clearButton = document.querySelector('[name="text12"]'); // Botão de limpar o display
const equalButton = document.querySelector('[name="eqlbtn"]'); // Botão de igualdade (=) para calcular o resultado
const buttons = document.querySelectorAll('.num'); // Todos os botões de números e operadores

// Evento de clique no botão de limpar display
clearButton.addEventListener('click', () => {
  display.value = ''; // Limpa o conteúdo do display
  logMessage('Display limpo'); // Exibe uma mensagem de log indicando que o display foi limpo
});

// Evento de clique no botão de igualdade (=) para calcular o resultado
equalButton.addEventListener('click', () => {
  try {
      // Calcula a expressão no display usando a função eval() e exibe o resultado
      display.value = eval(display.value);
      logMessage('Cálculo realizado'); // Mensagem de log para indicar que o cálculo foi feito
  } catch {
      // Caso haja um erro no cálculo (ex.: sintaxe incorreta), exibe "Erro" no display
      display.value = 'Erro';
      logMessage('Erro de cálculo'); // Mensagem de log para indicar um erro no cálculo
  }
});

// Adiciona evento de clique a todos os botões de número e operadores
buttons.forEach(button => {
  button.addEventListener('click', () => {
      displaynum(button.value); // Chama a função displaynum para adicionar o valor do botão ao display
  });
});

// Eventos de mouseover e mouseout no display para alterar a cor de fundo
display.addEventListener('mouseover', () => {
  display.style.backgroundColor = '#444'; // Muda a cor de fundo do display ao passar o mouse
});

display.addEventListener('mouseout', () => {
  display.style.backgroundColor = '#000'; // Volta à cor de fundo original quando o mouse sai
});

// Função para exibir mensagens de log temporárias
function logMessage(message) {
  // Seleciona ou cria o container de logs onde as mensagens serão exibidas
  const logContainer = document.getElementById('logContainer') || createLogContainer();
  
  // Cria um novo elemento de parágrafo para a mensagem de log
  const log = document.createElement('p');
  const textNode = document.createTextNode(message); // Cria um nó de texto com a mensagem
  log.appendChild(textNode); // Adiciona o nó de texto ao parágrafo
  log.setAttribute('class', 'logMessage'); // Define uma classe para o parágrafo de log

  // Verifica se já existe algum log anterior; se sim, insere o novo log no topo
  const firstLog = logContainer.querySelector('p');
  if (firstLog) {
      logContainer.insertBefore(log, firstLog); // Insere o novo log antes do primeiro existente
  } else {
      logContainer.appendChild(log); // Caso não haja logs, adiciona o novo log como primeiro item
  }

  // Remove o log automaticamente após 3 segundos para evitar acúmulo
  setTimeout(() => {
      log.remove(); // Remove o log após 3 segundos
  }, 3000);
}

// Função para criar o container de logs, caso ele ainda não exista
function createLogContainer() {
  const logContainer = document.createElement('div'); // Cria um novo elemento <div>
  logContainer.setAttribute('id', 'logContainer'); // Define o id do novo <div> como 'logContainer'
  document.body.appendChild(logContainer); // Adiciona o logContainer ao final do body no documento
  return logContainer; // Retorna o logContainer para que possa ser usado em logMessage()
}
