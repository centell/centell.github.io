---
layout: post
title:  "Your VM has become “inaccessible.”"
date:   2017-4-13 11:41:50
categories: solution
---

출근해서 vagrant up 을 실행했는데 이런 메시지가 뜨며 제대로 실행되질 않았다.

<font color="red">Your VM has become “inaccessible.” Unfortunately, this is a critical error with VirtualBox that Vagrant can not cleanly recover from. Please open VirtualBox and clear out your inaccessible virtual machines or find a way to fix them.</font>  
VM이 "액세스 할 수 없게"되었습니다. 불행히도 이것은 Vagrant가 깨끗하게 복구 할 수없는 VirtualBox의 중대한 오류입니다. VirtualBox를 열고 액세스 할 수없는 가상 컴퓨터를 제거하거나 해결 방법을 찾으십시오.

거 참 unfortunately 하네..

좀 찾아보니

<font color="red">If you’ve deleted a virtual machine file still referenced by one of your projects, you’ll run into the following error when you try and instantiate the VM via</font>  
프로젝트 중 하나에서 계속 참조되는 가상 머신 파일을 삭제 한 경우 다음을 통해 VM을 인스턴스화하고 시도 할 때 다음 오류가 발생합니다.  
( 출처 : [http://doodlebobbers.com/vagrant-error-your-vm-has-become-inaccessible/](http://doodlebobbers.com/vagrant-error-your-vm-has-become-inaccessible/) )

라는 듯 하다.. 아무 짓도 안 했는데요..
 

Virtual BOX 를 실행해보니

```
    Runtime error opening 'C:\Users\master\VirtualBox VMs\homestead-7\homestead-7.vbox' for reading: -102(File not found.).
    F:\tinderbox\win-5.0\src\VBox\Main\src-server\MachineImpl.cpp[740] (long __cdecl Machine::i_registeredInit(void)).
```
이런게 나온다. 진짜 파일이 사라졌다..

다행히 백업해둔게 있어서 `homestead-7.vbox` 라는 파일만 붙여넣었더니 다시 잘 돌아간다.

이거 백업도 잘 해둬야 했던거냐..
