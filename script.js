const inputLetter = document.getElementById('carta-texto'); // Input com o texto do usuário
const pLetter = document.getElementById('carta-gerada'); // Tag P nde a carta misteriosa será exibida
const button = document.getElementById('criar-carta'); // Botão Criar Carta misteriosa

// Requisito 16
function randomClassStyle() {
  const arrayStyles = ['newspaper', 'magazine1', 'magazine2'];
  const randomClass = Math.floor(Math.random() * arrayStyles.length);
  return classStyle = arrayStyles[randomClass];
}

function randomClassSize() {
  const arraySizes = ['medium', 'big', 'reallybig'];
  const randomClass = Math.floor(Math.random() * arraySizes.length);
  return classSize = arraySizes[randomClass];
}

function randomClassRotate() {
  const arrayRotates = ['rotateleft', 'rotateright'];
  const randomClass = Math.floor(Math.random() * arrayRotates.length);
  return classSize = arrayRotates[randomClass];
}

function randomClassSkew() {
  const arraySkews = ['skewleft', 'skewright'];
  const randomClass = Math.floor(Math.random() * arraySkews.length);
  return classSize = arraySkews[randomClass];
}

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
    spanWord.classList.add(randomClassStyle());
    spanWord.classList.add(randomClassSize());
    spanWord.classList.add(randomClassRotate());
    spanWord.classList.add(randomClassSkew());
    pLetter.appendChild(spanWord);
  }
  console.log(arrayWords);
}

// Requisito 5
function emptyInput() {
  if (inputLetter.value === '' || inputLetter.value === ' ') { // <!----> Possível bug quando o input tem vários espaços
    pLetter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    generateLetter();
  }
}

function createLetter() {
  button.addEventListener('click', emptyInput);
}
createLetter();
