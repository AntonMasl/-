$('a').on('click',function(){
    // let offset = 0;
    $('html').animate({
        scrollTop: $('#block').offset().top /*- offset*/
    }, 1000);
    return false;
}); 