$(document).ready(function() {
  var counter = 0;
  var score = 0;

  $("#next, .choices, #question, #count, #continue").hide();

  var quizQuestions = [{
  question:"John ..... not called for three weeks.",
  choices:["had", "have", "been","do"],
  answer: 1
},
{
  question:"I ..... feeling sick.",
  choices:["is", "are", "been","am"],
  answer: 3
},
{
  question:"..... you working at the moment?",
  choices:["Is", "Are", "Been","Am"],
  answer: 1
},
{
  question:"We heard them ..... their national anthem.",
  choices:["sings", "sung", "sang","sing"],
  answer: 3
},
{
  question:"They ..... a good time.",
  choices:["had", "have", "has","did"],
  answer: 0
},
{
  question:"We ..... hurt one another.",
  choices:["are", "have", "has","is"],
  answer: 1
},

]
  
  $("#next , #Start").on("click", function(){
        
    $(".choices, .questions").empty();
	$("#Start, h2").hide();
	$("#next, .choices ,h3, #count").show();
	$(".quiz-app").css("background-image","none");

    function incrementCounter(){
        $(
                    "#count").text(counter+1);
          
    
      };    
      
        
      if(quizQuestions[counter]){
          $(".questions").append("<h2>" + quizQuestions[counter].question + "</h2>")
            
  for(var i = 0 ; i < quizQuestions[counter].choices.length;i+=1){
    $(".choices").append( "<ul>" + "<input type='radio' name='radio' value=' " + i + " '/>" + quizQuestions[counter].choices[i] + "</ul>");
  } 
                incrementCounter();
counter++
            }
        else //no more question, show total
        {
			$("#question, #count, #next").hide();
			$("#continue").show();
            $("#score").text(" You have scored: " + score+ " out of 6");
            $(".quiz-app").css("background-image","url('../image/aptitudebg.jpg')");

            if(score >= 0 && score <= 5){
				$("#level").text("Oops, you are unfortunately not ready to proceed to the next level");
				
				
				$("#continue").on("click", function(){
					window.location.replace("../html/slowmain.html");
				});
            }
			else{
				$("#level").text("Congratulations, you passed this level");

        $("#continue").on("click", function(){
          window.location.replace("../html/mcqadv.html");
        });
			}
           
        }


});

    $("body").on("click","input", function() {

          $("input[type='radio']:checked").val();

          var $selectedText=$("input[type='radio']:checked").val();
         
  if($selectedText==quizQuestions[counter-1].answer) {
            score +=1;
          }
      
        
          
    });
  
});