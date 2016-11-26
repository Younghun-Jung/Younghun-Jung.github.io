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
      "name": "Web Developer",
      "des": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis vero facere inventore voluptatibus ipsum minima. Ipsa repellendus pariatur quis, veniam distinctio itaque vitae eum doloremque suscipit harum tempore dignissimos officia.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde laudantium aperiam molestias, at ipsam! Magnam eveniet, assumenda labore nemo dignissimos quaerat expedita ex facere laboriosam dolore vero quasi eius, debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
    },
    {
      "name": "UX Developer",
      "des": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis vero facere inventore voluptatibus ipsum minima. Ipsa repellendus pariatur quis, veniam distinctio itaque vitae eum doloremque suscipit harum tempore dignissimos officia.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde laudantium aperiam molestias, at ipsam! Magnam eveniet, assumenda labore nemo dignissimos quaerat expedita ex facere laboriosam dolore vero quasi eius, debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
    },
    {
      "name": "Information Visualization",
      "des": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis vero facere inventore voluptatibus ipsum minima. Ipsa repellendus pariatur quis, veniam distinctio itaque vitae eum doloremque suscipit harum tempore dignissimos officia.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde laudantium aperiam molestias, at ipsam! Magnam eveniet, assumenda labore nemo dignissimos quaerat expedita ex facere laboriosam dolore vero quasi eius, debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    }
  ],
  "display" : function() {
    $('#one h2').text(Index.description[0].name);
    $('#one p').text(Index.description[0].des);
    $('#two h2').text(Index.description[1].name);
    $('#two p').text(Index.description[1].des);
    $('#three h2').text(Index.description[2].name);
    $('#three p').text(Index.description[2].des);
  }
}

Index.display();

