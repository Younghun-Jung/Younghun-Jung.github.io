/*
  scroll down evet in index.html
*/
var scrollHeight = 0;
$(window).scroll(function() {
  scrollHeight = $(window).scrollTop();
  // console.log(scrollHeight);
});

$('.scroll-arrow-down').click(function() {
  console.log(scrollHeight);
  if (scrollHeight < 777) {
    $('html, body').animate({ scrollTop: 794 }, 'slow');
  } else if (scrollHeight >= 777 && scrollHeight <=1500 ) {
      $('html, body').animate({scrollTop: 1588}, 'slow');
  }
});

$('.scroll-arrow-up').click(function() {
  console.log(scrollHeight);
  if (scrollHeight < 1000) {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  } else if (scrollHeight >= 1000 ) {
      $('html, body').animate({scrollTop: 794}, 'slow');
  }
});

/*
  Index page object
*/
var Index = {
  "description": [
    {
      "name": "Web Developer",
      "des": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis vero facere inventore voluptatibus ipsum minima. Ipsa repellendus pariatur quis, veniam distinctio itaque vitae eum doloremque suscipit harum tempore dignissimos officia.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde laudantium aperiam molestias, at ipsam! Magnam eveniet, assumenda labore nemo dignissimos quaerat expedita ex facere laboriosam dolore vero quasi eius, debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis vero facere inventore voluptatibus ipsum minima. Ipsa repellendus pariatur quis, veniam distinctio itaque vitae eum doloremque suscipit harum tempore dignissimos officia.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde laudantium aperiam molestias, at ipsam! Magnam eveniet, assumenda labore nemo dignissimos quaerat expedita ex facere laboriosam dolore vero quasi eius, debitis."
    },
    {
      "name": "UX Developer",
      "des": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis vero facere inventore voluptatibus ipsum minima. Ipsa repellendus pariatur quis, veniam distinctio itaque vitae eum doloremque suscipit harum tempore dignissimos officia.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde laudantium aperiam molestias, at ipsam! Magnam eveniet, assumenda labore nemo dignissimos quaerat expedita ex facere laboriosam dolore vero quasi eius, debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis vero facere inventore voluptatibus ipsum minima. Ipsa repellendus pariatur quis, veniam distinctio itaque vitae eum doloremque suscipit harum tempore dignissimos officia.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde laudantium aperiam molestias, at ipsam! Magnam eveniet, assumenda labore nemo dignissimos quaerat expedita ex facere laboriosam dolore vero quasi eius, debitis."
    },
    {
      "name": "Information Visualization",
      "des": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis vero facere inventore voluptatibus ipsum minima. Ipsa repellendus pariatur quis, veniam distinctio itaque vitae eum doloremque suscipit harum tempore dignissimos officia.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde laudantium aperiam molestias, at ipsam! Magnam eveniet, assumenda labore nemo dignissimos quaerat expedita ex facere laboriosam dolore vero quasi eius, debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis vero facere inventore voluptatibus ipsum minima. Ipsa repellendus pariatur quis, veniam distinctio itaque vitae eum doloremque suscipit harum tempore dignissimos officia.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde laudantium aperiam molestias, at ipsam! Magnam eveniet, assumenda labore nemo dignissimos quaerat expedita ex facere laboriosam dolore vero quasi eius, debitis."
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


/*
  Education Object
*/
// var Education = {
//   "schools" : [
//     {
//       "name" : "Korea Advanced Institute Science and Technology",
//       "city" : "Daejeon South Korea",
//       "year" : 2016,
//       "degree" : "Masters",
//       "major" : ["HCI/UX", "Information Visualization"],
//       "lab" : "Experience Lab in Graduate School of Culture Technology"
//     },
//     {
//       "name" : "Ajou University",
//       "city" : "Suwon Gyunggido",
//       "year" : 2014,
//       "degree" : "Bachelor",
//       "major" : ["Industrial Engineering"]
//     }
//   ],
//   "display" : function() {
//     var HTMLschoolName = "<li>%name</li>";
//     var HTMLcity = "<li>%city</li>";
//     var HTMLyear = "<li>%year</li>";
//     var HTMLdegree = "<li>%degree</li>"
//   }
// }
