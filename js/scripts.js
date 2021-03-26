$(document).ready(function(){

  $("#formOne").submit(function(event) {
    const nameInput = $("input#name").val();
    const ageInput = $("input#age").val();

    $("#name").append(nameInput);
    $("#age").append(ageInput);

    event.preventDefault();
  });
  $("#form").submit(function(event){
    const button = $("#button")[0];
    
    if(button){
      $(".form").hide()
      $(".question1").show()
    }
    event.preventDefault();
  });
  $("#question1").submit(function(event){
    const option1 = $("#option1")[0];
    const option2 = $("#option2")[0];

    if(option1.selected === true){
      $(".question1").hide()
      $(".question4").show()
    }
    if(option2.selected === true){
      $(".question1").hide()
      $(".question2").show()
    }
    event.preventDefault();
  });
  $("#question2").submit(function(event){
    const option3 = $("#option3")[0];
    const option4 = $("#option4")[0];

    if(option3.selected === true){
      $(".question2").hide()
      $(".question5").show()
    }
    if(option4.selected === true){
      $(".question2").hide()
      $(".question3").show()
    }
    event.preventDefault();
  });
  $("#question3").submit(function(event){
    const option5 = $("#option5")[0];
    const option6 = $("#option6")[0];

    if(option5.selected === true){
      $(".question3").hide()
      $(".question2").show()
    }
    if(option6.selected === true){
      $(".question3").hide()
      $(".question4").show()
    }
    event.preventDefault();
  });
  $("#question4").submit(function(event){
    const option7 = $("#option7")[0];
    const option8 = $("#option8")[0];

    if(option7.selected === true){
      $(".question4").hide()
      $(".question3").show()
    }
    if(option8.selected === true){
      $(".question4").hide()
      $(".question5").show()
    }
    event.preventDefault();
  });
  $("#question5").submit(function(event){
    const option9 = $("#option9")[0];
    const option10 = $("#option10")[0];

    if(option9.selected === true){
      $(".question5").hide()
      $(".question6").show()
    }
    if(option10.selected === true){
      $(".question5").hide()
      $(".question2").show()
    }
    event.preventDefault();
  });
  $("#question6").submit(function(event){
    const option11 = $("#option11")[0];
    const option12 = $("#option12")[0];

    if(option11.selected === true){
      $(".question6").hide()
      $(".answer3").show()
    }
    if(option12.selected === true){
      $(".question6").hide()
      $(".answer2").show()
    }
    event.preventDefault();
  });
  





























})
