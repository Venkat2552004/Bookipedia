$(document).ready(function () {
    $('.nav > li').mouseenter(function () {
            //e.preventDefault();
            $('.nav > li').removeClass('active');
            $(this).addClass('active');              
                               
    });  
});