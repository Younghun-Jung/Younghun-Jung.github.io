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
        "_최신 웹기술과 반응형, 크라우징 및 웹 표준 준수",
        "_HTML, CSS, JavaScript간 상호작용을 파악",
        "_요소 및 기능에 대해 동적 생성/수정/스타일링",
        "_Light Back-end 작업 및 Communication"
      ],
      "pos_css":"left center",
      "pos_css_res" : "top left"
    },
    {
      "name": "UX Developer",
      "des": [
        "_사용자와 서비스 및 시스템 간의 효율적인 상호 작용",
        "_사용자 경험을 고려한 인간 중심 개발",
        "_사용자의 사용성과 접근성 증진을 도모",
        "_사용자 조사를 통한 개발과 테스트 포함"
      ],
      "pos_css":"center center",
      "pos_css_res" : "center left"
    },
    {
      "name": "Information Visualization",
      "des": [
          "_무한정의 데이터를 가공한 양질의 정보 활용",
          "_정보 조직화 및 구조화",
          "_정보 시각화 및 사용자 인터페이스를 디자인",
          "_인터페이스를 활용한 상호작용 방안 모색"
      ],
      "pos_css":"right center",
      "pos_css_res" : "bottom left"
    }
  ],
  "display" : function() {
    for(var i=0; i<Index.description.length; i++){
        if(window.innerWidth>992){
            $(".index-description-box").eq(i).css("background", "url(./img/top-image_"+(i+1)+".jpg) "+Index.description[i].pos_css +" no-repeat fixed");
        }else{
            $(".index-description-box").eq(i).css("background", "url(./img/top-image_"+(i+1)+".jpg) "+Index.description[i].pos_css_res +" no-repeat fixed");
        }

        $(".index-description-box").eq(i).find(".index-description-area h2").text(Index.description[i].name);
        for(var j=0; j<Index.description[i].des.length; j++){
            $(".index-description-box").eq(i).find(".index-description-area p").eq(j).text(Index.description[i].des[j]);
        }
    }

    if(window.innerWidth > 992){
        $(".index-description-box").hover(
            function(){
                $(this).find(".after").css("width", "80%").css("margin-left", "-40%");
                $(this).css("width", "50%").siblings().css("width", "25%");
                $(this).find(".index-description-text").css("margin-top", "30%");
                $(this).find("p").css("display", "block").parent().parent().parent().siblings().find("p").css("display", "none");
            },
            function(){
                $(".after").css("width", "40px").css("margin-left", "-20px");
                $(this).css("width", "33.3333%").siblings().css("width", "33.3333%");
                $(this).find("p").css("display", "none").parent().parent().parent().siblings().find("p").css("display", "none");
            }
        );
    }
  }
}


$(document).ready(function() {
  console.log("document ready");
  Index.display();
});

$(window).resize(function(){
    if(window.innerWidth <= 992){
        //$("body").off("hover", ".index-description-box");
        $(".index-description-box").css("width", "100%");
        $(".index-description-box").hover(
            function(){
                $(".after").css("width", "40px").css("margin-left", "-20px");
                $(this).css("width", "100%").siblings().css("width", "100%");
                $(".index-description-text p").css("display", "block");
            },
            function(){
                $(".after").css("width", "40px").css("margin-left", "-20px");
                $(this).css("width", "100%").siblings().css("width", "100%");
                $(".index-description-text p").css("display", "block");
            }
        );
    }else{
        $(".index-description-box").hover(
            function(){
                $(".index-description-text p").css("display", "none");
                $(this).find(".after").css("width", "70%").css("margin-left", "-35%");
                $(this).css("width", "50%").siblings().css("width", "25%");
                $(this).find(".index-description-text").css("margin-top", "30%");
                $(this).find("p").css("display", "block")
                       .parent().parent().parent().parent().siblings().find("p").css("display", "none");
            },
            function(){
                $(".after").css("width", "40px").css("margin-left", "-20px");
                $(this).css("width", "33.3333%").siblings().css("width", "33.3333%");
                $(this).find("p").css("display", "none").parent().parent().parent().siblings().find("p").css("display", "none");
            }
        );
    }
});

// remove lyr
$('.lyr_off').on('click', function() {
    $('.portfolio_lyr').removeClass('active');
});
