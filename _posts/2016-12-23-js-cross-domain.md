---
layout: post
title:  "js CrossDomain 문제 해결"
date:   2016-12-23 14:35:03
categories: js solution
---

javascript 의 정책 중 Same origin Policy 라는게 있어서 다른 도메인의 서버에서의 요청을 보안 문제로 간주하고 차단한다나. 이를 Cross domain issue 라고 하는 모양. Sandbox 라고도 하고.
이 때문에 외부 api 를 사용해 ajax 를 구현하고 싶은 입장에선 문제가 있다.
여튼 뭐 그걸 구현하기 위해 사람들이 해둔게 있더라.

[http://www.ajax-cross-origin.com/](http://www.ajax-cross-origin.com/) 

여기에서 제공하는 js 를 추가한 뒤
```
<script type="text/javascript" src="js/jquery.ajax-cross-origin.min.js"></script>
```
또한 사용할 ajax 부분에

```
$.ajax({
    crossOrigin: true,   // 이것을 삽입한다
    type : "GET",
    url : url,
    dataType : "text",
    outputFormat : "xml",
    success : function(xml) {console.log(xml);},
    error : function(e) {alert("error!!");}
});
```
속성을 추가하면 돌아간다.
