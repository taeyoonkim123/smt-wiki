import { Character, LabyrinthInfo, LocationInfo, RankInfo } from './types';

// CloudFront 이미지 자산을 불러오는 유틸리티
// FIXME: {각인물코드} 또는 장소/마물 이미지 코드를 입력해주세요 (예: 'MA.png', 'MAP_1.jpg')
const getAssetUrl = (assetCode: string) => `https://d3lna1f15u7pcs.cloudfront.net/media/characters/543f5844-2c82-43f1-b234-e968b6a68c36/assets/${assetCode}`;

export const locations: LocationInfo[] = [
  {
    id: 'ariantos',
    name: '아리안토스 전경',
    desc: '크라트 미궁을 중심으로 형성된 초거대 교육·상업 도시국가.',
    imageUrl: getAssetUrl('MAP1.webp?v=0') /* TODO: 코드입력 */,
    facilities: ['상업단지', '유흥단지', '미궁 입구', '도살장']
  },
  {
    id: 'gigantos',
    name: '기간토스 검술 아카데미',
    desc: '신체를 한계까지 단련하여 궁극의 무투를 완성하는 기관.',
    imageUrl: getAssetUrl('MAP2.webp?v=0') /* TODO: 코드입력 */,
    facilities: ['연무장', '강의실', '복도', '강당']
  },
  {
    id: 'seorn',
    name: '세오른 마법 아카데미',
    desc: '세상의 이치를 탐구하고 마법의 진리를 좇는 4대 학파의 온상.',
    imageUrl: getAssetUrl('MAP3.webp?v=0') /* TODO: 코드입력 */,
    facilities: ['도서관', '원소의 탑', '간섭의 탑', '영역의 탑', '정령의 탑']
  }
];

export const labyrinthData: LabyrinthInfo[] = [
  {
    name: '상층',
    desc: '초보 모험가와 학생들의 주력 의뢰 장소. 기계식 함정과 하위 마물들이 서식한다.',
    imageUrl: getAssetUrl('DMAP_1.webp?v=0') /* TODO: 코드입력 */,
    monsters: [
      { name: '슬라임', imageUrl: getAssetUrl('MOB1.webp?v=0') /* TODO: 코드입력 */ },
      { name: '고블린', imageUrl: getAssetUrl('MOB2.webp?v=0') /* TODO: 코드입력 */ },
      { name: '코볼트', imageUrl: getAssetUrl('MOB3.webp?v=0') /* TODO: 코드입력 */ },
      { name: '다크 팽', imageUrl: getAssetUrl('MOB4.webp?v=0') /* TODO: 코드입력 */ }
    ],
    boss: { name: '타우로마시스', imageUrl: getAssetUrl('MOB5.webp?v=0') /* TODO: 코드입력 */ },
    traps: ['바닥 함정', '화살 트랩 등 기계식 함정'],
    plants: ['하급 회복 약초', '하급 정력 약초', '하급 최음 약초'],
    ores: ['하급 마력석', '하급 마철석']
  },
  {
    name: '중층',
    desc: '숙련된 모험가나 엘리트 학생들의 영역. 마력 기반 함정과 위험한 군락이 포진해 있다.',
    imageUrl: getAssetUrl('DMAP_2.webp?v=0') /* TODO: 코드입력 */,
    monsters: [
      { name: '미믹', imageUrl: getAssetUrl('MOB6.webp?v=0') /* TODO: 코드입력 */ },
      { name: '웨어 울프', imageUrl: getAssetUrl('MOB8.webp?v=0') /* TODO: 코드입력 */ },
      { name: '오크 무리', imageUrl: getAssetUrl('MOB7.webp?v=0') /* TODO: 코드입력 */ },
      { name: '라플라시아', imageUrl: getAssetUrl('MOB9.webp?v=0') /* TODO: 코드입력 */ },
    ],
    boss: { name: '야마타노오로치', imageUrl: getAssetUrl('MOB10.webp?v=0') /* TODO: 코드입력 */ },
    traps: ['마력 폭발 함정', '환청 함정', '환각 함정'],
    plants: ['중급 회복 약초', '중급 정력 약초', '중급 최음 약초'],
    ores: ['중급 마력석', '중급 마철석']
  },
  {
    name: '심층',
    desc: '아무도 끝을 보지 못한 미지의 심연. 고대의 악과 심연의 괴수들이 봉인된 땅.',
    imageUrl: getAssetUrl('DMAP_3.webp?v=0') /* TODO: 코드입력 */,
    monsters: [
      { name: '아크 데몬', imageUrl: getAssetUrl('MOB11.webp?v=0') /* TODO: 코드입력 */ },
      { name: '서큐버스', imageUrl: getAssetUrl('MOB12.webp?v=0') /* TODO: 코드입력 */ },
      { name: '케르베로스', imageUrl: getAssetUrl('MOB14.webp?v=0') /* TODO: 코드입력 */ }
    ],
    boss: { name: '크라트의 분신', imageUrl: getAssetUrl('MOB13.webp?v=0') /* TODO: 코드입력 */ },
    traps: ['전이 함정', '촉수 함정'],
    plants: ['상급 회복 약초', '상급 정력 약초', '상급 최음 약초'],
    ores: ['상급 마력석', '상급 마철석', '미감정 광석들']
  }
];

export const questRanks: RankInfo[] = [
  { rank: 'F', points: 1, description: '주민들의 간단한 심부름' },
  { rank: 'E', points: 2, description: '조금 고된 노동' },
  { rank: 'D', points: 4, description: '미궁 상층 의뢰, 가벼운 마물 토벌' },
  { rank: 'C', points: 6, description: '미궁 중층 의뢰, 마물 토벌, 귀한 약초/광석 수집' },
  { rank: 'B', points: 10, description: '미궁 중층/상층 의뢰, 엘리트 마물(문지기) 토벌' },
  { rank: 'A', points: 25, description: '미궁 심층 의뢰, 심층 탐색, 정보 수집, 마물 토벌' },
  { rank: 'S', points: 50, description: '길드 판단 하에 등급 부여 (연 1회 수준)' },
  { rank: '측정불가', points: 999, description: '전쟁 위기나 아리안토스 전체에 큰 위협이 되는 상황' },
];

