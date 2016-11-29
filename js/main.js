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
        "_Back-End Communication을 포함한 Light Back-end 작업"
      ]
    },
    {
      "name": "UX Developer",
      "des": [
        "_사용자와 제품, 서비스 및 시스템 간의 효율적인 상호 작용",
        "_사용자 경험을 고려한 인간 중심 개발",
        "_사용자의 사용성과 접근성 증진을 도모",
        "_사용자 조사를 통한 개발과 테스트 포함"
      ]
    },
    {
      "name": "Information Visualization",
      "des": [
          "_무한정의 데이터를 가공한 양질의 정보 활용",
          "_정보 조직화 및 구조화",
          "_정보 시각화 및 사용자 인터페이스를 디자인",
          "_인터페이스를 활용한 상호작용 방안 모색"
      ]
    }
  ],
  "display" : function() {
    $('#one h2').text(Index.description[0].name);

    for(var i=0; i<Index.description.length; i++){
      $(".index-description-box").eq(i).css("background", "url(./img/top-image_"+(i+1)+".jpg) no-repeat fixed")
      $(".index-description-box").eq(i).find(".index-description-area h2").text(Index.description[i].name);
      for(var j=0; j<Index.description[i].des.length; j++){
        $(".index-description-box").eq(i).find(".index-description-area p").eq(j).text(Index.description[i].des[j]);
      }
    }
  }
}

Index.display();
