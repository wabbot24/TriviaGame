
window.onload = function () {
    Particles.init({
        connectParticles: true,
        selector: '#background',
        maxParticles: 200,
        color: '#48F2E3',
        sizeVariations: 5,
        speed: .2,
    });
    // $("#background").height("4000px");
    // $("#background").attr("height", "800");
}

var myQuestions = [
    {
        question: "How are You?",
        answers: ["I'm fine.",
            "I'm not fine, and I desperately need encouragement, love, and affirmation, but I can't express that because of societal conventions.",
            "I can already tell this quiz is going to be tedious.",
            "Seriously Will, you realize I have to grade 30 of these, right? Why are you doing this? Obviously I am not enjoying this."
        ]
    },
    {
        question: "How does your outward facing persona mask your deepest insecurities?",
        answers: ["I go out of my way to please everyone around me because I'm deeply afraid of other people not liking me, which would confirm my internal feeling of worthlessness.",
            "I face the world with a confident, 'take me or leave me, I'm just doing me' attitude because of deep familial pain I'm incapable of confronting, and if I keep everyone at arm's distance, nobody can ever hurt me like that again.",
            "I tend to be shy in social situations, and I tell myself that it's just my anxiety and that I'm happier at home reading a book, but really it's because I am confused by social norms and scared of confronting other people's emotions because I'm terrified of my own, and yet I tell myself that the perfect person will come along and sync up exactly with me, so I dive deep into my relationships, which are doomed to failure because of my unrealistic expectations.",
            "Oh God, I've never thought about this. Why would you do this to me?"
        ]
    },
    {
        question: "When you're alone at night, lying awake in bed, what thought does your brain torment you with?",
        answers: ["How close I am to my life falling apart.",
            "This time in 7th grade when I tried to tell Liz McIntire I liked her laugh, but I kind of stumbled over my words and said I liked her calf, and then I panicked and word vomited 'I didn't mean that. I don't like calves. I mean not that yours aren't good, I guess, but I wasn't, I mean, they're okay, but I didn't mean to say that. Not like, it just slipped out, I meant to to say something totally - I gotta go.' And then you tried to make it up by slipping her a note saying that you thought she was really cool, and she always looks nice and what you meant to say was you liked her laugh, but Scott Beeterman itercepted the note and read it out loud in front of the whole class while the teacher took that one kid who always got bloody noses to the school nurse.",
            "The first few lines of the song 'What is Love' on repeat. No chorus! Why would there be a chorus? Just 12 words over and over and over.",
            "Did I forget to lock my car? My vintage ABBA poster collection is in the back seat, and I know Ramesh down the street had his car burgled last week. I'm sure I locked it. But did I? It's fine, don't worry about it. But seriously, did I lock it?"
        ]
    },
    {
        question: "Why are we here?",
        answers: ["God's grace has put us here, his chosen children, to live our lives in His name, drinking lattes and retweeting cat memes.",
            "To love our fellow man fully and to steward the world as best we can. And to forgive ourselves when cause others pain, and to distract ourselves from the fact that humanity is destroying the earth and that we have no personal agency to change this terrible folly or to right the great injustices in our society that we are lucky enough to be insulated from by virtue of birth and circumstance.",
            "To get laid. Whatchu doin' later?",
            "I don't know, man. My parents banged. What do you want from me?"
        ]
    },
    {
        question: "Does free will exist?",
        answers: ["Clearly not, because I'm taking this quiz right now.",
            "Clearly not, because I'm taking this quiz right now.",
            "Clearly not, because I'm taking this quiz right now.",
            "Clearly not, because I'm taking this quiz right now."
        ]
    },
    {
        question: "Are you concerned that this arbitrary clock ticking down on these pointless, unanswerable questions you're being forced to answer in this quiz is a perfect analogy for the ennui and frantic directionlessness of your finite, confusing existence?",
        answers: ["Well I am now.",
            "This metaphor is both heavy-handed and strained. Much like my relationship with my father growing up. He had a temper, but he's worked on it. He's a good man, damn it! How did we get on this subject?!",
            "Uh duh, like fur sure.",
            "I can tell the seconds are slightly different lengths too. You devious bastard."
        ]
    },
    {
        question: "What is love?",
        answers: ["Baby, don't hurt me.",
            "Don't hurt me.",
            "No more",
            "What is love?"
        ]
    }
];

// var questionDiv = $("<div class='assembly'>");

for (i = 0; i < myQuestions.length; i++) {
    var questionDiv = $("<div class='assembly'>");
    var question = $("<p class='questions'/p>").text(myQuestions[i].question);
    questionDiv.append(question);

    // console.log(myQuestions[i].question);

    for (j = 0; j < 4; j++) {
        var answerDiv = $("<div class='formatanswers'>");
        var label = $(`<label><input type="radio" name="answer${i}" class="labels"></label>`);
        var answer = $("<div class='answers'/div>").text(myQuestions[i].answers[j]);

        answerDiv.append(label);
        answerDiv.append(answer);
        questionDiv.append(answerDiv);
    }
    $(".quiztext").append(questionDiv);
}



var time = 300;
$("#timer").text(timeConverter(time));
var funkynumbers = [];
for (i = 1; i <= time; i++) {
    var random = Math.random() * 2;
    if (random > .5 && random < 1.5) {
        funkynumbers[i] = random;
    }
    else i--;
}
// console.log(funkynumbers);

var timeoutID = setInterval(count, 1000 * funkynumbers[time]);


function count() {
    
    time--;
    if (time <= 0) {
        resultscreen();
        clearInterval(timeoutID);
        return;
    }
    else {
    var converted = timeConverter(time);
    // console.log(converted);
    // console.log($("form :checked").length);
    $("#timer").text(converted);
    }
}

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}
// labelclicks = 0;
// $(".labels").on("click", function () {
//     if (`this["form :checked"]` !== true) {
//     labelclicks++;
//     }
// });



$("#submit").on("click", function () {
    clearInterval(timeoutID);
    resultscreen();
});

console.log($("form :checked").length);

function resultscreen() {
    $("#timer").text("IT IS DONE");
    $(".resultscreen").show();
    $(".header").hide();
    $("#timer").hide();
    $(".quiztext").hide();
    $("#submit").hide();
}