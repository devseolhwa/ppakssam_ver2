/* gnb */
$(document).on("mouseenter focus", ".nav > ul > li > a", function () {
    $(this).parent("li").addClass("active").siblings("li").removeClass("active");
    return false;
 }).on("mouseleave", ".nav", function () {
     $(".nav > ul > li").removeClass("active");
     return false;
 }).on("click", "#btnGnbOpen", function () {
     $("#gnb").fadeIn("400").addClass("active");
     $("body").addClass("opened");
     return false;
 }).on("click", "#btnGnbclose", function () {
     $("#gnb").removeClass("active");
     $("body").removeClass("opened");
     return false;
 }).on("click", ".gnbInner > ul > li > a", function () {
     $(this).parent("li").toggleClass("on").siblings("li").removeClass("on");
     if ( $(this).parent('li').hasClass('ulHas') ) {
         $(".gnbInner > ul > li").each(function () {
             let onCheck = $(this).is(".on");
             if (onCheck) {
                 $(this).children("ul").slideDown();
             } else {
                 $(this).children("ul").slideUp();
             }
         });
         return false;
     }
 });
 $(document).ready(function() {
     $(".gnbInner ul ul").each(function () {
         $(this).parent("li").addClass("ulHas");
     });
 });
 
 // popup
 function popupOpen(openTarget) {
     $(openTarget).addClass("show");
 }
 function popupClose(closeTarget) {
     $(closeTarget).removeClass("show");
 }
 
 //페이징
 var get_pagination = function() {
 
     var started = false;
     var _current_page   = $('#current_page').val();
     var _per_page       = $('#per_page').val();
     var _total_count    = $('#total_count').val();
 
     if ( _total_count == 0 ) {
         $(".paging").html('');
         return;
     }
 
     $(".paging").paging(_total_count, {
         format: '[< . (qq -) nnnncnnnn (- pp) >]',
         perpage: _per_page,
         lapping: 0,
         page: _current_page, // we await hashchange() event
         onSelect: function (page) {
             if (started) {
                 $('#current_page').val(page);
                 $('#frmSearch').submit();
             } else {
                 started = true;
             }
             return false;
         },
         onFormat: function (type) {
             switch (type) {
                 case "block": // n and c
                     if (this.value != _current_page)
                         return "<a href='javascript:void(0);' title='" + this.value + "페이지'>" + this.value + "</a>";
                     else {
                         return "<strong>" + this.value + "</strong>";
                     }
                 // case "first": // <<
                 //     return "<li class='kt-pagination__link--first'><a href='javascript:void(0);'><i class='fa fa-angle-double-left kt-font-brand'></i></a></li>";
                 case "prev": // <
                     return "<a href='javascript:void(0);' id='pagePrev'>이전</a>";
                 case "next": // >
                     return "<a href='javascript:void(0);' id='pageNext'>다음</a>";
                 // case "last": // >>
                 //     return "<li class='kt-pagination__link--last'><a href='javascript:void(0);'><i class='fa fa-angle-double-right kt-font-brand'></i></a></li>";
 
                 default:
                     return "";
             }
         }
     });
 }
 /* ver2 */
 $(function () {

    noticeSlider(); // 상단 공지사항

    // 기능사용 off
    /* 
    $(".LeftMenu > li > a").on("click", function () {
        $(this).parent("li").toggleClass("on").siblings("li").removeClass("on");
        if ( $(this).parent('li').hasClass('ulHas') ) {
            $(".LeftMenu > li").each(function () {
                let onCheck = $(this).is(".on");
                if (onCheck) {
                    $(this).children("ul").slideDown();
                } else {
                    $(this).children("ul").slideUp();
                }
            });
            return false;
        }
    });
    $(".LeftMenu ul").each(function () {
        $(this).parent("li").addClass("ulHas");
    }); 
    */

    function noticeSlider() {
        const slider = $(".noticeSlider");
        const setting = {
            mobileFirst: true, //모바일 우선 세팅
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 3000,
            vertical: true,
            verticalSwiping: true,
            arrows: false,
            infinite: true,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 1024,
                settings: "unslick"
            }]
        }
    
        slider.slick(setting);
    
        $(window).on("resize", function () {
            if ($(window).width() > 1024) {
                return;
            }
            if (!slider.hasClass("slick-initialized")) {
                return slider.slick(setting);
            }
        });
    }

    $(".btnLoginUIClose").on("click", function () {
        $(this).parent(".fixedLoginUI").slideUp();
    });

    $("#volumeControl").on("input", function(){
        var val = $(this).val();
        $(this).css("background", "linear-gradient(to right, #fff 0%, #fff "+ val +"%, #5F5F5F " + val + "%, #5F5F5F 100%)");
    });
});