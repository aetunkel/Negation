// In this file you can specify the trial data for your experiment

var unkImg = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
var knownImg = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"]

shuffle = function (o) { //v1.0
   for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
   return o;
}

shuffle(unkImg)
shuffle(knownImg)


const trial_info = {
    textbox_input: [
      // 1
        {
            question: "Type a message to your partner:",
            picture1: "img/A.jpg",
            picture2: "img/1.jpg",
            min_chars: 5
        },

    // 2

        {
          question: "Type a message to your partner:",
          picture1: "img/1.jpg",
          picture2: "img/2.jpg",
          min_chars: 5
        }
    ]
};
