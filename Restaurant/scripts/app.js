$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    menu:'#header-nav',
        direction: 'vertical',
        verticalCentered: true,
        anchors: ['section-hello', 'section-about-me'],
        scrollingSpeed:700,
        easing: 'linear',
        loopBottom: false,
        loopTop: false,
        css3: false,
        navigation: {
            'textColor': 'white',
            'bulletsColor': 'white',
            'position': 'right',
            'tooltips': ['Hello', 'About Me']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 3,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){
      if(index>1){
        $('#header-nav').removeClass('Custom');
      }else{
        $('#header-nav').addClass('Custom');
      }
     
    },
		afterRender: function(){
      $('#header-nav').addClass('Custom');
    },
	});
});