document.getElementById('next-btn').addEventListener("click", nextQuestion);

function nextQuestion(){
   var quesNo = document.getElementsByName('question')[0].placeholder;

     if(quesNo==="Question 1"){
        document.getElementById('card1').style.display ="none";
        document.getElementById('card2').style.display ="block";
     }  else {
      document.getElementById('card1').style.display ="none";
      document.getElementById('card2').style.display ="none";
      document.getElementById('card3').style.display ="block";
     }
     
}
   



