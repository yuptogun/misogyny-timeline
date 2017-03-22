
//CLICKING hashtag

var clickedTagClass = undefined;
var prevTagClass = undefined;
$(document).ready(function(){
  $('#timeline').on('click', 'hashtag div.button', function(event) {
    event.preventDefault();

    // if some other '.background' is animating, clicking is rejected.
    if ($('hashtag div.background').is(':animated')) {
          return 0;
      }
    console.log("click");

    var button_width = $(this).innerWidth();
    var button_height = $(this).innerHeight();
    var article_height_ratio = $('#timeline').innerHeight()/button_height;

    prevTagClass = clickedTagClass;
    clickedTagClass = $(this).parent().attr("class");

    // when a hashtag is clicked, at first, expended background will be fold.
    if (prevTagClass != undefined) {
      $.each(hashtag_position[prevTagClass], function(sectionIndex, s) {
        var sectionID = $('#timeline section')[sectionIndex];
        $.each(s, function(aIndex, articleIndex) {
            var article = $('article', sectionID)[articleIndex];
            var tag = $('hashtag.'+prevTagClass, article)[0];

            var article_width_ratio = ($(article).innerWidth()+2)/button_width;
            var tag_top = $(tag).position().top;
            var tag_left = $(tag).position().left;

            // folding background.
            $('.prevjump .arrowDot, .nextjump .arrowDot', article).css('fill', '#31454e');
            $('.prevjump, .nextjump', article).removeClass("tagSelected");

            $('hashtag.'+prevTagClass+' div.background', article)
            .css({ transform: 'translate(-'+tag_left+'px, 0px) scale('+article_width_ratio+', 1) ' })
            .one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
//              $(this).parent().removeClass('selected');
              $(this).parent().css('z-index', '0');
              $(this).css('transform', '')
              .one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
                $(this).parent().removeAttr('style');
              });
            });
        });
      });


    }

    // if you clicked the hashtag already chosen, whole job will be finished as it dis-selects the hashtag.
    if (prevTagClass == clickedTagClass) {
      clickedTagClass = undefined;
      return 0;
    }

    // now, let's expand the other background: which is clicked right now.
    $.each(hashtag_position[clickedTagClass], function(sectionIndex, s) {
      var sectionID = $('#timeline section')[sectionIndex];
      $.each(s, function(aIndex, articleIndex) {
          var article = $('article', sectionID)[articleIndex];
          var tag = $('hashtag.'+ clickedTagClass , article)[0];

          var article_width_ratio = ($(article).innerWidth()+2)/button_width;
          var tag_top = $(tag).position().top;
          var tag_left = $(tag).position().left;

          $('hashtag.'+clickedTagClass, article)
          .css('z-index', '0')
          .children("div.background").css({
            transform: 'translate(-'+tag_left+'px, 0px) scale('+article_width_ratio+', 1) ',
          })
          .one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
            $('.prevjump .arrowDot, .nextjump .arrowDot', article).css('fill', $('.'+clickedTagClass).css('background-color'));
            $('.prevjump, .nextjump', article).addClass("tagSelected");
//            $(this).parent().addClass('selected');
            $(this).parent().css('z-index', '-1');
            $(this).css({
                transform: 'translate(-'+tag_left+'px, -'+tag_top+'0px) scale('+article_width_ratio+ ', '+article_height_ratio+')'
              });
          });

        });
      });
      return 0;

  });
});
