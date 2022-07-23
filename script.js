'use strict';

// Selecting elements
const bill = document.getElementById('bill');
const people = document.getElementById('people');
const custom = document.getElementById('custom');
const tip = document.getElementById('tip');
const total = document.getElementById('total');
const btnsPer = document.querySelectorAll('.btn--per');
const reset = document.getElementById('reset');

let persentage;

// Starting conditions
const init = function () {
  bill.value = 0;
  people.value = 0;
  custom.value = '';
  tip.textContent = '0.00$';
  total.textContent = '0.00$';
};
init();

// Calculates tips and total payment and dispays them
const calculateDisplay = function (persentage) {
  // All calculations
  const payRes = bill.value / people.value;
  const tipRes = payRes * (persentage / 100);
  const totalRes = payRes + tipRes;

  // display tip(per person) and total(per person)
  tip.textContent = tipRes.toFixed(2);
  total.textContent = totalRes.toFixed(2);
};

// Loop through Persentage buttons
for (let i = 0; i < btnsPer.length; i++) {
  // Tip buttons' functionality
  btnsPer[i].addEventListener('click', function () {
    // Gets persentage(number with $ symbol), parses and returns just number
    persentage = parseFloat(btnsPer[i].value);

    calculateDisplay(persentage);
  });
}

// Input Custom's functionality
custom.addEventListener('change', function () {
  persentage = parseFloat(custom.value);
  calculateDisplay(persentage);
});

// Button Reset's functionality
reset.addEventListener('click', init);
