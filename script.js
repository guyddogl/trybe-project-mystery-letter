// Requisito 3
function generateLetter() {
  console.log('Clicou');
}

function createLetter() {
  const button = document.getElementById('criar-carta');
  button.addEventListener('click', generateLetter);
}
createLetter();