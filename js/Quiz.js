class Quiz {
  constructor() { }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if (gameState === 0) {
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if (contestantCountRef.exists()) {
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play() {
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("yellow");

    //write code to show a heading for showing the result of Quiz
    textSize(35);
    text("RESULT OF QUIZ", 350, 0);


    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();
    if (allContestants !== undefined) {
      textSize(25);
      text("NOTE : Contestant who answered correct are highlighted in green", 100, 230);
      var y = 230;
      for (var key in allContestants) {
        var corAns = "2";
        if (corAns === allContestants[key].answer) {
          fill("green");
        }
        else {
          fill("red");
        }
        y += 30;
        text(allContestants[key].name + " : " + allContestants[key].answer, 290, y);
      }
    }


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly

  }

}
