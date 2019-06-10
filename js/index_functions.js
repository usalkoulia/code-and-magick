var fireballSize = 22;

var getFireballSpeed = function (left) {
  return left ? 5 : 2;
};

var wizardSpeed = 3;
var wizardWidth = 70;

var getWizardHeight = function () {
  return 1.337 * wizardWidth;
};

var getWizardX = function (width) {
  // 50% ширины игрового поля минус половина ширины волшебника
  return width/2 - wizardWidth/2;
};

var getWizardY = function (height) {
  // треть высоты игрового поля минус половина высоты волшебника
  return height/3 - wizardHeight/2;
};


// функцию можно обьявить еще так:
// function getWizardY (height) {
//   return height/3 - wizardHeight/2;
// };
