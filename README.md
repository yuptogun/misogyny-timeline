# [여성혐오 타임라인](http://20timeline.com/oversmart/misogyny-timeline) git

"한국 시민들이 2016년에 목격한 찝찝한 일들부터, 백제 개로왕이 백성을 겁탈하려고 했던 일까지. 한국에서 벌어진 뭔가 찝찝한 일들을 주욱 모아보았다. ’여성혐오’라는 단어는 중요하지 않다. 이 페이지의 내용 하나하나를 읽으며 뭔가 찝찝하다면, 그 근원이 무엇인지 한 번 상상해 보시라."


## Overview

- 대한민국 역사상 여성이 겪은 혐오, 차별, 피해 등을 json 데이터로 구조화한 다음 사용자단에서 파싱해서 타임라인 형태로 시각화한 아카이브입니다.
- 이 저장소는 기본적으로 '이 아카이브가 이렇게 구현되었다'라는 것을 공개하고 함께 개선하기 위한 것입니다.
- 실제 서비스에는 다음 소스들만이 live로 사용되고 나머지는 [Twenties' Timeline](http://20timeline.com/) 서버에서 별도로 관리 및 작동됩니다.
	- data/Misogyny-timeline.json


## License

- 별다른 특이사항이 없는 한 이 소스는 [CCL by-nc-sa 4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/)을 따릅니다. 영리 목적으로 쓰실 수 없으며, 원저작자가 [조현익](mailto:comjoy91@20timeline.com)임을 명시하셔야 하고, 이 조건을 지키는 한 수정해 활용하실 수 있습니다.


## How To Contribute

여성혐오의 역사에 종언을 고하는 그날까지! 함께 추적해 나갑시다.  
기여하시려면 GitHub 계정을 만드시고 둘 중 더 자신 있는 방법으로 참여해 주세요.

1. **자료(타임라인)** 개선
  * [data/Misogyny_timeline.json](https://github.com/yuptogun/misogyny-timeline/blob/master/data/Misogyny_data.json) 파일을 클릭합니다.
  * 연필 아이콘을 눌러서 나오는 입력칸에 원하는 대로 수정합니다.
  * Commit changes 칸에는 수정 내역 요약과 수정 사유를 적어 주세요.
  * Commit changes 버튼을 눌러 수정 내역 반영을 요청하세요.
  * 관리자들이 합당한 사유라고 판단하면 승인합니다.
  * 관리자들의 수정 내역 반영 이후 1~3분 뒤부터 수정된 타임라인 내용이 RawGit에 의해 배포됩니다.

2. **CSS / JS** 개선
	- 이 저장소를 clone합니다.
	- html을 최종 뷰로 기준 삼고 소스들을 수정합니다.
	- 어디어디를 어떤 이유로 고쳤는지 comment로 적어 주시고 커밋 & 풀리퀘스트 해주세요.
	- 관리자들이 합당한 리퀘스트라고 판단하면 merge합니다.
	- 실제 온라인 반영까지는 조금 시간이 걸립니다. (php 버전을 만들어서 서버에 올리기 때문에...)