$("[class*='modal0']").hide();
$('#contents > ul > li').click(function(){
    let num = $("#contents > ul > li").index(this)+1;
    $('.modal0'+num).stop().show();
    console.log(num);
});
$("[class*='modal0']").click(function(){
    $("[class*='modal0']").hide();
    $(this).children('iframe').attr('src', $(this).children('iframe').attr('src'));
});