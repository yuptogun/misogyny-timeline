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
    window_height_resize = $(window).innerHeight();

    if (clickedTagClass != undefined) {
      $.each($('hashtag.'+clickedTagClass+' div.background'), function(index, background) {
        var button = $(background).parent();
        $(background).css({
          top: -$(button).position().top,
          height: window_height_resize,
          'transition-duration': '0s'
        });
      });
    }

  });
});


var changeCSS_1 = function() {
  //aligning bottom of #titlecard to that of '.essay_intro #intro_essay_bottom'
  var topVal = $('#intro_essay_bottom').position().top + $('#intro_essay_bottom').innerHeight() - $('#titlecard').innerHeight() - 2;
  $('#titlecard').css('margin-top', topVal);
}
