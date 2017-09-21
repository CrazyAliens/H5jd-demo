/**
 * Created by 稀饭菌 on 2017/9/19 0019.
 */
var doc = document,
    win = window,
    oBody = doc.documentElement || doc.body,
    resize = "onorientationchange" in win ? "orientationchange" : "resize";
rem();
addEventListener(resize, rem, false);
function rem() {
    /*doc.body.clientWidth是获取当前的body的宽度，640是我们的移动端的最大宽度，相除就会得出一个比例，在乘以100px，就会得出我们当前的1rem等于多少px*/
    oBody.style.fontSize = 100 * (doc.body.clientWidth / 640) + "px";
    //console.log(oBody.style.fontSize);
}

//header滚动
var oHeader = document.getElementsByClassName("header")[0];

window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollTop);
    if(scrollTop>220){
        oHeader.style.background = "#e4393c"
    }else{
        oHeader.style.background = "transparent"
    }
};
var Swiper1 = new Swiper ('#swiper1', {
    dirction:"horizontal",
    loop: true,
    paginationClickable:true, //让分液器可以点击切换
    // 如果需要分页器
    pagination: '.swiper-pagination'
});
setInterval("Swiper1.slideNext()", 3000);
var Swiper2 = new Swiper ('#swiper2', {
    dirction:"horizontal",
    loop: true,
    paginationClickable:true, //让分液器可以点击切换
    // 如果需要分页器
    pagination: '.swiper-pagination'
});
var Swiper3 = new Swiper ('#swiper3', {
    dirction:"horizontal",
    loop: true,
    autoplay:3000,
    paginationClickable:true, //让分液器可以点击切换
    // 如果需要分页器
    pagination: '.swiper-pagination'
});