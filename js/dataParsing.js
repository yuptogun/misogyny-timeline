$.holdReady( true );

var hashtag_KtoE = {
	'권력/전쟁범죄': 'authority',
	'일본 제국': 'japan',
	'강간/강제추행': 'rape',
	'범죄': 'crime',
	'수사/판결': 'law',
	'법령': 'policy',
	'정치': 'politics',
	'정당': 'party',
	'노동문제': 'labour',
	'각종 사회운동': 'movement',
	'언론매체': 'media',
	'인터넷/소셜미디어': 'online',
	'발언': 'speech',
	'예술/대중문화': 'culture',
	'연인, 가족관계': 'lovers',
	'태아, 임신중절': 'abortion'
};

var hashtag_position = {
	'authority': [[1]],
	'japan': [[1]],
	'rape': [[1]],
	'crime': [[1]],
	'law': [[1]],
	'policy': [[1]],
	'politics': [[1]],
	'party': [[1]],
	'labour': [[1]],
	'movement': [[1]],
	'media': [[1]],
	'online': [[1]],
	'speech': [[1]],
	'culture': [[1]],
	'lovers': [[1]],
	'abortion': [[1]]
};

var dataURL = 'data/Misogyny_data.json';

var timelineDot = '<div id="timelineDot"> <svg viewBox="0 0 10 10"><circle id="dot" cx="4.7" cy="5" r="5"></circle></svg> </div>';
var arrowDot = '<div id="arrowDot"> <svg viewBox="0 0 10 10"><circle id="dot" cx="5" cy="5" r="5"></circle></svg> </div>';
var jumpPrev = '<img src="assets/img/jumpPrev.svg">';
var jumpNext = '<img src="assets/img/jumpNext.svg">';

var html = '';
var hashtagID = '';


var data = $.getJSON(dataURL, function(d) {
	console.log("success");
		}).fail( function(d, textStatus, error) {
				console.error("getJSON failed, status: " + textStatus + ", error: " + error);
		}).done( function(data) {

				$.each(data, function(sectionIndex, section) {
					var sectionName_id = section.sectionName.replace(/\u002e/g, "-");
					html += '<section id="' + sectionName_id + '">\n';
					$.each(hashtag_position, function(tagIndex, tag) {
						tag.push(new Array(0));
					});

					html += '<div class="sectionhead"><sectionhead>' + section.sectionName + '.</sectionhead></div>\n';
					$.each(section.articles, function(articleIndex, article) {
						html += '<article class="' + "essay_" + article.columns + '">\n';

							html += '<ul class="background">\n';
								html += '<li id="none"></li>\n';
								html += '<li id="none"></li>\n';
							html += '</ul>\n';
							if (article.hashtag_1 != "") {
								hashtagID = hashtag_KtoE[article.hashtag_1];
								hashtag_position[hashtagID][sectionIndex+1].push(articleIndex);
								html += '<hashtag id="' + hashtagID + '"><text>'+article.hashtag_1 +'</text></hashtag>\n';
								if (article.hashtag_2 != "") {
									hashtagID = hashtag_KtoE[article.hashtag_2];
									hashtag_position[hashtagID][sectionIndex+1].push(articleIndex);
									html += '<hashtag id="' + hashtagID + '"><text>'+article.hashtag_2 +'</text></hashtag>\n';
									if (article.hashtag_3 != "") {
										hashtagID = hashtag_KtoE[article.hashtag_3];
										hashtag_position[hashtagID][sectionIndex+1].push(articleIndex);
										html += '<hashtag id="' + hashtagID + '"><text>'+article.hashtag_3 +'</text></hashtag>\n';
							}
						}}

							html += '<h1>' + article.headText + '</h1>\n';
							html += '<p>' + article.bodyText + ' ';
							if (article.reference_1 != "") {
								html += '<br>\n<a href="' + article.reference_1 + '" target="_blank">출처 1</a> \n';
								if (article.reference_2 != "") {
									html += '<a href="' + article.reference_2 + '" target="_blank">출처 2</a> \n';
									if (article.reference_3 != "") {
										html += '<a href="' + article.reference_3 + '" target="_blank">출처 3</a> \n';
							}}}
							html += '</p>\n';

							html += '<dateTime>' + article.timelineDate + '</dateTime>\n';
							html += '<div class="dots">\n';
								html += timelineDot + '\n';
								html += '<div class="prevjump">'+arrowDot+jumpPrev+'</div> <div class="nextjump">'+arrowDot+jumpNext+'</div>\n'
							html += '</div>\n';
							html += '<div class="horizontalLine"></div>'
						html += '</article>\n';
					});

					html += '</section>\n';
				});

				$('#timeline #Intro').after(html);

				html = '';
				html += '<ul class="nav" id="navTime">\n';
				html += '<li><a href="#Intro" class="timeJump">Intro</a></li>\n';
				$.each(data, function(sectionIndex, section) {
					var sectionName_id = section.sectionName.replace(/\u002e/g, "-");
					html += '<li><a href="#' + sectionName_id + '" class="timeJump">' + section.sectionName + '.</a></li>\n';
				});
				html += '<li><a href="#Outro" class="timeJump">400.</a></li>\n';
				html += '</ul>\n';

				$('#timeline').after(html);

				$.holdReady( false );
			});
