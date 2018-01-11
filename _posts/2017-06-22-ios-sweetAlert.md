---
layout: post
title:  "[iOS] SweetAlert"
date:   2018-1-11 22:02:25
categories: iOS
---

![image](https://github.com/codestergit/SweetAlert-iOS/raw/master/SweetAlertiOS.gif)

[https://github.com/codestergit/SweetAlert-iOS](https://github.com/codestergit/SweetAlert-iOS)

Web 할 때 많이 사용했던 javascript library 인데 iOS도 지원하고 있었다.

git 에서 제공하는 SweetAlert.swift file 을 원하는 directory에 저장하여 사용하면 된다.

예제 :
```
_ = SweetAlert().showAlert("Good job!", subTitle: "You clicked the button!", style: AlertStyle.success)
```

또한 git 에서 제공되는 ViewController.swift 에 포함된 예제 code는 다음과 같다. git 메인 readme.md 에 있는 code에는 문제가 있다.
```
/ A basic message

   @IBAction func aBasicMessageAlert(_ sender: AnyObject) {
        _ = SweetAlert().showAlert("Here's a message!")
    }
// A title with text under

    @IBAction func subtitleAlert(_ sender: AnyObject) {
    
        _ = SweetAlert().showAlert("Here's a message!", subTitle: "It's pretty, isn't it?", style: AlertStyle.none)
    }
// A success message
    @IBAction func sucessAlert(_ sender: AnyObject) {
        _ = SweetAlert().showAlert("Good job!", subTitle: "You clicked the button!", style: AlertStyle.success)
    }
// A warnig message, with a funtion action on "Confirm" - button
    @IBAction func warningAlert(_ sender: AnyObject) {
        _ = SweetAlert().showAlert("Are you sure?", subTitle: "You file will permanently delete!", style: AlertStyle.warning, buttonTitle:"Cancel", buttonColor:UIColor.colorFromRGB(0xD0D0D0) , otherButtonTitle:  "Yes, delete it!", otherButtonColor: UIColor.colorFromRGB(0xDD6B55)) { (isOtherButton) -> Void in
            if isOtherButton == true {
            
                print("Cancel Button  Pressed", terminator: "")
            }
            else {
                _ = SweetAlert().showAlert("Deleted!", subTitle: "Your imaginary file has been deleted!", style: AlertStyle.success)
            }
        }
    }
// Action on Cancel and Confirm button
    @IBAction func cancelAndConfirm(_ sender: AnyObject) {
        _ = SweetAlert().showAlert("Are you sure?", subTitle: "You file will permanently delete!", style: AlertStyle.warning, buttonTitle:"No, cancel plx!", buttonColor:UIColor.colorFromRGB(0xD0D0D0) , otherButtonTitle:  "Yes, delete it!", otherButtonColor: UIColor.colorFromRGB(0xDD6B55)) { (isOtherButton) -> Void in
            if isOtherButton == true {
                
                _ = SweetAlert().showAlert("Cancelled!", subTitle: "Your imaginary file is safe", style: AlertStyle.error)
            }
            else {
                _ = SweetAlert().showAlert("Deleted!", subTitle: "Your imaginary file has been deleted!", style: AlertStyle.success)
            }
        }

    }
// A message with custom image
    @IBAction func customIconAlert(_ sender: AnyObject) {
        _ = SweetAlert().showAlert("Sweet!", subTitle: "Here's a custom image.", style: AlertStyle.customImag(imageFile: "thumb.jpg"))
    }
```
