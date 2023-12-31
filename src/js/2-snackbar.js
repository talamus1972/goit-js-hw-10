// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector(".form");
const input = document.getElementsByTagName('input')[0];
input.classList.add("input");

const fieldset = document.querySelector('fieldset');
fieldset.classList.add('fieldset');
const fulfilled = document.getElementsByTagName('input')[1];
const rejected = document.getElementsByTagName('input')[2];
const button = document.querySelector('button');
button.classList.add('button');


const promise = new Promise((resolve, reject) => {
  form.addEventListener('submit', event => {
    event.preventDefault();
   let delay = input.value;
    setTimeout(() => {
    
    if (fulfilled.checked) {
      resolve(delay);
      console.log(delay);
    } 
    else if (rejected.checked) {
      reject(delay);
    console.log(delay);
    }
    },delay);
  });
});

promise
  .then(delay => {
    iziToast.success({
      position: 'topRight',
      messageColor: '#FFFFFF',
      backgroundColor: '#59A10D',
      messageSize: '16px',
      messageLineHeight: '1.5',
      message: `✅ Fulfilled promise in ${delay}ms`,
    });
      form.reset();
  })
  .catch(delay => {
    iziToast.error({
      position: 'topRight',
      messageColor: '#FFFFFF',
      backgroundColor: '#EF4040',
      messageSize: '16px',
      messageLineHeight: '1.5',
      message: `❌ Rejected promise in ${delay}ms`,
    });
      form.reset();
  });

//   const input = document.getElementsByTagName('input')[0];
// const button = document.querySelector('button');
// const fulfilled = document.getElementsByTagName('input')[1];
// const rejected = document.getElementsByTagName('input')[2];

// let delay = '';

// input.addEventListener('input', event => {
//   delay = event.target.value;
//   console.log(delay);
// });

// fulfilled.addEventListener('click', () => {
//   console.log('herkk');
// });

// rejected.addEventListener('click', () => {
//   console.log('herffffffffffffffffffffffffkk');
// });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     button.addEventListener('click', event => {
//       if (fulfilled.checked) {
//         resolve(`✅ Fulfilled promise in ${delay}ms`);
//       } else if (rejected.checked) {
//         reject(`❌ Rejected promise in ${delay}ms`);
//       }
//     });
//   }, 1000);
// });

// promise
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });


// const createPromise = (delay, good) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (good) {
//         resolve(delay);
//       } else {
//         reject(delay);
//       }
//     }, delay);
//   })
//     .then(delay => {
//       iziToast.success({
//         title: 'OK',
//         message: `✅ Fulfilled promise in ${delay}ms`,
//         position: 'topCenter',
//       });
//     })
//     .catch(delay => {
//       iziToast.error({
//         message: `❌ Rejected promise in ${delay}ms`,
//         position: 'center',
//       });
//     });
// };

// const form = document.querySelector('.form');

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   let trueFalse = true;
//   if (form.state.value === 'rejected') trueFalse = false;
//   createPromise(form.delay.value, trueFalse);
//   form.reset();
//   trueFalse = true;
// });