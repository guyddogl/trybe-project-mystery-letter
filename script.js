const inputLetter = document.getElementById('carta-texto'); // Input com o texto do usuário
const pLetter = document.getElementById('carta-gerada'); // Tag P nde a carta misteriosa será exibida
const button = document.getElementById('criar-carta'); // Botão Criar Carta misteriosa

// Requisito 3 e 4
function generateLetter() {
  const inputValue = inputLetter.value;
  const arrayWords = [];
  const splitString = inputValue.split(' ');
  for (let index = 0; index < splitString.length; index += 1) {
    arrayWords.push(splitString[index]);
  }
  pLetter.innerText = '';
  for (let words = 0; words < arrayWords.length; words += 1) {
    const spanWord = document.createElement('span');
    spanWord.innerText = `${arrayWords[words]}`;
    pLetter.appendChild(spanWord);
  }
  console.log(arrayWords);
}

// Requisito 5
function emptyInput() {
  if (inputLetter.value === '' || inputLetter.value === ' ') {
    pLetter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    generateLetter();
  }
}

function createLetter() {
  button.addEventListener('click', emptyInput);
}
createLetter();
