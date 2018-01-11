---
layout: post
title:  "Sublime Text - Sublimerge"
date:   2017-4-24 15:24:40
categories: tips
---

* Sublime Text 에서 merge 기능을 사용하는 방법.

1. Package Control ( Mac : `cmd + Shift + P` , Win :  `Ctrl + Shift + P`)  
2. install 'Sublimerge Pro'
3. You can see Preference - package Settings - Sublimerge

Short cut : `Ctrl + Art + D`

 

`[ctrl]+[alt]+[+]` - 다음에 위치한 비교할 곳으로 이동합니다.(눌러보면 압니다. 동기화할 곳의 다음순번으로 갑니다.)  
`[ctrl]+[alt]+[-]` - 이전에 위치한 비교할 곳으로 이동합니다.  
`[ctrl]+[alt]+[,]` - 오른쪽에 있는 코드를 왼쪽으로 병합합니다.(여기서 병합은 복사 붙여넣기와 같습니다. 다른코드가 잇을경우 그 코드는 나두고 추가하는것이 아닙니다. 그대로 붙여넣기때문에 기존의 코드는 없어집니다.)

`[ctrl]+[alt]+[.]` - 왼쪽에 있는 코드를 오른쪽으로 병합합니다.  
`[ctrl]+[alt]+[/] + [,]` - 오른쪽에 있는 코드를 전부 왼쪽으로 병합합니다.  
`[ctrl]+[alt]+[/] + [.]` - 왼쪽에 있는 코드를 전부 오른쪽으로 병합니다.

 

`[ctrl]+[alt]+[enter]` - 토글 편집모드(연속해서 눌러보세요. 그럼 압니다.)  
`[ctrl]+[alt]+[left click]` - 블록을 선택 및 해제합니다.(복수 선택 가능)  
`[ctrl]+[shift]+[left click]` - 왼쪽에서 오른쪽으로 코드를 병합합니다. 그리고 다음 포커스로 이동.  
`[ctrl]+[shift]+[right click]` - 오른쪽에서 왼쪽으로 코드를 병합합니다. 그리고 다음 포커스로 이동.


참고 : [http://demun.tistory.com/2378](http://demun.tistory.com/2378)
