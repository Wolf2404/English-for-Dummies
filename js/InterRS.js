//question one 
function playAudio() { 
    var x = document.getElementById("myAudio");
    x.play(); 
} 
        
function checkAnswer(){
    var userInput = document.getElementById('answer').value;
    var correcta = document.getElementById("correctaudio");
    var ans = userInput.toLowerCase();
    if(ans == "i did not see her"){
        document.getElementById("answer").style.Color = "green";
        correcta.play(); 
        alert("Correct answer");
        window.location = "#pagetwo";
    }
    else
    {
        document.getElementById("answer").style.borderColor = "red";
        document.getElementById("wrong").innerHTML="Correct answer is: <b>I did not see her</b>";
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
    if(userInput1=="i am feeling sick"){
        correcta1.play();
        alert("Correct answer");
        window.location = "#pagethree"
    }
    else
    {
        document.getElementById("answer1").style.borderColor = "red";
        document.getElementById("wrong1").innerHTML="Correct answer is: <b>I am feeling sick</b>";
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
    if(userInput2=="they had a good time"){
        correcta2.play();
        alert("Correct answer");
        window.location = "#pagefour"
    }
    else
    {
        document.getElementById("answer2").style.borderColor = "red";
        document.getElementById("wrong2").innerHTML="Correct answer is: <b>They had a good time</b>";

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
    if(userInput3=="we have hurt one another"){
        correcta3.play();
        alert("Correct answer");
        window.location = "#pagefive"
    }
    else
    {
        document.getElementById("answer3").style.borderColor = "red";
        document.getElementById("wrong3").innerHTML="Correct answer is: <b>We have hurt one another</b>";
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
    if(userInput4=="he does go home sometimes"){
        correcta4.play();
        alert("Correct answer");
        window.location.replace("intermcq.html");
    }
    else
    {
        document.getElementById("answer4").style.borderColor = "red";
        document.getElementById("wrong4").innerHTML="Correct answer is: <b>He does go home sometimes</b>";
    }
}

