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

    if (clickedTagClass != undefined) {
      $.each(hashtag_position[clickedTagClass], function(sectionIndex, s) {
        var sectionID = $('#timeline section')[sectionIndex];
        $.each(s, function(aIndex, articleIndex) {
            var article = $('article', sectionID)[articleIndex];
            var article_width = $(article).innerWidth()+2;

            $('.background li.'+clickedTagClass, article).css({
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
  $('#titlecard').css('margin-top', topVal);
}
