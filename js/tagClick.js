
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

    var article_height = $('#timeline').innerHeight();

    prevTagClass = clickedTagClass;
    clickedTagClass = $(this).parent().attr("class");

    // when a hashtag is clicked, at first, expended background will be fold.
    if (prevTagClass != undefined) {
      $.each($('hashtag.'+prevTagClass), function(index, tag) {
        var article = $(tag).parent().parent();
        // folding background.
        $('.prevjump .arrowDot, .nextjump .arrowDot', article).css('fill', '#31454e');
        $('.prevjump, .nextjump', article).removeClass("tagSelected");

        $(tag).children("div.background")
        .css({
          top: '',
          height: '',
          'transition-duration': ''
        })
        .one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
//              $(this).parent().removeClass('selected');
          $(this).parent().css('z-index', '0');
          $(this).css({
            left: '',
            width: ''
          })
          .one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
            $(this).parent().removeAttr('style');
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
    $.each($('hashtag.'+clickedTagClass), function(index, tag) {
      var article = $(tag).parent().parent();
      var article_width = $(article).innerWidth();
      var tag_top = $(tag).position().top;
      var tag_left = $(tag).position().left;

      $(tag)
      .css('z-index', '0')
      .children("div.background").css({
        left: -tag_left,
        width: article_width
      })
      .one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
        $('.prevjump .arrowDot, .nextjump .arrowDot', article).css('fill', $('.'+clickedTagClass).css('background-color'));
        $('.prevjump, .nextjump', article).addClass("tagSelected");
//            $(this).parent().addClass('selected');
        $(this).parent().css('z-index', '-1');
        $(this).css({
            top: -tag_top,
            height: article_height
          });
      });

    });
    return 0;

  });
});
