'use strict';

// данные

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

function pickRandomArrayItem(array) { // array - массив
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];

  return randomElement;
};

var wizards = [
  {
    name: pickRandomArrayItem(WIZARD_FIRST_NAMES) + " " + pickRandomArrayItem(WIZARD_LAST_NAMES),
    coatColor: pickRandomArrayItem(WIZARD_COAT_COLOR),
    eyesColor: pickRandomArrayItem(WIZARD_EYES_COLOR),
  },
  {
    name: pickRandomArrayItem(WIZARD_FIRST_NAMES) + " " + pickRandomArrayItem(WIZARD_LAST_NAMES),
    coatColor: pickRandomArrayItem(WIZARD_COAT_COLOR),
    eyesColor: pickRandomArrayItem(WIZARD_EYES_COLOR),
  },
  {
    name: pickRandomArrayItem(WIZARD_FIRST_NAMES) + " " + pickRandomArrayItem(WIZARD_LAST_NAMES),
    coatColor: pickRandomArrayItem(WIZARD_COAT_COLOR),
    eyesColor: pickRandomArrayItem(WIZARD_EYES_COLOR),
  },
  {
    name: pickRandomArrayItem(WIZARD_FIRST_NAMES) + " " + pickRandomArrayItem(WIZARD_LAST_NAMES),
    coatColor: pickRandomArrayItem(WIZARD_COAT_COLOR),
    eyesColor: pickRandomArrayItem(WIZARD_EYES_COLOR),
  },
];

// кончается генерация

console.log(wizards)

// начинается вставка - шаблон

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  var wizard = wizards[i];

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  similarListElement.appendChild(wizardElement);
}

userDialog.querySelector('.setup-similar').classList.remove('hidden');
