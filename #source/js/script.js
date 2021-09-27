function ibg(){
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}
    
ibg();

$(document).ready(function() {
    $('.first-page__burger').click(function(event) {
        $('.first-page__burger, .first-page__menu').toggleClass('active');
    });
});