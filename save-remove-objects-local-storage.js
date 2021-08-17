// Access Elements
const field1 = document.querySelector('.field1');
const field2 = document.querySelector('.field2');
const removeBtn = document.querySelector('.remove-btn');
const form = document.querySelector('form');
const fieldValue1 = document.querySelector('#field-1');
const fieldValue2 = document.querySelector('#field-2');
const KEY = 'KEY_FOR_OBJECT';

const loadFormsData = () => {
  return JSON.parse(localStorage.getItem(KEY));
};

let array1 = loadFormsData();

form.addEventListener('submit', (event) => {
  event.preventDefault();

  field1.textContent = fieldValue1.value;
  field2.textContent = fieldValue2.value;

  const object1 = {
    key1: fieldValue1.value,
    key2: fieldValue2.value,
  };

  array1.push(object1);
  loadFormsData();
  saveFormsData();
  renderData();
  clearFields();
});

const clearFields = () => {
  fieldValue1.value = '';
  fieldValue2.value = '';
};

const saveFormsData = () => {
  localStorage.setItem(KEY, JSON.stringify(array1));
};

const renderData = () => {
  array1.forEach((array) => console.log(array));
};
