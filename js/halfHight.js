// alert("test");
var bw = $(window).width();
var bh = $(window).height();
$('#wrap').css({height:bh});

// 브라우저 높이의  반값 구하기
var halHeight = bh/2;
console.log(bh);
console.log(halHeight);
// 유튜브 영상을 적용시키세요
$('.youtube').css({marginTop:halHeight});