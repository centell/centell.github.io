---
layout: post
title:  "intelliJ(php Storm) 에서 파일 검색 요령"
date:   2018-1-2 23:48:33
categories: tips
---

`ctrl+shift+f` 를 이용하면 모든 파일에서 텍스트를 검색할 수 있다.

이때 

OR : `text1|text2`
AND : `(text1).*(text2)|\2.*\1` 

과 같이 사용한다.
