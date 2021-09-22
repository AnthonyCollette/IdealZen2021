$('#menu-formations').click(() => {
    $('#sub-formations').toggleClass('flex')
})

$('#menu-formations-mobile').click(() => {
    $('#sub-formations-mobile').toggleClass('flex')
})

$('#burger-btn').click(() => {
    $('#line1').toggleClass('opened-line1')
    $('#line2').toggleClass('opened-line2')
    $('#line3').toggleClass('opened-line3')
    $('#mobile-nav__items').toggleClass('flex')
})
