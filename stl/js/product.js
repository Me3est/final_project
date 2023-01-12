$(window).ready(function() {
    let cate_no = get_url_info("cate");

    make_sec(cate_arr[cate_no]);

    const show_one_qty = 4 *4;
    let tmp_show = 0
    load_list(cate_no, tmp_show, show_one_qty)
    tmp_show+= show_one_qty;

    // $(window).scroll(function() {
    //     let s_bot = $(window).scrollTop() + $(window).height();
    //     let f_top = $('.footer').offset().top;
    //     console.log(s_bot, f_top)
    //     if(s_bot >= f_top) {
    //         load_list(cate_no, tmp_show, show_one_qty)
    //         tmp_show += show_one_qty;
    //     }
    // })
    // 호버이벤트
    let search_box = $('.search_box');
    for(let i=0; i<search_box.length; i++) {
       search_box.eq(i).hover(function() {
        if(!search_box.eq(i).hasClass('search_active')) {
            search_box.eq(i).addClass('search_active')
           }
           else {
            search_box.eq(i).removeClass('search_active')
           }
       })
    }
})