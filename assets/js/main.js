const visualSlide1 = new Swiper ('.sc-visual .news .swiper',{
    loop:true,
    autoplay:{
        delay:1000
    },
    navigation:{
        nextEl:".next",
        prevEl:".prev",
    },
    pagination:{
        el:".fraction",
        type:"fraction"
    }
})

const visualSlide2 = new Swiper ('.sc-visual .citizen .swiper',{
    loop:true,
    autoplay:{
        delay:1000
    },
    navigation:{
        nextEl:".next",
        prevEl:".prev",
    }, 
    pagination:{
        el:".fraction",
        type:"fraction"
    }
})

$('.sc-visual .news .autoplay').click(function(){

    if($(this).hasClass('active')){
        visualSlide1.autoplay.start();

    }else{
        visualSlide1.autoplay.stop();
    }
    $(this).toggleClass('active');
    
})
$('.sc-visual .citizen .autoplay').click(function(){

    if($(this).hasClass('active')){
        visualSlide2.autoplay.start();

    }else{
        visualSlide2.autoplay.stop();
    }
    $(this).toggleClass('active');
    
})

$('.sc-visual .title').click(function(e){
    e.preventDefault();

    // $('.sc-visual .content').removeClass('active');
    $(this).parent().addClass('active').siblings().removeClass('active');

})

$('.btn-more').click(function(){
    $('html').addClass('hidden');
    $('.popup-all').addClass('show');
})

$('.btn-close').click(function(){
    $('.popup-all').removeClass('show');
    $('html').removeClass('hidden');
})

// 이벤트 배너 슬라이드//
const popSlide = new Swiper ('.popup-slide',{
    loop:true,
    navigation:{
        nextEl:".sc-popup .next",
        prevEl:".sc-popup .prev",
    },
    pagination:{
        el:".sc-popup .fraction",
        type:"fraction"
    },
    autoplay:{
        delay:2000,
    },
    spaceBetween:43,
    slidesPerView:3,
})

$('.sc-popup .autoplay').click(function(){

    if($(this).hasClass('active')){
        popSlide.autoplay.start();

    }else{
        popSlide.autoplay.stop();
    }
    $(this).toggleClass('active');
    
})

$('.btn-title.child').click(function(e){
    e.preventDefault();
    if($(this).hasClass('on')){
        $(this).removeClass('on').siblings('.sub').slideUp();

    }else{
        $('.btn-title').removeClass('on').siblings('.sub').slideUp();
        $(this).addClass('on').siblings('.sub').slideDown();
    }

})

