//question one 
function playAudio() { 
    var x = document.getElementById("myAudio");
    x.play(); 
} 
        
function checkAnswer(){
    var userInput = document.getElementById('answer').value;
    var correcta = document.getElementById("correctaudio");
    var ans = userInput.toLowerCase();
    if(ans == "thank you very much"){
        document.getElementById("answer").style.Color = "green";
        correcta.play(); 
        alert("Correct answer");
        window.location = "#pagetwo";
    }
    else
    {
        document.getElementById("answer").style.borderColor = "red";
        document.getElementById("wrong").innerHTML="Thank you very much";
    }
}

 
//Question 2
function playAudio1() { 
    var x1 = document.getElementById("myAudio1");
    x1.play(); 
} 
             
function checkAnswer1(){
    var userInput1 = document.getElementById('answer1').value;
    var correcta1 = document.getElementById("correctaudio");
    var ans1 = userInput1.toLowerCase();
    if(userInput1=="at the restaurant"){
        correcta1.play();
        alert("Correct answer");
        window.location = "#pagethree"
    }
    else
    {
        alert("wrong answer");
    }
}


//Question 3
function playAudio2() { 
    var x2 = document.getElementById("myAudio2"); 
    x2.play(); 
} 
            
function checkAnswer2(){
    var userInput2 = document.getElementById('answer2').value;
    var correcta2 = document.getElementById("correctaudio");
    var ans2 = userInput2.toLowerCase();
    if(userInput2=="which car did you buy"){
        correcta2.play();
        alert("Correct answer");
        window.location = "#pagefour"
    }
    else
    {
        alert("wrong answer");

    }
}


//Question 4
function playAudio3() { 
    var x3 = document.getElementById("myAudio3");
    x3.play(); 
} 
             
function checkAnswer3(){
    var userInput3 = document.getElementById('answer3').value;
    var correcta3 = document.getElementById("correctaudio");
    var ans3 = userInput3.toLowerCase();
    if(userInput3=="i find that gorgeous"){
        correcta3.play();
        alert("Correct answer");
        window.location = "#pagefive"
    }
    else
    {
        alert("wrong answer");
    }
}


//Question 5
function playAudio4() { 
    var x4 = document.getElementById("myAudio4");
    x4.play(); 
} 
             
function checkAnswer4(){
    var userInput4 = document.getElementById('answer4').value;
    var correcta4 = document.getElementById("correctaudio");
    var ans4 = userInput4.toLowerCase();
    if(userInput4=="shall we meet tomorrow"){
        correcta4.play();
        alert("Correct answer");
        window.location = "#pagesix"
    }
    else
    {
        alert("wrong answer");
    }
}


//Question 6
function playAudio5() { 
    var x5 = document.getElementById("myAudio5");
    x5.play(); 
} 
             
function checkAnswer5(){
    var userInput5 = document.getElementById('answer5').value;
    var correcta5 = document.getElementById("correctaudio");
    var ans5 = userInput5.toLowerCase();
    if(userInput5=="take a taxi next time"){
        correcta5.play();
        alert("Correct answer");
        window.location = "#pageseven"
    }
    else
    {
        alert("wrong answer");
    }
}


//Question 7
function playAudio6() { 
    var x6 = document.getElementById("myAudio6");
    x6.play(); 
} 
             
function checkAnswer6(){
    var userInput6 = document.getElementById('answer6').value;
    var correcta6 = document.getElementById("correctaudio");
    var ans6 = userInput6.toLowerCase();
    if(userInput6=="these are six months"){
        correcta6.play();
        alert("Correct answer");
        window.location = "#pageeight"
    }
    else
    {
        alert("wrong answer");
    }
}


//Question 8
function playAudio7() { 
    var x7 = document.getElementById("myAudio7");
    x7.play(); 
} 
             
function checkAnswer7(){
    var userInput7 = document.getElementById('answer7').value;
    var correcta7 = document.getElementById("correctaudio");
    var ans7 = userInput7.toLowerCase();
    if(userInput7 == "today is saturday"){
        correcta7.play();
        alert("Correct answer");
        window.location = "#pagenine"
    }
    else
    {
        alert("wrong answer");
    }
}

//Question 9
function playAudio8() { 
    var x8 = document.getElementById("myAudio8");
    x8.play(); 
} 
             
function checkAnswer8(){
    var userInput8 = document.getElementById('answer8').value;
    var correcta8 = document.getElementById("correctaudio");
    var ans8 = userInput8.toLowerCase();
    if(userInput8 == "where do you come from"){
        correcta8.play();
        alert("Correct answer");
        window.location = "#pageten"
    }
    else
    {
        alert("wrong answer");
    }
}

//Question 10
function playAudio9() { 
    var x9 = document.getElementById("myAudio9");
    x9.play(); 
} 
             
function checkAnswer9(){
    var userInput9 = document.getElementById('answer9').value;
    var correcta9 = document.getElementById("correctaudio");
    var ans9 = userInput9.toLowerCase();
    if(userInput9 == "i want to read"){
        correcta9.play();
        alert("Correct answer");
        window.location.replace("advmcq.html");
    }
    else
    {
        alert("wrong answer");
    }
}