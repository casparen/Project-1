document.addEventListener('DOMContentLoaded', function () {

var playerOne = 0;
var playerTwo = 0;
var switchP = false;
var wordPool1 = ["sieben", "flugzeug", "schildkröte", "spülmaschine", "querflöte", "kartoffelsalat"];
var wordPool2 = ["bratwurst", "vorhang", "milchreis", "söhne", "bier fass", "straße"];
var currentWord = [];
var usedWord = [];
annyang.setLanguage('de-DE');
var buttonOne = document.querySelector('#buttonOne')
var buttonTwo = document.querySelector('#buttonTwo')


//render
////////////////////////////////////////////////////////////////////////////////
function render() {
  var p1 = document.getElementById('p1').innerText
document.getElementById("p1").innerHTML = playerOne;


var p1 = document.getElementById('p2').innerText
document.getElementById("p2").innerHTML = playerTwo;

}








//player 1
////////////////////////////////////////////////////////////////////////////////
buttonOne.addEventListener('click', function words1() {
checkForMatch1()
startTimer()
      var body = document.querySelector('body');
      var div = document.createElement('div');
      div.className = 'wordPool1'
      body.appendChild(div);

    for(var i = 0; i < wordPool1.length; i ++){
        var header = document.createElement('h1')
        header.id = wordPool1[i]
        header.className = 'wordsPool1'
        var newContent = document.createTextNode(wordPool1[i]);
        header.appendChild(newContent);
        div.appendChild(header);
    }
});


function checkForMatch1(){
    if (annyang) {
      var commands = {
        'sieben': function () {
          document.getElementById('sieben').style.textTransform = "uppercase";
          playerOne ++
          render()
        },
        'flugzeug': function (){
            document.getElementById('flugzeug').style.textTransform = "uppercase";
            playerOne ++
            render()
        },
        'schildkröte': function (){
            document.getElementById('schildkröte').style.textTransform = "uppercase";
            playerOne ++
            render()
        },
        'spülmaschine': function (){
            document.getElementById('spülmaschine').style.textTransform = "uppercase";
            playerOne ++
            render()
        },
        'querflöte': function (){
            document.getElementById('querflöte').style.textTransform = "uppercase";
            playerOne ++
            render()
        },
        'kartoffelsalat': function (){
            document.getElementById('kartoffelsalat').style.textTransform = "uppercase";
            playerOne ++
            render()
        }
     }
      annyang.addCommands(commands);
      annyang.debug();
      annyang.start();
   }
  }

//timer
/////////////////////////////////////////////////////////
function startTimer (){
var body = document.querySelector('body');
var h1 = document.createElement('h1');
h1.id = 'time'
body.appendChild(h1);
var sec = 30;
document.getElementById("time").innerHTML = sec;

  interval = setInterval(function(){

        if(document.getElementById("time").innerHTML === '1'){
          var body = document.querySelector('body');
          var h1 = document.querySelector("#time")
          body.removeChild(h1);
          annyang.abort();
          clearInterval(interval);
        }
        else if(document.getElementById("time").innerHTML > 1){
          document.getElementById("time").innerHTML = sec--;
        }


      },1000);
    }

//

// for(var i  )



//Player 2
//////////////////////////////////////////////////////////////////////////////////
buttonTwo.addEventListener('click', function words2() {
  checkForMatch2()
  startTimer()
  var body = document.querySelector('body');
  var div = document.createElement('div');
  div.className = 'wordPool2'
  body.appendChild(div);

  for(var i = 0; i < wordPool2.length; i ++){
    var header = document.createElement('h1')
    header.id = wordPool2[i]
    header.className = 'wordsPool2'
    var newContent = document.createTextNode(wordPool2[i]);
    header.appendChild(newContent);
    div.appendChild(header);
  }

});


function checkForMatch2(){
    if (annyang) {
      var commands = {
        'bratwurst': function () {
          document.getElementById('bratwurst').style.textTransform = "uppercase";
          playerTwo ++
          render();

        },
        'vorhang': function (){
            document.getElementById('vorhang').style.textTransform = "uppercase";
            playerTwo ++
            render();
        },
        'milchreis': function (){
            document.getElementById('milchreis').style.textTransform = "uppercase";
            playerTwo ++
            render();
        },
        'söhne': function (){
            document.getElementById('söhne').style.textTransform = "uppercase";
            playerTwo ++
            render();
        },
        'bier fass': function (){
            document.getElementById('bier fass').style.textTransform = "uppercase";
            playerTwo ++
            render();
        },
        'straße': function (){
            document.getElementById('straße').style.textTransform = "uppercase";
            playerTwo ++
            render();
        }
     }
      annyang.addCommands(commands);
      annyang.debug();
      annyang.start();
   }
  }


});






