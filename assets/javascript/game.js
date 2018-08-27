$(document).ready(function () {


    // Generate random numbers between 1 to 12 in crystal buttons.
    var crystalOne = (Math.floor(Math.random() * 11) + 1);
    var crystalTwo = (Math.floor(Math.random() * 11) + 1);
    var crystalThree = (Math.floor(Math.random() * 11) + 1);
    var crystalFour = (Math.floor(Math.random() * 11) + 1);
    var firstNumber = (Math.floor(Math.random() * (121 - 19)) + 19);
    var totalScore = 0;
    var win = 0;
    var lose = 0;

    // Display initial number
    $("#number-to-guess").text(firstNumber);
    $("#number-total").text(0);
    $("#wins").text(win);
    $("#loss").text(lose);




      // Reset if desired
      $("#reset").on("click", function () {
        
        firstNumber = (Math.floor(Math.random() * (121 - 19)) + 19); 
        crystalOne = (Math.floor(Math.random() * 11) + 1);
        crystalTwo = (Math.floor(Math.random() * 11) + 1);
        crystalThree = (Math.floor(Math.random() * 11) + 1);
        crystalFour = (Math.floor(Math.random() * 11) + 1);
        $("#number-to-guess").text(firstNumber);
        totalScore = 0;
        $("#number-total").text(0);
        win = 0;
        $("#wins").text(win);
        lose = 0;
        $("#loss").text(lose);

    });

    // Next Round if you win
    $("#next").on("click", function () {
        
        firstNumber = (Math.floor(Math.random() * (121 - 19)) + 19);
        crystalOne = (Math.floor(Math.random() * 11) + 1);
        crystalTwo = (Math.floor(Math.random() * 11) + 1);
        crystalThree = (Math.floor(Math.random() * 11) + 1);
        crystalFour = (Math.floor(Math.random() * 11) + 1);
        $("#number-to-guess").text(firstNumber);
        totalScore = 0;
        $("#number-total").text(0);

    });


    // Adding clicks for crystals
    $("#one").on("click", function () {
        totalScore += crystalOne;
        $("#number-total").text(totalScore);
        if (totalScore === firstNumber) {
            win++;
            $("#wins").text(win);
            alert("You Won! Click Next");
        }
        else if (totalScore > firstNumber) {
            lose++;
            $("#loss").text(lose);
            alert("You Loser! Restart The Game!");
        }
    });


    $("#two").on("click", function () {
        totalScore += crystalTwo;
        $("#number-total").text(totalScore);
        if (totalScore === firstNumber) {
            win++;
            $("#wins").text(win);
            alert("You Won! Click Next");
        }
        else if (totalScore > firstNumber) {
            lose++;
            $("#loss").text(lose);
            alert("You Loser! Restart The Game!");
        }
    });


    $("#three").on("click", function () {
        totalScore += crystalThree;
        $("#number-total").text(totalScore);
        if (totalScore === firstNumber) {
            win++;
            $("#wins").text(win);
            alert("You Won! Click Next");
        }
        else if (totalScore > firstNumber) {
            lose++;
            $("#loss").text(lose);
            alert("You Loser! Restart The Game!");
        }
    });


    $("#four").on("click", function () {
        totalScore += crystalFour;
        $("#number-total").text(totalScore);
        if (totalScore === firstNumber) {
            win++;
            $("#wins").text(win);
            alert("You Won! Click Next");
        }
        else if (totalScore > firstNumber) {
            lose++;
            $("#loss").text(lose);
            alert("You Loser! Restart The Game!");
        }
    });


});
