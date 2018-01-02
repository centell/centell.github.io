---
layout: post
title:  "새 하드디스크를 인식시키기"
date:   2016-12-22 20:33:00
categories: hdd windows sloution
---

새 하드를 도킹 스테이션 등으로 연결할 때 인식이 안되곤 한다. 하드 설정 문제다.

window 환경이라면 컴퓨터 관리 ( `compmgmt.msc` ) 를 실행해서 `저장소\디스크관리` 로 들어가서 새로 연결한 하드를 설정한다. 

`mbr` 은 window 운영체제를 설치하고 싶다면 선택한다. 이 방식은 2t 까지만 인식이 된다.

`gpt` 는 2t 이상 인식 가능하나 window 를 설치할 수 없다.

`NTFS` 방식으로 하면 window 에서 읽기/쓰기 가 가능. macOS 에서는 읽기만 가능한 드라이브가 된다.
