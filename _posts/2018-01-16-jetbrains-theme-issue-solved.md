---
layout: post
title:  "[JetBrains] 테마 변경 문제 해결"
date:   2018-1-16 09:12:47
categories: IDE JetBrains
---

[JetBrains](https://www.jetbrains.com/)의 제품을 써보고 있다. 예전에 phpStorm을 써봤고, Android 개발을 하게 되면서 Android Studio를 쓰게 되면서 역시 강력하다는 생각을 많이 했다.

그래서 학생 라이센스를 등록하고, WebStorm도 써보려고 하는데 테마가 default로 변경 안 되는 문제가 발생. [이슈](https://youtrack.jetbrains.com/issue/WEB-30626)를 확인하니 `Material Theme UI plugin` 의 문제라고 한다.

플러그인 삭제 방법은 [여기](https://www.jetbrains.com/help/idea/installing-updating-and-uninstalling-repository-plugins.html)를 참고했다. `⌘,`를 누르고 **Preferences**을 연 뒤, **Plugins**에서 **theme**을 검색해보니 정말 **Material Theme UI**라는게 설치되어 있었다. 이를 삭제하니 정상적으로 테마를 변경할 수 있었다.



