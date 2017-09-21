/**
 * Created by ϡ���� on 2017/9/19 0019.
 */
var doc = document,
    win = window,
    oBody = doc.documentElement || doc.body,
    resize = "onorientationchange" in win ? "orientationchange" : "resize";
rem();
addEventListener(resize, rem, false);
function rem() {
    /*doc.body.clientWidth�ǻ�ȡ��ǰ��body�Ŀ�ȣ�640�����ǵ��ƶ��˵�����ȣ�����ͻ�ó�һ���������ڳ���100px���ͻ�ó����ǵ�ǰ��1rem���ڶ���px*/
    oBody.style.fontSize = 100 * (doc.body.clientWidth / 640) + "px";
    //console.log(oBody.style.fontSize);
}

//header����
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
    paginationClickable:true, //�÷�Һ�����Ե���л�
    // �����Ҫ��ҳ��
    pagination: '.swiper-pagination'
});
setInterval("Swiper1.slideNext()", 3000);
var Swiper2 = new Swiper ('#swiper2', {
    dirction:"horizontal",
    loop: true,
    paginationClickable:true, //�÷�Һ�����Ե���л�
    // �����Ҫ��ҳ��
    pagination: '.swiper-pagination'
});
var Swiper3 = new Swiper ('#swiper3', {
    dirction:"horizontal",
    loop: true,
    autoplay:3000,
    paginationClickable:true, //�÷�Һ�����Ե���л�
    // �����Ҫ��ҳ��
    pagination: '.swiper-pagination'
});