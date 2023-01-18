$(document).ready(function() {
    // 초기 설정
    let cate_no = get_url_info("cate");
    let item_no = get_url_info("item");
    load_data(cate_no, item_no);

    // 하트버튼
    // 수량증감
    $('#minus').click(function() {
        let qty_count = $('#qty_count').val();
        console.log("111")
        if(qty_count > 1) {
            $('#qty_count').val(+qty_count - 1);
        }
        else {
            alert("최소주문수량은 1개 입니다.")
        }
    })
    $('#plus').click(function() {
        let qty_count = $('#qty_count').val();
        console.log("111")
        $('#qty_count').val(+qty_count + 1)
    })
    
// 탭이벤트
    $('.p_tab').eq(0).addClass('tab_active');
    let tab_top = $('.tb').offset().top;
    let h_hei = $('#header_fixed').height();
    $(window).scroll(function() {
        let s_top = $(window).scrollTop() + h_hei + 100;
        
            for(let i=0; i<4; i++) {
                console.log(s_top, $('.tb').eq(i).offset().top)
                if(s_top > $('.tb').eq(i+1).offset().top) {
                $('.p_tab').removeClass('tab_active')
                $('.p_tab').eq(i).addClass('tab_active');
            }
        }
    })
    // 스크롤 부드럽게 이동
    let tab_hei = $('.p_tab').innerHeight();
    $('.p_tab a').click(function() {
        event.preventDefault();

        let href = $(this).attr('href');
        let pos = $(href).offset().top;
        $('html, body').animate({
            scrollTop : pos - (tab_hei  + 80)
        }, 1000)
    })
})
// 데이터 집어넣기
let rs = "";
function load_data(cate, item) {
    rs = ITEM_LIST[cate][item-1];

    console.log(rs);

    $('.main_item_img > img').attr('src', rs.src)
    $('.i_title').text(rs.title)
    $('.desc').text(rs.desc)
    $('.o_price').text(Number(rs.o_price).toLocaleString('ko')+"원");
    $('.s_price').text(Number(rs.s_price).toLocaleString('ko')+"원");
    $('.detail_img1 img').attr('src', rs.detail_src1)
    $('.detail_img2 img').attr('src', rs.detail_src2)
    $('.detail_img3 img').attr('src', rs.detail_src3)
    $('.total_price').text(Number(rs.s_price).toLocaleString('ko')+"원")

    rs_opt_color = rs.opt_color.split(",");

    for(let i=0; i<rs_opt_color.length; i++) {
        let tmp_el = `<span class="i_opt" style="background-color:${rs_opt_color[i]}"></span>`
        $('.item_opt_box').append(tmp_el)
    }
}