//create a questions and answers array
//use cartoon/nick characters for trivia
//get gifs to make the game more engaging
//**don't forget increment seconds */
//use game reset as well

var timer;

var trivia = {
	// Set the boundaries of the game
	time: 15,	
	correct: 0,
	incorrect: 0,
	unanswered: 0,
	//Four answers nested within Question strings
	question: {
		one: {
			string: "What is the name of Dexter's sister?",
			answer: {
				one: {
					string: "Dee Dee",
					value: true
				},
				two: {
					string: "Mee Mee",
					value: false
				},
				three: {
					string: "Lee Lee",
					value: false
				},
				four: {
					string: "Olga",
					value: false
				}
			},
			gif: "assets/images/deedee.webp"
		},
		two: {
			string: "Who is the main trainer in the Pokemon series?",
			answer: {
				one: {
					string: "Red",
					value: false
				},
				two: {
					string: "Pikachu",
					value: false
				},
				three: {
					string: "Ash",
					value: true
				},
				four: {
					string: "Gory",
					value: false
				}
			},
			gif: "assets/images/ash.gif"
		},
		three: {
			string: "Where does Spongebob Squarepants work?",
			answer: {
				one: {
					string: "Central Perk",
					value: false
				},
				two: {
					string: "The Krusty Krab",
					value: true
				},
				three: {
					string: "The Greasy Spoon",
					value: false
				},
				four: {
					string: "Chum Bucket",
					value: false
				}
			},
			gif: "assets/images/kkrab.gif"
		},
		four: {
			string: "What is the name of the dog belonging to the Simpsons?",
			answer: {
				one: {
					string: "Santa's Little Helper",
					value: true
				},
				two: {
					string: "Jake the dog",
					value: false
				},
				three: {
					string: "Ruff",
					value: false
				},
				four: {
					string: "Boy",
					value: false
				}
			},
			gif: "assets/images/santa.gif"
		},
		five: {
			string: "Who lives in the giant head between Spongebob & Patrick?",
			answer: {
				one: {
					string: "Mr. Krabs",
					value: false
				},
				two: {
					string: "Plankton",
					value: false
				},
				three: {
					string: "Sandy",
					value: false
				},
				four: {
					string: "Squidward",
					value: true
				}
			},
			gif: "assets/images/squid.gif"
		},
		six: {
			string: "Who are the two main characters of Adventure Time?",
			answer: {
				one: {
					string: "Timmy & Vicky",
					value: false
				},
				two: {
					string: "Spongebob & Patrick",
					value: false
				},
				three: {
					string: "Finn & Jake",
					value: true
				},
				four: {
					string: "Kenon & Kel",
					value: false
				}
			},
			gif: "assets/images/finn.gif"
		},
		seven: {
			string: "Which character was often referred to as 'football head'?",
			answer: {
				one: {
					string: "Arnold",
					value: true
				},
				two: {
					string: "Dexter",
					value: false
				},
				three: {
					string: "Spongebob",
					value: false
				},
				four: {
					string: "Pink Panther",
					value: false
				}
			},
			gif: "assets/images/arnold.gif"
		},
		eight: {
			string: "Which sailor charactor would be lost without his can of spinach?",
			answer: {
				one: {
					string: "Mickey Mouse",
					value: false
				},
				two: {
					string: "Popeye",
					value: true
				},
				three: {
					string: "Juniper Lee",
					value: false
				},
				four: {
					string: "Betty Bop",
					value: false
				}
			},
			gif: "assets/images/popeye.gif"
		},
		nine: {
			string: "Who is Batman's side-kick?",
			answer: {
				one: {
					string: "Ice Man",
					value: false
				},
				two: {
					string: "Tarzan",
					value: false
				},
				three: {
					string: "Robin",
					value: true
				},
				four: {
					string: "Aqua Man",
					value: false
				}
			},
			gif: "assets/images/robin.gif"
		},
		ten: {
			string: "Where do the Simpsons live?",
			answer: {
				one: {
					string: "Bikini Bottom",
					value: false
				},
				two: {
					string: "Springfield",
					value: true
				},
				three: {
					string: "Spooner St.",
					value: false
				},
				four: {
					string: "City of Townsville",
					value: false
				}
			},
			gif: "assets/images/spring.gif"
		}
	},

	//Method that starts the timer
	startTimer: function() {
		trivia.time = 15;
		$("#timer").text("Time Remaining: " + trivia.time + " seconds");
		timer = setInterval(trivia.countDown, 1000)
	},

	//Method that stops the timer
	stopTimer: function() {
		clearInterval(timer);
	},
	// When time expires this method will activate
	timeOver: function() {
		this.unanswered++;		
		$(".answer").hide();
		$("#question").html("Whoops, every second counts! The correct answer is:<br>");
		$("[value='true']").contents().clone().appendTo($("#question"));
		$("#question").append("<br><img src='" + questions[i].gif + "'>");
		this.nextQuestion();
	},
	// Counts down the game timer a second at a time
	countDown: function() {
		trivia.time--;
		$("#timer").text("Time Remaining: " + trivia.time + " seconds");

		if (trivia.time === 0) {
			trivia.stopTimer();
			trivia.timeOver();
		}
	},

	startQuiz: function() {
		i = 0;
		this.correct;
		this.incorrect;
		this.unanswered;
		trivia.questionStart(questions[i]);
		$("#start").hide();
	},

	//Calls the previously assigned Qs and As to appear in "index.html"
	questionStart: function(q) {
		$(".answer").show();
		$("#question").text(q.string);
		$("#optionA").text(q.answer.one.string);
		$("#optionB").text(q.answer.two.string);
		$("#optionC").text(q.answer.three.string);
		$("#optionD").text(q.answer.four.string);

		$("#optionA").attr("value", q.answer.one.value);
		$("#optionB").attr("value", q.answer.two.value);
		$("#optionC").attr("value", q.answer.three.value);
		$("#optionD").attr("value", q.answer.four.value);

		this.startTimer();
	},

	rightAnswer: function() {
		this.correct++;
		$(".answer").hide();
		$("#question").html("Yay!");
		$("#question").append("<br><img src='" + questions[i].gif + "'>");
		this.nextQuestion();
		
	},

	wrongAnswer: function() {
		this.incorrect++;
		$(".answer").hide();
		$("#question").html("You missed it! Correct Answer:<br>");
		$("[value='true']").contents().clone().appendTo($("#question"));
		$("#question").append("<br><img src='" + questions[i].gif + "'>");
		this.nextQuestion();
	},

	nextQuestion: function() {
		i++
		this.stopTimer();
		if (i < questions.length){
			setTimeout(function(){trivia.questionStart(questions[i])}, 1000*9);
		}
		else {
			setTimeout(function(){trivia.endQuiz()}, 1000*10);
		}
	},

	endQuiz: function() {
		$("#start").show()
		$("#question").text("Game Over! Try to beat your scores below:")
		$("#question").append("<p>Correct: " + this.correct + "</p>");
		$("#question").append("<p>Incorrect: " + this.incorrect + "</p>");
		$("#question").append("<p>Time-outs " + this.unanswered + "</p>");
	}
};
// Loop that cycles through the ten questions to dynamically apply content to the html
for (var j = 0; j < 10; j++) {
	var number = Math.floor(Math.random() * 4) + 1;
	console.log(number);
}

var tQ = trivia.question;
var questions = [tQ.one, tQ.two, tQ.three, tQ.four, tQ.five, tQ.six, tQ.seven, tQ.eight, tQ.nine, tQ.ten]

// Hides the answer until we need it revealed
$(".answer").hide();

//Hitting the start button will begin the quiz. The 15 second timer will kickoff for each individual question.
$("#start").click(function() {
	trivia.startQuiz();
});

//Choosing the correct answer will stop the timer, and replace the question and answers with a correct answer message, and an animated gif
$(".answer").click(function() {
	console.log(this);
	console.log($(this).attr("value"));

	var check = $(this).attr("value");
	
	if (check === "true") {
		trivia.rightAnswer();
	}
	if (check === "false") {
		trivia.wrongAnswer();
	}
});