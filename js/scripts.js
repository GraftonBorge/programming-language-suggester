$(document).ready(function(){
  
  $("#questions").submit(function(event){
    const option1 = $("#option1")[0];
    const option2 = $("#option2")[0];
    const option3 = $("#option3")[0];
    const option4 = $("#option4")[0];

    if(option1.selected === true){
      $(".question1").hide()
      $(".question2").show()
    }
    if(option2.selected === true){
      $(".question1").hide()
      $(".question2").show()
    }
    
    if(option3.selected === true){
      $(".question2").hide()
      $(".question3").show()
    }
    if(option4.selected === true){
      $(".question2").hide()
      $(".question3").show()
    }
    event.preventDefault();
  });
});