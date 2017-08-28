$(document).ready(function(){
    
    new WOW().init({
        offset: 300,
        mobile: false
    });
    
        $('.nav-mobile').on('click',function(){
        $('.nav-mobile').toggleClass('nav-mobile-close');
        $("nav ul").toggleClass('show-mobile-nav');
    });
    
});