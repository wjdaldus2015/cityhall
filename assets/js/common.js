



$('#header .lang-area .btn-lang').click(function(){
    url=$('#langList').val();
    window.open(url);
})

$(window).scroll(function(){
    curr = $(this).scrollTop();
    if(curr > 0){
        $('.fix-btn').addClass('show')
    }else{
        $('.fix-btn').removeClass('show')
    }
})

$('.btn-top').click(function(){
    window.scrollTo({top:0,behavior:'smooth'})
});