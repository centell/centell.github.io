---
layout: post
title:  "[Terminal] ls 색 변경"
date:   2018-1-17 10:12:50
categories: mac terminal
---

기본 터미널에서 `ls`를 했을 때 색이 다 똑같아서 file인지 directory인지 구분이 안 가서 설정해봤다. [여기](https://apple.stackexchange.com/questions/33677/how-can-i-configure-mac-terminal-to-have-color-ls-output)를 참고했다.


```
vi ~/.bash_profile
```

에서 
```bash
export CLICOLOR=1
export LSCOLORS=ExFxCxDxBxegedabagacad
```

이 두 줄을 추가해준 뒤, `Terminal`을 재 실행한다.  
이제 디렉토리는 볼트체 파란색 폰트, 일반 파일은 검정색 폰트로 표시된다. 빨강색은 bash파일인 것 같고, 분홍색은 아직 잘 모르겠다.


