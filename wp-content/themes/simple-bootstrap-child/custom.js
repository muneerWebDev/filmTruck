
jQuery(document).ready(function(){

    containerMl = jQuery('.container').css("margin-left");
    bannerVideoHeight =  jQuery(window).height() - jQuery('.banner').offset().top;
    // alert(bannerVideoHeight);
    jQuery('.banner-video .elementor-wrapper').css( 'padding-bottom' , bannerVideoHeight);
    jQuery('.banner-video video').height(bannerVideoHeight);
});