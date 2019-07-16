// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here

shuffle = function (o) { //v1.0
  for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

var knownArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"] ;

var unkArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] ;


shuffle(unkArray);
shuffle(knownArray);


// known  A-H
var imgA = knownArray.pop();
var imgB = knownArray.pop();
var imgC = knownArray.pop();
var imgD = knownArray.pop();
var imgE = knownArray.pop();
var imgF = knownArray.pop();
var imgG = knownArray.pop();
var imgH = knownArray.pop();
var imgI = knownArray.pop();
var imgJ = knownArray.pop();
var imgK = knownArray.pop();
var imgL = knownArray.pop();

// unk distractor 1-12
var img1 = unkArray.pop();
var img2 = unkArray.pop();
var img3 = unkArray.pop();
var img4 = unkArray.pop();
var img5 = unkArray.pop();
var img6 = unkArray.pop();
var img7 = unkArray.pop();
var img8 = unkArray.pop();
var img9 = unkArray.pop();
var img10 = unkArray.pop();
var img11 = unkArray.pop();
var img12 = unkArray.pop();




/* Helper functions
*
*
*/


/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here



/* Hooks
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.correct) {
            alert('Your answer is correct! Yey!');
        } else {
            alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
        }
        next();
    })
}

// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/
