var Tool=(function () {
    var last = 0;
    var delay_act;
    var that;
    var obj={};
    obj.throttle=function (fn, interval, target) {
        var now = +new Date();
        if (that === undefined) {
            that = target;
        }
        clearTimeout(delay_act);
        if (now - last >= interval) {
            fn.apply(that);
            that = undefined;
            last = now;
        } else {
            delay_act = setTimeout(function () {
                fn.apply(that);
                // last = now;
                that = undefined;
            }, interval);
        }
    }
    return obj
})()