// Função para exibir o número no campo de entrada
function displaynum(n1) {
  const display = document.getElementById('display');
  display.value = display.value + n1;
}

// Seleciona elementos
const display = document.getElementById('display');
const clearButton = document.querySelector('[name="text12"]');
const equalButton = document.querySelector('[name="eqlbtn"]');
const buttons = document.querySelectorAll('.num');

// Função para limpar o display
clearButton.addEventListener('click', () => {
  display.value = '';
  logMessage('Display limpo');
});

// Função para calcular o resultado
equalButton.addEventListener('click', () => {
  try {
    display.value = eval(display.value);
    logMessage('Cálculo realizado');
  } catch {
    display.value = 'Erro';
    logMessage('Erro de cálculo');
  }
});

// Evento click para cada botão numérico e operador
buttons.forEach(button => {
  button.addEventListener('click', () => {
    displaynum(button.value);
  });
});

// Eventos mouseover e mouseout para o campo de entrada
display.addEventListener('mouseover', () => {
  display.style.backgroundColor = '#444';
});

display.addEventListener('mouseout', () => {
  display.style.backgroundColor = '#000';
});

// Função de log para exibir mensagens (usa createElement, createTextNode, appendChild, insertBefore)
function logMessage(message) {
  const logContainer = document.getElementById('logContainer') || createLogContainer();
  const log = document.createElement('p');
  const textNode = document.createTextNode(message);
  log.appendChild(textNode);
  log.setAttribute('class', 'logMessage');

  // Insere antes do primeiro log, se existir
  const firstLog = logContainer.querySelector('p');
  if (firstLog) {
    logContainer.insertBefore(log, firstLog);
  } else {
    logContainer.appendChild(log);
  }

  // Remove o log após 3 segundos
  setTimeout(() => {
    log.remove();
  }, 3000);
}

// Função para criar o container de logs se não existir
function createLogContainer() {
  const logContainer = document.createElement('div');
  logContainer.setAttribute('id', 'logContainer');
  document.body.appendChild(logContainer);
  return logContainer;
}
