var readlineSync = require('readline-sync');

var score = 0;
var userName = readlineSync.question('Hi, I am Priyanshu. Who are you ?');
console.log('WELCOME ' + userName + ' What you know about me :)');
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log('You guessed it right, COOL!!')
    score+=1;
  }
  else{
    console.log('you guessed it wrong, HardLuck!!')
    score-=1;
  }
  console.log('The Score is : '+ score)
  console.log('------------------------')
}

var questions = [
  {
    question:'Where do I live? ',
    answer:'Andheri'
  },
  {
    question:'Where do I work ',
    answer:'Infosys'
  },
  {
    question:'Do I sleep in afternoon ? (Yes/No) ',
    answer:'Yes'
  },
 {
    question:'Do I am good at friendship ? (Yes/No) ',
    answer:'Yes'
  },
  {
    question:'My favourite  joints to hangout Pizzahut/Dominoz/Subway ?',
    answer:'Subway'
  }
];

for(var i=0; i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log('YAY! Your overall score is: ', score)

var highscore = [
  {
  name:'Tanay',
  score:4
},
{
  name:'Akash',
  score:3
}
]

console.log('Top HighScorers are..');
for(var i=0;i<highscore.length;i++){
  var currentscore = highscore[i];

  console.log(currentscore.name,currentscore.score);
  
}

function scorecheck(oldscore,newscore){
  if(newscore<oldscore){
    console.log('Not a high score')
  }
  else{
    console.log('You HIT the HighScore..');
    console.log('Send me Snapshot .. To get Your Name on LeaderBoard')
  }
}
scorecheck(currentscore.score,score)