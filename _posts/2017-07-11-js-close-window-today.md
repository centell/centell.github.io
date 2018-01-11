---
layout: post
title:  "[js] 오늘 하루 이 창을 열지 않음"
date:   2017-7-11 18:43:52
categories: js
---

중간에 div 하나 뜨면서 주변 시커멓게 변하고  
쿠키 사용해서 '오늘 하루 이 창을 열지 않음' 옵션을 넣는 버전.  
모바일이랑 PC 화면 따로 만듬  
bootstrap 필요  

html //
```
{{--pc용--}}
<div id="dialog" class="emphasized hidden-xs" style="z-index: 2147483647; position:absolute; top:0%; left:0%; width:0px; height:0px; overflow:hidden; background-color: white; margin-top:-45vh; margin-left:-20vh;">
    <div class="image_popup"><image src="이미지 주소" class="autoFix" /></div>
    <div style="text-align: center; color: red;font-size: medium;"> ※설명</div>
    <div style="text-align: left" >
        <form name="notice_form">
            <div class="col-lg-6"><input type="checkbox" name="chkbox" value="checkbox">오늘 하루 이 창을 열지 않음</div>
            <div class="col-lg-6" style="text-align: right"><a href="javascript:closeWin();"><B>[닫기]</B></a></div>
        </form>
    </div>

</div>
{{--모바일용--}}
<div id="dialog_mobile" class="divpop emphasized hidden-lg" style="z-index: 2147483647; position:absolute; top:0%; left:0%; width:0px; height:0px; overflow:hidden; background-color: white; margin-top:-30vh; margin-left:0;">
    <div class="image_popup"><image src="이미지 주소" class="autoFixMobile"  /></div>
    <div style="text-align: center; color: red;font-size: medium;"> ※ 설명</div>
    <div style="text-align: left" >
        <form name="notice_form_mobile">
            <div class="col-xs-8"><input type="checkbox" name="chkbox" value="checkbox">오늘 하루 이 창을 열지 않음</div>
            <div class="col-xs-4" style="text-align: right"><a href="javascript:closeWinMobile();"><B>[닫기]</B></a></div>
        </form>
    </div>
</div>
```

javascript //
```


<script language="Javascript">
window.onload = function() {
    $( "#dialog" ).dialog({closeOnEscape: false,
        open: function(event, ui) {
            $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
            $(".ui-dialog-titlebar", ui.dialog | ui).hide();
        }});
    $( "#dialog_mobile" ).dialog({closeOnEscape: false,
        open: function(event, ui) {
            $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
            $(".ui-dialog-titlebar", ui.dialog | ui).hide();
        }});

}
    function setCookie( name, value, expiredays ) {
        var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays );
        document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
    }

    function closeWin() {
        if ( document.notice_form.chkbox.checked ){
            setCookie( "maindiv", "done" , 1 );
        }
        $('#dialog').addClass('hide');
        $('#dialog_mobile').addClass('hide');
    }
    function closeWinMobile() {
        if ( document.notice_form_mobile.chkbox.checked ){
            setCookie( "maindiv", "done" , 1 );
        }
        $('#dialog_mobile').addClass('hide');
        $('#dialog').addClass('hide');
    }

    cookiedata = document.cookie;
    if ( cookiedata.indexOf("maindiv=done") < 0 ){
        document.all['dialog'].style.visibility = "visible";
        document.all['dialog_mobile'].style.visibility = "visible";
    }
    else {
        document.all['dialog'].style.visibility = "hidden";
        document.all['dialog_mobile'].style.visibility = "hidden";
    }
</script>
```

css //
```


<style>

    .emphasized {
        position:fixed;
        top:150px; left:30px;
        box-shadow : rgba(0,0,0,0.5) 0 0 0 9999px, rgba(0,0,0,0.5) 2px 2px 3px 3px;
        z-index : 100;
    }
    .autoFix {
        width: 60vh;
        height: auto;
    }

    .autoFixMobile {
        width: 320px;
        height: auto;
    }


</style>
```
