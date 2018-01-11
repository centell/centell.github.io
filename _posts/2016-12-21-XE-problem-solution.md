---
layout: post
title:  "XE 에서 모듈을 삭제 했는데 쉬운 설치에서 계속 설치됨 이라고 나올 경우"
date:   2016-12-21 16:19:29
categories: XE
---

쉬움설치를 할 경우 xe_ai_installed_packages 에서 목록이 저장됨. 해당 정보를 삭제해주면 해결된다.

delete from xe_ai_installed_packages 라던가.
