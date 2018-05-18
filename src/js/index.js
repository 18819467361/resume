
    //技能条动画
    $(window).on('scroll',function () {
        $skill=$('#skill');
        var skillOffset=$skill.offset().top;
        var skillHeight=$skill.height();
        var docScrollTop=$(document).scrollTop();
        if(skillOffset<=docScrollTop+skillHeight){
            $skill.addClass('show');
                $(this).unbind();
        }
    })
    //固定导航栏
    $nav=$('nav');
    $header=$('.header').eq(0);
    function fn() {
        var docScrollTop=$(document).scrollTop();
        var headerOffset=$header.offset().top;
        var headerHeight=$header.height();
        var navHeight=$nav.height();
        if(docScrollTop>headerOffset+headerHeight+12){
            $nav.addClass('fixNav');
            $header.css("margin-bottom",navHeight+12)
        }else{
            $nav.removeClass('fixNav');
            $header.css("margin-bottom","0")
        }
    }
    $(document).scroll(function () {
        Tool.throttle(fn,100,this)
    })
    //点击信息收起导航栏
    $nav.on('click',function (event) {
        var targetName = event.target.nodeName.toLocaleLowerCase();
        if(targetName==='a'){
            if($('.navbar-toggle').is(":visible")){
                $('.navbar-toggle').click();
            }
            if(event.target.title){
                targetEle=event.target.title;
                var navHeight=$nav.height();
                var targetOffset=$(targetEle).offset().top;
                newPosition=targetOffset-navHeight-5;
                scrollTo(0,newPosition);
            }
        }

    })
