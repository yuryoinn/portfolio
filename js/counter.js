var countOptions = {
    useEasing: true,
    separator: "",
    decimal: "",
    prefix: "",
    suffix: "",
    duration: 1
};

var countUp = new CountUp("skillNum", 0, 4, 0, countOptions);

$(document).ready(function(){
    $(window).scroll(function(){
        var $win = $(this);
        var $scrollTop = $win.scrollTop();
    
        if($scrollTop >= 1000) {
            countUp.start();
        } else if ($scrollTop < 1000) {
            countUp.reset();
        }
    });
});
