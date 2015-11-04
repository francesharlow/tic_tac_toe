console.log("main is linked")

var counter = 0;

// var allBoxes = document.querySelectorAll('.row');

var columnOne = document.querySelector('#column-one');
var columnTwo = document.querySelector('#column-two');
var columnThree = document.querySelector('#column-three');

var columnOneBoxes = columnOne.querySelectorAll('.row');
var columnTwoBoxes = columnTwo.querySelectorAll('.row');
var columnThreeBoxes = columnThree.querySelectorAll('.row');

// A user should be able to click on different squares to make a move

var toggleXandO = function(event) {
  // console.log(event);
  counter++;

  var box = event.target;

  // Every click will alternate between marking an X and O
  // A cell should not be able to be replayed once marked

  if (box.textContent === '' && counter === 0) {
    box.textContent = 'X';
    box.classList.add('red');
    box.removeEventListener('click',toggleXandO);
  } else if (box.textContent === '' && counter % 2 === 0) {
    box.textContent = 'X';
    box.classList.add('red');
    box.removeEventListener('click',toggleXandO);
  } else {
    box.textContent = 'O';
    box.classList.add('blue');
    box.removeEventListener('click',toggleXandO);
  }
};


// var endGame = function(target){
//   // console.log(target);
//   columnOneBoxes[0].removeEventListener('click',toggleXandO);
//   columnOneBoxes[1].removeEventListener('click',toggleXandO);
//   columnOneBoxes[2].removeEventListener('click',toggleXandO);
//   columnTwoBoxes[0].removeEventListener('click',toggleXandO);
//   columnTwoBoxes[1].removeEventListener('click',toggleXandO);
//   columnTwoBoxes[2].removeEventListener('click',toggleXandO);
//   columnThreeBoxes[0].removeEventListener('click',toggleXandO);
//   columnThreeBoxes[1].removeEventListener('click',toggleXandO);
//   columnThreeBoxes[2].removeEventListener('click',toggleXandO);
// };

// var declareWinner = function(event) {
//   var topRow = 
//   if (columnOneBoxes[0].textContent === columnTwoBoxes[0].textContent === columnThreeBoxes[0].textContent) {
//     var winner = columnOneBoxes[0].textContent;
//     window.alert(winner+" wins! Game over.");
//     endGame();
//   }
// }

// declareWinner();

// Add a reset button that will clear the contents of the board

var resetButton = document.querySelector('#reset');

var reloadPage = function(){
  window.location.reload(true);
};

resetButton.addEventListener('click',reloadPage);
columnOneBoxes[0].addEventListener('click',toggleXandO);
columnOneBoxes[1].addEventListener('click',toggleXandO);
columnOneBoxes[2].addEventListener('click',toggleXandO);
columnTwoBoxes[0].addEventListener('click',toggleXandO);
columnTwoBoxes[1].addEventListener('click',toggleXandO);
columnTwoBoxes[2].addEventListener('click',toggleXandO);
columnThreeBoxes[0].addEventListener('click',toggleXandO);
columnThreeBoxes[1].addEventListener('click',toggleXandO);
columnThreeBoxes[2].addEventListener('click',toggleXandO);



