$('#menu-icon').on('click', function(){
  $('.content').toggleClass('side-bar-in');
  $('.side-bar').toggleClass('side-bar-in');
  $('#menu-icon').toggleClass('side-bar-in');
})


/*
  Index page object
*/
var Index = {
  "description": [
    {
      "name": "Front-End Web Development",
      "des": [
        "a",
        "b",
        "c",
        "d"
      ]
    },
    {
      "name": "UX Developer",
      "des": [
        "a",
        "b",
        "c",
        "d"
      ]
    },
    {
      "name": "Information Visualization",
      "des": [
        "a",
        "b",
        "c",
        "d"
      ]
    }
  ],
  "display" : function() {
    $('#one h2').text(Index.description[0].name);
    
    for(var i=0; i<Index.description.length; i++){
      $(".index-description").css("background", "url(../img/top-image_"+(i+1)+") no-repeat fixed 50% 50%")
      for(var j=0; j<index.description[i].des.length; j++){
        
      }
    }
    url("../img/top-image_1.jpg") 
    $('#one p').text(Index.description[0].des);
    $('#two h2').text(Index.description[1].name);
    $('#two p').text(Index.description[1].des);
    $('#three h2').text(Index.description[2].name);
    $('#three p').text(Index.description[2].des);
  }
}

Index.display();

