// FAQ
$(document).on("click", ".faqTitle button", function () {
    $(this).parent().parent().hasClass("open") ? $(this).attr("title", "질문 답변 열기") : $(this).attr("title", "질문 답변 닫기");
    $(this).parent().parent().toggleClass("open").children(".faqText").stop().slideToggle();
    return false;
});

// 회원가입 step1
$(document).ready(function() {
    setTerms();

    $("#joinCheckAll").click(function() {
        setTerms();
    });
    $("#joinService").click(function() {
        viewTerms();
    });
    $("#joinPrivacy").click(function() {
        viewTerms();
    });
    $("#joinNews").click(function() {
        viewTerms();
    });
    function setTerms() {
        if ($("#joinCheckAll").is(":checked")) {
            $("#joinService").prop("checked",true);
            $("#joinPrivacy").prop("checked",true);
            $("#joinNews").prop("checked",true);
        } else {
            $("#joinService").prop("checked",false);
            $("#joinPrivacy").prop("checked",false);
            $("#joinNews").prop("checked",false);
        }
        return true;
    }
    function viewTerms() {
        if(!$("#joinService").is(":checked") || !$("#joinPrivacy").is(":checked") || !$("#joinNews").is(":checked")) {
            $("#joinCheckAll").prop("checked",false);
        }
        if($("#joinService").is(":checked") && $("#joinPrivacy").is(":checked") && $("#joinNews").is(":checked")) {
            $("#joinCheckAll").prop("checked",true);
        }
        return true;
    }
});