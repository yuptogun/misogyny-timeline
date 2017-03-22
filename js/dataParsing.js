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

//hashtag_position[sectionIndex][articleIndex] = array of hashtags in [sectionIndex, articleIndex]-th article.
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

var timelineDot = '<div class="timelineDot"> <svg viewBox="0 0 10 10"><circle class="dot" cx="4.7" cy="5" r="5"></circle></svg> </div>';
var arrowDot = '<div class="arrowDot"> <svg viewBox="0 0 10 10"><circle class="dot" cx="5" cy="5" r="5"></circle></svg> </div>';
var jumpPrev = '<img src="http://20timeline.com/oversmart/public/misogyny-timeline/jumpPrev.svg">';
var jumpNext = '<img src="http://20timeline.com/oversmart/public/misogyny-timeline/jumpNext.svg">';

var navIntro = '<li><a href="#Intro" class="timeJump">Intro</a></li>\n';
var navOutro = '<li><a href="#Outro" class="timeJump">400.</a></li>\n';

var randomString = function(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};
var sectionDataURLArray_fileURL = 'https://rawgit.com/yuptogun/misogyny-timeline/master/data/filename_array.json';


var urlArray = $.getJSON(sectionDataURLArray_fileURL, function(d) {
	console.log("data loading success: "+sectionDataURLArray_fileURL)
		}).fail( function(d, textStatus, error) {
				console.error("getJSON failed, status: " + textStatus + ", error: " + error);
		}).done( function(urlArray) {
				$('#navTime').append(navIntro);
				getSection_recursive(urlArray, 0);
		});


function parsing_a_Hashtag(hashtag, decodedIndex, articleIndex) {
	var returnHTML = '';
	var hashtagClass = hashtag_KtoE[hashtag];
	hashtag_position[hashtagClass][decodedIndex].push(articleIndex);
	returnHTML += '<hashtag class="' + hashtagClass + '">\n';
		// background
		returnHTML += '<div class="background"></div>\n';
		// hashtag button
		returnHTML += '<div class="button"><text>'+ hashtag +'</text></div>\n';
	returnHTML += '</hashtag>\n';
	return returnHTML;
};
function parsingHashtag_s(article, sectionIndex, articleIndex) {
	var returnHTML = '<div class="hashtag_flexbox">\n';
	if (article.hashtag_1 != "") {
		returnHTML += parsing_a_Hashtag(article.hashtag_1, sectionIndex+1, articleIndex);
		if (article.hashtag_2 != "") {
			returnHTML += parsing_a_Hashtag(article.hashtag_2, sectionIndex+1, articleIndex);
			if (article.hashtag_3 != "") {
				returnHTML += parsing_a_Hashtag(article.hashtag_3, sectionIndex+1, articleIndex);
	}}}
	returnHTML += '</div>\n';
	return returnHTML;
};

function parsingReference_s(article) {
	var returnHTML = '';
	if (article.reference_1 != "") {
		returnHTML += '<br>\n<a href="' + article.reference_1 + '" target="_blank">출처 1</a> \n';
		if (article.reference_2 != "") {
			returnHTML += '<a href="' + article.reference_2 + '" target="_blank">출처 2</a> \n';
			if (article.reference_3 != "") {
				returnHTML += '<a href="' + article.reference_3 + '" target="_blank">출처 3</a> \n';
	}}}
	return returnHTML;
};

function parsing_a_Article(article, sectionIndex, articleIndex) {
	var returnHTML = '';
	returnHTML += '<article class="' + "essay_" + article.columns + '">\n';
		// background
		returnHTML += '<ul class="background">\n';
			returnHTML += '<li class="none"></li>\n';
			returnHTML += '<li class="none"></li>\n';
		returnHTML += '</ul>\n';
		// hashtag
		returnHTML += parsingHashtag_s(article, sectionIndex, articleIndex);
		// article title
		returnHTML += '<h1>' + article.headText + '</h1>\n';
		// article main text + references
		returnHTML += '<p>' + article.bodyText + ' ' + parsingReference_s(article) + '</p>\n';
		// time date
		returnHTML += '<dateTime>' + article.timelineDate + '</dateTime>\n';
		// timeline dot
		returnHTML += '<div class="dots">\n';
			returnHTML += timelineDot + '\n';
			returnHTML += '<div class="prevjump">'+arrowDot+jumpPrev+'</div> <div class="nextjump">'+arrowDot+jumpNext+'</div>\n'
		returnHTML += '</div>\n';
		// horizontalLine
		returnHTML += '<div class="horizontalLine"></div>'
	returnHTML += '</article>\n';
	return returnHTML;
};

function parsing_a_Section(section, sectionIndex) {
	var returnHTML = '';
	//sectionID
	var sectionName_id = section.sectionName.replace(/\u002e/g, "-");
	returnHTML += '<section id="' + sectionName_id + '">\n';
		// section title
		returnHTML += '<div class="sectionhead">\n<sectionhead>' + section.sectionName + '.</sectionhead>\n<div class="horizontalLine"></div></div>\n';
		// article contents
		$.each(section.articles, function(articleIndex, article) {
			returnHTML += parsing_a_Article(article, sectionIndex, articleIndex)
		});
	returnHTML += '</section>\n';
	return returnHTML;
}

function parsing_Nav(section, sectionIndex) {
	var sectionName_id = section.sectionName.replace(/\u002e/g, "-");
	var returnHTML = '<li><a href="#' + sectionName_id + '" class="timeJump">' + section.sectionName + '.</a></li>\n';

	return returnHTML;
};


function getSection_recursive(sectionDataURLArray, sectionIndex) {
	if (sectionDataURLArray.length <= 0) {
		$('#navTime').append(navOutro);
		$.holdReady( false );
	}
	else {
		$.each(hashtag_position, function(tagIndex, tag) {
			tag.push(new Array(0));
		});
		var sectionDataURL = sectionDataURLArray.shift() + '?r=' + randomString(32);
		var section = $.getJSON(sectionDataURL, function(d) {
			console.log("data loading success: "+sectionDataURL);
				}).fail( function(d, textStatus, error) {
						console.error("getJSON failed, status: " + textStatus + ", error: " + error);
				}).done( function(section) {
							console.log(section.sectionName);
					$('#timeline #Outro').before(parsing_a_Section(section, sectionIndex));
					$('#navTime').append(parsing_Nav(section, sectionIndex));
					getSection_recursive(sectionDataURLArray, sectionIndex+1);
				});
	}
}
