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
    })

})
