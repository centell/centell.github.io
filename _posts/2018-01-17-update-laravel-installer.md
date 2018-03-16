---
layout: post
title:  "[Laravel] Laravel Installer 업데이트 (해결안됨)"
date:   2018-1-17 09:23:15
categories: laravel composer update php
---

#
```
composer global require "laravel/installer"
```

[**RLidea**](http://rlidea.com)기념일! 어느새 **Rock-in**부터 시작한 홈페이지 개발/운영도 15년도 넘었다. 새삼 프로젝트 욕심이 나서 `laravel new laravel`을 해봤는데

```bash
$ laravel new laravel
Crafting application...

  ...
  - Installing laravel/framework (v5.5.31): Downloading (100%)         
  ...
```

버전이 눈에 둘어오니, 최근 Laravel 버전이 얼마나 올랐나 궁금해져서 확인해봤다.

[**Laravel News**](https://laravel-news.com/category/laravel-5.6)에서 2018년 1월에 5.6 버전이 출시되었다고 한다. 그래서 업데이트를 했다. [여기](https://laracasts.com/discuss/channels/laravel/laravel-installer-version)를 참고했다.

Laravel Installer 버전도 확인해보고
```bash
$ laravel -V
Laravel Installer 1.4.1
```


`composer global update`

```bash
$ composer global update
Changed current directory to /Users/centell/.composer
Loading composer repositories with package information
Updating dependencies (including require-dev)
Package operations: 0 installs, 5 updates, 2 removals
  - Removing symfony/debug (v3.3.9)
  - Removing psr/log (1.0.2)
  - Updating symfony/process (v3.3.9 => v4.0.3): Downloading (100%)         
  - Updating symfony/filesystem (v3.3.9 => v4.0.3): Downloading (100%)         
  - Updating symfony/polyfill-mbstring (v1.5.0 => v1.6.0): Loading from cache
  - Updating symfony/console (v3.3.9 => v4.0.3): Downloading (100%)         
  - Updating laravel/installer (v1.4.1 => v1.5.0): Downloading (100%)         
Writing lock file
Generating autoload files
```

```
$ laravel -V
Laravel Installer 1.5.0
```

여기까지는 잘 되는 것 같다. 체크하기 위해 Laravel 프로젝트를 하나 생성해봤다.
```
$laravel new laravel
Crafting application...

  ...
  - Installing laravel/framework (v5.5.31): Loading from cache
  ...
```

여전히 `laravel/framework (v5.5.31)`가 깔린다. *"Loading from cashe"*라니요. **cashe**를 지워봐야겠다. [여기](https://stackoverflow.com/questions/22700728/composer-loading-from-cache)를 참고했다.

```bash
$ composer clear-cache
Cache directory does not exist (cache-vcs-dir): 
Clearing cache (cache-repo-dir): /Users/centell/.composer/cache/repo
Clearing cache (cache-files-dir): /Users/centell/.composer/cache/files
Clearing cache (cache-dir): /Users/centell/.composer/cache
All caches cleared.
```


그런데, 캐시를 지워도 마찬가지로 `laravel/framework (v5.5.31)`로 프로젝트가 생성된다.

다시 [처음 글](https://laracasts.com/discuss/channels/laravel/laravel-installer-version)로 돌아가서 차분하게 더 따라했다..
```bash
$ composer global require "laravel/installer"
Changed current directory to /Users/centell/.composer
Using version ^1.5 for laravel/installer
./composer.json has been updated
Loading composer repositories with package information
Updating dependencies (including require-dev)
Nothing to install or update
Writing lock file
Generating autoload files

$ laravel -V
Laravel Installer 1.5.0

$ laravel new laravel
Crafting application...

  ...
  - Installing laravel/framework (v5.5.31): Downloading (100%)         
  ...

```

++

```
$ composer global require "laravel/installer"
```
 이걸 입력하면 제대로 업데이트가 된다. [**참고**](https://laravel.com/docs/5.6/installation)



## 문제 해결 과정에서 찾은 정보들
* [**특정 버전의 라라벨 설치하기**](https://stackoverflow.com/questions/35149812/install-specific-version-using-laravel-installer)  
`laravel new blog --version`  
Example: `laravel new blog --5.1`
Example2: `composer create-project laravel/laravel app "5.1.*"`

* [**Laravel Installer Fix**](https://devdojo.com/blog/tutorials/laravel-installer-fix)

