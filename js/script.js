$(function(){
    //start slideToggle of nav bar 
        $('.bars i').on('click',function(){
            $('.list').slideToggle();
        });
    //ens slideToggle of nav bar 


// start go to section and active color 
$('.list li a').on('click',function(){
    $(this).addClass('active_a').parent('li').siblings().children('a').removeClass('active_a');
    $('body,html').animate({
        scrollTop:$($(this).data('scroll')).offset().top-100
    },1000)
});
// end go to section and avtive color
})