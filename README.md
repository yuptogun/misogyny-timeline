# [여성혐오 타임라인](http://20timeline.com/oversmart/misogyny-timeline) git

"한국 시민들이 2016년에 목격한 찝찝한 일들부터, 백제 개로왕이 백성을 겁탈하려고 했던 일까지. 한국에서 벌어진 뭔가 찝찝한 일들을 주욱 모아보았다. ’여성혐오’라는 단어는 중요하지 않다. 이 페이지의 내용 하나하나를 읽으며 뭔가 찝찝하다면, 그 근원이 무엇인지 한 번 상상해 보시라."


## Overview

- 대한민국 역사상 여성이 겪은 혐오, 차별, 피해 등을 json 데이터로 구조화한 다음 사용자단에서 파싱해서 타임라인 형태로 시각화하는 아카이브입니다.
- 루트 내 `misogyny_timeline.php`와 `assets/img` 디렉토리 내 이미지들을 제외한 모든 파일은 이 저장소에서 직접 [Rawgit](https://rawgit.com/)을 통해 배포됩니다. 무슨 뜻이냐면... **여성혐오 타임라인은 여러분이 업데이트하는 그대로 서비스가 된다는 뜻이죠!!!**


## License

- 별다른 특이사항이 없는 한 이 소스는 [CCL by-nc-sa 4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/)을 따릅니다. 영리 목적으로 쓰실 수 없으며, 원저작자가 [조현익](https://www.behance.net/comjoy91)임을 명시하셔야 하고, 이 조건을 지키는 한 수정해 활용하실 수 있습니다.


## How To Contribute

여성혐오의 역사에 종언을 고하는 그날까지 함께 추적해 나갑시다.
기여하시려면 GitHub 계정을 만드시고 셋 중 더 자신 있는 방법으로 참여해 주세요.

1. **자료(타임라인)** 개선
	* [data/sections](https://github.com/yuptogun/misogyny-timeline/blob/master/data/sections) 폴더의 파일들을 수정합니다.
		* 기존 자료의 수정: 해당 자료가 들어 있는 json 파일을 클릭한 후, 연필 아이콘을 눌러서 나오는 입력칸에 원하는 대로 수정합니다.
		* 새로운 자료의 추가: 기존 json 파일의 형식을 정확히 지켜서 새 파일을 생성해 업로드한 다음, [data/filename_array.json](https://github.com/yuptogun/misogyny-timeline/blob/master/data/filename_array.json)의 기존 json 파일 주소를 참조해서 새 파일의 주소를 추가합니다.
	* 업데이트 내역 요약과 사유를 적어서 Commit하시면 됩니다.
	* 관리자들이 업데이트를 확인하고 커밋을 승인하면, 1~3분쯤 뒤부터는 수정하신 타임라인 내용이 서비스에 자동 반영됩니다!

2. **CSS / JS / PHP** 개선 
	* 이 저장소를 clone합니다.
	* `misogyny_timeline.php` 파일을 최종 뷰로 기준 삼고 소스들을 수정합니다.
	* 수정 내역 요약과 사유를 적어서 Commit & Pull Request 하시면 됩니다.
		* CSS / JS의 경우 관리자들이 커밋을 확인하고 요청을 승인하면, 1~3분쯤 뒤부터 수정하신 내역이 자동으로 반영됩니다!
		* `misogyny_timeline.php`의 경우 관리자들이 커밋을 확인하고 요청을 승인한 다음 [Twenties' Timeline](http://20timeline.com/) 서버에 올리면, 그때부터 서비스에 반영됩니다.
