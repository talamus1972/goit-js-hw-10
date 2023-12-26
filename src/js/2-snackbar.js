// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const input = document.getElementsByTagName('input')[0];
const button = document.querySelector('button');
const fulfilled = document.getElementsByTagName('input')[1];
const rejected = document.getElementsByTagName('input')[2];

let delay = '';

input.addEventListener('input', event => {
  delay = event.target.value;
  console.log(delay);
});

fulfilled.addEventListener('click', () => {
  console.log('herkk');
});

rejected.addEventListener('click', () => {
  console.log('herffffffffffffffffffffffffkk');
});

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    button.addEventListener('click', event => {
      if (fulfilled.checked) {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else if (rejected.checked) {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    });
  }, 1000);
});

promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
