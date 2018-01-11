---
layout: post
title:  "[iOS] SwiftyJSON"
date:   2017-6-22 18:43:37
categories: iOS
---

[https://github.com/SwiftyJSON/SwiftyJSON](https://github.com/SwiftyJSON/SwiftyJSON)

library 찾을 때 이야기 많이 나오던데, 결국 string - json convert 등에서 쓰고 싶다는 생각이 들게 하는 lib.

```
platform :ios, '8.0'
use_frameworks!

target 'MyApp' do
    pod 'SwiftyJSON'
end
```

으로 설치하여 사용가능.

쓰고 싶게 만든 건 [https://stackoverflow.com/questions/37155209/how-to-convert-a-string-to-json-array-in-swift-with-swiftyjson](https://stackoverflow.com/questions/37155209/how-to-convert-a-string-to-json-array-in-swift-with-swiftyjson) 에 있던 코드.
```
import SwiftyJSON

if let dataFromString = jsonString?.data(using: String.Encoding.utf8, allowLossyConversion: false) {
    let json = JSON(data: dataFromString)    
}
```
