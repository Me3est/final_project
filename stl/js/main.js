$(window).ready(function() {
    let b_index = 0;
let b_length = $('.banner').length;
let timer = 1000;
// 인디케이트
    for(let i=0; i<b_length; i++) {
        $('.indicator').append(' <div class="indi_bar"></div>')
    }
    $('.indi_bar').eq(0).addClass('indi_active')
    $('.banner').eq(0).css({left:0})
        $(document).on('click', '#r_btn', function() {
            slide(b_index%b_length, '-100%', (b_index+1)%b_length, '100%', b_index+1)
        })
        $(document).on('click', '#l_btn', function() {
            slide(b_index%b_length, '100%', (b_index-1)%b_length, '-100%', b_index-1)
    })

    function slide(o_index, o_pos, c_index, c_pos, next_idx) {
        btn_stop();
        $('.banner').eq(o_index).animate({
            left:o_pos
        }, 1000)
        $('.banner').eq(c_index).css({
            left:c_pos
        }).animate({
            left:0
        }, 1000)

        b_index = next_idx;
        $('.indi_bar').eq(o_index).removeClass('indi_active')
        $('.indi_bar').eq(c_index).addClass('indi_active')
    }
    // 자동슬라이드
    let interval = "";
    function auto_slide() {
        interval = setInterval(function() {
            slide(b_index%b_length, '-100%', (b_index+1)%b_length, '100%', b_index+1)
        }, 2000)
    }
    auto_slide();
    // 자동 슬라이드 막기
    $('.main_banner').hover(function() {
        clearInterval(interval);
    }, function() {
        auto_slide();
    })
    // 버튼막기
    function btn_stop() {
        $('.btn_slider').css({pointerEvents:'none'})
        setTimeout(() => {
            $('.btn_slider').css({pointerEvents: 'auto'})
        }, timer)
    }
    // 인디케이서 클릭
    $('.indi_bar').click(function() {
        let tmp_index = $(this).index();
        if(tmp_index > $('.indi_active').index()) {
            slide(b_index%b_length, '-100%', tmp_index, '100%', tmp_index)
        }
        else if(tmp_index < $('.indi_active').index()) {
            slide(b_index%b_length, '100%', tmp_index, '-100%', tmp_index)
        }
    })
})

make_sec('best');
load_list(0,0,12);
make_sec('new');
load_list(3,0,12);