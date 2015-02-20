// var userChoice = prompt("Do you choose rock, paper or scissors?");
$(document).ready(function(){
    // $("#outcome").html("Computer Choice: "+computerChoice);
    $(".btn").click(function(){
        if ($(this).html() == computerChoice){
            $("#userChoice").css({background : 'url(img/'+($(this).html())+'.jpg)  no-repeat'});
            $("#computerChoice").css({background : 'url(img/'+computerChoice+'.jpg)  no-repeat'});
            $("#outcome").html("It's a tie!");    
        }
        else if ($(this).html() == "rock"){
            $("#userChoice").css({background : 'url(img/rock.jpg)  no-repeat'});
            $("#computerChoice").css({background : 'url(img/'+computerChoice+'.jpg)  no-repeat'});
            if (computerChoice == "paper"){
                $("#outcome").html("Paper covers rock. The Rock suffocated! You lose, Jabroni!");
            }
            else {
                $("#outcome").html("The scissors smelled what the Rock was cooking. You win!");
            }
        }
        else if ($(this).html() == "paper"){
            $("#userChoice").css({background : 'url(img/paper.jpg)  no-repeat'});
            $("#computerChoice").css({background : 'url(img/'+computerChoice+'.jpg)  no-repeat'});
            if (computerChoice == "scissors"){
                $("#outcome").html("Scissors cut paper. You lose!");
            }
            else {
                $("#outcome").html("Paper covers The Rock. You win on technicality!");
            }
        }
        else if ($(this).html() == "scissors"){
            $("#userChoice").css({background : 'url(img/scissors.jpg)  no-repeat'});
            $("#computerChoice").css({background : 'url(img/'+computerChoice+'.jpg)  no-repeat'});
            if (computerChoice == "rock"){
                $("#outcome").html("The Rock People's Elbows your scissors. You lose!");
            }
            else {
                $("#outcome").html("Scissors cut paper. You win!");
            }
        }
    });
});

var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 

// var userChoice = function(){

// };




// var compare = function(choice1,choice2){
//     if(choice1===choice2){
//         return "The result is a tie!";
//         }
//     else if (choice1 === "rock"){
//         if (choice2 === "scissors"){
//             return "rock wins";
//             }
        
//         else {
//             return "paper wins";
//             }
//     }
//     else if (choice1 === "paper"){
//         if (choice2 === "rock"){
//             return "paper wins";
//             }
        
//         else {
//             return "scissors wins";
//             }
//     }
//     else if (choice1 === "scissors"){
//         if (choice2 === "paper"){
//             return "scissors wins";
//             }
        
//         else {
//             return "rock wins";
//             }
//     }
//     };