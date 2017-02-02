
//CLICKING hashtag

var clickedTagID = undefined;
var prevTagID = undefined;
$(document).ready(function(){
  $('#timeline').on('click', 'hashtag', function(event) {
    event.preventDefault();

    // if some other '.background' is animating, clicking is rejected.
    if ($('.background li').is(':animated')) {
          return 0;
      }
    console.log("click");

    var tag_width = $('hashtag').innerWidth();
    var tag_height = $('hashtag').innerHeight();
    var article_height = $('#timeline').innerHeight();

    prevTagID = clickedTagID;
    clickedTagID = $(this).attr("id");

    // when a hashtag is clicked, at first, expended background will be fold.
    if (prevTagID != undefined) {
      $.each(hashtag_position[prevTagID], function(sectionIndex, s) {
        var sectionID = $('#timeline section')[sectionIndex];
        $.each(s, function(aIndex, articleIndex) {
            var article = $('article', sectionID)[articleIndex];
            var article_class = $(article).attr('class');
            var tag = $('hashtag#'+prevTagID, article);

            var article_width = $(article).innerWidth()+2;
            var tag_top = tag.position().top;
            var tag_left = tag.position().left;

            // folding background.
            $('.prevjump #arrowDot, .nextjump #arrowDot', article).css('fill', '#31454e');
            $('.prevjump, .nextjump', article).removeClass("tagSelected");
/*
            $('.background li#'+prevTagID, article)
            .css({
              'z-index': -1,
              transform: 'translate(0px, '+tag_top+'px) scale('+article_width+', '+tag_height+')'
            });

            $('.background', article).one('transitionend webkitTransitionEnd', 'li#'+prevTagID, function() {
              $(this).css({
                  transform: 'translate('+tag_left+'px, '+tag_top+'px) scale('+tag_width+', '+tag_height+') '
              });

              $('.background', article).one('transitionend webkitTransitionEnd', 'li#'+prevTagID, function() {
                $(this).attr('id', 'none').css('transform', '');
              });
            });
    */      $('.background li#'+prevTagID, article)
            .css({
              'z-index': -1,
              transform: 'translate('+tag_left+'px, '+tag_top+'px) scale('+tag_width+', '+tag_height+') '
            })
            .delay(550)
            .queue(function() {
              $(this).attr('id', 'none').css('transform', '').dequeue();
            });
        });
      });


    }

    // if you clicked the hashtag already chosen, whole job will be finished as it dis-selects the hashtag.
    if (prevTagID == $(this).attr("id")) {
      clickedTagID = undefined;
      return 0;
    }

    // now, let's expand the other background: which is clicked right now.
    $.each(hashtag_position[clickedTagID], function(sectionIndex, s) {
      var sectionID = $('#timeline section')[sectionIndex];
      $.each(s, function(aIndex, articleIndex) {
          var article = $('article', sectionID)[articleIndex];
          var tag = $('hashtag#'+clickedTagID, article);

          var article_width = $(article).innerWidth()+2;
          var tag_top = tag.position().top;
          var tag_left = tag.position().left;

          $('.background li#none:first', article)
          .attr('id', clickedTagID)
          .css({
            transform: 'translate('+tag_left+'px, '+tag_top+'px) scale('+tag_width+', '+tag_height+')',
            'transition-duration': '0s'
          })
          .delay(1)
          .queue(function() {
            $(this).css({
                'z-index': 0,
                transform: 'translate(0, '+tag_top+'px) scale('+article_width+', '+tag_height+') ',
                'transition-duration': ''
            })
            .dequeue();
          })
          .delay(550)
          .queue(function() {
            $('.prevjump #arrowDot, .nextjump #arrowDot', article).css('fill', $('#'+clickedTagID).css('background-color'));
            $('.prevjump, .nextjump', article).addClass("tagSelected");
            $(this).css({
                transform: 'translate(0px, 0px) scale('+article_width+ ', '+article_height+')'
              })
              .dequeue();
          });

        });
      });
      return 0;

  });
});
