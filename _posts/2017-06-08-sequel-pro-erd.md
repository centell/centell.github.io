---
layout: post
title:  "Get ERD Image From Sequel Pro on Mac"
date:   2017-6-8 13:22:33
categories: SequelPro ERD
---

Mac 에서 ERD이미지를 Sequel Pro를 이용하여 얻는 방법이다.


1. Install graphviz via homebrew (note - sudo isn’t required for my installation of homebrew). brew install graphviz  

```
brew install graphviz
```

2. Connect to your MySQL database using Sequel Pro.  
3. In Sequel Pro, go to File > Export… > Choose Dot as the export type > Export.  
4. Launch Terminal.app and run the following command from the directory where the .dot file was exported to  

```
dot -Tpng your_database.dot > your_database.png
```

출처1 : [http://mattlangtree.com.au/2011/11/15/erd-diagrams-from-sequel-pro/](http://mattlangtree.com.au/2011/11/15/erd-diagrams-from-sequel-pro/)

출처2 : [http://brewformulas.org/Graphviz](http://brewformulas.org/Graphviz)
