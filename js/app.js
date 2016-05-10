"use strict"

var super1 = 0;
var super2 = 0;
$("#btn1").click(function(){
    state_problem();
    evaluate(super1,super2,84); //test
    alert(ans);
});


function state_problem(){
    var tries = 0;
    var num1 = Math.floor(Math.random() * (13 - 1) + 1);
    var num2 = Math.floor(Math.random() * (13 - 1) + 1);
    
    super1 = num1;
    super2 = num2;
    
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

//need to figure out how to transfer num1 and num2 into
//evaluate function without using global scope
