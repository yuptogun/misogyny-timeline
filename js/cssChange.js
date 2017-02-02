$(document).ready(function(){
    changeCSS_1();

  //When the window resizes:
  $(window).resize(function(event){
    if (isWebView) {
      // Facebook App Browser detected: shorten #timeline's height due to prevent vertical scroll.
      $('#navblocker').css('height', '100%');
      $('#timeline').css('height', '100%');
    }
    changeCSS_1();

    //resize background: fit on screen and section
    var article_height = $('#timeline').innerHeight();

    if (clickedTagID != undefined) {
      $.each(hashtag_position[clickedTagID], function(sectionIndex, s) {
        var sectionID = $('#timeline section')[sectionIndex];
        $.each(s, function(aIndex, articleIndex) {
            var article = $('article', sectionID)[articleIndex];
            var article_width = $(article).innerWidth()+2;

            $('.background li#'+clickedTagID, article).css({
              transform: 'translate(0px, 0px) scale('+article_width+ ', '+article_height+')'
            });
        });
      });
    }

  });
});


var changeCSS_1 = function() {
  //aligning bottom of #titlecard to that of '.essay_intro #intro_essay_bottom'
  var topVal = $('#intro_essay_bottom').position().top + $('#intro_essay_bottom').innerHeight() - $('#titlecard').innerHeight() - 2;
  $('#titlecard').css('top', topVal);

  //positioning #timelineHorizontalLine at the vertical center point of #timelineDot.
  var firstDots = $('.dots')[0];
  var firstDot_dot = $('.dots #timelineDot')[0];
  $('#timelineHorizontalLine').css('left', $(firstDots).position().left + $(firstDot_dot).innerWidth()/2 );
  $('#timelineHorizontalLine').css('width', $('#timeline').outerWidth() - $('#timelineHorizontalLine').position().left);

  //aligning top of both #intro_scroll and #credit to that of '#timelineHorizontalLine'
  $('#credit').css('top', $('#intro_scroll').position().top);

}
