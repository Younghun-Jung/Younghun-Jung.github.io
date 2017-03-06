(function() {
	angular.module("HomepageApp")
	.factory("DataService", DataFactory);

	function DataFactory() {
		var dataObj = {
			portfolioData: portfolioData
		};
		return dataObj;
	}

	var portfolioData = [
		{
			title: "TODO app",
			popup_title: "TODO simple application using Angular JS",
			date: "2017.03.01 - 2017.03.03",
			category: [
				"Simple Web App,", "Angular JS,", "Bootstrap,"
			],
			type: "Individual",
			img_title_URL: "./img/projects/angular_todo/angular_todo.png",
			contents: [
				{
					url: "./img/projects/angular_todo/angular_todo.png",
					title: "TODO Web App using Angular JS"
				}
			],
			role: "가상 데이터 구조화(Model), HTML, CSS, JS 개발",
			github: "https://github.com/Younghun-Jung/angular_todo",
			description: "Youtube의 angular 강의를 토대로 TODO application 프로젝트를 진행하였습니다. TODO list를 추가, 수정 및 삭제할 수 있으며, 키워드 및 진행 상태에 따른 fliter 기능을 구현하였습니다."

		},
		{
			title: "Fashion Magazine",
			popup_title: "#UNDEFINED: Fashion Magazine Community Web Site",
			date: "2016.10.17 - 2016.10.24",
			category: [
				"MVC,", "Front-end,", "Fashion,", "Responsive,", "Community Site"
			],
			type: "Team",
			img_title_URL: "./img/projects/unde/unde.png",
			contents: [
				{
					url: "./img/projects/unde/unde-1.png",
					title: "#UNDEFINED Web site"
				}
			],
			role: "50% | 가상 데이터 구조화(Model), Controller 개발, 반응형 웹 디자인",
			github: "https://github.com/Younghun-Jung/Acorn_Project1_Undefined",
			description: "가상의 패션 전문가들 5명이 모여 시즌 별 패션 트렌드에 대한 분석 및 비평을 공유하고, 이 에 대해 사용자들이 해당 컨텐츠에 대해 코멘트를 남겨 토론할 수 있는 Front-end 단의 웹 커 뮤니티 사이트를 제작하였습니다. 별도로 패션 전문가들의 아이템을 일반 사용자들이 경매를 통해 구입할 수 있는 Event 탭과 전문가들이 선정한 패션 피플들의 사진이 담긴 Gallery탭을 추가하였습니다. "

		},
		{
			title: "Cita",
			popup_title: "가족의 탄생, Cita",
			date: "2016.09.01 - 2016.12",
			category: [
				"Front-end Web 개발,", "Light Back-end 작업"
			],
			type: "Team",
			img_title_URL: "./img/projects/cita/cita.png",
			contents: [
				{
					url: "./img/projects/cita/cita-1.png",
					title: "Cita service web site"
				}
			],
			role: "20% | Ruby, Sinatra, HTML, CSS, Bootstrap, JavaScript, jQuery, MySQL",
			github: "http://www.cita.co.kr",
			description: "스타트업 Cita는 사진 촬영을 필요로 하는 고객과 포토그래퍼를 연결해주는 웹 서비스입니다. 고객과 포토그래퍼의 중개 역할 뿐만아니라, Cita 고유의 필터가 적용된 사진원본을 제공하고,고객마다 웹 갤러리를 함께 제공하여 본 서비스를 통해 추억을 간직할 수 있게하는 역할을 합니다. "

		},
		{
			title: "Turtle Quiz",
			popup_title: "Simple Web Application",
			date: "2016.09.20 - 2016.09.27",
			category: [
				"Single Web App,", "MVC,", "HTML,", "CSS,", "Bootstrap,", "JavaScript,", "Angular JS"
			],
			type: "Individual",
			img_title_URL: "./img/projects/turtle/turtle.png",
			contents: [
				{
					url: "./img/projects/turtle/turtle-0.png",
					title: "Main page"
				},
				{
					url: "./img/projects/turtle/turtle-1.png",
					title: "Search Tab"
				},
				{
					url: "./img/projects/turtle/turtle-2.png",
					title: "Quiz Tab"
				},
				{
					url: "./img/projects/turtle/turtle-3.png",
					title: "Quiz 미완성 체크 Tab"
				},
				{
					url: "./img/projects/turtle/turtle-4.png",
					title: "Quiz 결과 확인 Tab"
				}
			],
			role: "Web Page Design, Model 및 Controller 코드 작성",
			github: "https://github.com/Younghun-Jung/Turtle_Quiz_App_Angular",
			description: "Youtube의 Angular JS 강의를 토대로 제작한 간단한 웹 어플리케이션 입니다. 참여자에게 다양한 거북이들에 대한 정보와 quiz를 제공하였고 참여 이후, 채점 결과를 자세히 확인 할 수 있도록 하였습니다. "

		},
		{
			title: "JavaScript Testing",
			popup_title: "Feed Reader Testing",
			date: "2016.09.02 - 2016.09.03",
			category: [
				"JavaScript,", "jQuery,", "Jasmine JS"
			],
			type: "Udacity Nanodegree Projects  |  Individual",
			img_title_URL: "./img/projects/jasmine/jasmine.png",
			contents: [
				{
					url: "./img/projects/jasmine/jasmine-0.png",
					title: "Jasmine 활용한 Simple 테스팅"
				}
			],
			role: "Suite & Spec 함수 제작, 비동기 코드를 포함한 7가지 기능 테스트 ",
			github: "https://github.com/Younghun-Jung/frontend-nanodegree-feedreader",
			description: "Testing은 개발 프로세스에서 매우 중요한 부분이며, TDD(Test Driven Development)는 매우 짧 은 개발 사이클을 반복하는 소프트웨어 개발에 사용되고 있습니다. 본 프로젝트에서는 제공받은 웹 어플리케이션(해당 탭을 클릭하면 RSS Feed를 불러오는)을 Jasmine 프레임 워크를 활용 하여 7개의 기능에 대한 테스트를 진행하였습니다."
		},
		{
			title: "Interactive Web Map App ",
			popup_title: "Interactive Map for Seoul Trip",
			date: "2016.08.20 - 2016.08.30",
			category: [
				"HTML,", "CSS,", "JavaScript,", "Google Map API,", "Wikipedia API,", "AJAX,", "Knockout JS"
			],
			type: "Udacity Nanodegree Projects  |  Individual",
			img_title_URL: "./img/projects/seoulmap/seoulmap.png",
			contents: [
				{
					url: "./img/projects/seoulmap/seoulmap-0.png",
					title: "Web App 실행 화면"
				},
				{
					url: "./img/projects/seoulmap/seoulmap-1.png",
					title: "관광지 검색 기능"
				},
				{
					url: "./img/projects/seoulmap/seoulmap-2.png",
					title: "Panorama Street View"
				},
				{
					url: "./img/projects/seoulmap/seoulmap-3.png",
					title: "위키피디아 정보 및 링크"
				}
			],
			role: "구글맵 및 위키피디아 API활용 및 연동, 웹 상의 UI 및 상호작용 제작, 관광지 위치 DBObject 제작",
			github: "https://github.com/Younghun-Jung/interactive-map",
			description: "서울을 방문하는 사람들에게 구글 맵 API 기반의 웹 서비스를 제공하여 관광지들의 위치를 제공하고, 사용자 입력 키워드 기반의 검색 기능을 도입하여 특정 관광지에 대한 사진과 정보를 제공하 는 Interactive-map 웹 어플리케이션입니다. "
		},
		{
			title: "Website Optimization",
			popup_title: "Browser Rendering and Web Performance Optimization",
			date: "2016.08.03 - 2016.08.15",
			category: [
				"HTML,", "CSS,","JavaScript,", "Chrome Dev Tool,", "Grunt(Image-resize, Code-minimize)"
			],
			type: "Udacity Nanodegree Projects  |  Individual",
			img_title_URL: "./img/projects/webopti/webopti.png",
			contents: [
				{
					url: "./img/projects/webopti/webopti-0.png",
					title: "Simple Web 최적화"
				}
			],
			role: "Google PageSpeed Tool 및 Chrome Dev Tool을 활용한 쟁크 발생 부분 파악, 이미지, CSS 및 JavaScript 최적화 및 최소화, CRP(Critical Rendering Path) 최적화 ",
			github: "https://github.com/Younghun-Jung/frontend-nanodegree-mobile-portfolio",
			description: "제공받은 Simple Web application에 대하여 google의 PageSpeed Tool과 chrome dev tool을 활용하여 모바일 및 데스크탑 환경의 웹 성능을 개선하는 프로젝트입니다. 쟁크(Jank)를 최대한 줄여 초당 60프레임 이하로 렌더링되는 영역을 발견하여 그 갱신을 줄이려 노력하였습니다. "

		},
		{
			title: "Classic Arcade Game",
			popup_title: "Save Kitty",
			date: "2016.07.20 - 2016.07.30",
			category: [
				"HTML Canvas,", "Object-Oriented JavaScript,","jQuery"
			],
			type: "Udacity Nanodegree Projects  |  Individual",
			img_title_URL: "./img/projects/cag/cag.png",
			contents: [
				{
					url: "./img/projects/cag/cag-0.png",
					title: "게임 중 화면"
				},
				{
					url: "./img/projects/cag/cag-1.png",
					title: "Success 화면"
				},
				{
					url: "./img/projects/cag/cag-2.png",
					title: "Fail 화면"
				}
			],
			role: "자바스크립트를 활용한 게임 엔진 제작, 유저-케릭터 상호작용 제작",
			github: "https://github.com/Younghun-Jung/frontend-nanodegree-classic-game",
			description: "자바스크립트와 HTML5 Canvas를 활용하여 웹 환경에서 실행되는 간단한 Arcade 게임을 구현 하였습니다. 자바스크립트를 활용한 방식의 객체 지향 프로그래밍을 통해 Game loop engine 을 생성하였고, Enemy 객체(벌레)들이 랜덤한 위치에서 랜덤한 속도로 횡이동하며, 유저는 자 신의 케릭 객체를 키보드로 이동시키며 Enemy를 피해서 블록의 색과 매칭되는 고양이를 해당 블록에 옮기는 방식입니다. HTML5 Canvas로 View를 구성하였습니다. "

		},
		{
			title: "Build a Portfolio Site",
			popup_title: "Younghun's Homepage",
			date: "2016.07.10 - (개편 중)",
			category: [
				"HTML,", "CSS,","Bootstrap,", "JavaScript,", "Angular JS"
			],
			type: "Udacity Nanodegree Projects  |  Individual",
			img_title_URL: "./img/projects/portfolio/port.png",
			contents: [
				{
					url: "./img/projects/portfolio/port-0.png",
					title: "개선 전"
				},
				{
					url: "./img/projects/portfolio/port-1.png",
					title: "개선 중 index.html"
				},
				{
					url: "./img/projects/portfolio/port-2.png",
					title: "개선 중 profile.html"
				},
				{
					url: "./img/projects/portfolio/port-3.png",
					title: "개선 중 portfolio.html"
				}
			],
			role: "UI Design, Responsive Web Design, Front-end Web 개발 ",
			github: "https://github.com/Younghun-Jung/Younghun-Jung.github.io",
			description: "기본적인 웹 프로그래밍을 통해 자신만의 포트폴리오 웹 사이트를 제작하였습니다. Home, Profile, Works, Self-Study, Contact 탭으로 구성되어 있으며, 반응형 웹으로 디자인하였습 니다. 현재는 디자인 및 기능에 대해 개편을 하고 있으며, 추후 경력과 경험할 프로젝트에 대 한 업데이트를 지속적으로 할 예정입니다.  "

		},
		{
			title: "Graduation Thesis",
			popup_title: "User Interaction and Interface Design In Collaborative Environment Using Tiled Display(KAIST GSCT 2016)",
			date: "2014/07/01 - 2015/12/31",
			category: [
				"UI&I Design,","Collaborative Environment,","InfoViz,", "Client-server,", "Programming Interface,", "Tiled-display"
			],
			type: "Individual",
			img_title_URL: "./img/projects/gradu/gradu.png",
			contents: [
				{
					url: "./img/projects/gradu/gradu-0.png",
					title: "Interaction Method"
				},
				{
					url: "./img/projects/gradu/gradu-1.png",
					title: "Prototype & User test"
				},
				{
					url: "./img/projects/gradu/gradu-2.png",
					title: "Prototype & User test"
				},
				{
					url: "./img/projects/gradu/gradu-3.png",
					title: "Prototype & User test"
				}
			],
			role: "Interaction Design, Prototype App Development, UI/UX development, User Test & Evaluation",
			github: "",
			description: "단일 디스플레이의 크기와 해상도의 한계를 극복하기 위해, 다수의 디스플레이를 배열하여 고안된 타일드 디스플레이는 주로 대용량 정보 시각화를 중심으로 사용 되어 왔다. 본 연구에서는 정보 시각화 뿐만 아니라, 타일드 디스플레이 환경에서의 다중 일반 사용자 경험에도 초점을 맞추어, 사용자들이 디스플레이가 있는 각각의 컴퓨팅 디바이스를 활용한 효율적인 협업을 도모한다. 이를 위해, 협업 참여자의 각 역할을 고려하여 디바이스의 사용자 인터페이스와 상호작용 방식을 디자인하고, 프로토 타입 어플리케이션을 개발한다. 또한, 본 시스템을 교육 기반의 다양한 시나리오에 적용하여 효용성을 검증한다."

		},
		{
			title: "Easy Screens and Play Library",
			popup_title: "Library for Information Visualization on Tiled display Environment",
			date: "2014/07/01 - 2015/12/31",
			category: [
				"InfoViz,", "Client-server,", "Programming Interface,", "Tiled-display"
			],
			type: "Team | IEEE VIS 2015 InfoViz",
			img_title_URL: "./img/projects/esp/esp.png",
			contents: [
				{
					url: "./img/projects/esp/esp-0.png",
					title: "World map"
				},
				{
					url: "./img/projects/esp/esp-1.png",
					title: "Mosaic"
				},
				{
					url: "./img/projects/esp/esp-2.png",
					title: "Info Viz"
				}
			],
			role: "20% | Interaction Design, Prototype App Development, UX development",
			github: "",
			description: "In this work, we present a library, called Easy Screens and Play (ESP), for information visualization in tiled display systems. We describe the design of the ESP library in the tiled display environment for novice users and its unique features as compared to other distributed display libraries. We also demonstrate the efficacy and effectiveness of the ESP library by using several examples of information visualization. Discussions on the extension of the library and future improvements are presented as well."
		},
		{
			title: "NRF of Korea Project",
			popup_title: "Information Visualization and Interaction for the Tiled Display System",
			date: "2014/07/01 - 2016/10/31",
			category: [
				"HCI,", "InfoViz,", "UI Design,", "Interaction Design,", "User Analysis,", "Tiled-display"
			],
			type: "Team | 한국연구재단",
			img_title_URL: "./img/projects/nrf/nrf.jpeg",
			contents: [
				{
					url: "./img/projects/nrf/nrf-0.png",
					title: "Tiled Display Research"
				}
			],
			role: "20% | Interaction Design, Prototype App Development, UX development",
			github: "",
			description: "타일드 디스플레이는 현재 주로 과학 시각화, 연구협업 및 상황 모니터링 등 특정 전문분야에 제한적으로 사용되고 있다. EXP 연구실에서는 타일드 디스플레이에 대한 범용성을 높이고 활용 확산을 위하여 다음과 같은 연구를 진행한다."
		},
		{
			title: "Oedipus",
			popup_title: "Gait Visualizatoin System using HMD",
			date: "2014.07.01 - 2014.12.05",
			category: [
				"InfoViz,", "Interaction Design,", "Wearable Device,", "Health Care"
			],
			type: "Team | KHCI 2015 SK Creative Challenge",
			img_title_URL: "./img/projects/oedipus/oedipus.png",
			contents: [
				{
					url: "./img/projects/oedipus/oedipus-0.png",
					title: "Interaction Method"
				},
				{
					url: "./img/projects/oedipus/oedipus-1.png",
					title: "Prototyping"
				}
			],
			role: "20% | User Analysis, Interaction Design, Prototyping",
			github: "",
			description: "비정상적인 걸음걸이를 지닌 사용자는 자신의 걸음걸이를 HMD를 통해 실시간으로 확인하여 이를 교정에 활용할 수 있다. 사용자가 착용한 신발에 압력 센서를 부착하여 걸음걸이의 상태를 파악하고, 이를 HMD에서 시각화하도록 시스템을 설계하였다."
		},
		{
			title: "YouSeeMe",
			popup_title: "Perspective-awareness User Interface",
			date: "2014.06.01 - 2014.11.05",
			category: [
				"Large Display Content,", "Interaction Design,", "Perspective-awareness,", "User Test,", "UX Development"
			],
			type: "Team | IASDR Interplay 2015 Poster",
			img_title_URL: "./img/projects/youseeme/youseeme.png",
			contents: [
				{
					url: "./img/projects/youseeme/youseeme-0.png",
					title: "Prototype"
				},
				{
					url: "./img/projects/youseeme/youseeme-1.png",
					title: "User Test based on Content Type"
				}
			],
			role: "20% | User Test, Programming, Interaction Design, Prototyping",
			github: "",
			description: "디스플레이에 출력된 컨텐츠가 사용자 시점의 변화에 따라 변형되도록 설계하였다. 이에 따라, 사용자가 위치에 관계없이 디스플레이 상의 컨텐츠를 지속적으로 정면에서 바라볼 수 있게 하는 경험을 제공하는 인터페이스이다."
		}
	]
})();
