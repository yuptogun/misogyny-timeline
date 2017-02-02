
//Scroll horizontally with scrollwheel but use default for horizontal swipe on trackpads
$(document).ready(function() {
    $('html, body').mousewheel(function(e, delta) {
  		if( Math.abs(e.deltaX) ) {
          return
      } else {
          this.scrollLeft -= (e.deltaY * 15);
      }
      e.preventDefault();
    });
});

//SHORTCUTS
    // handles easing to any section based on their year&date button on bottom.
$(document).ready(function(){
  $('.nav').on('click', 'a.timeJump', function(event){
      event.preventDefault();

      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollLeft: $($anchor.attr('href')).offset().left - $(window).width()/2 + 1
      }, 2500,'easeInOutExpo');
  });
});

    // handles .nav button's opacity based on current scrollX.
var section_position = [];

$(document).ready(function(){
  var sectionIndex_viewing = 0;
  var sectionIndex_max = 0;
  $.each($('section'), function(sectionIndex, section) {
    section_position.push($(section).offset().left);
    sectionIndex_max = sectionIndex;
    if (section_position[sectionIndex] < window.pageXOffset + $(window).width()/2) {
      sectionIndex_viewing = sectionIndex;
    }
  });
  $($('.nav li a.timeJump')[sectionIndex_viewing]).css('opacity', 1.0);

  $(window).resize(function() {
    $.each($('section'), function(sectionIndex, section) {
      section_position.push($(section).offset().left);
      sectionIndex_max = sectionIndex;
      if (section_position[sectionIndex] < window.pageXOffset + $(window).width()/2) {
        sectionIndex_viewing = sectionIndex;
      }
    });
    $($('.nav li a.timeJump')[sectionIndex_viewing]).css('opacity', 1.0);
  });

  $(window).scroll(function(event){
      event.preventDefault();
      $('.nav li a.timeJump').removeAttr('style');

      var i = -1;
      while (i<sectionIndex_max) {
        if (section_position[i+1] <= window.pageXOffset + $(window).width()/2) {
          i++;
        } else break;
      }
      sectionIndex_viewing = i;
      if (sectionIndex_viewing >= 0) {
        $($('.nav li a.timeJump')[sectionIndex_viewing]).css('opacity', 1.0);
      }

  });
});

    // handles .nav's position: fixed? of give the same distance with #navblocker?
/*
$(document).ready(function() {
  var $nav = $('#navTime');
  if (window.pageXOffset <= $('#navblocker').innerWidth()) {
    $nav.css({
      position: 'absolute',
      left: $('#navblocker').innerWidth()+$(window).width()/10
    });
  }
  else {
    $nav.css({
      position: 'fixed',
      left: '10%'
    });
  }

  $(window).scroll(function(event){
    event.preventDefault();

    if (window.pageXOffset <= $('#navblocker').innerWidth()) {
      $nav.css({
        position: 'absolute',
        left: $('#navblocker').innerWidth()+$(window).width()/10
      });
    }
    else {
      $nav.css({
        position: 'fixed',
        left: '10%'
      });
    }
  });
});
*/


// handles easing to next place of 'chosen hashtag' via < > buttons
	//get the coordinates of all essay chunks and put them into an array
	var destinations = {
    'authority': [],
  	'japan': [],
  	'rape': [],
  	'crime': [],
  	'law': [],
  	'policy': [],
  	'politics': [],
  	'party': [],
    'labour': [],
  	'movement': [],
  	'media': [],
  	'online': [],
  	'speech': [],
  	'culture': [],
  	'lovers': [],
  	'abortion': []
  };


$(document).ready(function(){

  $('hashtag').each(function(){
    var tagID = $(this).attr('id');
/*    var essay = $(this).parent();
    var articleDist = $(essay).offset().left;
*/    var articleDist = $(this).offset().left;
    destinations[tagID].push(articleDist);
  });

  $(window).resize(function(event){
    console.log("resize");
    destinations = {
      'authority': [],
    	'japan': [],
    	'rape': [],
    	'crime': [],
    	'law': [],
    	'policy': [],
    	'politics': [],
    	'party': [],
      'labour': [],
    	'movement': [],
    	'media': [],
    	'online': [],
    	'speech': [],
    	'culture': [],
    	'lovers': [],
    	'abortion': []
    };

    $('hashtag').each(function(){
      var tagID = $(this).attr('id');
/*      var essay = $(this).parent();
      var articleDist = $(essay).offset().left;
*/      var articleDist = $(this).offset().left;
      destinations[tagID].push(articleDist);
    });
  });


	//Attach it to the next button
  $('#timeline').on('click', '.dots .nextjump', function(event){
    var tagID = clickedTagID;
    var currentPageXOffset = window.pageXOffset;
    var currentDist = 0;
  	var destinationNext = 0;
		var cursorDist = event.pageX;
		//find the next destination
  	$.each(destinations[tagID], function(index, value){
			if(cursorDist >= value) {
        currentDist = value;
				destinationNext = destinations[tagID][index + 1];
			} else {
				return false
			}
		});
	//scroll there
    if (destinationNext == undefined) {
      var scrollX = $('#Outro').offset().left + $(window).width()/2;
    } else {
      var scrollX = destinationNext - (currentDist - currentPageXOffset);
    }
    $('html, body').stop().animate({
        scrollLeft: scrollX
    }, 1000,'easeInOutQuad');
  event.preventDefault();
});
	//Attach it to the prev button
  $('#timeline').on('click', '.dots .prevjump', function(event){
    var tagID = clickedTagID;
    var currentPageXOffset = window.pageXOffset;
    var currentDist = 0;
    var destinationPrev = 0;
    var cursorDist = event.pageX;
    //find the next destination
    $.each(destinations[tagID], function(index, value){
      if(cursorDist >= value) {
        currentDist = value;
        destinationPrev = destinations[tagID][index - 1];
      } else {
        return false
      }
    });
  //scroll there
    if (destinationPrev == undefined) {
      var scrollX = 0; //$('#timeline').offset().left;
    } else {
      var scrollX = destinationPrev - (currentDist - currentPageXOffset);
    }
    $('html, body').stop().animate({
        scrollLeft: scrollX
    }, 1000,'easeInOutQuad');

    event.preventDefault();
  });

});
