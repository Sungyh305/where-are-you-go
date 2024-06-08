export class CityStationData  {
  constructor() {
      this.ktxCityStationData = [
        { cityName: '서울특별시', cityCode: '11', stations: [
            { nodeName: '서울역', nodeId: 'NAT010000' },
            { nodeName: '영등포역', nodeId: 'NAT010091' },
            { nodeName: '용산역', nodeId: 'NAT010032' },
            { nodeName: '청량리역', nodeId: 'NAT130126' },
            { nodeName: '상봉역', nodeId: 'NAT020040' }
          ] },
          { cityName: '부산광역시', cityCode: '21', stations: [
            { nodeName: '구포역', nodeId: 'NAT014281' },
            { nodeName: '부산역', nodeId: 'NAT014445' }
          ] },
          { cityName: '대구광역시', cityCode: '22', stations: [
            { nodeName: '서대구역', nodeId: 'NAT013189' },
            { nodeName: '동대구역', nodeId: 'NAT013271' }
          ] },
          { cityName: '광주광역시', cityCode: '24', stations: [
            { nodeName: '광주송정역', nodeId: 'NAT031857' }
          ] },
          { cityName: '대전광역시', cityCode: '25', stations: [
            { nodeName: '대전역', nodeId: 'NAT011668' },
            { nodeName: '서대전역', nodeId: 'NAT030057' }
          ] },
          { cityName: '울산광역시', cityCode: '26', stations: [
            { nodeName: '울산역', nodeId: 'NATH13717' }
          ] },
          { cityName: '경기도', cityCode: '31', stations: [
            { nodeName: '가남역', nodeId: 'NAT280090' },
            { nodeName: '광명역', nodeId: 'NATH10219' },
            { nodeName: '덕소역', nodeId: 'NAT020178' },
            { nodeName: '부발역', nodeId: 'NAT250428' },
            { nodeName: '수원역', nodeId: 'NAT010415' },
            { nodeName: '양평역', nodeId: 'NAT020524' },
            { nodeName: '신판교역', nodeId: 'NAT250007' },
            { nodeName: '행신역', nodeId: 'NAT110147' }
          ] },
          { cityName: '강원도', cityCode: '32', stations: [
            { nodeName: '강릉역', nodeId: 'NAT601936' },
            { nodeName: '동해역', nodeId: 'NAT601485' },
            { nodeName: '둔내역', nodeId: 'NATN10428' },
            { nodeName: '만종역', nodeId: 'NAT021033' },
            { nodeName: '묵호역', nodeId: 'NAT601545' },
            { nodeName: '서원주역', nodeId: 'NAT020864' },
            { nodeName: '원주역', nodeId: 'NAT020947' },
            { nodeName: '정동진역', nodeId: 'NAT601774' },
            { nodeName: '진부(오대산)역', nodeId: 'NATN10787' },
            { nodeName: '평창역', nodeId: 'NATN10625' },
            { nodeName: '횡성역', nodeId: 'NATN10230' }
          ] },
          { cityName: '충청북도', cityCode: '33', stations: [
            { nodeName: '감곡장호원역', nodeId: 'NAT280212' },
            { nodeName: '단양역', nodeId: 'NAT021784' },
            { nodeName: '양성온천역', nodeId: 'NAT280358' },
            { nodeName: '오송역', nodeId: 'NAT050044' },
            { nodeName: '제천역', nodeId: 'NAT021549' },
            { nodeName: '충주역', nodeId: 'NAT050827' }
          ] },
          { cityName: '충청남도', cityCode: '34', stations: [
            { nodeName: '공주역', nodeId: 'NATH20438' },
            { nodeName: '계룡역', nodeId: 'NAT030254' },
            { nodeName: '논산역', nodeId: 'NAT030508' },
            { nodeName: '천안아산역', nodeId: 'NATH10960' }
          ] },
          { cityName: '전라북도', cityCode: '35', stations: [
            { nodeName: '남원역', nodeId: 'NAT040868' },
            { nodeName: '익산역', nodeId: 'NAT030879' },
            { nodeName: '전주역', nodeId: 'NAT040257' },
            { nodeName: '정읍역', nodeId: 'NAT031314' }
          ] },
          { cityName: '전라남도', cityCode: '36', stations: [
            { nodeName: '곡성역', nodeId: 'NAT041072' },
            { nodeName: '구례구역', nodeId: 'NAT041285' },
            { nodeName: '나주역', nodeId: 'NAT031998' },
            { nodeName: '목포역', nodeId: 'NAT032563' },
            { nodeName: '순천역', nodeId: 'NAT041595' },
            { nodeName: '여수엑스포역', nodeId: 'NAT041993' },
            { nodeName: '여천역', nodeId: 'NAT041866' }
          ] },
          { cityName: '경상북도', cityCode: '37', stations: [
            { nodeName: '경주역', nodeId: 'NATH13421' },
            { nodeName: '김천구미역', nodeId: 'NATH12383' },
            { nodeName: '안동역', nodeId: 'NAT022558' },
            { nodeName: '영주역', nodeId: 'NAT022188' },
            { nodeName: '포항역', nodeId: 'NAT8B0351' },
            { nodeName: '풍기역', nodeId: 'NAT022053' }
          ] },
          { cityName: '경상남도', cityCode: '38', stations: [
            { nodeName: '마산역', nodeId: 'NAT880345' },
            { nodeName: '밀양역', nodeId: 'NAT013841' },
            { nodeName: '진영역', nodeId: 'NAT880177' },
            { nodeName: '진주역', nodeId: 'NAT881014' },
            { nodeName: '창원역', nodeId: 'NAT880310' },
            { nodeName: '창원중앙역', nodeId: 'NAT880281' }
          ] },
      ];

      this.trainCityStationData= [
        { cityName: '서울', cityCode: '11', stations: [
            { nodeName: '서빙고', nodeId: 'NAT130036' },
            { nodeName: '옥수', nodeId: 'NAT130070' },
            { nodeName: '왕십리', nodeId: 'NAT130104' },
            { nodeName: '청량리', nodeId: 'NAT130126' },
            { nodeName: '광운대', nodeId: 'NAT130182' },
            { nodeName: '서울', nodeId: 'NAT010000' },
            { nodeName: '용산', nodeId: 'NAT010032' },
            { nodeName: '노량진', nodeId: 'NAT010058' },
            { nodeName: '영등포', nodeId: 'NAT010091' },
            { nodeName: '신도림', nodeId: 'NAT010106' },
            { nodeName: '수서', nodeId: 'NATH30000' },
        ]},
        { cityName: '부산', cityCode: '21', stations: [
            { nodeName: '화명', nodeId: 'NAT014244' },
            { nodeName: '구포', nodeId: 'NAT014281' },
            { nodeName: '사상', nodeId: 'NAT014331' },
            { nodeName: '부산', nodeId: 'NAT014445' },
            { nodeName: '부전', nodeId: 'NAT750046' },
            { nodeName: '동래', nodeId: 'NAT750106' },
            { nodeName: '센텀', nodeId: 'NAT750161' },
            { nodeName: '신해운대', nodeId: 'NAT750189' },
            { nodeName: '송정', nodeId: 'NAT750254' },
            { nodeName: '기장', nodeId: 'NAT750329' },
            { nodeName: '좌천', nodeId: 'NAT750412' },
        ]},
        { cityName: '대구', cityCode: '22', stations: [
            { nodeName: '대구', nodeId: 'NAT013239' },
            { nodeName: '동대구', nodeId: 'NAT013271' },
        ]},
        { cityName: '광주', cityCode: '24', stations: [
            { nodeName: '광주송정', nodeId: 'NAT031857' },
            { nodeName: '효천', nodeId: 'NAT882904' },
            { nodeName: '서광주', nodeId: 'NAT882936' },
            { nodeName: '광주', nodeId: 'NAT883012' },
            { nodeName: '극락강', nodeId: 'NAT883086' },
        ]},
        { cityName: '대전', cityCode: '25', stations: [
            { nodeName: '대전', nodeId: 'NAT011668' },
            { nodeName: '서대전', nodeId: 'NAT030057' },
            { nodeName: '흑석리', nodeId: 'NAT030173' },
            { nodeName: '신탄진', nodeId: 'NAT011524' },
        ]},
        { cityName: '울산', cityCode: '26', stations: [
            { nodeName: '북울산', nodeId: 'NAT750781' },
            { nodeName: '남창', nodeId: 'NAT750560' },
            { nodeName: '덕하', nodeId: 'NAT750653' },
            { nodeName: '태화강', nodeId: 'NAT750726' },
            { nodeName: '효문', nodeId: 'NAT750760' },
        ]},
        { cityName: '경기', cityCode: '31', stations: [
            { nodeName: '덕소', nodeId: 'NAT020178' },
            { nodeName: '아신', nodeId: 'NAT020471' },
            { nodeName: '양평', nodeId: 'NAT020524' },
            { nodeName: '용문', nodeId: 'NAT020641' },
            { nodeName: '지평', nodeId: 'NAT020677' },
            { nodeName: '석불', nodeId: 'NAT020717' },
            { nodeName: '일신', nodeId: 'NAT020760' },
            { nodeName: '매곡', nodeId: 'NAT020803' },
            { nodeName: '양동', nodeId: 'NAT020845' },
            { nodeName: '삼산', nodeId: 'NAT020884' },
            { nodeName: '부천', nodeId: 'NAT060121' },
            { nodeName: '행신', nodeId: 'NAT110147' },
            { nodeName: '능곡', nodeId: 'NAT110165' },
            { nodeName: '일산', nodeId: 'NAT110249' },
            { nodeName: '탄현', nodeId: 'NAT110265' },
            { nodeName: '파주', nodeId: 'NAT110407' },
            { nodeName: '문산', nodeId: 'NAT110460' },
            { nodeName: '운천', nodeId: 'NAT110497' },
            { nodeName: '임진강', nodeId: 'NAT110520' },
            { nodeName: '도라산', nodeId: 'NAT110557' },
            { nodeName: '의정부', nodeId: 'NAT130312' },
            { nodeName: '동두천', nodeId: 'NAT130531' },
            { nodeName: '소요산', nodeId: 'NAT130556' },
            { nodeName: '초성리', nodeId: 'NAT130597' },
            { nodeName: '한탄강', nodeId: 'NAT130627' },
            { nodeName: '전곡', nodeId: 'NAT130652' },
            { nodeName: '연천', nodeId: 'NAT130738' },
            { nodeName: '신망리', nodeId: 'NAT130774' },
            { nodeName: '대광리', nodeId: 'NAT130844' },
            { nodeName: '신탄리', nodeId: 'NAT130888' },
            { nodeName: '퇴계원', nodeId: 'NAT140098' },
            { nodeName: '사릉', nodeId: 'NAT140133' },
            { nodeName: '평내호평', nodeId: 'NAT140214' },
            { nodeName: '마석', nodeId: 'NAT140277' },
            { nodeName: '대성리', nodeId: 'NAT140362' },
            { nodeName: '청평', nodeId: 'NAT140436' },
            { nodeName: '가평', nodeId: 'NAT140576' },
            { nodeName: '안양', nodeId: 'NAT010239' },
            { nodeName: '수원', nodeId: 'NAT010415' },
            { nodeName: '오산', nodeId: 'NAT010570' },
            { nodeName: '서정리', nodeId: 'NAT010670' },
            { nodeName: '평택', nodeId: 'NAT010754' },
            { nodeName: '동탄', nodeId: 'NATH30326' },
            { nodeName: '지제', nodeId: 'NATH30536' },
        ]},
        { cityName: '강원', cityCode: '32', stations: [
            { nodeName: '동화', nodeId: 'NAT020986' },
            { nodeName: '반곡', nodeId: 'NAT021175' },
            { nodeName: '신림', nodeId: 'NAT021357' },
            { nodeName: '서원주', nodeId: 'NAT020864' },
            { nodeName: '원주', nodeId: 'NAT020947' },
            { nodeName: '백마고지', nodeId: 'NAT130944' },
            { nodeName: '백양리', nodeId: 'NAT140681' },
            { nodeName: '강촌', nodeId: 'NAT140701' },
            { nodeName: '김유정', nodeId: 'NAT140787' },
            { nodeName: '남춘천', nodeId: 'NAT140840' },
            { nodeName: '춘천', nodeId: 'NAT140873' },
            { nodeName: '동점', nodeId: 'NAT600830' },
            { nodeName: '철암', nodeId: 'NAT600870' },
            { nodeName: '도계', nodeId: 'NAT601122' },
            { nodeName: '신기', nodeId: 'NAT601275' },
            { nodeName: '동해', nodeId: 'NAT601485' },
            { nodeName: '묵호', nodeId: 'NAT601545' },
            { nodeName: '망상해변', nodeId: 'NAT601602' },
            { nodeName: '망상', nodeId: 'NAT601605' },
            { nodeName: '정동진', nodeId: 'NAT601774' },
            { nodeName: '강릉', nodeId: 'NAT601936' },
            { nodeName: '별어곡', nodeId: 'NAT610064' },
            { nodeName: '선평', nodeId: 'NAT610137' },
            { nodeName: '정선', nodeId: 'NAT610226' },
            { nodeName: '나전', nodeId: 'NAT610326' },
            { nodeName: '아우라지', nodeId: 'NAT610387' },
            { nodeName: '추암', nodeId: 'NAT630064' },
            { nodeName: '삼척해변', nodeId: 'NAT630078' },
            { nodeName: '쌍룡', nodeId: 'NAT650177' },
            { nodeName: '연당', nodeId: 'NAT650253' },
            { nodeName: '영월', nodeId: 'NAT650341' },
            { nodeName: '예미', nodeId: 'NAT650515' },
            { nodeName: '함백', nodeId: 'NAT650567' },
            { nodeName: '민둥산', nodeId: 'NAT650722' },
            { nodeName: '사북', nodeId: 'NAT650782' },
            { nodeName: '고한', nodeId: 'NAT650828' },
            { nodeName: '추전', nodeId: 'NAT650918' },
            { nodeName: '태백', nodeId: 'NAT650978' },
            { nodeName: '동백산', nodeId: 'NAT651053' },
        ]},
        { cityName: '충북', cityCode: '33', stations: [
            { nodeName: '옥천', nodeId: 'NAT011833' },
            { nodeName: '이원', nodeId: 'NAT011916' },
            { nodeName: '지탄', nodeId: 'NAT011972' },
            { nodeName: '심천', nodeId: 'NAT012016' },
            { nodeName: '각계', nodeId: 'NAT012054' },
            { nodeName: '영동', nodeId: 'NAT012124' },
            { nodeName: '황간', nodeId: 'NAT012270' },
            { nodeName: '추풍령', nodeId: 'NAT012355' },
            { nodeName: '봉양', nodeId: 'NAT021478' },
            { nodeName: '제천', nodeId: 'NAT021549' },
            { nodeName: '도담', nodeId: 'NAT021723' },
            { nodeName: '단양', nodeId: 'NAT021784' },
            { nodeName: '청주', nodeId: 'NAT050114' },
            { nodeName: '오근장', nodeId: 'NAT050215' },
            { nodeName: '청주공항', nodeId: 'NAT050244' },
            { nodeName: '증평', nodeId: 'NAT050366' },
            { nodeName: '음성', nodeId: 'NAT050596' },
            { nodeName: '주덕', nodeId: 'NAT050719' },
            { nodeName: '충주', nodeId: 'NAT050827' },
            { nodeName: '목행', nodeId: 'NAT050881' },
            { nodeName: '삼탄', nodeId: 'NAT051006' },
            { nodeName: '장락', nodeId: 'NAT650050' },
        ]},
        { cityName: '충남', cityCode: '34', stations: [
            { nodeName: '계룡', nodeId: 'NAT030254' },
            { nodeName: '연산', nodeId: 'NAT030396' },
            { nodeName: '논산', nodeId: 'NAT030508' },
            { nodeName: '강경', nodeId: 'NAT030607' },
            { nodeName: '아산', nodeId: 'NAT080045' },
            { nodeName: '온양온천', nodeId: 'NAT080147' },
            { nodeName: '신창', nodeId: 'NAT080216' },
            { nodeName: '도고온천', nodeId: 'NAT080309' },
            { nodeName: '신례원', nodeId: 'NAT080353' },
            { nodeName: '예산', nodeId: 'NAT080402' },
            { nodeName: '삽교', nodeId: 'NAT080492' },
            { nodeName: '홍성', nodeId: 'NAT080622' },
            { nodeName: '광천', nodeId: 'NAT080749' },
            { nodeName: '청소', nodeId: 'NAT080827' },
            { nodeName: '대천', nodeId: 'NAT080952' },
            { nodeName: '판교', nodeId: 'NAT081240' },
            { nodeName: '장항', nodeId: 'NAT081318' },
            { nodeName: '서천', nodeId: 'NAT081343' },
            { nodeName: '연무대', nodeId: 'NAT340090' },
            { nodeName: '성환', nodeId: 'NAT010848' },
            { nodeName: '천안', nodeId: 'NAT010971' },
            { nodeName: '천안아산', nodeId: 'NATH10960' },
            { nodeName: '신웅천', nodeId: 'NAT081099' },
        ]},
        {
            cityName: '전북', cityCode: '35', stations: [
                { nodeName: '용동', nodeId: 'NAT030667' },
                { nodeName: '함열', nodeId: 'NAT030718' },
                { nodeName: '익산', nodeId: 'NAT030879' },
                { nodeName: '김제', nodeId: 'NAT031056' },
                { nodeName: '신태인', nodeId: 'NAT031179' },
                { nodeName: '정읍', nodeId: 'NAT031314' },
                { nodeName: '삼례', nodeId: 'NAT040133' },
                { nodeName: '동산', nodeId: 'NAT040173' },
                { nodeName: '전주', nodeId: 'NAT040257' },
                { nodeName: '신리', nodeId: 'NAT040352' },
                { nodeName: '관촌', nodeId: 'NAT040496' },
                { nodeName: '임실', nodeId: 'NAT040536' },
                { nodeName: '오수', nodeId: 'NAT040667' },
                { nodeName: '남원', nodeId: 'NAT040868' },
                { nodeName: '군산', nodeId: 'NAT081388' },
                { nodeName: '대야', nodeId: 'NAT320131' },
            ]
        },
        {
            cityName: '전남', cityCode: '36', stations: [
                { nodeName: '백양사', nodeId: 'NAT031486' },
                { nodeName: '장성', nodeId: 'NAT031638' },
                { nodeName: '나주', nodeId: 'NAT031998' },
                { nodeName: '다시', nodeId: 'NAT032099' },
                { nodeName: '무안', nodeId: 'NAT032273' },
                { nodeName: '몽탄', nodeId: 'NAT032313' },
                { nodeName: '일로', nodeId: 'NAT032422' },
                { nodeName: '임성리', nodeId: 'NAT032489' },
                { nodeName: '목포', nodeId: 'NAT032563' },
                { nodeName: '곡성', nodeId: 'NAT041072' },
                { nodeName: '구례구', nodeId: 'NAT041285' },
                { nodeName: '순천', nodeId: 'NAT041595' },
                { nodeName: '율촌', nodeId: 'NAT041710' },
                { nodeName: '여천', nodeId: 'NAT041866' },
                { nodeName: '함평', nodeId: 'NAT032212' },
                { nodeName: '진상', nodeId: 'NAT881538' },
                { nodeName: '옥곡', nodeId: 'NAT881584' },
                { nodeName: '광양', nodeId: 'NAT881708' },
                { nodeName: '벌교', nodeId: 'NAT882034' },
                { nodeName: '조성', nodeId: 'NAT882141' },
                { nodeName: '예당', nodeId: 'NAT882194' },
                { nodeName: '득량', nodeId: 'NAT882237' },
                { nodeName: '보성', nodeId: 'NAT882328' },
                { nodeName: '명봉', nodeId: 'NAT882416' },
                { nodeName: '이양', nodeId: 'NAT882544' },
                { nodeName: '능주', nodeId: 'NAT882666' },
                { nodeName: '화순', nodeId: 'NAT882755' },
                { nodeName: '남평', nodeId: 'NAT882847' },
            ]
        },
        {
            cityName: '경북', cityCode: '37', stations: [
                { nodeName: '김천', nodeId: 'NAT012546' },
                { nodeName: '아포', nodeId: 'NAT012700' },
                { nodeName: '구미', nodeId: 'NAT012775' },
                { nodeName: '사곡', nodeId: 'NAT012821' },
                { nodeName: '약목', nodeId: 'NAT012903' },
                { nodeName: '왜관', nodeId: 'NAT012968' },
                { nodeName: '신동', nodeId: 'NAT013067' },
                { nodeName: '경산', nodeId: 'NAT013395' },
                { nodeName: '남성현', nodeId: 'NAT013542' },
                { nodeName: '청도', nodeId: 'NAT013629' },
                { nodeName: '풍기', nodeId: 'NAT022053' },
                { nodeName: '영주', nodeId: 'NAT022188' },
                { nodeName: '의성', nodeId: 'NAT022844' },
                { nodeName: '탑리', nodeId: 'NAT022961' },
                { nodeName: '화본', nodeId: 'NAT023127' },
                { nodeName: '신녕', nodeId: 'NAT023279' },
                { nodeName: '북영천', nodeId: 'NAT023424' },
                { nodeName: '영천', nodeId: 'NAT023449' },
                { nodeName: '아화', nodeId: 'NAT023601' },
                { nodeName: '서경주', nodeId: 'NAT023821' },
                { nodeName: '옥산', nodeId: 'NAT300200' },
                { nodeName: '청리', nodeId: 'NAT300271' },
                { nodeName: '상주', nodeId: 'NAT300360' },
                { nodeName: '함창', nodeId: 'NAT300558' },
                { nodeName: '점촌', nodeId: 'NAT300600' },
                { nodeName: '용궁', nodeId: 'NAT300669' },
                { nodeName: '개포', nodeId: 'NAT300733' },
                { nodeName: '예천', nodeId: 'NAT300850' },
                { nodeName: '봉화', nodeId: 'NAT600147' },
                { nodeName: '봉성', nodeId: 'NAT600257' },
                { nodeName: '춘양', nodeId: 'NAT600379' },
                { nodeName: '임기', nodeId: 'NAT600476' },
                { nodeName: '현동', nodeId: 'NAT600527' },
                { nodeName: '분천', nodeId: 'NAT600593' },
                { nodeName: '비동', nodeId: 'NAT600635' },
                { nodeName: '양원', nodeId: 'NAT600655' },
                { nodeName: '승부', nodeId: 'NAT600692' },
                { nodeName: '석포', nodeId: 'NAT600768' },
                { nodeName: '신나원', nodeId: 'NAT8B0082' },
                { nodeName: '신안강', nodeId: 'NAT8B0190' },
                { nodeName: '월포', nodeId: 'NAT8B0504' },
                { nodeName: '장사', nodeId: 'NAT8B0595' },
                { nodeName: '강구', nodeId: 'NAT8B0671' },
                { nodeName: '영덕', nodeId: 'NAT8B0737' },
                { nodeName: '하양', nodeId: 'NAT830200' },
                { nodeName: '포항', nodeId: 'NAT8B0351' },
                { nodeName: '신경주', nodeId: 'NATH13421' },
                { nodeName: '안동', nodeId: 'NAT022558' },
                { nodeName: '입실', nodeId: 'NAT750933' },
                { nodeName: '사방', nodeId: 'NAT751238' },
                { nodeName: '안강', nodeId: 'NAT751296' },
                { nodeName: '양자동', nodeId: 'NAT751325' },
                { nodeName: '부조', nodeId: 'NAT751354' },
                { nodeName: '효자', nodeId: 'NAT751418' },
            ]
        },
        {
            cityName: '경남', cityCode: '38', stations: [
                { nodeName: '상동', nodeId: 'NAT013747' },
                { nodeName: '밀양', nodeId: 'NAT013841' },
                { nodeName: '삼랑진', nodeId: 'NAT013967' },
                { nodeName: '원동', nodeId: 'NAT014058' },
                { nodeName: '물금', nodeId: 'NAT014150' },
                { nodeName: '한림정', nodeId: 'NAT880099' },
                { nodeName: '진영', nodeId: 'NAT880177' },
                { nodeName: '진례', nodeId: 'NAT880179' },
                { nodeName: '창원중앙', nodeId: 'NAT880281' },
                { nodeName: '창원', nodeId: 'NAT880310' },
                { nodeName: '마산', nodeId: 'NAT880345' },
                { nodeName: '중리', nodeId: 'NAT880408' },
                { nodeName: '함안', nodeId: 'NAT880520' },
                { nodeName: '군북', nodeId: 'NAT880608' },
                { nodeName: '원북', nodeId: 'NAT880644' },
                { nodeName: '평촌', nodeId: 'NAT880702' },
                { nodeName: '반성', nodeId: 'NAT880766' },
                { nodeName: '진성', nodeId: 'NAT880825' },
                { nodeName: '진주', nodeId: 'NAT881014' },
                { nodeName: '완사', nodeId: 'NAT881168' },
                { nodeName: '북천', nodeId: 'NAT881269' },
                { nodeName: '양보', nodeId: 'NAT881323' },
                { nodeName: '횡천', nodeId: 'NAT881386' },
                { nodeName: '하동', nodeId: 'NAT881460' },
                { nodeName: '신창원', nodeId: 'NAT810048' },
                { nodeName: '진해', nodeId: 'NAT810195' },
            ]
        }
    ]
  }

  getKtx() {
    return this.ktxCityStationData;
  }

  getTrain() {
    return this.trainCityStationData;
  }

}