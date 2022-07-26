'use strict';

// Selecting elements
const bill = document.getElementById('bill');
const people = document.getElementById('people');
const custom = document.getElementById('custom');
const tip = document.getElementById('tip');
const total = document.getElementById('total');
const btnsPer = document.querySelectorAll('.btn--per');
const reset = document.getElementById('reset');

// Variables
let persentage, active;

// Starting conditions
const init = function () {
  active = false;
  bill.value = '';
  people.value = '';
  custom.value = '';
  tip.textContent = '$0.00';
  total.textContent = '$0.00';

  people.classList.remove('false');
  bill.classList.remove('false');
  reset.style.backgroundColor = 'hsl(181, 100%, 21%)';
};
init();

// Calculates tips and total payment and displays them
const calculateDisplay = function (persentage) {
  // All calculations
  const payRes = bill.value / people.value;
  const tipRes = payRes * (persentage / 100);
  const totalRes = payRes + tipRes;

  // Display tip(per person) and total(per person)
  tip.textContent = '$' + tipRes.toFixed(2);
  total.textContent = '$' + totalRes.toFixed(2);

  // Display style and set active to false
  people.classList.remove('false');
  bill.classList.remove('false');
  active = false;
};

// Checks information about people and bill amount and set's style
const check = () => {
  // Setting active
  if (people.value !== '0' && people.value !== '' && bill.value !== '') {
    active = true;
  }

  // Check people value
  if (people.value === '0' || people.value === '') {
    people.classList.add('false');
  } else {
    people.classList.remove('false');
  }

  // Check bill value
  if (bill.value === '') {
    bill.classList.add('false');
  } else {
    bill.classList.remove('false');
  }
};

// Loop through Persentage buttons
for (let i = 0; i < btnsPer.length; i++) {
  // Tip buttons' functionality
  btnsPer[i].addEventListener('click', function () {
    check();

    // If calculator is in active mode displays results
    if (active) {
      // Gets persentage(number with $ symbol), parses and returns just number
      persentage = parseFloat(btnsPer[i].value);

      calculateDisplay(persentage);
      reset.style.backgroundColor = 'hsl(172, 67%, 45%)';
    }
  });
}

// Input Custom's functionality
custom.addEventListener('change', function () {
  check();
  if (active) {
    persentage = parseFloat(custom.value);
    calculateDisplay(persentage);
    reset.style.backgroundColor = 'hsl(172, 67%, 45%)';
  }
});

// Button Reset's functionality
reset.addEventListener('click', init);
