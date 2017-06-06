$(document).ready(function(){
  $("form#curse-survey").submit(function(event){
    event.preventDefault();
    //initialize empty arrays to hold checked values
    var curseArray = [];
    var fortuneArray = [];

    //show html spans and push checked values into arrays
    //$("#curse-responses").show();
    $("input:checkbox[name=curse]:checked").each(function(){
      var curse = $(this).val();
      curseArray.push(curse);
      $('#curse-responses').append(curse + "<br>");
    });
    //$("#fortune-responses").show();
    $("input:checkbox[name=fortune]:checked").each(function(){
      var fortune = $(this).val();
      fortuneArray.push(fortune);
      $('#fortune-responses').append(fortune + "<br>");
    });
    //hide the survey and test with console log
    $('#curse-survey').hide();


    //create if else to determine how cursed/fortunate user is
    if (curseArray.length === fortuneArray.length){
      $("#results").append("<img src='img/limbo.jpg' alt='supercursed' class='resultsimg' />");
      $("#results").append("<h2>IN LIMBO</h2>")
    } else if (curseArray.length === 0 && fortuneArray.length === 0 ){
      $("#results").append("Try Again");
    } else if (curseArray.length === 0){
      $("#results").append("<img src='img/superblessed.jpg' alt='supercursed' class='resultsimg' />");
      $("#results").append("<h2>SUPER BLESSED</h2>")
    } else if (fortuneArray.length === 0){
      $("#results").append("<img src='img/supercursed.jpg' alt='supercursed' class='resultsimg' />");
      $("#results").append("<h2>SUPER CURSED</h2>")
    } else if (curseArray.length > fortuneArray.length){
      $("#results").append("<img src='img/cursed.jpeg' alt='supercursed' class='resultsimg' />");
      $("#results").append("<h2>CURSED</h2>")
    } else if (fortuneArray.length > curseArray.length){
      $("#results").append("<img src='img/blessed.jpg' alt='supercursed' class='resultsimg' />");
      $("#results").append("<h2>BLESSED</h2>")
    }


  });
});
