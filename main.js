submited = "false";
tryAgainV = "false";
questionOn = 1;
a = "false";
b = "false";
c = "false";
d = "false";
function clickA () {
    a = "true";
    b = "false";
    c = "false";
    d = "false";
    document.getElementById("A").style.backgroundColor = "orange";
    document.getElementById("B").style.backgroundColor = "rgb(25, 136, 255)";
    document.getElementById("C").style.backgroundColor = "rgb(25, 136, 255)";
    document.getElementById("D").style.backgroundColor = "rgb(25, 136, 255)";
}
function clickB () {
    a = "false";
    b = "true";
    c = "false";
    d = "false";
    document.getElementById("B").style.backgroundColor = "orange";
    document.getElementById("A").style.backgroundColor = "rgb(25, 136, 255)";
    document.getElementById("C").style.backgroundColor = "rgb(25, 136, 255)";
    document.getElementById("D").style.backgroundColor = "rgb(25, 136, 255)";
}
function clickC () {
    a = "false";
    b = "false";
    c = "true";
    d = "false";
    document.getElementById("C").style.backgroundColor = "orange";
    document.getElementById("A").style.backgroundColor = "rgb(25, 136, 255)";
    document.getElementById("B").style.backgroundColor = "rgb(25, 136, 255)";
    document.getElementById("D").style.backgroundColor = "rgb(25, 136, 255)";
}
function clickD () {
    a = "false";
    b = "false";
    c = "false";
    d = "true";
    document.getElementById("D").style.backgroundColor = "orange";
    document.getElementById("A").style.backgroundColor = "rgb(25, 136, 255)";
    document.getElementById("B").style.backgroundColor = "rgb(25, 136, 255)";
    document.getElementById("C").style.backgroundColor = "rgb(25, 136, 255)";
}
function submit () {
    if (questionOn == 1) {
        if (a == "true") {
            a = "false";
            questionOn = 2;
            document.getElementById("A").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("B").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("C").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("D").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("prog").innerHTML = "Question 2/10";
            document.getElementById("question").innerHTML = "How many human body parts has three letters in it?";
            document.getElementById("A").innerHTML = "A. 13";
            document.getElementById("B").innerHTML = "B. 9";
            document.getElementById("C").innerHTML = "C. 11";
            document.getElementById("D").innerHTML = "D. 7";
        }
        if (b == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            b = "false";
            tryAgainV = "true";
        }
        if (c == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            c = "false";
            tryAgainV = "true";
        }
        if (d == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            d = "false";
            tryAgainV = "true";
        }
    }
    if (questionOn == 2) {
        if (c == "true") {
            c = "false";
            questionOn = 3;
            document.getElementById("A").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("B").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("C").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("D").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("prog").innerHTML = "Question 3/10";
            document.getElementById("question").innerHTML = "What color are sunsets on mars?";
            document.getElementById("A").innerHTML = "A. Red";
            document.getElementById("B").innerHTML = "B. Blue";
            document.getElementById("C").innerHTML = "C. Pink";
            document.getElementById("D").innerHTML = "D. Green";
        }
        if (b == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            b = "false";
            tryAgainV = "true";
        }
        if (a == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            a = "false";
            tryAgainV = "true";
        }
        if (d == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            d = "false";
            tryAgainV = "true";
        }
    }
    if (questionOn == 3) {
        if (b == "true") {
            b = "false";
            questionOn = 4;
            document.getElementById("A").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("B").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("C").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("D").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("prog").innerHTML = "Question 4/10";
            document.getElementById("question").innerHTML = "Which king is the only king without a mustache in a deck of cards?";
            document.getElementById("A").innerHTML = "A. King of Hearts";
            document.getElementById("B").innerHTML = "B. King of Diamonds";
            document.getElementById("C").innerHTML = "C. King of Clubs";
            document.getElementById("D").innerHTML = "D. King of Spades";
        }
        if (a == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            a = "false";
            tryAgainV = "true";
        }
        if (c == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            c = "false";
            tryAgainV = "true";
        }
        if (d == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            d = "false";
            tryAgainV = "true";
        }
    }
    if (questionOn == 4) {
        if (a == "true") {
            a = "false";
            questionOn = 5;
            document.getElementById("A").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("B").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("C").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("D").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("prog").innerHTML = "Question 5/10";
            document.getElementById("question").innerHTML = "If the highest number of children birthed was 69 and the woman gave birth to 16 sets of twins and 7 sets of triplets, how many sets of quadruplets did she give birth to?";
            document.getElementById("A").innerHTML = "A. 6";
            document.getElementById("B").innerHTML = "B. 3";
            document.getElementById("C").innerHTML = "C. 5";
            document.getElementById("D").innerHTML = "D. 4";
        }
        if (b == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            b = "false";
            tryAgainV = "true";
        }
        if (c == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            c = "false";
            tryAgainV = "true";
        }
        if (d == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            d = "false";
            tryAgainV = "true";
        }
    }
    if (questionOn == 5) {
        if (d == "true") {
            d = "false";
            questionOn = 6;
            document.getElementById("A").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("B").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("C").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("D").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("prog").innerHTML = "Question 6/10";
            document.getElementById("question").innerHTML = "How many hearts do octopuses have?";
            document.getElementById("A").innerHTML = "A. 1";
            document.getElementById("B").innerHTML = "B. 9";
            document.getElementById("C").innerHTML = "C. 3";
            document.getElementById("D").innerHTML = "D. 5";
        }
        if (a == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            a = "false";
            tryAgainV = "true";
        }
        if (b == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            b = "false";
            tryAgainV = "true";
        }
        if ( c == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            c = "false";
            tryAgainV = "true";
        }

    }
    if (questionOn == 6) {
        if (c == "true") {
            c = "false";
            questionOn = 7;
            document.getElementById("A").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("B").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("C").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("D").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("prog").innerHTML = "Question 7/10";
            document.getElementById("question").innerHTML = "How many miles are there in a league commonly?";
            document.getElementById("A").innerHTML = "A. 3";
            document.getElementById("B").innerHTML = "B. 8";
            document.getElementById("C").innerHTML = "C. 5";
            document.getElementById("D").innerHTML = "D. 10";
        }
        if (a == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            a = "false";
            tryAgainV = "true";
        }
        if (b == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            b = "false";
            tryAgainV = "true";
        }
        if ( d == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            d = "false";
            tryAgainV = "true";
        }

    }
    if (questionOn == 7) {
        if (a == "true") {
            a = "false";
            questionOn = 8;
            document.getElementById("A").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("B").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("C").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("D").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("prog").innerHTML = "Question 8/10";
            document.getElementById("question").innerHTML = "What was the highest IQ ever scored?";
            document.getElementById("A").innerHTML = "A. 101";
            document.getElementById("B").innerHTML = "B. 200";
            document.getElementById("C").innerHTML = "C. 362";
            document.getElementById("D").innerHTML = "D. 275";
        }
        if (c == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            c = "false";
            tryAgainV = "true";
        }
        if (b == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            b = "false";
            tryAgainV = "true";
        }
        if ( d == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            d = "false";
            tryAgainV = "true";
        }

    }
    if (questionOn == 8) {
        if (d == "true") {
            d = "false";
            questionOn = 9;
            document.getElementById("A").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("B").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("C").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("D").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("prog").innerHTML = "Question 9/10";
            document.getElementById("question").innerHTML = "Which is the largest state in the USA?";
            document.getElementById("A").innerHTML = "A. Wyoming";
            document.getElementById("B").innerHTML = "B. California";
            document.getElementById("C").innerHTML = "C. Alaska";
            document.getElementById("D").innerHTML = "D. Texas";
        }
        if (c == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            c = "false";
            tryAgainV = "true";
        }
        if (b == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            b = "false";
            tryAgainV = "true";
        }
        if ( a == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            a = "false";
            tryAgainV = "true";
        }

    }
    if (questionOn == 9) {
        if (c == "true") {
            c = "false";
            questionOn = 10;
            document.getElementById("A").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("B").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("C").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("D").style.backgroundColor = "rgb(25, 136, 255)";
            document.getElementById("prog").innerHTML = "Question 10/10";
            document.getElementById("question").innerHTML = "Who was Alexander the Great's mentor?";
            document.getElementById("A").innerHTML = "A. Ixtal";
            document.getElementById("B").innerHTML = "B. Demacia";
            document.getElementById("C").innerHTML = "C. Aristotle";
            document.getElementById("D").innerHTML = "D. Freljord";
        }
        if (a == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            a = "false";
            tryAgainV = "true";
        }
        if (b == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            b = "false";
            tryAgainV = "true";
        }
        if ( d == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            d = "false";
            tryAgainV = "true";
        }

    }
    if (questionOn == 10) {
        if (c == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "Congrats! You are very smart, and so you have finished this quiz. (Unless you searched these up!)";
            document.getElementById("prog").style.visibility = "hidden";
            c = "false";
        }
        if (a == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            a = "false";
            tryAgainV = "true";
        }
        if (b == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            b = "false";
            tryAgainV = "true";
        }
        if ( d == "true") {
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("A").style.visibility = "hidden";
            document.getElementById("B").style.visibility = "hidden";
            document.getElementById("C").style.visibility = "hidden";
            document.getElementById("D").style.visibility = "hidden";
            document.getElementById("question").innerHTML = "You got it incorrect. Try again";
            document.getElementById("prog").style.visibility = "hidden";
            d = "false";
            tryAgainV = "true";
        }

    }
    if (tryAgainV == "true") {
        document.getElementById("tryAgainBtn").style.visibility = "visible";
        a = "false";
        b = "false";
        c = "false";
        d = "false";
    }
}
function tryAgain () {
    tryAgainV = "false";
    questionOn = 1;
    document.getElementById("A").style.backgroundColor = "rgb(25, 136, 255)";
    document.getElementById("B").style.backgroundColor = "rgb(25, 136, 255)";
    document.getElementById("C").style.backgroundColor = "rgb(25, 136, 255)";
    document.getElementById("D").style.backgroundColor = "rgb(25, 136, 255)";
    document.getElementById("prog").innerHTML = "Question 2/10";
    document.getElementById("question").innerHTML = "What is the capital of Washington?";
    document.getElementById("A").style.visibility = "visible";
    document.getElementById("B").style.visibility = "visible";
    document.getElementById("C").style.visibility = "visible";
    document.getElementById("D").style.visibility = "visible";
    document.getElementById("tryAgainBtn").style.visibility = "hidden";
    document.getElementById("submit").style.visibility = "visible";
    document.getElementById("prog").style.visibility = "visible";
    document.getElementById("prog").innerHTML = "Question 1/10"
    document.getElementById("A").innerHTML = "A. Olympia";
    document.getElementById("B").innerHTML = "B. San Diego";
    document.getElementById("C").innerHTML = "C. Seattle";
    document.getElementById("D").innerHTML = "D. Tacoma";

}