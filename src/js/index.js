
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
        if(docScrollTop>=headerOffset+headerHeight){
            $nav.addClass('fixNav');
            $header.css("margin-top",navHeight)
        }else{
            $nav.removeClass('fixNav');
            $header.css("margin-top","0")
        }
    }
    $(document).scroll(function () {
        Tool.throttle(fn,50,this)
    })
