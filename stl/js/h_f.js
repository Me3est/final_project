$(window).ready(function() {
    // $(document).on('.h_search', 'click', function() {
    //     $('.layer').addClass('block')
    // })
    $(document).on( 'click','#h_search ', function() {
        $('#layer').css({display:'block'})
    })
    $(document).on( 'click','#x_box', function() {
        $('#layer').css({display:'none'})
    })
// 메인헤더
    $('.top_cate1').mouseenter(function() {
        $('.top_menu1').css({display: 'block'})
    })
    $('.top_cate1').mouseleave(function() {
        $('.top_menu1').css({display:'none'})
    })
    $('.bot_cate1').mouseenter(function() {
        $('.bot_menu1').css({display: 'block'})
    })
    $('.bot_cate1').mouseleave(function() {
        $('.bot_menu1').css({display:'none'})
    })
    $('.h_personal1').click(function() {
       if(!$('.p_cate1').hasClass('h_display')) {
        $('.p_cate1').addClass('h_display')
       }
       else {
        $('.p_cate1').removeClass('h_display')
       }
    })
    // 스크롤헤더
    $('.top_cate2').mouseenter(function() {
        $('.top_menu2').css({display: 'block'})
    })
    $('.top_cate2').mouseleave(function() {
        $('.top_menu2').css({display:'none'})
    })
    $('.bot_cate2').mouseenter(function() {
        $('.bot_menu2').css({display: 'block'})
    })
    $('.bot_cate2').mouseleave(function() {
        $('.bot_menu2').css({display:'none'})
    })
    $('.h_personal2').click(function() {
       if(!$('.p_cate2').hasClass('h_display')) {
        $('.p_cate2').addClass('h_display')
       }
       else {
        $('.p_cate2').removeClass('h_display')
       }
    })


    $(window).resize(function() {
        let s_top = $(window).scrollTop();
        console.log(s_top, toolbar)
            // if(s_top > toolbar) {
            //     $('.header_fixed').addClass('h_display')
            //     $('.header_fixed').animate({
            //         opacity:'1',

            //     }, 50)
            // }
            //  else if(s_top < toolbar) {
            //     $('.header_fixed').removeClass('h_display')
            //     // $('.header_fixed').removeClass('h_opacity')
            //     $('.header_fixed').animate({
            //         opacity:'0',
            //     }, 50)
            //  }
            if(s_top >= toolbar) {
                $('#header_fixed').fadeIn(500)
            }
            else if(s_top < toolbar) {
                $('#header_fixed').fadeOut(300)
            }
    })
// // 스크롤 이벤트
let toolbar = $('.main').offset().top;
    $(window).scroll(function() {
        let s_top = $(window).scrollTop();
        console.log(s_top, toolbar)
            // if(s_top > toolbar) {
            //     $('.header_fixed').addClass('h_display')
            //     $('.header_fixed').animate({
            //         opacity:'1',

            //     }, 50)
            // }
            //  else if(s_top < toolbar) {
            //     $('.header_fixed').removeClass('h_display')
            //     // $('.header_fixed').removeClass('h_opacity')
            //     $('.header_fixed').animate({
            //         opacity:'0',
            //     }, 50)
            //  }
            if(s_top > toolbar) {
                $('#header_fixed').fadeIn(500)
            }
            else if(s_top < toolbar) {
                $('#header_fixed').fadeOut(300)
            }
            if(s_top > 0) {
                $('.ham_menu1').fadeOut(100)
            }
            else if(s_top == 0) {
                $('.ham_menu1').fadeIn(0)
            }
    })
// 햄버거버튼
  $('.ham_box1').click(function() {
        if(!$('.h_top1').hasClass('h_top_active')) {
            $('.h_top1').addClass('h_top_active')
            $('.ham_menu1').css({
                transform:'translateX(0)'
            })
        }
        else {
            $('.h_top1').removeClass('h_top_active')  
            $('.ham_menu1').css({
                transform:'translateX(-100%)'
            })
        }
        if(!$('.h_bot1').hasClass('h_bot_active')) {
            $('.h_bot1').addClass('h_bot_active')
        }
        else {
            $('.h_bot1').removeClass('h_bot_active')  
        }
  })
  $('.ham_box2').click(function() {
    if(!$('.h_top2').hasClass('h_top_active')) {
        $('.h_top2').addClass('h_top_active')
        $('.ham_menu2').css({
            transform:'translateX(0)'
        })
    }
    else {
        $('.h_top2').removeClass('h_top_active')  
        $('.ham_menu2').css({
            transform:'translateX(-100%)'
        })
    }
    if(!$('.h_bot2').hasClass('h_bot_active')) {
        $('.h_bot2').addClass('h_bot_active')
    }
    else {
        $('.h_bot2').removeClass('h_bot_active')  
    }
})
})