// function startTimer (){
// checkForMatch1()
// var body = document.querySelector('body');
// var h1 = document.createElement('h1');
// h1.id = 'time'
// body.appendChild(h1);
// var sec = 10;
//
//      setInterval(function(){
//
//        var timer = document.getElementById("time").innerHTML = sec;
//            sec --
//
//         if(document.getElementById("time").innerHTML === '0'){
//           moveToPlayer2()
//           var body = document.querySelector('body');
//           var h1 = document.querySelector("#time")
//           body.removeChild(h1);
//           secondPlayer()
//
//           switchP = true
//
//         }
//       },500);
//     }

//stop listening for a button event




//   function removeP1 (){
//     var body = document.querySelector('body');
//     var div = body.querySelector(".wordPool1")
//     body.removeChild(div);
//   }
//
//
//
// function render () {
//   console.log("Player One:" + playerOne + " Player Two:" + playerTwo);
// }
//
//

//
//
//
//
// //player 2
// ////////////////////////////////////////////////////////////////////////
// function secondPlayer () {
// if (this.switchP === true){
//   buttonTwo.addEventListener('click', function words1() {
//     alert('sdf')
//     startTimer()
//
//
//   });
//
// }
// }

// function checkForMatch2(){
//   if (annyang === true && playerTwo === true ) {
//
//     var commands = {
//       'eins': function () {
//         document.getElementById('eins').style.textTransform = "uppercase";
//         playerOne ++
//         render();
//         checkForEnd()
//       },
//
//
//       'zwei': function (){
//         render();
//         playerTwo ++
//
//       }
//     }
//
//
//
//     annyang.addCommands(commands);
//     annyang.debug();
//     annyang.start();
//   }
//
// }










// console.log();







// function toCurrentWord (){
//   for (var i = 0; i < wordPool.length; i++){
//       var firstWord = wordPool.shift();
//       currentWord.push(firstWord)
//       toUsedWord()
//   }
//  }
//
//  function toUsedWord (){
// console.log(currentWord);
//   var firstWord = currentWord.shift();
//   usedWord.push(firstWord);
//   }
//
//

// function checkForMatch () {
//   if (commands.Schnitzel === currentWord[0])
// }



//
// toCurrentWord()
// console.log(commands);

  // - shift.wordPool[0] and push into currentWord

//
// function toUsedWord (){
// var displayed = currentWord.shift()
// usedWord.push(displayed);
// toCurrentWord()
//
// }





// function 3 (check for macth)
// if (currentWord === wordrecognized && time > 0)
// match = true
// stop voice recognition
// +1 to corret answers
//
//
// else if (wordrecognized != currentWord && time = 0)
//   - stop voice recognition
//   match = false
//   - +1 incorrect answers(garbage can)













// var match = true;
// var noMatach = false;
// var process = false;
// command = currentWord;
//
// var wordPool1 = ["Test", "laufen", "schnizel", "Caspar", "essen"];
// var wordPool2 = ["wasser", "stein", "handy", "bus", "fahrad"];
// var selectedPool = [];
// var currentWord = [];
//
//
// // function gameStart () {
// //   randomPool()
// //
// // }
//
// function randomPool (){
//   var words = Math.random();
//   if (words > 0.5){
//     selectedPool = wordPool1;
//   }
//   else {
//     selectedPool = wordPool2
//   }
// }
// // randomPool()
// // console.log(selectedPool);
//
//
//
// function pushCurrentWord () {
// randomPool()
// for(var i = 0; i < selectedPool.length; i++){
//   var selectedWord = selectedPool.shift(selectedPool[i]);
//   currentWord = selectedWord;
//
// }
//
// }
//
//
// pushCurrentWord()
// console.log(currentWord);
//
//
//
//
//
//
//
// function renderCurrentWord () {
// randomPool()
// var div = document.getElementsByClassName('word-display');
//
// if (match){
// var p = document.createElement('p')
// var newContent = document.createTextNode(currentWord[0]);
// }
//
// else {
// alert('yee')
// }
//
// }
//
// renderCurrentWord()
//
//
// // function checkForMatch (){
// //   if (currentWord === speech...){
// //     match = true;
// //   }
// //   else {
// //     match = false;
// //   }
// // }
//
// // var wordPool1 = ["Test", "laufen", "schnizel", "Caspar", "essen"];
// // var chosenWords = " ";
// //
// //
// // function randomPool (){
// // for (var i = 0; i <= wordPool1.length; i++){
// //   var words = Math.floor(Math.random() * (wordPool1.length));
// //   var chosenWord = wordPool1[words]
// //   console.log(chosenWords);
// //
// // }
// // }
// //
// // randomPool()
