/* buttons */
const buttons = document.querySelectorAll('#values');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
const del = document.getElementById('delete');

const sum = document.querySelector('.box input[name="sum"]');
sum.disabled = 'true';

buttons.forEach((event) => {
  event.addEventListener('click', () => {
    sum.value += event.value;
  });
});

equals.addEventListener('click', () => {
  const equal = Function(`return ${sum.value}`) ();
  (sum.value.length > 0) ? sum.value = equal : sum.value = 'It\'s empty you idiot';
});

clear.addEventListener('click', () => {
  sum.value = '';
});

del.addEventListener('click', () => {
  sum.value = sum.value.slice(0, - 1);
});