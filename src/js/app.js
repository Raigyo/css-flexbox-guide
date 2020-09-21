const buttonDOM = document.getElementById('button');
const textDOM = document.getElementById('text');
const text = textDOM.innerHTML;
let filled = false;

buttonDOM.addEventListener('click', function () {
  if (filled) {
    filled = false;
    textDOM.innerHTML = text;
    buttonDOM.innerHTML = 'Add text';
  } else {
    filled = true;
    textDOM.innerHTML = text.repeat(35);
    buttonDOM.innerHTML = 'Delete text';
  }
});
