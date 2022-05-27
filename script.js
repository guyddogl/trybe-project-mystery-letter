const inputLetter = document.getElementById('carta-texto'); // Input com o texto do usuário
const pLetter = document.getElementById('carta-gerada'); // Tag P nde a carta misteriosa será exibida
const button = document.getElementById('criar-carta'); // Botão Criar Carta misteriosa
const pCount = document.getElementById('carta-contador');

// Requisito 16
function randomClassStyle() {
  const arrayStyles = ['newspaper', 'magazine1', 'magazine2'];
  const randomClass = Math.floor(Math.random() * arrayStyles.length);
  const classStyle = arrayStyles[randomClass];
  return classStyle;
}

function randomClassSize() {
  const arraySizes = ['medium', 'big', 'reallybig'];
  const randomClass = Math.floor(Math.random() * arraySizes.length);
  const classSize = arraySizes[randomClass];
  return classSize;
}

function randomClassRotate() {
  const arrayRotates = ['rotateleft', 'rotateright'];
  const randomClass = Math.floor(Math.random() * arrayRotates.length);
  const classSize = arrayRotates[randomClass];
  return classSize;
}

function randomClassSkew() {
  const arraySkews = ['skewleft', 'skewright'];
  const randomClass = Math.floor(Math.random() * arraySkews.length);
  const classSize = arraySkews[randomClass];
  return classSize;
}

// Requisito 17
function newRandomClass(event) {
  const spanWord = document.getElementById(event.target.id);
  spanWord.className = '';
  spanWord.classList.add(randomClassStyle());
  spanWord.classList.add(randomClassSize());
  spanWord.classList.add(randomClassRotate());
  spanWord.classList.add(randomClassSkew());
  console.log(spanWord);
}

// Requisito 3 e 4
function getInputText() {
  const inputValue = inputLetter.value;
  const arrayWords = [];
  const splitString = inputValue.split(' ');
  for (let index = 0; index < splitString.length; index += 1) {
    arrayWords.push(splitString[index]);
  }
  return arrayWords;
}

function generateLetter() {
  const arrayWords = getInputText();
  pLetter.innerText = '';
  for (let words = 0; words < arrayWords.length; words += 1) {
    const spanWord = document.createElement('span');
    spanWord.innerText = `${arrayWords[words]}`;
    spanWord.setAttribute('id', words);
    spanWord.classList.add(randomClassStyle());
    spanWord.classList.add(randomClassSize());
    spanWord.classList.add(randomClassRotate());
    spanWord.classList.add(randomClassSkew());
    spanWord.addEventListener('click', newRandomClass);
    pLetter.appendChild(spanWord);
  }
  pCount.innerText = arrayWords.length;
}

// Requisito 5
function emptyInput() {
  if (!inputLetter.value.trim()) {
    pLetter.innerText = 'Por favor, digite o conteúdo da carta.';
    pLetter.style.color = 'red';
    pCount.innerText = '';
  } else {
    generateLetter();
  }
}

function createLetter() {
  button.addEventListener('click', emptyInput);
}
createLetter();
