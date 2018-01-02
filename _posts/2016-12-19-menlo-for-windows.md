---
layout: post
title:  "macOS의 기본 개발용 폰트 Menlo 를 윈도우에서 사용하기"
date:   2016-12-19 14:26:00
categories: blog
---

맥을 사용하다가 윈도우를 강제적으로 사용하게 되어서 개발 환경을 다시 세팅 중.

윈도우의 기본 개발용 폰트인 Consolas 가 마음에 안 들어서 이전에 쓰던 Menlo 를 사용할 방법을 찾아봤는데 같은 생각을 한 사람들이 이미 많은 모양.

Meslo 인가 비슷하게 만들었다는 폰트들도 있었는데 미묘하게 마음에 안 들어서 찾던 중 제대로 추출된 것으로 보이는 걸 발견했다.

[https://github.com/hbin/top-programming-fonts](https://github.com/hbin/top-programming-fonts)

여기 포함된 Menlo-Regular 를 사용하고 나서 대 만족. 계속 이걸 개발용 폰트로 사용할 생각이다.


Sublime Text 에서 설정 바꾸고 싶으면
Setting-User 에서

{
 "ignored_packages":
 [
  "Markdown",
  "Vintage"
 ],
 "font_face": "Menlo-Regular",
 "font_size": 12,
 // "line_padding_top" : 2,
 // "line_padding_bottom" : 2
}


를 추가한다.
