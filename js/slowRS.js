//question one 
function playAudio() { 
    var x = document.getElementById("myAudio");
    x.play(); 
} 
var clicks = 0;
var check1 = 0;
var check2 = 0;
var check3 = 0;
var check4 = 0;
var check5 = 0;
        
function checkAnswer(){
    var userInput = document.getElementById('answer').value;
    var correcta = document.getElementById("correctaudio");
    var ans = userInput.toLowerCase();
    if(ans == "a car"){
        document.getElementById("answer").style.Color = "green";
        correcta.play(); 
        alert("Correct answer");
        window.location = "#pagetwo";
    }
    else
    {
        document.getElementById("answer").style.borderColor = "red";
        document.getElementById("wrong").innerHTML="Correct answer is: <b>A car</b><br>All objects are reference as <b>a</b> unless they begin with a vowel(a,e,i,o,u), then we us <b>an</b>";
        clicks++;
        check1 += 1;
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
    if(userInput1=="an apple"){
        correcta1.play();
        alert("Correct answer");
        window.location = "#pagethree";
    }
    else
    {
        document.getElementById("answer1").style.borderColor = "red";
        document.getElementById("wrong1").innerHTML="Correct answer is: <b>An apple</b><br>All objects that begin with vowels (a,e,i,o,u) us <b>an</b>.";
        clicks++;
        check2 += 1;
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
    if(userInput2=="this pen is red"){
        correcta2.play();
        alert("Correct answer");
        window.location = "#pagefour";
    }
    else
    {
        document.getElementById("answer2").style.borderColor = "red";
        document.getElementById("wrong2").innerHTML="Correct answer is: <b>This pen is red</b><br>A single pen <b>is</b> red but many pens <b>are</b> red";
        clicks++;
        check3 += 1;
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
    if(userInput3=="he is tired"){
        correcta3.play();
        alert("Correct answer");
        window.location = "#pagefive";
    }
    else
    {
        document.getElementById("answer3").style.borderColor = "red";
        document.getElementById("wrong3").innerHTML="Correct answer is: <b>He is tired</b><br>I <b>am</b> tired<br>He/she <b>is</b> tired<br>We/they <b>are</b> tired";
        clicks++;
        check4 += 1;
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
    if(userInput4=="they are happy"){
        correcta4.play();
        
        if(check1 != 0){
            window.location = "#pageone";
        }
        if(check2 != 0){
            window.location = "#pagetwo";
        }
        if(check3 != 0){
            window.location = "#pagethree";
        }
        if(check4 != 0){
            window.location = "#pagefour";
        }
        if(check5 != 0){
            window.location = "#pagefive";
        }
        window.location.replace("slowmain.html");
    }
    else
    {
        document.getElementById("answer4").style.borderColor = "red";
        document.getElementById("wrong4").innerHTML="Correct answer is: <b>They are happy</b><br>I <b>am</b> happy<br>He/she <b>is</b> happy<br>We/they <b>are</b> happy";
        clicks++;
        check5 += 1;
    }

}