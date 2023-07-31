//Homework_26

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// Показ або ховання алерту
let alertVisible = false;
const alertBtn = document.getElementById('alertBtn');
const alertContainer = document.getElementById('alertContainer');
alertBtn.addEventListener('click', function() {
  if (alertVisible) {
    alertContainer.innerHTML = '';
    alertVisible = false;
  } else {
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', 'alert-warning', 'alert-dismissible', 'fade', 'show', 'mt-3');
    alertDiv.setAttribute('role', 'alert');
    alertDiv.textContent = 'Це бутстрапівський алерт. Натисніть хрестик для закриття.';

    const closeButton = document.createElement('button');
    closeButton.classList.add('btn-close');
    closeButton.setAttribute('type', 'button');
    closeButton.setAttribute('data-bs-dismiss', 'alert');
    closeButton.setAttribute('aria-label', 'Close');

    alertDiv.appendChild(closeButton);
    alertContainer.appendChild(alertDiv);
    alertVisible = true;
  }
});

// Виведення дати народження
const showBirthDateBtn = document.getElementById('showBirthDateBtn');
const birthDateContainer = document.getElementById('birthDateContainer');

showBirthDateBtn.addEventListener('click', function() {
  const birthDate = moment('1997-10-02', 'YYYY-MM-DD');
  birthDateContainer.textContent = `Дата народження: ${birthDate.format('MMMM D, YYYY')}`;
});

// Перетворення формату дати
const form = document.querySelector('form');
const birthDateInput = document.getElementById('birthDateInput');
const convertedBirthDateContainer = document.getElementById('convertedBirthDateContainer');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const inputDate = birthDateInput.value.trim();
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

  if (dateRegex.test(inputDate)) {
    const birthDate = moment(inputDate, 'DD/MM/YYYY');
    convertedBirthDateContainer.textContent = `Перетворений формат: ${birthDate.format('MMMM D, YYYY')}`;
  } else {
    convertedBirthDateContainer.textContent = 'Некоректний формат дати. Введіть дату у форматі: DD/MM/YYYY';
  }
});