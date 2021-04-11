    
    let pythonArray = [];
    let javaArray = [];
    let cSharpArray = [];

$(document).ready(function(){
    const option1 = $("#option1")[0];
    const option2 = $("#option2")[0];
    const option3 = $("#option3")[0];
    const option4 = $("#option4")[0];
    const option5 = $("#option5")[0];
    const option6 = $("#option6")[0];
    const option7 = $("#option7")[0];
    const option8 = $("#option8")[0];
    const option9 = $("#option9")[0];
    const option10 = $("#option10")[0];
    const option11 = $("#option11")[0];
    const option12 = $("#option12")[0];

  $(".form").submit(function(event){
    const button1 = $("#button1")[0];
    
    if(button1){
      $(".form").hide()
      $(".question1").show()
    }
    event.preventDefault();
  });
  $("#question1").submit(function(event){
    if(option1.selected === true){
      pythonArray.push("p");
      $(".question1").hide()
      $(".question2").show()
    }
    if(option2.selected === true){
      javaArray.push("j");
      $(".question1").hide()
      $(".question2").show()
    }
    event.preventDefault();
  });
  $("#question2").submit(function(event){
    if(option3.selected === true){
      cSharpArray.push("c");
      $(".question2").hide()
      $(".question3").show()
    }
    if(option4.selected === true){
      javaArray.push("j");
      $(".question2").hide()
      $(".question3").show()
    }
    event.preventDefault();
  });
  $("#question3").submit(function(event){
    if(option5.selected === true){
      cSharpArray.push("c");
      $(".question3").hide()
      $(".question4").show()
    }
    if(option6.selected === true){
      pythonArray.push("p");
      $(".question3").hide()
      $(".question4").show()
    }
    event.preventDefault();
  });
  $("#question4").submit(function(event){
    if(option7.selected === true){
      pythonArray.push("p");
      $(".question4").hide()
      $(".question5").show()
    }
    if(option8.selected === true){
      javaArray.push("j");
      $(".question4").hide()
      $(".question5").show()
    }
    event.preventDefault();
  });
  $("#question5").submit(function(event){
    if(option9.selected === true){
      cSharpArray.push("c");
      $(".question5").hide()
      $(".question6").show()
    }
    if(option10.selected === true){
      javaArray.push("j");
      $(".question5").hide()
      $(".question6").show()
    }
    event.preventDefault();
  });
  $("#question6").submit(function(event){
    if(option11.selected === true){
      pythonArray.push("p");
    }
    if(option12.selected === true){
      cSharpArray.push("c");
    }

    if(pythonArray.length > javaArray.length){
      $(".question6").hide()
      $(".answer1").show()
    }
    if(pythonArray.length > cSharpArray.length){
      $(".question6").hide()
      $(".answer1").show()
    }
    if(cSharpArray.length > pythonArray.length){
      $(".question6").hide()
      $(".answer2").show()
    }
    if(cSharpArray.length > javaArray.length){
      $(".question6").hide()
      $(".answer2").show()
    }
    if(javaArray.length > pythonArray.length){
      $(".question6").hide()
      $(".answer3").show()
    }
    if(javaArray.length > cSharpArray.length){
      $(".question6").hide()
      $(".answer3").show()
    }
    event.preventDefault();
  });



});
