const ITEM_LIST = [

    //best
    [
        {item_no:1, src:'../img/item/best/1.gif', coverd_src: '../img/item/best/1-1.jpg', desc:'따뜻하고 가벼운 양털! YKK지퍼', title:'STL 뽀송뽀송 NY 가볍고 따뜻한 오버핏 양털 롱 코트', o_price:'103000', s_price:'29930', opt_color:'#000000,#885E62,#D5B6BB'},
        {item_no:2, src:'../img/item/best/2.gif', coverd_src: '../img/item/best/2-1.jpg', desc:'따뜻하고 가벼운 양털! YKK지퍼', title:'STL 뽀송뽀송 메트로 NY 오버핏 양면양털 후드 집업', o_price:'83000', s_price:'29930', opt_color:'#F7EFEA,#CABCDE,#141625'},
        {item_no:3, src:'../img/item/best/3.gif', coverd_src: '../img/item/best/3-1.jpg', desc:'슬림핏! 가볍고 따뜻해요. YKK지퍼', title:'STL 모노 부드러운 보아 후리스 힙커버 자켓', o_price:'63000', s_price:'9930', opt_color:'#758698,#D5C9B9,#264260'},
        {item_no:4, src:'../img/item/best/4.gif', coverd_src: '../img/item/best/4-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'STL 에센스 자켓 & 크롭 자켓 & 후드 자켓', o_price:'78000', s_price:'14930', opt_color:'#E2FF95,#53535b,#9e7476'},
        {item_no:5, src:'../img/item/best/5.gif', coverd_src: '../img/item/best/5-1.jpg', desc:'따뜻하고 포근한 기모원단!', title:'STL 에센스 기모 롱 슬리브', o_price:'68000', s_price:'9930', opt_color:'#000000,#885E62,#E9DFD6'},
        {item_no:6, src:'../img/item/best/6.gif', coverd_src: '../img/item/best/6-1.jpg', desc:'가볍고 따뜻해요! YKK지퍼', title:'STL NY 오버핏 스윗 웜 후리스 후드 반집업', o_price:'73000', s_price:'24300', opt_color:'#D6CCEC,#6B728E,#A79D94'},
        {item_no:7, src:'../img/item/best/7.gif', coverd_src: '../img/item/best/7-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'STL 팬시 2 롱 슬리브', o_price:'53000', s_price:'8930', opt_color:'#192D32,#46162F,#8FABB0'},
        {item_no:8, src:'../img/item/best/8.gif', coverd_src: '../img/item/best/8-1.jpg', desc:'따뜻하고 포근한 기모 원단! YKK지퍼', title:'STL NY 오버핏 더블메모리 기모 후드 숏 집업', o_price:'73000', s_price:'22300', opt_color:'#E9DFD7,#A07272,#A5A6A7'},
        {item_no:9, src:'../img/item/best/9.gif', coverd_src: '../img/item/best/9-1.jpg', desc:'따뜻한 기모 기본&짧은기장', title:'메트로 NY 기모웜 키작아도 괜찮아 팬츠 1+1', o_price:'116000', s_price:'34930', opt_color:'#2a2d45,#564F4C,#2A282C'},
        {item_no:10, src:'../img/item/best/10.gif', coverd_src: '../img/item/best/10-1.jpg', desc:'따듯한 기모&기본기장&짧은기장 슬림해 보이는 세미부츠컷', title:'STL NY 힐 기모웜 키작아도 괜찮아 팬츠 1+1', o_price:'116000', s_price:'34300', opt_color:'#3F424F,#D0CBC7,#3B3D4D'},
        {item_no:11, src:'../img/item/best/11.gif', coverd_src: '../img/item/best/11-1.jpg', desc:'쫀쫀하고 짱짱한 카스텔 원단 기본&짧은기장', title:'STL 카스텔 up&up 3D 키작아도 레깅스 야노시호 1+1', o_price:'86000', s_price:'22930', opt_color:'#595d80,#bb7e7d,#24536d'},
        {item_no:12, src:'../img/item/best/12.gif', coverd_src: '../img/item/best/12-1.jpg', desc:'포근하고 따뜻한 니트!', title:'STL 부드러운 파인 니트 1 + 1', o_price:'116000', s_price:'22930', opt_color:'#F9F5EA,#CEBA99,#885B56'},
        {item_no:13, src:'../img/item/best/13.gif', coverd_src: '../img/item/best/13-1.jpg', desc:'쫀쫀하고 짱짱한 카스텔 원단 기본&짧은기장', title:'STL 체인지 업 키작아도 괜찮아 레깅스 1+1', o_price:'126000', s_price:'24930', opt_color:'#000000,#3B465A,#DEC6C4'},
        {item_no:14, src:'../img/item/best/14.gif', coverd_src: '../img/item/best/14-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'STL 업타운 반목 롱 슬리브', o_price:'68000', s_price:'8930', opt_color:'#E9DFD6,#E4C8C4,#C2BFEC'},
        {item_no:15, src:'../img/item/best/15.gif', coverd_src: '../img/item/best/15-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'STL 타임 & 퓨어 퍼펙트 & 픽업 테리 조거 팬츠 3종 택1', o_price:'68000', s_price:'19930', opt_color:'#151725,#9A99A1,#F6F0EA'},
        {item_no:16, src:'../img/item/best/16.gif', coverd_src: '../img/item/best/16-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'[SET] STL NY 테리 맨투맨 & NY 테리 조거팬츠 세트', o_price:'106000', s_price:'29930', opt_color:'#DDC7CA,#D0D56F,#FFFFFF'}

    ],

    //top
    [
        {item_no:1, src:'../img/item/top/1.gif', coverd_src: '../img/item/top/1-1.jpg', desc:'따뜻하고 가벼운 양털! YKK지퍼', title:'STL 레깅스에 찰떡궁합 프레쉬 크레이프 박스 롱 반팔티', o_price:'58000', s_price:'7930', opt_color:'#000000,#FFFFFF,#A19088'},
        {item_no:2, src:'../img/item/top/2.gif', coverd_src: '../img/item/top/2-1.jpg', desc:'따뜻하고 가벼운 양털! YKK지퍼', title:'STL 크롭탑 도니스', o_price:'4300', s_price:'19300', opt_color:'#c09398,#d5d7ca,#93887f'},
        {item_no:3, src:'../img/item/top/3.gif', coverd_src: '../img/item/top/3-1.jpg', desc:'슬림핏! 가볍고 따뜻해요. YKK지퍼', title:'STL 프레쉬 크레이프 오버핏 크롭 숏 슬리브', o_price:'43000', s_price:'5930', opt_color:'#B85344,#F5DFB2,#FFB296'},
        {item_no:4, src:'../img/item/top/4.gif', coverd_src: '../img/item/top/4-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'STL 크롭탑 데일리', o_price:'43000', s_price:'12300', opt_color:'#ffffff,#d7cbc0,#fbbfa7'},
        {item_no:5, src:'../img/item/top/5.gif', coverd_src: '../img/item/top/5-1.jpg', desc:'따뜻하고 포근한 기모원단!', title:'STL 플레인 스트레치 베이직 숏 슬리브 1+1', o_price:'86000', s_price:'9930', opt_color:'#1C1C32,#778C9E,#FAF3DC'},
        {item_no:6, src:'../img/item/top/6.gif', coverd_src: '../img/item/top/6-1.jpg', desc:'가볍고 따뜻해요! YKK지퍼', title:'STL 픽업 브이넥 스트레치 숏 슬리브', o_price:'53000', s_price:'6930', opt_color:'#adbed6,#6B728E,#611e33'},
        {item_no:7, src:'../img/item/top/7.gif', coverd_src: '../img/item/top/7-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'STL 에센스 라인업 크롭 숏슬리브', o_price:'43000', s_price:'6930', opt_color:'#0B212F,#E8F8BA,#F8A0AA'},
        {item_no:8, src:'../img/item/top/8.gif', coverd_src: '../img/item/top/8-1.jpg', desc:'따뜻하고 포근한 기모 원단! YKK지퍼', title:'STL NY 오버핏 스윗 웜 후리스 후드 반집업', o_price:'73000', s_price:'24300', opt_color:'#F5F0EA,#D6CCEC,#A07272'},
        {item_no:9, src:'../img/item/top/9.gif', coverd_src: '../img/item/top/9-1.jpg', desc:'따뜻한 기모 기본&짧은기장', title:'STL 업타운 스윗 웜 후리스 후드', o_price:'63000', s_price:'19300', opt_color:'#885E62,#8896B0,#3B465A'},
        {item_no:10, src:'../img/item/top/10.gif', coverd_src: '../img/item/top/10-1.jpg', desc:'따듯한 기모&기본기장&짧은기장 슬림해 보이는 세미부츠컷', title:'STL 브라탑 스위트', o_price:'43000', s_price:'123000', opt_color:'#914b65,#f0f0ee,#595d80'},
        {item_no:11, src:'../img/item/top/11.gif', coverd_src: '../img/item/top/11-1.jpg', desc:'쫀쫀하고 짱짱한 카스텔 원단 기본&짧은기장', title:'STL 포유 스트레치 박스 롱 슬리브', o_price:'53000', s_price:'7930', opt_color:'#5D6E89,#D6CCEC,#F6F0EA'},
        {item_no:12, src:'../img/item/top/12.gif', coverd_src: '../img/item/top/12-1.jpg', desc:'포근하고 따뜻한 니트!', title:'STL 레깅스에 찰떡궁합 박스 롱 나시', o_price:'43000', s_price:'6930', opt_color:'#000000,#ffffff,#D1D5D0'},
        {item_no:13, src:'../img/item/top/13.gif', coverd_src: '../img/item/top/13-1.jpg', desc:'쫀쫀하고 짱짱한 카스텔 원단 기본&짧은기장', title:'STL 프레쉬 크레이프 퍼펙트 탱크', o_price:'43000', s_price:'5930', opt_color:'#F8F2BE,#FDA1B0,#FFA88D'},
        {item_no:14, src:'../img/item/top/14.gif', coverd_src: '../img/item/top/14-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'STL 라인 크롭 나시', o_price:'43000', s_price:'4930', opt_color:'#313327,#848EA5,#B48094'},
        {item_no:15, src:'../img/item/top/15.gif', coverd_src: '../img/item/top/15-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'STL 나시 러브미', o_price:'50000', s_price:'12300', opt_color:'#0a1732,#605367,#bac7b9'},
        {item_no:16, src:'../img/item/top/16.gif', coverd_src: '../img/item/top/16-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'STL 밸런스 슬림 숏라인 & 브라탑 밸런스 슬림 야노시호1+1', o_price:'86000', s_price:'29930', opt_color:'#93887f,#ba90c0,#cccd72'}

    ],

    //bot
    [
        {item_no:1, src:'../img/item/bot/1.gif', coverd_src: '../img/item/bot/1-1.jpg', desc:'냉장고 바지, 기본기장&짧은기장', title:'STL 에센스 퀵드라이 키작아도 괜찮아 팬츠', o_price:'58000', s_price:'9930', opt_color:'#121724,#8B595A,#4B506D'},
        {item_no:2, src:'../img/item/bot/2.gif', coverd_src: '../img/item/bot/2-1.jpg', desc:'기본기장&짧은기장', title:'STL 홀리데이 세상 편한 키작아도 괜찮아 팬츠', o_price:'53000', s_price:'9930', opt_color:'#5A5D80,#404044,#97AFB3'},
        {item_no:3, src:'../img/item/bot/3.gif', coverd_src: '../img/item/bot/3-1.jpg', desc:'기본기장&짧은기장', title:'STL 타임 뉴욕 핀턱 와이드 팬츠', o_price:'78000', s_price:'19300', opt_color:'#656B77,#C8B29A,#C99A91'},
        {item_no:4, src:'../img/item/bot/4.gif', coverd_src: '../img/item/bot/4-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'STL 메트로 벨벳 조거 팬츠', o_price:'63000', s_price:'19300', opt_color:'#ffffff,#000000,#090C26'},
        {item_no:5, src:'../img/item/bot/5.gif', coverd_src: '../img/item/bot/5-1.jpg', desc:'따뜻하고 포근한 기모원단!', title:'STL 퓨어 퍼펙트 테리 조거 팬츠', o_price:'68000', s_price:'19930', opt_color:'#F6F0EA,#65748C,#D3D6D0'},
        {item_no:6, src:'../img/item/bot/6.gif', coverd_src: '../img/item/bot/6-1.jpg', desc:'가볍고 따뜻해요! YKK지퍼', title:'STL 입으면 너무 좋아 호호 핀턱 밴딩 팬츠', o_price:'53000', s_price:'9930', opt_color:'#676050,#7D4E53,#6B7999'},
        {item_no:7, src:'../img/item/bot/7.gif', coverd_src: '../img/item/bot/7-1.jpg', desc:'여성들이 가장 선호하는 레깅스 베스트 1위', title:'STL 중독 레깅스 야노시호 1+1+1 세븐데이즈&퓨어', o_price:'131000', s_price:'27930', opt_color:'#A5A6A7,#00323D,#FAF3DC'},
        {item_no:8, src:'../img/item/bot/8.gif', coverd_src: '../img/item/bot/8-1.jpg', desc:'따뜻하고 포근한 기모 원단! YKK지퍼', title:'STL NY 레깅스 5부 1+1', o_price:'86000', s_price:'22300', opt_color:'#3B465A,#DBC1BD,#E3D3ED'},
        {item_no:9, src:'../img/item/bot/9.gif', coverd_src: '../img/item/bot/9-1.jpg', desc:'따뜻한 기모 기본&짧은기장', title:'STL 체인지 업 레깅스 3.5부 1+1', o_price:'86000', s_price:'18300', opt_color:'#5A5D80,#A5A6A7,#938981'},
        {item_no:10, src:'../img/item/bot/10.gif', coverd_src: '../img/item/bot/10-1.jpg', desc:'따듯한 기모&기본기장&짧은기장 슬림해 보이는 세미부츠컷', title:'STL 써니 레깅스 & 홀리데이 레깅스 야노시호 1+1', o_price:'45000', s_price:'19300', opt_color:'#0b2b4e,#00767a,#a05b70'},
        {item_no:11, src:'../img/item/bot/11.gif', coverd_src: '../img/item/bot/11-1.jpg', desc:'쫀쫀하고 짱짱한 카스텔 원단 기본&짧은기장', title:'STL 메트로 퀵드라이 조거 팬츠 1+1', o_price:'106000', s_price:'34300', opt_color:'#BB9A98,#1B464F,#A3CBCC'},
        {item_no:12, src:'../img/item/bot/12.gif', coverd_src: '../img/item/bot/12-1.jpg', desc:'포근하고 따뜻한 니트!', title:'STL NY 뱃살커버 슬림핏 조거 팬츠', o_price:'53000', s_price:'22300', opt_color:'#151725,#938981,#DBC1BD'},
        {item_no:13, src:'../img/item/bot/13.gif', coverd_src: '../img/item/bot/13-1.jpg', desc:'쫀쫀하고 짱짱한 카스텔 원단 기본&짧은기장', title:'STL 퓨어 하프 팬츠', o_price:'48000', s_price:'9930', opt_color:'#463a43,#30361d,#7c6658'},
        {item_no:14, src:'../img/item/bot/14.gif', coverd_src: '../img/item/bot/14-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'STL 플레어 숏 팬츠', o_price:'39000', s_price:'14300', opt_color:'#65748C,#997371,#938981'},
        {item_no:15, src:'../img/item/bot/15.gif', coverd_src: '../img/item/bot/15-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'메트로 양말', o_price:'6900', s_price:'2490', opt_color:'#ffffff,#000000,#000000'},
        {item_no:16, src:'../img/item/bot/16.gif', coverd_src: '../img/item/bot/16-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'STL 에어 양말삭스 1+1', o_price:'7900', s_price:'2930', opt_color:'#ffffff,#000000,#000000'}

    ]
,
    //new
    [
        {item_no:1, src:'../img/item/new/1.gif', coverd_src: '../img/item/new/1-1.jpg', desc:'따뜻하고 포근한 기모 원단! YKK지퍼', title:'STL NY 오버핏 기모 하이넥 반집업', o_price:'73000', s_price:'29300', opt_color:'#FFFFFF,#DDC7C9,#A07272'},
        {item_no:2, src:'../img/item/new/2.gif', coverd_src: '../img/item/new/2-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'STL 업타운 반목 롱 슬리브', o_price:'68000', s_price:'8930', opt_color:'#000000,#E9DFD6,#C2BFEC'},
        {item_no:3, src:'../img/item/new/3.gif', coverd_src: '../img/item/new/3-1.jpg', desc:'따뜻하고 포근한 기모 원단! YKK지퍼', title:'STL 메트로 바이오 레이어드 트임 롱 나시', o_price:'39000', s_price:'6930', opt_color:'#000000,#D9D9D9,#ffffff'},
        {item_no:4, src:'../img/item/new/4.gif', coverd_src: '../img/item/new/4-1.jpg', desc:'따뜻한 기모 기본&짧은기장', title:'STL 에어 조거 기모 키작아도 괜찮아 팬츠 1+1', o_price:'126000', s_price:'39300', opt_color:'#3F3E3C,#81756C,#FAF3DC'},
        {item_no:5, src:'../img/item/new/5.gif', coverd_src: '../img/item/new/5-1.jpg', desc:'초슬림핏 조거팬츠! 기본기장&짧은기장', title:'STL 카스텔 420 체인지업 레깅스핏 슬림핏 조거 팬츠 1+1', o_price:'106000', s_price:'34930', opt_color:'#3B465A,#D0CBC7,#81585C'},
        {item_no:6, src:'../img/item/new/6.gif', coverd_src: '../img/item/new/6-1.jpg', desc:'따뜻하고 가벼운 양털! YKK지퍼', title:'STL 뽀송뽀송 NY 양털 조끼', o_price:'43000', s_price:'19930', opt_color:'#EBA9A7,#6B728E,#D5B7B8'},
        {item_no:7, src:'../img/item/new/7.gif', coverd_src: '../img/item/new/7-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'STL 타임 오버핏 크롭 맨투맨', o_price:'63000', s_price:'19300', opt_color:'#F6F0EA,#000000,#B8BBD9'},
        {item_no:8, src:'../img/item/new/8.gif', coverd_src: '../img/item/new/8-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'STL 레깅스에 찰떡궁합 박스 롱티 롱 슬리브', o_price:'68000', s_price:'8930', opt_color:'#191A29,#B3A28E,#EEDBD7'},
        {item_no:9, src:'../img/item/new/9.gif', coverd_src: '../img/item/new/9-1.jpg', desc:'따뜻한 기모 기본&짧은기장', title:'[SET] STL 굿데이 스트레치 숏 슬리브 & 굿데이 스트레치 팬츠 세트', o_price:'111000', s_price:'19930', opt_color:'#E9DFD7,#AFB4DE,#DBC1BD'},
        {item_no:10, src:'../img/item/new/10.gif', coverd_src: '../img/item/new/10-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'STL 뉴 메트로 가디건', o_price:'73000', s_price:'28300', opt_color:'#000000,#423F45,#938981'},
        {item_no:11, src:'../img/item/new/11.gif', coverd_src: '../img/item/new/11-1.jpg', desc:'쫀쫀하고 짱짱한 카스텔 원단 기본&짧은기장', title:'STL NY 뱃살커버 슬림핏 키작아도 괜찮아 조거 팬츠 1+1', o_price:'106000', s_price:'34930', opt_color:'#424148,#6C8395,#E5DBD4'},
        {item_no:12, src:'../img/item/new/12.gif', coverd_src: '../img/item/new/12-1.jpg', desc:'포근하고 따뜻한 니트!', title:'STL 모노 NY 오버핏 테리 맨투맨 야노시호 1+1', o_price:'106000', s_price:'19930', opt_color:'#ede8e2,#f1cfcd,#bbc9d2'},
        {item_no:13, src:'../img/item/new/13.gif', coverd_src: '../img/item/new/13-1.jpg', desc:'기본기장&짧은기장', title:'STL 입으면 예뻐지는 미인 핀턱 부츠컷 밴딩 키작아도 괜찮아 팬츠 1+1', o_price:'116000', s_price:'32300', opt_color:'#635952,#A69790,#575565'},
        {item_no:14, src:'../img/item/new/14.gif', coverd_src: '../img/item/new/14-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'STL 픽업 베이직 롱 슬리브', o_price:'68000', s_price:'8930', opt_color:'#000000,#ffffff,#D2C7BB'},
        {item_no:15, src:'../img/item/new/15.gif', coverd_src: '../img/item/new/15-1.jpg', desc:'따뜻한 기모! 짧은기장 기본기장 출시', title:'메트로 브루클린 크레이프 스트레치 기모 본딩 키작아도 괜찮아 팬츠', o_price:'73000', s_price:'27300', opt_color:'#151725,#3A3C3E,#90877E'},
        {item_no:16, src:'../img/item/new/16.gif', coverd_src: '../img/item/new/16-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'STL 퓨어 퍼펙트 테리 후드 & 퓨어 퍼펙트 테리 조거 팬츠 1+1', o_price:'141000', s_price:'39300', opt_color:'#F7F0EB,#C1B7D9,#CCE3E3'}

    ]
    ,
    //추천
    // [
    //     {item_no:12, src:'../img/item/best/12.gif', coverd_src: '../img/item/best/12-1.jpg', desc:'포근하고 따뜻한 니트!', title:'STL 부드러운 파인 니트 1 + 1', o_price:'116000', s_price:'22930', opt_color:'#F9F5EA,#CEBA99,#885B56'},
    //     {item_no:13, src:'../img/item/best/13.gif', coverd_src: '../img/item/best/13-1.jpg', desc:'쫀쫀하고 짱짱한 카스텔 원단 기본&짧은기장', title:'STL 체인지 업 키작아도 괜찮아 레깅스 1+1', o_price:'126000', s_price:'24930', opt_color:'#000000,#3B465A,#DEC6C4'}, 
    //     {item_no:3, src:'../img/item/best/3.gif', coverd_src: '../img/item/best/3-1.jpg', desc:'슬림핏! 가볍고 따뜻해요. YKK지퍼', title:'STL 모노 부드러운 보아 후리스 힙커버 자켓', o_price:'63000', s_price:'9930', opt_color:'#758698,#D5C9B9,#264260'},
    //     {item_no:6, src:'../img/item/best/6.gif', coverd_src: '../img/item/best/6-1.jpg', desc:'가볍고 따뜻해요! YKK지퍼', title:'STL NY 오버핏 스윗 웜 후리스 후드 반집업', o_price:'73000', s_price:'24300', opt_color:'#D6CCEC,#6B728E,#A79D94'},
    //     {item_no:15, src:'../img/item/best/15.gif', coverd_src: '../img/item/best/15-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'STL 타임 & 퓨어 퍼펙트 & 픽업 테리 조거 팬츠 3종 택1', o_price:'68000', s_price:'19930', opt_color:'#151725,#9A99A1,#F6F0EA'},
    //     {item_no:7, src:'../img/item/best/7.gif', coverd_src: '../img/item/best/7-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'STL 팬시 2 롱 슬리브', o_price:'53000', s_price:'8930', opt_color:'#192D32,#46162F,#8FABB0'},
    //     {item_no:8, src:'../img/item/best/8.gif', coverd_src: '../img/item/best/8-1.jpg', desc:'따뜻하고 포근한 기모 원단! YKK지퍼', title:'STL NY 오버핏 더블메모리 기모 후드 숏 집업', o_price:'73000', s_price:'22300', opt_color:'#E9DFD7,#A07272,#A5A6A7'},
    //     {item_no:4, src:'../img/item/best/4.gif', coverd_src: '../img/item/best/4-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'STL 에센스 자켓 & 크롭 자켓 & 후드 자켓', o_price:'78000', s_price:'14930', opt_color:'#E2FF95,#53535b,#9e7476'},
    //     {item_no:5, src:'../img/item/best/5.gif', coverd_src: '../img/item/best/5-1.jpg', desc:'따뜻하고 포근한 기모원단!', title:'STL 에센스 기모 롱 슬리브', o_price:'68000', s_price:'9930', opt_color:'#000000,#885E62,#E9DFD6'},
    //     {item_no:9, src:'../img/item/best/9.gif', coverd_src: '../img/item/best/9-1.jpg', desc:'따뜻한 기모 기본&짧은기장', title:'메트로 NY 기모웜 키작아도 괜찮아 팬츠 1+1', o_price:'116000', s_price:'34930', opt_color:'#2a2d45,#564F4C,#2A282C'},
    //     {item_no:10, src:'../img/item/best/10.gif', coverd_src: '../img/item/best/10-1.jpg', desc:'따듯한 기모&기본기장&짧은기장 슬림해 보이는 세미부츠컷', title:'STL NY 힐 기모웜 키작아도 괜찮아 팬츠 1+1', o_price:'116000', s_price:'34300', opt_color:'#3F424F,#D0CBC7,#3B3D4D'},
    //     {item_no:11, src:'../img/item/best/11.gif', coverd_src: '../img/item/best/11-1.jpg', desc:'쫀쫀하고 짱짱한 카스텔 원단 기본&짧은기장', title:'STL 카스텔 up&up 3D 키작아도 레깅스 야노시호 1+1', o_price:'86000', s_price:'22930', opt_color:'#595d80,#bb7e7d,#24536d'},
    //     {item_no:14, src:'../img/item/best/14.gif', coverd_src: '../img/item/best/14-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'STL 업타운 반목 롱 슬리브', o_price:'68000', s_price:'8930', opt_color:'#E9DFD6,#E4C8C4,#C2BFEC'},
    //    {item_no:16, src:'../img/item/best/16.gif', coverd_src: '../img/item/best/16-1.jpg', desc:'넘쳐나는 찬양후기, 고객만족 99%', title:'[SET] STL NY 테리 맨투맨 & NY 테리 조거팬츠 세트', o_price:'106000', s_price:'29930', opt_color:'#DDC7CA,#D0D56F,#FFFFFF'},
    //     {item_no:1, src:'../img/item/best/1.gif', coverd_src: '../img/item/best/1-1.jpg', desc:'따뜻하고 가벼운 양털! YKK지퍼', title:'STL 뽀송뽀송 NY 가볍고 따뜻한 오버핏 양털 롱 코트', o_price:'103000', s_price:'29930', opt_color:'#000000,#885E62,#D5B6BB'},
    //     {item_no:2, src:'../img/item/best/2.gif', coverd_src: '../img/item/best/2-1.jpg', desc:'따뜻하고 가벼운 양털! YKK지퍼', title:'STL 뽀송뽀송 메트로 NY 오버핏 양면양털 후드 집업', o_price:'83000', s_price:'29930', opt_color:'#F7EFEA,#CABCDE,#141625'},
        
    // ],

]