export const characters: Character[] = [
{
    id: 'AA',
    name: '셀레나 베일',
    title: '속도의 검신',
    gender: '여',
    faction: '기간토스 검술 아카데미',
    role: '4신5제',
    
    rank: '오러5성',
    quote: '내 검이 보였다고? 이미 네 목숨은 끊어졌는데도.',
    mbti: 'ISTP',
    enneagram: '583',
    weaponOrMagic: '쾌검술',
    combatDescription: '한손검과 단검을 이용한 쾌검술을 구사. 시그니처 기술은 소닉붐에 오러를 실어 원거리 및 광역 공격',
    futureDescription: '원작에서는 테일러가 오러 6성에 도달하는 과정에서 뛰어난 검술로 도움을 주는 조력자였다. 그러나 검은 여명회와의 기습적인 전쟁에서 학생들과 아카데미를 지키기 위해 고군분투하다 끝내 전사한다.',
    imageUrl: getAssetUrl('AA_A1.webp?v=0'),
    icon: '🛡️',
  },
  {
    id: 'BB',
    name: '카시아 알루온',
    title: '기술의 수재',
    gender: '여',
    faction: '기간토스 검술 아카데미',
    role: '4신5제',
    
    rank: '오러5성',
    quote: '호흡 하나, 궤적 하나. 티끌의 오차도 허용치 않겠습니다.',
    mbti: 'ISTJ',
    enneagram: '135',
    weaponOrMagic: '분석형 쾌검술 (오러 5성)',
    combatDescription: '전투 초기에는 상대를 분석하는 슬로우 스타터. 분석이 끝나면 순식간에 급소를 연속 타격해 상대를 마무리 한다.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '엔딩 직후 벌어진 검은 여명회의 습격에서 학생들을 피난시키기 위해 간부들과 맞섰으나, 치명상을 입고 목숨을 잃는다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('BB_A1.webp?v=0'),
    icon: '🛡️',
  },
  {
    id: 'CC',
    name: '레오나 그랜디아',
    title: '핏빛 폭군',
    gender: '여',
    faction: '기간토스 검술 아카데미',
    role: '4신5제',

    rank: '오러5성',
    quote: '나의 검강은 부러지지 않는다. 군림할 뿐.',
    mbti: 'ENTJ',
    enneagram: '835',
    weaponOrMagic: '압도적 붉은 대검술 (오러 5성)',
    combatDescription: '압도적인 오러량으로 지구전과 단기전 동시 특화. 특유의 붉은 오러는 상대로 하여금 악마라는 착각을 불러일으킨다', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '오벨리아가 소환한 심연의 괴수 군단을 상대로 홀로 방어선을 구축하며 장렬히 전사. 죽는 순간까지도 검을 놓지 않아 적들조차 경외했다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('CC_A1.webp?v=0'),
    icon: '🛡️',
  },
  {
    id: 'DD',
    name: '엘리스 페르마타',
    title: '잔상의 학살자',
    gender: '여',
    faction: '기간토스 검술 아카데미',
    role: '4신5제',
    
    rank: '오러5성',
    quote: '지금 베인 게 아니야. 아까 베어둔 궤적에 네가 와서 닿았을 뿐이지.',
    mbti: 'INTP',
    enneagram: '593',
    weaponOrMagic: '시간 지연 검술 (오러 5성)',
    combatDescription: '참격에 오러의 잔상을 남긴다. 잔상에 닿으면 칼에 베인 것처럼 똑같이 베인다.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '아카데미의 후문을 막아서서 여명회 암살자들의 발을 묶었으나, 수적 열세를 이기지 못하고 자신의 오러 잔상 속에서 목숨을 잃는다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('DD_A1.webp?v=0'),
    icon: '🛡️',
  },
  {
    id: 'EE',
    name: '발렌티나 블랑쉬',
    title: '백 번의 송곳',
    gender: '여',
    faction: '기간토스 검술 아카데미',
    role: '4신5제',
    
    rank: '오러5성',
    quote: '단 한 번의 찌르기, 그 안에 백 번의 죽음을 담았습니다.',
    mbti: 'ESTJ',
    enneagram: '316',
    weaponOrMagic: '중첩 강화 펜싱 검술 (오러 5성)',
    combatDescription: '펜싱 검술을 구사. 오러를 중첩해 연속으로 찌를수록 위력이 곱절로 강해진다. ', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '적의 심장들을 꿰뚫으며 맹활약하나 혼전 중 맹독에 중독, 끝까지 학생들을 대피시키고 환영의 불빛 속에서 고요히 목숨을 거둔다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('EE_A1.webp?v=0'),
    icon: '🛡️',
  },
  {
    id: 'FF',
    name: '세르피아 우로보로스',
    title: '환상의 독사',
    gender: '여',
    faction: '기간토스 검술 아카데미',
    role: '4신5제',
    
    rank: '오러5성',
    quote: '어디로 휘어질까? 아, 벌써 물렸네. 불쌍하기도 하지.',
    mbti: 'ENTP',
    enneagram: '783',
    weaponOrMagic: '사복검 기교 검술 (오러 5성)',
    combatDescription: '연검을 이용한 예측 불가능한 궤적의 검술을 구사. 오러를 이용해 불가능한 궤적의 변경을 이뤄낸다.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '어둠 속에서 여명회의 정보원을 암살하는 척하며 실상은 아카데미의 기밀을 넘기던 핵심 첩자. 침공 당일 본색을 드러내어 방어선의 중요 지휘관들을 기습해 죽이고 여명회의 간부 위치에 선다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('FF_A1.webp?v=0'),
    icon: '🛡️🦇',
  },
  {
    id: 'GG',
    name: '레비아 발리스타',
    title: '인간 공성기',
    gender: '여',
    faction: '기간토스 검술 아카데미',
    role: '4신5제',
    
    rank: '오러5성',
    quote: '타겟 록온. 잿더미로 만들어줄게!',
    mbti: 'ESTP',
    enneagram: '873',
    weaponOrMagic: '원거리 투창 및 란나찰 무술 (오러 5성)',
    combatDescription: '원거리에서 오러를 실은 투창은 그 위력이 미사일과 맞먹는다고 한다. 란나찰을 기반으로 한 근접 전투도 무시할 수 없다.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '아카데미 방벽을 사수하는 공성전에서 여명회의 집중 포격을 단신으로 요격하다 한계에 달해 오러 회로가 불타오르며 산화한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('GG_A1.webp?v=0'),
    icon: '🛡️',
  },
  {
    id: 'MA',
    name: '가레트 아이언사이드',
    title: '부동의 성벽',
    gender: '남',
    faction: '기간토스 검술 아카데미',
    role: '4신5제',
    
    rank: '오러5성',
    quote: '압도적인 힘 앞에서는 어떠한 기교도 무의미하다.',
    mbti: 'ESTJ',
    enneagram: '836',
    weaponOrMagic: '기간토스 제식 검술의 극한 (오러 5성)',
    combatDescription: '아카데미의 기본 검술을 구사한다. 그러나 받아칠 수 없는 힘, 눈으로 쫓을 수 없는 속도, 무기 파괴와 급소만 노리는 정교함, 강력한 오러까지. 검술의 기본을 극한까지 다루는 최강자', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '아카데미 학생들이 대피할 시간을 벌기 위해 무수한 데스 나이트들을 상대로 전설적인 방어전을 펼친 끝에, 수십 개의 창에 찔린 채 선 채로 사망한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('MA_A1.webp?v=0'),
    icon: '🛡️',
  },
  {
    id: 'MB',
    name: '드라젠 볼코프',
    title: '균열의 흉벽',
    gender: '남',
    faction: '기간토스 검술 아카데미',
    role: '4신5제',
    
    rank: '오러5성',
    quote: '네가 때린 주먹이다. 그 뼈저린 무게를 스스로 견뎌봐라.',
    mbti: 'ISTP',
    enneagram: '953',
    weaponOrMagic: '충격 흡수 및 반탄 무술 (오러 5성)',
    combatDescription: '받은 충격을 흡수해 오러로 변환시켜 주먹에 실어 방출한다. 흡수량 보다 강한 공격을 할 수 없다면 대응 할 수 없다', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '오벨리아가 쏘아올린 초광역 파괴 마법을 아카데미 대신 흡수하다가 자신의 육체적 수용 한계를 초과하여 몸이 붕괴되며 죽음을 맞이한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('MB_A1.webp?v=0'),
    icon: '🛡️',
  },
  {
    id: 'HH',
    name: '카르밀라 이그니스',
    title: '파멸의 등불',
    gender: '여',
    faction: '세오른 마법 아카데미',
    role: '12권위자',
    school: '원소',
    rank: '12권위자, 원소9서클',
    quote: '다 타버려라. 내 시야에 잡동사니들이 남지 않도록.',
    mbti: 'ENTJ',
    enneagram: '385',
    weaponOrMagic: '원소학파 9서클 광역 화염 마법',
    combatDescription: '화염 마법의 권위자. 군단을 몰살시킬 파괴력을 가지고 있다', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '테일리 편에 서서 검은 여명회의 병력 대다수를 잿더미로 만들었지만, 오벨리아의 치밀한 함정에 빠져 마력이 묶인 채 처참히 참수당한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('HH_A1.webp?v=0'),
    icon: '📖',
  },
  {
    id: 'II',
    name: '실비아 윈터본',
    title: '영구동토의 마녀',
    gender: '여',
    faction: '세오른 마법 아카데미',
    role: '12권위자',
    school: '원소',
    rank: '12권위자, 원소9서클',
    quote: '얼어붙은 세계야말로... 가장 완벽한 평온이다.',
    mbti: 'INTJ',
    enneagram: '514',
    weaponOrMagic: '원소학파 9서클 광역 빙결 마법',
    combatDescription: '주변 온도를 절대 영도까지 낮춰 적을 얼리는 얼음 마법 특화. 방어벽 생성이 뛰어나다.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '아카데미 본관을 얼음 내성으로 덮어 방어했으나, 압도적인 사령의 원념과 심연의 불꽃에 휩싸여 만년빙과 함께 녹아내린다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('II_A1.webp?v=0'),
    icon: '📖',
  },
  {
    id: 'JJ',
    name: '엘리노어 블리츠',
    title: '뇌정의 심판관',
    gender: '여',
    faction: '세오른 마법 아카데미',
    role: '12권위자',
    school: '원소',
    rank: '12권위자, 원소9서클',
    quote: '낙뢰의 선율에 맞춰 춤춰볼까? 피날레는 잿더미다.',
    mbti: 'ENTJ',
    enneagram: '137',
    weaponOrMagic: '원소학파 9서클 낙뢰폭격 마법',
    combatDescription: '하늘에 뇌운을 띄워 대상을 잿더미로 만드는 고화력 번개 마법. 마력을 실로 짜내어 궤도 폭격을 날린다.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '여명회의 공중 부대를 막아내기 위해 대규모 낙뢰 진을 전개하다 마력 회로의 과부하로 심장이 타들어가 사망.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('JJ_A1.webp?v=0'),
    icon: '📖',
  },
  {
    id: 'KK',
    name: '리산드라 미라지',
    title: '오만한 몽마',
    gender: '여',
    faction: '세오른 마법 아카데미',
    role: '12권위자',
    school: '간섭',
    rank: '12권위자, 간섭8서클',
    quote: '쉬이... 달콤한 꿈속으로 이끌어줄게. 영원히 깨어날 수 없는 꿈으로.',
    mbti: 'INFJ',
    enneagram: '478',
    weaponOrMagic: '간섭학파 8서클 환상 마법',
    combatDescription: '감각을 완벽히 통제하고 속이며, 적끼리 죽이게 만드는 환술 특화. 직접 대인 타격능력은 낮은 편.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '마법으로 학생들을 숨겨 대피시켰으나, 오벨리아에게 세뇌당해 아군을 도륙하는 끔찍한 인형으로 전락한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('KK_A1.webp?v=0'),
    icon: '📖',
  },
  {
    id: 'MM',
    name: '아리아드네 보이드',
    title: '차원의 처형자',
    gender: '여',
    faction: '세오른 마법 아카데미',
    role: '12권위자',
    school: '간섭',
    rank: '12권위자, 간섭8서클',
    quote: '거리의 개념은 무의미합니다. 공간은 제 아래에 종속되어 있으니까요.',
    mbti: 'INTP',
    enneagram: '538',
    weaponOrMagic: '간섭학파 8서클 공간 마법',
    combatDescription: '공간 왜곡 및 절단 공격, 단거리 도약 마법을 자유자재로 구사하는 유격전 특화 마법사.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '적의 공간 봉쇄 결계를 부수기 위해 자신의 생명을 제물로 텔레포트 게이트를 열고 스스로 차원의 틈새로 소멸한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('MM_A1.webp?v=0'),
    icon: '📖',
  },
  {
    id: 'LL',
    name: '에테르니아 크로노스',
    title: '비틀린 주시자',
    gender: '여',
    faction: '세오른 마법 아카데미',
    role: '12권위자',
    school: '간섭',
    rank: '12권위자, 간섭8서클',
    quote: '시간은 누구에게나 공평하지만, 제게는 예외랍니다.',
    mbti: 'INTJ',
    enneagram: '513',
    weaponOrMagic: '간섭학파 8서클 시간 마법',
    combatDescription: '자신의 시간을 가속하거나, 일정 영역의 쾌속 전투를 정지시켜 적을 무방비로 만든다.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '치명적 공격에 휩쓸릴 뻔한 수백 명의 학생들의 시간을 과거로 돌려 살려내지만, 패러독스의 반동으로 존재가 찢겨 소멸한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('LL_A1.webp?v=0'),
    icon: '📖',
  },
  {
    id: 'NN',
    name: '모리건 그레이브',
    title: '침묵의 심연',
    gender: '여',
    faction: '세오른 마법 아카데미',
    role: '12권위자',
    school: '영역',
    rank: '12권위자, 영역8서클',
    quote: '조용히... 다들 무덤에서는 침묵을 지켜야지.',
    mbti: 'ISTJ',
    enneagram: '953',
    weaponOrMagic: '영역학파 8서클 압살/중력 마법',
    combatDescription: '지정한 영역 내의 중력을 수십 배로 늘리거나 생체 활동을 느리게 만드는 절대 영역 전개.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '초반 기습에서 도망칠 시간을 벌기 위해 거대한 속박의 영역을 혼자 버티다 온몸의 피가 마르고 돌기둥이 되어버린다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('NN_A1.webp?v=0'),
    icon: '📖',
  },
  {
    id: 'OO',
    name: '빅토리아 솔',
    title: '맹목의 태양',
    gender: '여',
    faction: '세오른 마법 아카데미',
    role: '12권위자',
    school: '영역',
    rank: '12권위자, 영역9서클',
    quote: '빛나라, 나의 이름 아래. 전장에 승리의 찬가를 울려라!',
    mbti: 'ENTJ',
    enneagram: '387',
    weaponOrMagic: '영역학파 9서클 마력/신체 증폭',
    combatDescription: '아군의 오러와 마력을 일시적으로 폭발시키고 한계를 망각하게 만드는 최고위 광역 버퍼.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '전선에서 학생 및 교관들에게 끝없는 마력을 주입하다가 육체의 한계치를 넘겨 마력 회로가 폭파, 잿더미로 산화한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('OO_A1.webp?v=0'),
    icon: '📖',
  },
  {
    id: 'PP',
    name: '발레리아 이지스',
    title: '절대 방패',
    gender: '여',
    faction: '세오른 마법 아카데미',
    role: '12권위자',
    school: '영역',
    rank: '12권위자, 영역8서클',
    quote: '저의 절대 방벽은 미동조차 하지 않습니다.',
    mbti: 'ISTJ',
    enneagram: '163',
    weaponOrMagic: '영역학파 8서클 다중 방벽 전개',
    combatDescription: '침투 불가능한 다중 방위 결계를 세우며, 결계 파편으로 광역 반격 타격을 가하는 철옹성.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '마법 아카데미를 덮친 오벨리아의 운석 추락 마법을 막기 위해 모든 결계를 겹쳐 전개하다 요새와 함께 파쇄된다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('PP_A1.webp?v=0'),
    icon: '📖',
  },
  {
    id: 'QQ',
    name: '티타니아 오베론',
    title: '정령의 축복을 받은 자',
    gender: '여',
    faction: '세오른 마법 아카데미',
    role: '12권위자',
    school: '정령',
    rank: '12권위자, 정령8서클',
    quote: '어디 감히 무엄하게! 거신의 주먹으로 짓이겨주마!',
    mbti: 'ESTJ',
    enneagram: '835',
    weaponOrMagic: '정령학파 8서클 초중량 소환',
    combatDescription: '대지 정령왕 수준의 거신을 강림시켜 지형 자체를 변형하고 물리적 압살을 구사한다.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '결전 중 오벨리아가 부활시킨 테일리를 정령왕을 소환해 육탄전을 벌이지만 무너진 지각 아래 생매장되어 죽는다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('QQ_A1.webp?v=0'),
    icon: '📖',
  },
  {
    id: 'RR',
    name: '레이븐 블러드',
    title: '피의 광전사',
    gender: '여',
    faction: '세오른 마법 아카데미',
    role: '12권위자',
    school: '정령',
    rank: '12권위자, 정령8서클',
    quote: '나불댈 시간 있으면 덤벼. 내 야성이 널 찢고 싶어 안달이니까.',
    mbti: 'ESTP',
    enneagram: '873',
    weaponOrMagic: '정령학파 8서클 야수 동력 빙의',
    combatDescription: '마계 야수 정령을 자신에게 빙의시켜 신체 능력을 오러 마스터 수준으로 끌어올리는 야성적 육탄전 격투.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '아카데미 간 전쟁에서 전사한 것으로 위장하고 종적을 감추었으나, 사실 검은 여명회의 첩자로써 잠입해 있었다. 아리안토스 대공세 때 짐승의 사령수들을 이끄는 선봉장으로 나타나 아카데미를 피로 물들인다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('RR_A1.webp?v=0'),
    icon: '📖🦇',
  },
  {
    id: 'SS',
    name: '아리엘 그레이스',
    title: '치유의 천사',
    gender: '여',
    faction: '세오른 마법 아카데미',
    role: '12권위자',
    school: '정령',
    rank: '12권위자, 정령8서클',
    quote: '상처 입은 영혼들이여, 천사의 품에서 평안을 찾으시길...',
    mbti: 'INFP',
    enneagram: '296',
    weaponOrMagic: '정령학파 8서클 성역 가호결계',
    combatDescription: '고위 물/빛 정령을 통해 광범위한 치유 능력을 전개. 대(對)언데드 상대로는 최악의 폭격이 된다.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '부상자를 이끌고 최후 방어선에서 치유술을 전개하지만 오벨리아의 수족들에게 잡혀 끝없는 고문 끝에 타락한 데스 메이지로 부활한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('SS_A1.webp?v=0'),
    icon: '📖',
  },
  {
    id: 'TT',
    name: '오벨리아 (가명)',
    title: '재앙의 여제',
    gender: '여',
    faction: '검은 여명회',
    role: '조직원',
    
    rank: '간섭10서클',
    quote: '살아 숨 쉬는 모든 것들은 부질없지. 완전한 죽음만이 구원일지니.',
    mbti: 'INTJ',
    enneagram: '584',
    weaponOrMagic: '간섭학파 10서클 사령/죽음 마법 (흑막)',
    combatDescription: '생명체의 혼을 부수고 생명력을 강탈하는 패시브 결계와 무제한 언데드 양성을 기본으로 갖춘 절대자.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '엔딩의 평화로움을 박살내고 검은 여명회 군단을 이끌어 아리안토스를 유린한다. 모든 영웅과 교관을 학살한 진정한 절망의 상징이자 최후의 보스.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('TT_A1.webp?v=0'),
    icon: '🦇',
  },
  {
    id: 'UU',
    name: '빅터 (가명)',
    title: '마검의 기사',
    gender: '여',
    faction: '검은 여명회',
    role: '조직원',
    
    rank: '오러5성, 원소7서클',
    quote: '그들이 이단이라 내친 이 검이, 오늘 아리안토스를 피로 물들일 것이다!',
    mbti: 'ENTJ',
    enneagram: '137',
    weaponOrMagic: '원소 7서클 & 오러 5성 마검술',
    combatDescription: '검기 궤적 위에 극저온/초고온의 원소를 초압축하여 검이 부딪히는 순간 수십 미터 반경이 터져나가는 일격기.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '오러에 속성을 부여하는 방법을 제안했지만, 마법사로 몰려 기간토스에 제명당한다. 그 원한으로 검은여명회에 행동 대장이 되어 원로들에게 복수한다', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('UU_A1.webp?v=0'),
    icon: '🦇',
  },
  {
    id: 'WW',
    name: '한냐',
    title: '골목의 망령',
    gender: '여',
    faction: '길드',
    role: '길드원',
    
    rank: '마스터로그',
    quote: '아리안토스의 쥐새끼 하나도 내 눈을 피할 순 없지. 야옹?',
    mbti: 'ENTP',
    enneagram: '783',
    weaponOrMagic: '정보 은폐 & 암살 단검술 (마스터 로그)',
    combatDescription: '완벽한 기척 차단으로 트랩과 환약을 설치해 적을 유인하고 일격 급소 찌르기를 날리는 섀도우 워커.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '여명회의 기습 징후를 첫 번째로 간파해 길드를 피난시켰지만 정보 봉쇄를 꾀한 흑막 소속 자객들에게 둘러싸여 처참하게 육살당한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('WW_A1.webp?v=0'),
    icon: '🏟️',
  },
  {
    id: 'XX',
    name: '벨',
    title: '미궁의 구원자',
    gender: '여',
    faction: '길드',
    role: '길드원',
    
    rank: '접수원',
    quote: '모험가님, 오늘도 안전에 유의하여 귀환하시기를 바랍니다!',
    mbti: 'ESFJ',
    enneagram: '269',
    weaponOrMagic: '지원 응급 방어물자 투척술 (접수원)',
    combatDescription: '전투는 못하지만 미궁의 복잡한 시야 안에서 정확하게 회복 포션과 배리어 앰플을 던져 파티 생존율을 200% 끌어올림.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '아수라장 속에서 낙오된 학생들을 지키다 여명회가 쏜 광역 마력포의 사정거리에 휘말려 목숨을 바쳐 실드를 전개하고 산화한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('XX_A1.webp?v=0'),
    icon: '🏟️',
  },
  {
    id: 'YY',
    name: '몰리',
    title: '불굴의 야성',
    gender: '여',
    faction: '길드',
    role: '길드원',
    
    rank: '초급로그',
    quote: '수인들이 오감이 좋다고? 흥! 그까짓 꺼 내가 따라잡아주지!',
    mbti: 'ESFP',
    enneagram: '793',
    weaponOrMagic: '초고속 육탄 도약 무술 (초급 로그)',
    combatDescription: '어반 아크로바틱을 방불케 하는 순수한 동체시력과 반사신경만으로 기계/마력 함정을 넘나드는 회피의 스페셜리스트.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '위급 통신을 전달하기 위해 끊임없이 미궁과 아카데미를 가로지르다 데스 나이트 십여 명의 암기에 꿰뚫렸음에도 정신력으로 버텨 목적지에 도착하여 핏물 속에서 숨을 거둔다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('YY_A1.webp?v=0'),
    icon: '🏟️',
  },
  {
    id: 'ZZ',
    name: '마트로냐',
    title: '철의 저격수',
    gender: '여',
    faction: '길드',
    role: '길드원',
    
    rank: '베테랑로그',
    quote: '...위험 수당은 두 배로 받겠다. 불만 있나?',
    mbti: 'ISTJ',
    enneagram: '613',
    weaponOrMagic: '비수 투척 및 마력총 사격형 단검 (베테랑)',
    combatDescription: '거리에 맞춰 탄종 및 독 종류를 교체해 가며 아군의 빈사각을 커버하는 후열 화력 및 덫 통제술.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '길드의 비자금을 털어 화력을 지원하는 척했으나, 불발탄과 결함이 있는 마력 무기를 몰래 반입시켜 후열 화력을 붕괴시킨 길드 내 첩자. 혼란스러운 자폭 위장 속에서 유유히 빠져나가 흑막의 품으로 돌아간다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('ZZ_A1.webp?v=0'),
    icon: '🏟️🦇',
  },
  {
    id: 'VV',
    name: '사보이아 엘레나',
    title: '세오른의 장미',
    gender: '여',
    faction: '세오른 마법 아카데미',
    role: '학생',
    
    rank: '1학년, 1서클',
    quote: '강한 자가 약한 자를 짓밟는다. 그게 이 아카데미의 룰이잖아?',
    mbti: 'ESTP',
    enneagram: '378',
    weaponOrMagic: '원소학파 1서클 조명탄 화염',
    combatDescription: '상대를 깔볼 때만 겉보기 용으로 사용하는 기초적인 폭발형 불꽃 마법. 실전 경험 전무.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '전쟁 발발 후 제일 먼저 게이트로 도주하려 사람들을 짓밟았으나, 광역 낙뢰에 직격당해 그 자리에서 검은 재와 뼛가루로 변해 흩어진다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('VV_A1.webp?v=0'),
    icon: '📖',
  },
  {
    id: 'MC',
    name: '테일리',
    title: '기적을 쓰는 자',
    gender: '남',
    faction: '기간토스 검술 아카데미',
    role: '학생',
    
    rank: '1학년, 오러1성',
    quote: '결코 포기하지 않아! 언젠가 반드시 정점에 설 거니까.',
    mbti: 'ENFP',
    enneagram: '739',
    weaponOrMagic: '무명 검술 극의 (오러 6성에 다다름)',
    combatDescription: '볼품없는 훈련의 반복 속에서 스스로 생사와 사투를 겪어, 모든 교본을 거스르는 변칙적이고 압도적인 최후의 일격 필살.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '원작 내내 온갖 시련을 겪고 해피엔딩에 돌입하나, 얼마 지나지 않아 벌어진 여명회의 대학살로 소중한 이들을 전부 잃고 복수귀로 흑화하여 오벨리아에게 덤비지만 패배해 죽고만다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('MC_A1.webp?v=0'),
    icon: '🛡️',
  },
  {
    id: 'ZA',
    name: '린 시라누이',
    title: '빛나는 섬광',
    gender: '여',
    faction: '기간토스 검술 아카데미',
    role: '학생',
    
    rank: '오러1성(1학년)',
    quote: '...물러서. 베인다.',
    mbti: 'ISTJ',
    enneagram: '513',
    weaponOrMagic: '초광속 오러 발도술 (오러 2성 한계 도달)',
    combatDescription: '납도 후 폭발적인 하체 반동으로 일순간 수십 명의 적을 갈라버리는 단일 극화 발도. 연타가 불가능한 페널티 있음.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '피난로를 막은 언데드 부대를 뚫기 위해 자신의 수명과 오러를 모조리 태우는 연속 발도의 극의를 펼쳐 길을 열고 과다 출혈로 영면한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('ZA_A1.webp?v=0'),
    icon: '🛡️',
  },
  {
    id: 'ZB',
    name: '클레어 루미스',
    title: '철벽의 검사',
    gender: '여',
    faction: '기간토스 검술 아카데미',
    role: '학생',
    
    rank: '오러1성(1학년)',
    quote: '정정당당하게 승부하자! 반칙은 용서 안 해!',
    mbti: 'ESFJ',
    enneagram: '279',
    weaponOrMagic: '정통 기간틱 대방패술 (오러 1성)',
    combatDescription: '검은 내다 버린 채 타워실드와 무식한 오러 집중만으로 적의 창술을 굳건히 막아내는 최전선 고기방패.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '기습당한 테일리를 지키기 위해 사령군의 거대 사선에 뛰어들어 창을 온몸으로 받아내고, 미소를 지으며 방패째 꿰뚫려 죽는다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('ZB_A1.webp?v=0'),
    icon: '🛡️🦇',
  },
  {
    id: 'ZC',
    name: '자하라',
    title: '사막의 모래바람',
    gender: '여',
    faction: '기간토스 검술 아카데미',
    role: '학생',
    
    rank: '오러2성(3학년)',
    quote: '어딜 보는 거야? 난 이미 네 뒤에 있는데?',
    mbti: 'ESTP',
    enneagram: '738',
    weaponOrMagic: '쌍검술 기반 연수 암살 무용 (오러 2성)',
    combatDescription: '자신의 몸을 팽이처럼 회전시키거나 짐승처럼 등 뒤를 타넘어 단숨에 목과 연수를 따버리는 잔혹곡예.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '오벨리아를 암살하려 몸을 날리는 열혈 검사로 보였으나, 기실 아카데미의 지휘 통제실에 잠입해 주요 인사들의 목을 노린 그림자 첩자. 내부에서 진형을 교란시킨 뒤 오벨리아의 최측근 호위무사로 당당히 정체를 드러낸다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('ZC_A1.webp?v=0'),
    icon: '🛡️',
  },
  {
    id: 'ZD',
    name: '로잘린 베넷',
    title: '긍지의 펜서',
    gender: '여',
    faction: '기간토스 검술 아카데미',
    role: '학생',
    
    rank: '오러3성(4학년)',
    quote: '아름다움은 곧 정교함에서 비롯되는 법이죠.',
    mbti: 'ENFJ',
    enneagram: '316',
    weaponOrMagic: '최상급 귀족식 레이피어 찌르기 (오러 3성)',
    combatDescription: '오러를 실처럼 가늘고 단단하게 뽑아내 다이아몬드 장갑조차 구멍을 내버리는 가문 비전의 정밀 타격술.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '수많은 하급 기사들이 도망칠 때, 홀로 오러를 내뿜으며 검은 갑주의 사령관에게 맞서다 팔다리가 모조리 으스러지면서도 검을 놓지 않고 긍지롭게 결사한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('ZD_A1.webp?v=0'),
    icon: '🛡️🦇',
  },
  {
    id: 'ZE',
    name: '렌 포레스트',
    title: '야성의 이빨',
    gender: '여',
    faction: '기간토스 검술 아카데미',
    role: '학생',
    
    rank: '오러1성(1학년)',
    quote: '내 몸은 내가 지켜. 함부로 명령하지 마.',
    mbti: 'ISTP',
    enneagram: '683',
    weaponOrMagic: '무규칙 근접 쌍검 난타전 (오러 1성)',
    combatDescription: '본능이 이끄는 대로 땅을 구르고 모래를 뿌려대며 급소만 물어뜯는 이기심만 가득한 스트리트 검술.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '혼자만 살 수 있었던 기회를 제 발로 차버리고 언데드 군단에 둘러싸인 아이들의 길을 열어주기 위해 적진 한가운데 뛰어들어 이빨을 드러낸 채 난파당한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('ZE_A1.webp?v=0'),
    icon: '🛡️',
  },
  {
    id: 'ZF',
    name: '타샤',
    title: '파멸의 철퇴',
    gender: '여',
    faction: '기간토스 검술 아카데미',
    role: '학생',
    
    rank: '오러3성(졸업반)',
    quote: '내 몸은 내가 지켜. 함부로 명령하지 마.',
    mbti: 'ESTP',
    enneagram: '873',
    weaponOrMagic: '중력 오러 둔기 쇄골술 (오러 3성)',
    combatDescription: '둔중한 메이스에 바위 무너지는 하중의 오러를 실어 상대의 방어적 검술 째 육신을 곤죽으로 짓뭉개는 마초전투.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '성문 붕괴를 막아세우며 수백 구의 스켈레톤의 머리통을 깼으나 뒤가 비었다는 사실에 방심하여 골렘의 창에 심장이 뚫려 선 채로 생을 마감한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('ZF_A1.webp?v=0'),
    icon: '🛡️',
  },
  {
    id: 'ZG',
    name: '이브 더스트',
    title: '심연의 비수',
    gender: '여',
    faction: '기간토스 검술 아카데미',
    role: '학생',
    
    rank: '오러2성(2학년)',
    quote: '결국 살아남는 건 조용한 쪽이지.',
    mbti: 'INTJ',
    enneagram: '584',
    weaponOrMagic: '잠행 보행 극의 및 단검 일격 (오러 2성)',
    combatDescription: '존재를 극도로 숨기는 은폐술과 상대의 안구, 급소를 한 치 오차 없이 꿰뚫는 일격 이탈형 암흑술.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '적의 결계를 부수기 위해 결사대로 나섰다는 것은 거짓말이었고, 오히려 아카데미의 대결계핵 중심부에 마력 폭탄을 터뜨려 방어막을 완전히 철거해버린 최악의 첩자. 폭발 직전 그림자 속으로 매끄럽게 피신한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('ZG_A1.webp?v=0'),
    icon: '🛡️',
  },
  {
    id: 'MG',
    name: '핀 오코넬',
    title: '거친 파도',
    gender: '남',
    faction: '기간토스 검술 아카데미',
    role: '학생',
    
    rank: '학생, 오러2성(3학년)',
    quote: '아, 몰라! 일단 부딪혀 보면 알겠지!',
    mbti: 'ISFJ',
    enneagram: '692',
    weaponOrMagic: '무중력 대검 난도질 (오러 2성)',
    combatDescription: '큰 대검의 검로를 역이용해 궤도를 한순간 비틀고 올려치고 내려치는 물리법칙 무시 광태.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '학생들 사이에서 친근하고 호탕한 인물로 위장했으나, 실상은 오래전부터 아카데미의 동향을 파악하던 검은 여명회의 첩자 였다. 혼란한 전투 중 잔혹한 본성을 드러내며 등 뒤에서 교관들을 기습한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('MG_A1.webp?v=0'),
    icon: '🛡️🦇',
  },
  {
    id: 'MH',
    name: '카이토',
    title: '얼음의 카운터',
    gender: '남',
    faction: '기간토스 검술 아카데미',
    role: '학생',
    
    rank: '학생, 오러3성(4학년)',
    quote: '...궤적이 보인다.',
    mbti: 'ISTJ',
    enneagram: '135',
    weaponOrMagic: '정밀 예측 반격 검술 (오러 3성)',
    combatDescription: '수 읽기로 적의 근육량, 패턴마저 계산하여 모든 힘이 빠지는 최악의 순간 손목 안쪽을 베어버리는 지능 스텝.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '도주하는 일행의 후방을 방어하며 차분히 적 사령부대에 카운터 치기를 거듭하지만, 수만 군대 앞의 수적 강압을 못 버티고 한순간 난도질당해 육백 조각을 남긴다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('MH_A1.webp?v=0'),
    icon: '🛡️',
  },
  {
    id: 'MD',
    name: '알라릭 손',
    title: '불변의 원칙',
    gender: '남',
    faction: '기간토스 검술 아카데미',
    role: '교관',
    
    rank: '교관, 오러4성',
    quote: '힘,속도,오러,기술. 4가지 기본만 지키면 누구든 이길 수 있다.',
    mbti: 'ISTJ',
    enneagram: '135',
    weaponOrMagic: '아카데미 정통 제식 오의 검기 (오러 4성)',
    combatDescription: '교과서 검술이라 천대받으나 그걸 수십 년 연마하여 평범한 내려치기가 폭포를 가르는 압도적 위력을 완성시킴.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '무기력하게 쓰러지는 학생들 위로 대형 오러 차폐막을 맨손으로 펼쳐 대신 죽음의 세례를 받고 피눈물을 쏟으며 "원칙을 견지해라"란 포효와 함께 사망.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('MD_A1.webp?v=0'),
    icon: '🛡️',
  },
  {
    id: 'ME',
    name: '베인 실라스',
    title: '질풍의 칼날',
    gender: '남',
    faction: '기간토스 검술 아카데미',
    role: '교관',
    
    rank: '교관, 오러4성',
    quote: '편하게 해~. 결국 상대보다 먼저 찌르면 이기는 거야~',
    mbti: 'ESTP',
    enneagram: '378',
    weaponOrMagic: '속도 및 이동 강화 풍격 (오러 4성)',
    combatDescription: '눈도 깜빡 못하는 속도로 수백 미터 대열을 휘저으며 발목과 무기만 부수고 이탈하는 풍신.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '빠른 속도로 아카데미의 규율을 무시하며 편하게 행동하는 교관으로 보였으나, 기실 검은 여명회의 첩자였다. 방어선에서 고의적으로 진형을 무너뜨려 아군을 위험에 빠뜨리고 혼란을 가중시킨 뒤 어둠 속으로 유유히 사라진다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('ME_A1.webp?v=0'),
    icon: '🛡️🦇',
  },
  {
    id: 'MF',
    name: '케일런 스톤하트',
    title: '강철의 거탑',
    gender: '남',
    faction: '기간토스 검술 아카데미',
    role: '교관',
    
    rank: '교관, 오러4성',
    quote: '방어조차 못하게 강하게 내리찍으면 돼!',
    mbti: 'ISTP',
    enneagram: '859',
    weaponOrMagic: '중장형 바위 쪼개기 극대 오러 (오러 4성)',
    combatDescription: '대지에 뿌리를 박고 오로지 풀스윙으로만 거대 몬스터마저 두 동강 내버리는 무식한 하이 리스크-리턴파.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '동료들이 도망칠 통로가 되기 위해 심연 계곡 중심에 떨어진 타우로마시스 돌연변이에게 동귀어진형 일격을 날리고 절벽 바래로 영원히 추락한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('MF_A1.webp?v=0'),
    icon: '🛡️',
  },
  {
    id: 'ZK',
    name: '오로라 벨코나',
    title: '맑은 치유수',
    gender: '여',
    faction: '세오른 마법 아카데미',
    role: '학생',
    school: '정령',
    rank: '학생, 정령2서클(2학년)',
    quote: '아무도 다치치 않았으면 좋겠어.',
    mbti: 'ISFP',
    enneagram: '926',
    weaponOrMagic: '정령학파 2서클 치유/물 마법',
    combatDescription: '물의 정령의 힘으로 동료들의 마음을 다독이고 고통을 감쇄시켜 전쟁 스트레스를 차단하는 순혈 치유술.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '공포에 패닉 빠진 아이들을 감싸안고 치유하던 중 오벨리아의 죽음의 마창에 복부를 꿰뚫려 내장이 흘러내리면서도 웃으며 회복 마법을 자신 대신 아이들에게 써주고 사망한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('ZK_A1.webp?v=0'),
    icon: '📖',
  },
  {
    id: 'ZL',
    name: '루비아 플레임',
    title: '불타는 왕관',
    gender: '여',
    faction: '세오른 마법 아카데미',
    role: '학생',
    school: '원소',
    rank: '학생, 원소3서클(3학년)',
    quote: '이 정도는 고귀한 혈통으로서 당연한 의무랍니다.',
    mbti: 'ENTJ',
    enneagram: '385',
    weaponOrMagic: '원소학파 3서클 작열탄 포화',
    combatDescription: '극도로 오만하게 불덩이를 찍어누르는 귀족식 화염. 회피 기동을 고려하지 않고 마력을 긁어모아 때려붓는다.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '고귀한 귀족 혈통으로서의 자존심을 내세웠지만, 사실 그 권력을 이용해 검은 여명회와 결탁하고 마법 아카데미의 정보를 팔아넘기던 핵심 첩자였다. 아리안토스 공세 당시 결계를 안에서 박살내고 오벨리아에게 충성을 맹세한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('ZL_A1.webp?v=0'),
    icon: '📖🦇',
  },
  {
    id: 'ZM',
    name: '세리아 폰 아크',
    title: '탐구자',
    gender: '여',
    faction: '세오른 마법 아카데미',
    role: '학생',
    school: '간섭',
    rank: '학생, 간섭1서클(1학년)',
    quote: '저, 저기... 이 술식의 변수가 조금 이상한데요...',
    mbti: 'INTP',
    enneagram: '593',
    weaponOrMagic: '간섭학파 1서클 마력 분해/해석 마법',
    combatDescription: '전투 능력 제로. 복잡한 술식 전방위 분석으로 즉석 약점을 찍어 상대의 거대 쉴드를 1서클로도 박살 내는 전장 두뇌.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '오벨리아 군단 수만의 마력 네트워크의 중추를 찾아 해킹에 성공, 저지선을 일시 붕괴시키나 그 압도적인 정보량 반동에 뇌혈관이 모조리 파열되어 사망.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('ZM_A1.webp?v=0'),
    icon: '📖',
  },
  {
    id: 'ZN',
    name: '릴리스 섀도우',
    title: '심연의 끝자락',
    gender: '여',
    faction: '세오른 마법 아카데미',
    role: '학생',
    school: '간섭',
    rank: '학생, 간섭4서클(졸업반)',
    quote: '크큭... 이 지식의 끝에는 과연 뭐가 있을까...',
    mbti: 'INTJ',
    enneagram: '548',
    weaponOrMagic: '간섭학파 4서클 공포 저주 및 시각 은폐',
    combatDescription: '안구를 파고드는 칠흑의 장막 전개. 내면 깊은 공포를 실체화시켜 대상의 뇌를 녹이는 금단의 저주.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '적 간부의 심해 마력에 호기심을 품고 마력의 웜홀에 동기화 접속했다가 육체와 영혼 전체가 곰팡이처럼 오염되어 하급 구울로 전락하는 끔찍한 말로를 맞이한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('ZN_A1.webp?v=0'),
    icon: '📖',
  },
  {
    id: 'ZO',
    name: '크리스티나 폰 에런',
    title: '오만한 마법사',
    gender: '여',
    faction: '세오른 마법 아카데미',
    role: '학생',
    school: '영역',
    rank: '학생, 영역3서클(4학년)',
    quote: '천박한 자들은 당장 내 눈앞에서 꺼지세요.',
    mbti: 'ESTJ',
    enneagram: '836',
    weaponOrMagic: '영역학파 3서클 허장성세 위압광채',
    combatDescription: '방어력이나 공격력 하나 없이 눈앞을 번쩍거리는 섬광과 고음역대 소음으로 약자만을 쫒아내는 빛의 공갈포.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '가장 먼저 혼자 살겠다며 여명회 병사에게 가문의 뇌물을 내밀었다가 말 끝나기가 무섭게 두 구의 헬하운드에게 산채로 육편으로 찢겨 사망.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('ZO_A1.webp?v=0'),
    icon: '📖',
  },
  {
    id: 'ZP',
    name: '클레오 우드',
    title: '지옥불 성냥',
    gender: '여',
    faction: '세오른 마법 아카데미',
    role: '학생',
    school: '정령',
    rank: '학생, 정령2서클(2학년)',
    quote: '우와! 이거 터트리면 어떻게 될까? 해봐도 돼?',
    mbti: 'ENFP',
    enneagram: '749',
    weaponOrMagic: '정령학파 2서클 시한 자폭정령 소환',
    combatDescription: '피아식별 따윈 하지 않은 채 폭발 직전의 위태롭고 작은 불의 정령을 수십마리 뿌려 공간 전체를 연쇄 붕괴시킴.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '학원을 점령하려는 마수 무리들을 상대로 "너흰 다 죽었어!"라며 스스로의 심장부를 정령 촉매로 바쳐 초대형 빅 뱅을 일으킨 뒤 가루조차 남기지 않았다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('ZP_A1.webp?v=0'),
    icon: '📖',
  },
  {
    id: 'ZQ',
    name: '페넬로페 라일락',
    title: '흑염술사',
    gender: '여',
    faction: '세오른 마법 아카데미',
    role: '학생',
    school: '원소',
    rank: '학생, 원소3서클(3학년)',
    quote: '나만 봐달란 말이야! 나 말고 다른 데 보지 마!',
    mbti: 'ESFP',
    enneagram: '478',
    weaponOrMagic: '원소학파 3서클 흑염',
    combatDescription: '화염보다 더 강력한 위력의 비전 원소 마법 흑염을 구사.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '존경하던 교수와 선배들이 반갈죽당하는 모습을 목도하고 이성을 잃고 오벨리아 본진에 날아들었다가 파동 마법 한방울에 모조리 분해되어 지워진다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('ZQ_A1.webp?v=0'),
    icon: '📖',
  },
  {
    id: 'MJ',
    name: '아드리안 폰 크로스',
    title: '구부러진 잣대',
    gender: '남',
    faction: '세오른 마법 아카데미',
    role: '학생',
    school: '정령',
    rank: '학생, 정령2서클(2학년)',
    quote: '마법은 고귀한 것다. 기품을 지켜.',
    mbti: 'ISTJ',
    enneagram: '136',
    weaponOrMagic: '정령학파 2서클 조건부 반사 투사체',
    combatDescription: '정령에게 특정한 룰(마법 먼저 쓸 것, 검격 시 뒤로 물러날 것)을 각인해 어길 시 자동추적 폭발탄을 날리는 조작.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '원칙과 규율 따위는 종잇장만도 못한 생지옥 전쟁판에서 홀로 결투의 법도를 부르짖다가 오벨리아의 압도적 공포에 못 이겨 검은 여명회로 들어간다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('MJ_A1.webp?v=0'),
    icon: '📖',
  },
  {
    id: 'ZH',
    name: '이자벨라 바인',
    title: '자애로운 거목',
    gender: '여',
    faction: '세오른 마법 아카데미',
    role: '교수',
    school: '원소',
    rank: '교수, 원소7서클',
    quote: '궁금한 것 있으면 교수님한테 언제든 물어봐~',
    mbti: 'ENFJ',
    enneagram: '279',
    weaponOrMagic: '원소학파 7서클 생명 조작/포자 속박',
    combatDescription: '독성 안개와 질긴 가시덩굴을 폭우처럼 성장시켜 적 대열을 말 그대로 집어삼키는 광역 메즈 특화 식물 전투.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '마법 아카데미가 완전히 무너져 내리는 순간 스스로의 온 생명력을 거목으로 개화, 무너지는 천장을 지동구 삼아 막아내고 자신은 덩굴속 영구동물로 말라 죽는다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('ZH_A1.webp?v=0'),
    icon: '📖',
  },
  {
    id: 'ZI',
    name: '카멜리아 블랑',
    title: '시간의 균열',
    gender: '여',
    faction: '세오른 마법 아카데미',
    role: '교수',
    school: '간섭',
    rank: '교수, 간섭6서클',
    quote: '..교칙 위반은 용서 안합니다.',
    mbti: 'ESTJ',
    enneagram: '136',
    weaponOrMagic: '간섭학파 6서클 극소 가속/둔화 강탈',
    combatDescription: '자신의 일정 반경의 흐름만을 통제하여, 날아오는 무구와 화살촉의 방향이나 속도를 비틀거나 바닥에 패대기쳐버림.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '깐깐하고 원칙주의적인 교수로 위장하여 방어 진형의 취약점을 치밀하게 수집하던 엘리트 첩자. 전쟁이 발발하자마자 자신이 통제하던 시간 마법으로 아군의 시간을 정지시켜 버린 뒤, 첩자로서의 임무를 완수하고 여명회의 진영에 합류한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('ZI_A1.webp?v=0'),
    icon: '📖🦇',
  },
  {
    id: 'ZJ',
    name: '타이라 로스',
    title: '혼돈의 지휘관',
    gender: '여',
    faction: '세오른 마법 아카데미',
    role: '교수',
    school: '영역',
    rank: '교수, 영역7서클',
    quote: '책상머리에서 배운 마법이 실전에서 통할 거 같아?!',
    mbti: 'ENTP',
    enneagram: '783',
    weaponOrMagic: '영역학파 7서클 피의 전염/투쟁 강화',
    combatDescription: '결계의 파장 안에 있으면 통각이 삭제되고 두려움이 증발하여 한 팔이 잘려도 웃으며 다가가는 광전사로 흑화시킴.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '수세에 몰린 최전선의 방전된 동료들에게 자신의 뼈와 살을 깎는 극대의 광기를 주입하고는 피를 뿜으며 최후의 만세 돌격을 지휘, 온 몸의 회로가 폭파되어 산화한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('ZJ_A1.webp?v=0'),
    icon: '📖',
  },
  {
    id: 'MI',
    name: '루시안 폰 테르미나',
    title: '압살',
    gender: '남',
    faction: '세오른 마법 아카데미',
    role: '교수',
    school: '영역',
    rank: '교수, 영역7서클',
    quote: '내 영역에서는 날 아무도 못 이길걸?',
    mbti: 'INTJ',
    enneagram: '538',
    weaponOrMagic: '영역학파 7서클 절대 통제 큐브 공간',
    combatDescription: '지명한 육면체 공간 안에 온갖 중력과 원소 압박, 공기 흡수를 몰아넣어 대상의 눈 핏줄까지 터트려버리는 무자비한 구속.', // TODO: 여기에 전투 방식 및 스킬 상세 설명을 적어주세요.
    futureDescription: '결계가 누구도 깰 수 없다 오만하게 확신하고 적의 심연급 간부를 가두었으나, 내부의 흑마력 파장 한 방에 결계가 유리가루처럼 박살나고 그 데미지 패널티로 눈알과 이빨이 터지며 압살사한다.', // TODO: 여기에 원작의 미래 및 행적을 적어주세요.
    imageUrl: getAssetUrl('MI_A1.webp?v=0'),
    icon: '📖',
  },

  { id: 'unk1', name: '???', title: '알려지지 않은 간부', gender: '미상', faction: '검은 여명회', role: '미상', rank: '측정 불가', quote: '', mbti: '???', enneagram: '???', weaponOrMagic: '???', combatDescription: '미지의 검은 기운과 부정한 사령 마법을 융합시켜 모든 전장의 생명력을 앗아가는 악의 무용.', futureDescription: '테일리 일행의 앞길을 번번이 가로막는 끝판왕의 잔재역할을 하나, 각성한 주인공의 압도적 검격에 형체도 없이 증발한다.', imageUrl: getAssetUrl('UNK1_A1.webp?v=0'), icon: '🦇' },
  { id: 'unk2', name: '???', title: '알려지지 않은 첩자', gender: '미상', faction: '검은 여명회', role: '미상', rank: '측정 불가', quote: '', mbti: '???', enneagram: '???', weaponOrMagic: '???', combatDescription: '미지의 검은 기운과 부정한 사령 마법을 융합시켜 모든 전장의 생명력을 앗아가는 악의 무용.', futureDescription: '테일리 일행의 앞길을 번번이 가로막는 끝판왕의 잔재역할을 하나, 각성한 주인공의 압도적 검격에 형체도 없이 증발한다.', imageUrl: getAssetUrl('UNK2_A1.webp?v=0'), icon: '🦇' },
  { id: 'unk3', name: '???', title: '침묵의 수행자', gender: '미상', faction: '검은 여명회', role: '미상', rank: '측정 불가', quote: '', mbti: '???', enneagram: '???', weaponOrMagic: '???', combatDescription: '미지의 검은 기운과 부정한 사령 마법을 융합시켜 모든 전장의 생명력을 앗아가는 악의 무용.', futureDescription: '테일리 일행의 앞길을 번번이 가로막는 끝판왕의 잔재역할을 하나, 각성한 주인공의 압도적 검격에 형체도 없이 증발한다.', imageUrl: getAssetUrl('UNK3_A1.webp?v=0'), icon: '🦇' },
  { id: 'unk4', name: '???', title: '미궁의 배신자', gender: '미상', faction: '검은 여명회', role: '미상', rank: '측정 불가', quote: '', mbti: '???', enneagram: '???', weaponOrMagic: '???', combatDescription: '미지의 검은 기운과 부정한 사령 마법을 융합시켜 모든 전장의 생명력을 앗아가는 악의 무용.', futureDescription: '테일리 일행의 앞길을 번번이 가로막는 끝판왕의 잔재역할을 하나, 각성한 주인공의 압도적 검격에 형체도 없이 증발한다.', imageUrl: getAssetUrl('UNK4_A1.webp?v=0'), icon: '🦇' },
  { id: 'unk5', name: '???', title: '그림자 관찰자', gender: '미상', faction: '검은 여명회', role: '미상', rank: '측정 불가', quote: '', mbti: '???', enneagram: '???', weaponOrMagic: '???', combatDescription: '미지의 검은 기운과 부정한 사령 마법을 융합시켜 모든 전장의 생명력을 앗아가는 악의 무용.', futureDescription: '테일리 일행의 앞길을 번번이 가로막는 끝판왕의 잔재역할을 하나, 각성한 주인공의 압도적 검격에 형체도 없이 증발한다.', imageUrl: getAssetUrl('UNK5_A1.webp?v=0'), icon: '🦇' }

];
