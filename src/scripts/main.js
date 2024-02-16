$(document).ready(function() {
    $('.social__item--links').click(function(e) {
        e.preventDefault();
        
        setTimeout(function(){
            $(".social__item--links").mouseenter(function() {
                $(this).addClass("hover");
            });
            
            let url = $('social__item--links').attr('href');

            window.location.href = url

        },1000)
    })
})