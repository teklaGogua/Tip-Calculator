'use strict';

const bill = document.getElementById('bill');
const people = document.getElementById('people');
const tip = document.getElementById('tip');
const total = document.getElementById('total');
const custom = document.getElementById('custom');
const btnsPer = document.querySelectorAll('.btn--per');

for (let i = 0; i < btnsPer.length; i++) {
  btnsPer[i].addEventListener('click', function () {
    let persentage = btnsPer[i].value;
    console.log(persentage);
  });
}
