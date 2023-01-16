// let check_box = document.getElementsByClassName('check_box')[0];
// check_box.addEventListener('click', function() {
//     check_box.background="background: url(../img/icon/20210728014159627.png) no-repeat center / cover;"
// })
$(document).ready(function() {
    $('#member_login_tab').click(function() {
        $('.member_login_pan').css({display:'block'});
        $('.not_member_login_pan').css({display:'none'});
        $('#not_member_login').css({
            color: '#888',
            border: '1px solid #efefef',
            backgroundColor: '#fafafa',
        })
        $('#member_login_tab').css({
            color:'#222',
            border: '1px solid #aaa',
            backgroundColor: '#fff'
        })
    })
    $('#not_member_login').click(function() {
        $('.member_login_pan').css({display:'none'});
        $('.not_member_login_pan').css({display:'block'});
        $('#not_member_login').css({
            color:'#222',
            border: '1px solid #aaa',
            backgroundColor: '#fff'
        })
        $('#member_login_tab').css({
            color: '#888',
            border: '1px solid #efefef',
            backgroundColor: '#fafafa',
        })
    })
})