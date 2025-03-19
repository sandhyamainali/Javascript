 
$('.a').click(()=>{
    $('h2').fadeOut(5000)
})
$('.b').click(()=>{
    $('h2').fadeIn(5000)
})
$('.c').click(()=>{
    $('h2').fadeToggle(5000)
})

$('.d').click(()=>{
    $('h2').remove()
})

$('.e').click(()=>{
    $('h2').empty()
})

$('.f').click(()=>{
    $('h2').prepend('s')
})

$('.g').click(()=>{
    $('h2').append('cc')
})
$('.h').click(()=>{
    $('h2').before('aa')
})

$('.i').click(()=>{
    $('h2').after('bb')
})

$('.j').click(()=>{
    $('h2').css({color:'red',fontSize:'33px'})
})

$('.k').click(()=>{
    $('h2').animate({left:'500px'},5000)
})

$('.l').click(()=>{
    $('h2').stop()
})

$('.m').click(()=>{
    $('h2').addClass('new')
})

$('.n').click(()=>{
    $('h2').removeClass('new')
})

$('.o').click(()=>{
    $('h2').toggleClass('new')
})


$('.p').click(()=>{
    $('h2').html('<mark> Hello</mark>')
})

$('.q').click(()=>{
    $('h2').text('<mark> Hello</mark>')
})

$('.r').click(()=>{
    $('.bbb').val('Welcome')
})

$('.s').click(()=>{
    $('h2').hide(()=>{
        alert('Hide')
    })
})

$('.t').click(()=>{
    $('h2').slideUp(5000).slideDown(3000)
})

$('.u').dbclick(()=>{
    $('h2').slideUp(5000)
})