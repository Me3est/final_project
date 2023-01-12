$(document).ready(function() {
    // 초기 설정
    let cate_no = get_url_info("cate");
    let item_no = get_url_info("item");
    load_data(cate_no, item_no);

    // 하트버튼
    // 수량증감
    
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

    rs_opt_color = rs.opt_color.split(",");

    for(let i=0; i<rs_opt_color.length; i++) {
        let tmp_el = `<span class="i_opt" style="background-color:${rs_opt_color[i]}"></span>`
        $('.item_opt_box').append(tmp_el)
    }
}