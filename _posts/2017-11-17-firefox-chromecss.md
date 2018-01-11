---
layout: post
title:  "[firefox] hide tabbar with css"
date:   2017-11-17 15:15:15
categories: firefox
---

Tree Style Tabs 를 즐겨 쓰는데 업데이트가 되면서 상단의 탭바가 사라지지 않는 문제가 생겼다.  
사태 파악을 해보니  
57.0 버전부터는 트리스타일탭 2.0 이상을 써야하는데 여기엔 해당 기능이 없고, 상단 탭바를 없앨 수 없었던 이유는 아직 firefox 57에서 webExtension api 로 탭바 숨기는걸 지원하지 않기 때문. 개발자들이 건의중에 있음...  

참고1. [https://www.ghacks.net/2017/09/27/tree-style-tab-is-a-webextension-now/](https://www.ghacks.net/2017/09/27/tree-style-tab-is-a-webextension-now/)

참고2. [https://bugzilla.mozilla.org/show_bug.cgi?id=1332447](https://bugzilla.mozilla.org/show_bug.cgi?id=1332447)

add-on이 더 없나 찾아보았으나 레거시라 작동하지 않는 모양. 하여 이쪽에서 해결할 방법을 찾아봄. 최근에 트위터에서 `chrome.css`인가 뭔가를 이용해서 브라우저 UI를 마음대로 바꾸는걸 봐서 비슷한게 firefox에도 있을 것이라고 생각하고 찾아보았다.

1. 개발자 모드의 환경 설정에서 `고급 설정`의 `브라우저 크롬과 부가 기능 디버깅에도 도구상자 쓰기` 및 `원격 디버깅 켜기` 옵션을 켠다.  
2. 브라우저 도구(shift + option + command + I )의 스타일 편집기에서 인라인 스타일시트(css파일)을 하나 추가한다.  

다음의 코드를 입력한다.

hide-tabbar.css
```
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/*
 * This style will hide the tab bar. For MacOS
 *
 * Contributor(s): Isaac-Newt, Ivan0xFF
 */

#TabsToolbar {
  height: 22px !important;
  visibility: collapse;
}

.tabbrowser-tabs {
  height: 22px !important;
  visibility: collapse;
}

#tabbrowser-tabs {
  visibility: collapse;
  height: 22px !important;
}

#nav-bar{
  border-top-width: 0px !important;
}

/* Position window controls */
#titlebar-buttonbox-container {
  margin-left: 5px !important;
  margin-top: 5px !important;
}

/*
 * Make room for window controls.
 * Only apply this style when not in fullscreen mode.
 */
#main-window:not([inFullscreen]) #nav-bar{
  padding: 0px 5px 0px 0px !important;
}
```

[이 영상](https://vimeo.com/235050016)이 참고가 되었다.

수정된 것을 저장하기 위해서는

주소창에 about:support 를 입력하여 서포트 페이지에 접속한 뒤,`프로필 폴더`를 `Finder에 표시` 하여 디렉토리에 접근한다. 거기 디폴트 폴더에 한 번 더 접근한 뒤 `chrome`폴더를 하나 더 만들어주고, 그 안에 파일을 삽입한다. (userChrome.css 등으로 이름지어준다.)

