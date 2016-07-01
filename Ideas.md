#### German pronounciation game





- array of german words
- math.random chooses 5 words from array


- first word pushed to div
- when button pressed voice recognition is activated
  - and timer counts down
  - if wordrecognized = true and time is > 0
    - stop voice recognition
    - +1 to corret answers(beer can)
    - push 2nd word to div
    - text color to green MAYBE
  - else if wordrecognized = false and time is = 0
    - stop voice recognition
    - +1 incorrect answers(garbage can)
    - push 2nd word to div
    - text color red MAYBE



Peusodo code
var match
var wordpool
var currentWord
var usedWord
var

function 1 (pool to currentWord)
- loop over wordpool
 - shift.wordPool[0] and push into currentWord


function 2 (currentWord to usedWord)
if (match === true || match === false )
- shift.currentWord and push into usedWord
call function 1


function 3 (check for macth)
if (currentWord === wordrecognized && time > 0)
match == true
stop voice recognition
+1 to corret answers


else if (wordrecognized != currentWord && time = 0)
  - stop voice recognition
  match === false
  - +1 incorrect answers(garbage can)
