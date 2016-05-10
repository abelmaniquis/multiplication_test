"use strict"


$("#btn1").click(function(){
    state_problem();
});


function state_problem(){
    var tries = 0;
    var num1 = Math.floor(Math.random() * (13 - 1) + 1);
    var num2 = Math.floor(Math.random() * (13 - 1) + 1);
    $("#problem").empty();
    $("#userAnswer").empty();
    $("#problem").append(num1 + " X " + num2);
}

function evaluate(factor1,factor2,answer){
    if(factor1*factor2 == answer){
        $("#feedback").text("correct!");
    }
    else
    {
        $("#feedback").text("incorrect!");
    }
    
};
