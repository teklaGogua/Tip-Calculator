'use strict';

// Selecting elements
const bill = document.getElementById('bill');
const people = document.getElementById('people');
const custom = document.getElementById('custom');
const tip = document.getElementById('tip');
const total = document.getElementById('total');
const btnsPer = document.querySelectorAll('.btn--per');

// Loop through Persentage buttons
for (let i = 0; i < btnsPer.length; i++) {
  // Tip buttons' functionality
  btnsPer[i].addEventListener('click', function () {
    // Gets persentage(number with $ symbol), parses and returns just number
    const persentage = parseFloat(btnsPer[i].value) / 100;

    // All calculations
    const payRes = bill.value / people.value;
    const tipRes = payRes * persentage;
    const totalRes = payRes + tipRes;

    // display tip(per person) and total(per person)
    tip.textContent = tipRes;
    total.textContent = totalRes;
  });
}
