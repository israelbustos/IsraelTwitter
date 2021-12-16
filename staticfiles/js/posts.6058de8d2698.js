///////////////////
/////javascript for posts page/////
//////////////////
$(function(){
$('.js-menu-icon').click(function(){
    //$(this) : Self element, Namely div.js-menu-icon
    //next(): Next to div.js-menu-icon, Namely div.menu
    // toggle() : Switch show and hide
    $(this).next().toggle();
})
})