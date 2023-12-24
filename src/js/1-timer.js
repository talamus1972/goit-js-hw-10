// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate;
const input = document.querySelector("#datetime-picker");
const button = document.querySelector("button");
button.setAttribute('disabled', 'true');
button.classList.add("start");
const dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
         console.log(selectedDates[0]);
        if (selectedDates[0] < options.defaultDate) {
            button.setAttribute('disabled', 'true');
            // window.alert("Please choose a date in the future");
        iziToast.show({
            position: 'topRight',
            messageColor: '#FFFFFF',
            backgroundColor: '#EF4040',
            messageSize: '16px',
            messageLineHeight: '1.5',
        message: 'Please choose a date in the future',
      });
        }
        button.removeAttribute('disabled')
        userSelectedDate = selectedDates[0];              
    },
};

flatpickr(input, options);

button.addEventListener("click", () => {
      button.setAttribute('disabled', 'true');
   const interval = setInterval(() => {
        const selectedDateTime = userSelectedDate;
        const currentDateTime = Date.now();
        const timerTime = selectedDateTime - currentDateTime;
        const result = convertMs(timerTime);
dataDays.textContent = `${result.days}`
dataHours.textContent = `${result.hours}`
dataMinutes.textContent = `${result.minutes}`
dataSeconds.textContent = `${result.seconds}`
        if (timerTime <= 0) {
            clearInterval(interval);

             console.log('Interval cleared');
        }
  }, 1000);
});



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}





