$(document).ready(() => {
    $('a.scollTo').on('click', function(e){
        $('.modal').modal('hide')
        var $anchor = $(this).attr("data-href");
        var $hrefStart = $anchor.substr(0, 1);

        if ( $hrefStart == "#" ) {
           $('html, body').animate({
               scrollTop: $($anchor).offset().top
           }, 1500, 'easeInOutExpo');

           e.preventDefault(); 

        } else {
           window.location.href = $anchor;
        }
    })
})