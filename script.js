const images = {
  dotonbori:
    "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/4/47/Dotonbori%2C_Osaka%2C_at_night%2C_November_2016.jpg/1280px-Dotonbori%2C_Osaka%2C_at_night%2C_November_2016.jpg&w=1280",
  shinsekai:
    "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/9/95/Shinsekai_and_Tsutenkaku_at_night_2019-04-12.jpg/1280px-Shinsekai_and_Tsutenkaku_at_night_2019-04-12.jpg&w=1280",
  kuromon:
    "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/9/9b/JP-osaka-arkade.jpg/1280px-JP-osaka-arkade.jpg&w=1280",
  nara:
    "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/2/29/Deer_at_nara_park_1.jpg/1280px-Deer_at_nara_park_1.jpg&w=1280",
  tsuruhashi:
    "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Osaka_Ikuno_Korea_Town_001.jpg/1280px-Osaka_Ikuno_Korea_Town_001.jpg&w=1280",
  usj:
    "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Universal_Studios_Japan_entrance.jpg/1280px-Universal_Studios_Japan_entrance.jpg&w=1280",
  umeda:
    "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/7/77/Osaka_Umeda_Sky_Building_Panoramablick_05.jpg/1280px-Osaka_Umeda_Sky_Building_Panoramablick_05.jpg&w=1280",
  pokemon:
    "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Daimaru_Shinsaibashi_main_building_2019.jpg/1280px-Daimaru_Shinsaibashi_main_building_2019.jpg&w=1280",
};

const mapSearch = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const mapDirections = (origin, destination) =>
  `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    origin
  )}&destination=${encodeURIComponent(destination)}&travelmode=transit`;

const nav = [
  ["行程", "index.html#planner"],
  ["住宿", "index.html#stay"],
  ["行李", "checklist.html"],
  ["日文", "japanese.html"],
  ["伴手禮", "souvenirs.html"],
];

const hotels = [
  {
    title: "第一晚：難波住宿",
    dates: "11/28",
    address: "2 Chome-3-9 Namba, Chuo Ward, Osaka, 542-0076日本",
    role: "抵達日先住核心區，放完行李就能走道頓堀、法善寺、裏難波，不需要再研究轉車。",
    stations: ["難波", "大阪難波", "近鐵日本橋"],
    links: [
      ["附近便利商店", "convenience store near 2 Chome-3-9 Namba Osaka"],
      ["24 小時店家", "24 hours store near Namba Osaka 2 Chome-3-9"],
      ["藥妝補貨", "drugstore near Namba Osaka 2 Chome-3-9"],
      ["車站置物櫃", "coin locker Namba Station Osaka"],
    ],
  },
  {
    title: "後三晚：Apartment Hotel 11 Shinimamiya 3",
    dates: "11/29-12/02",
    address: "大阪府大阪市西成区花園北1丁目1番3号",
    role: "房間大、禁菸、私人衛浴、洗衣機、廚房、冰箱、微波爐，適合把奈良、USJ、teamLab 和回機場都串起來。",
    stations: ["新今宮", "動物園前", "花園町", "大國町"],
    links: [
      ["附近便利商店", "convenience store near 大阪市西成区花園北1丁目1番3号"],
      ["24 小時超市", "24 hour supermarket near Shin-Imamiya Osaka"],
      ["藥妝補貨", "drugstore near Shin-Imamiya Osaka"],
      ["宵夜小店", "late night food near Shin-Imamiya Osaka"],
    ],
  },
];

const activities = [
  {
    id: "d1-arrive-namba",
    day: 0,
    type: "main",
    time: "13:10-16:30",
    title: "KIX T2 → 南海難波 → 住宿放行李",
    area: "關西機場 / 難波",
    image: images.dotonbori,
    start: "Kansai Airport Terminal 2",
    end: "2 Chome-3-9 Namba Osaka",
    mapQuery: "2 Chome-3-9 Namba Osaka",
    duration: "抓 3 小時含入境、買票、進市區和放行李。",
    summary: "第一天不要跨區。Peach 到 KIX T2 後，先跟著接駁到機場站，再用南海進難波。",
    transit: "KIX T2 接駁到關西機場站，搭南海到難波；到站後用 Google Maps 步行到住宿。",
    steps: [
      "下飛機後先處理入境、領行李、買水或簡單補給。",
      "從 T2 跟著標示搭接駁車到 Aeroplaza / 關西機場站。",
      "搭南海往難波，抵達後先放行李，不要拖著行李逛市場。",
    ],
    foods: [
      food("南海難波站飯糰 / 便當", "Nankai Namba Station onigiri bento", "先止餓，不把第一餐押在排隊名店。"),
      food("高島屋地下街甜點", "Takashimaya Osaka basement food", "抵達日的小甜點或伴手禮觀察點。"),
      food("難波站咖啡", "coffee near Namba Station Osaka", "等入住或整理交通卡時用。"),
    ],
    tips: ["如果出關超過 15:00，直接把下午散步刪掉，晚餐再開始。"],
  },
  {
    id: "d1-arrive-slow",
    day: 0,
    type: "backup",
    time: "13:10-17:30",
    title: "備案：入境慢就直奔住宿",
    area: "難波",
    image: images.dotonbori,
    start: "Kansai Airport Terminal 2",
    end: "2 Chome-3-9 Namba Osaka",
    mapQuery: "2 Chome-3-9 Namba Osaka",
    duration: "只保留進城、放行李、休息。",
    summary: "如果排隊、行李或交通卡卡住，就不要再塞景點。",
    transit: "同樣走 KIX T2 → 關西機場站 → 南海難波。",
    steps: ["先到住宿，把手機、交通卡、現金整理好。", "晚餐再從難波步行圈開始。"],
    foods: [
      food("便利商店熱飲", "convenience store near Namba Osaka", "補水補糖，抵達日很實際。"),
      food("Namba Walk", "Namba Walk restaurants", "天氣差或很累時直接地下街處理。"),
    ],
    tips: ["這張備案就是拿來砍行程的，不需要有罪惡感。"],
  },
  {
    id: "d1-namba-walk",
    day: 0,
    type: "main",
    time: "16:45-18:00",
    title: "難波八阪神社 / 道具屋筋短散步",
    area: "難波",
    image: images.kuromon,
    start: "2 Chome-3-9 Namba Osaka",
    end: "Namba Yasaka Shrine Osaka",
    mapQuery: "Namba Yasaka Shrine Osaka",
    duration: "60-75 分鐘，拍照和散步就好。",
    summary: "第一晚只補一個近距離點。八阪神社拍照，道具屋筋看廚具雜貨，兩個都在難波步行圈。",
    transit: "從住宿用 Google Maps 步行；不需要搭車。",
    steps: ["放完行李後看體力，先走八阪神社或道具屋筋。", "不要買太重的東西，第一天先熟悉難波方向。"],
    foods: [
      food("一芳亭 本店", "一芳亭 本店 難波", "老派燒賣中華定食，像真的在難波吃飯。"),
      food("道具屋筋周邊咖啡", "Sennichimae Doguyasuji coffee", "逛街中間休息用。"),
    ],
    tips: ["如果天色太暗或下雨，這張卡可以直接跳過。"],
  },
  {
    id: "d1-kuromon-lite",
    day: 0,
    type: "backup",
    time: "16:45-18:00",
    title: "備案：黑門市場只看不吃飽",
    area: "日本橋 / 黑門",
    image: images.kuromon,
    start: "2 Chome-3-9 Namba Osaka",
    end: "Kuromon Market Osaka",
    mapQuery: "Kuromon Market Osaka",
    duration: "45-60 分鐘，只當偵查。",
    summary: "黑門偏觀光，但第一晚路過看一圈可以。不要把晚餐預算全壓在這裡。",
    transit: "從難波或日本橋步行進市場。",
    steps: ["先看價格和開店狀況。", "想吃就買小份，晚餐仍留給裏難波。"],
    foods: [
      food("黒門 三平", "黒門 三平 大阪", "想坐下吃海鮮時的選項。"),
      food("まぐろや黒銀", "まぐろや黒銀 黒門市場本店", "小份鮪魚，路過吃即可。"),
    ],
    tips: ["市場觀光價明顯，少量吃會比較開心。"],
  },
  {
    id: "d1-uranamba-dinner",
    day: 0,
    type: "main",
    time: "18:30-21:30",
    title: "道頓堀、法善寺、裏難波晚餐",
    area: "難波 / 裏難波",
    image: images.dotonbori,
    start: "Namba Yasaka Shrine Osaka",
    end: "Hozenji Yokocho Osaka",
    mapQuery: "Hozenji Yokocho Osaka",
    duration: "2-3 小時，吃飯加散步。",
    summary: "主街拍照，真正吃飯往法善寺或裏難波鑽。這晚不用追連鎖，排太長就換隔壁。",
    transit: "難波周邊步行。吃完用 Google Maps 走回住宿。",
    steps: ["先到道頓堀拍招牌和河岸。", "晚餐往法善寺、千日前、裏難波找小店。", "吃完直接走回住宿。"],
    foods: [
      food("福太郎 本店", "福太郎 本店 大阪", "御好燒與蔥燒，適合第一晚大阪粉物。"),
      food("道頓堀 今井 本店", "道頓堀 今井 本店", "想吃溫柔一點就選大阪烏龍麵。"),
      food("會津屋 なんば店", "会津屋 なんば店", "章魚燒分食，不當整餐。"),
      food("裏難波居酒屋", "裏なんば 居酒屋", "現場看人潮和菜單挑一間。"),
    ],
    tips: ["熱門店排太長就換，第一晚目標是順，不是打卡。"],
  },
  {
    id: "d1-indoor-dinner",
    day: 0,
    type: "backup",
    time: "18:30-21:00",
    title: "備案：百貨地下街 + 早點睡",
    area: "難波地下街",
    image: images.dotonbori,
    start: "2 Chome-3-9 Namba Osaka",
    end: "Takashimaya Osaka",
    mapQuery: "Takashimaya Osaka restaurants",
    duration: "90 分鐘內結束。",
    summary: "飛機日太累或下雨，就進高島屋、Namba Walk、Namba Parks。",
    transit: "難波地下街和商場步行。",
    steps: ["直接找商場餐廳或地下熟食。", "吃完買水和早餐，早點睡。"],
    foods: [
      food("高島屋大阪店地下食品", "Takashimaya Osaka depachika", "熟食、甜點和早餐都能一次補。"),
      food("Namba Parks 餐廳", "Namba Parks restaurants", "室內坐下來吃比較舒服。"),
    ],
    tips: ["隔天要換住宿又去奈良，早睡是合理選擇。"],
  },
  {
    id: "d2-luggage-shinimamiya",
    day: 1,
    type: "main",
    time: "08:45-10:15",
    title: "難波退房 → 新今宮放行李",
    area: "難波 / 新今宮",
    image: images.shinsekai,
    start: "2 Chome-3-9 Namba Osaka",
    end: "大阪市西成区花園北1丁目1番3号",
    mapQuery: "大阪市西成区花園北1丁目1番3号",
    duration: "90 分鐘含退房、移動和寄放處理。",
    summary: "先把後三晚基地處理好。公寓若不能寄放，就用新今宮或難波置物櫃。",
    transit: "難波可搭南海到新今宮，或 Metro 到動物園前 / 大國町後步行。",
    steps: ["退房前把奈良日小包整理好。", "拖行李先到新今宮住宿或附近置物櫃。", "確認晚上回來的最近出口。"],
    foods: [
      food("難波站早餐", "Namba Station breakfast", "簡單吃，別讓早餐拖到奈良時間。"),
      food("新今宮便利商店", "convenience store near Shin-Imamiya Station", "買水、暖飲、小點心。"),
    ],
    tips: ["行李處理不順時，奈良可以晚一點出發，不要拖行李進公園。"],
  },
  {
    id: "d2-locker-backup",
    day: 1,
    type: "backup",
    time: "08:45-10:15",
    title: "備案：行李先鎖難波車站",
    area: "難波",
    image: images.dotonbori,
    start: "2 Chome-3-9 Namba Osaka",
    end: "Namba Station coin locker",
    mapQuery: "Namba Station coin locker",
    duration: "45-60 分鐘。",
    summary: "如果公寓太晚才能進房，行李先留在難波，奈良回來再取。",
    transit: "住宿步行到難波站置物櫃，接著從大阪難波搭近鐵去奈良。",
    steps: ["找大站置物櫃，比拖去公寓再折返更省事。", "拍下置物櫃位置和號碼。"],
    foods: [
      food("Namba Walk 早餐", "Namba Walk breakfast", "地下街早餐好找。"),
      food("咖啡外帶", "coffee near Osaka Namba Station", "近鐵前補咖啡。"),
    ],
    tips: ["這張備案適合入住規則不確定時使用。"],
  },
  {
    id: "d2-nara-park",
    day: 1,
    type: "main",
    time: "10:45-16:00",
    title: "近鐵奈良 → 奈良公園 → 東大寺",
    area: "奈良",
    image: images.nara,
    start: "Osaka Namba Station",
    end: "Todaiji Temple Nara",
    mapQuery: "Todaiji Temple Nara",
    duration: "4-5 小時，含午餐和餵鹿。",
    summary: "從大阪難波或近鐵日本橋搭近鐵到近鐵奈良。出站後先走奈良公園，沿路餵鹿，再走到東大寺。",
    transit: "新今宮先到難波 / 日本橋，轉近鐵奈良線到近鐵奈良；出站後用步行串景點。",
    steps: [
      "抵達近鐵奈良後，先看 Google Maps 往奈良公園方向。",
      "鹿餅買了就快點餵，不要拿在手上逗鹿。",
      "體力夠就走到東大寺；不夠就只做公園和商店街。",
      "回大阪時可從近鐵奈良直接搭到鶴橋。"
    ],
    foods: [
      food("志津香 公園店", "志津香 公園店 奈良", "釜飯，冷天很適合，排太久就換。"),
      food("柿の葉ずし 平宗 奈良店", "柿の葉ずし 平宗 奈良店", "奈良特色，適合買小份。"),
      food("中谷堂", "中谷堂 奈良", "草餅點心，觀光但有地方性。"),
      food("春日荷茶屋", "春日荷茶屋 奈良", "走到春日大社方向時可用。"),
    ],
    tips: ["奈良是步行日，鞋子比穿搭重要。"],
  },
  {
    id: "d2-nara-short",
    day: 1,
    type: "backup",
    time: "11:45-15:30",
    title: "備案：晚起奈良縮短版",
    area: "奈良",
    image: images.nara,
    start: "Osaka Namba Station",
    end: "Nara Park",
    mapQuery: "Nara Park",
    duration: "3-4 小時，只保留核心。",
    summary: "晚起就不要硬塞春日大社。近鐵奈良、公園、東向商店街就很完整。",
    transit: "近鐵奈良來回，出站後步行。",
    steps: ["先餵鹿和公園散步。", "午餐放東向商店街或外帶柿葉壽司。", "傍晚直接回大阪吃晚餐。"],
    foods: [
      food("東向商店街午餐", "Higashimuki Shopping Street lunch Nara", "現場看排隊和菜單。"),
      food("柿葉壽司外帶", "kakinoha sushi near Kintetsu Nara", "回大阪前補一盒。"),
    ],
    tips: ["縮短版的重點是不要趕，奈良慢慢走比較舒服。"],
  },
  {
    id: "d2-tsuruhashi-spa",
    day: 1,
    type: "main",
    time: "17:00-22:00",
    title: "鶴橋市場晚餐 → SpaWorld 泡湯",
    area: "鶴橋 / 新世界",
    image: images.tsuruhashi,
    start: "Kintetsu Nara Station",
    end: "SpaWorld Osaka",
    mapQuery: "SpaWorld Osaka",
    duration: "晚餐 90 分鐘，泡湯 90-120 分鐘。",
    summary: "奈良回大阪時直接在鶴橋下車。站邊商店街、燒肉、泡菜小菜都很有在地感，最後回新今宮泡湯。",
    transit: "近鐵奈良到鶴橋；晚餐後搭 JR / Metro 回新今宮或動物園前。",
    steps: ["近鐵奈良回程不要直接回難波，先在鶴橋下車。", "吃完用 JR 環狀線或 Metro 回新今宮。", "還有體力再去 SpaWorld。"],
    foods: [
      food("焼肉 空 鶴橋本店", "焼肉 空 鶴橋本店", "鶴橋代表型燒肉，衣服會有味道。"),
      food("豊田商店 本店", "豊田商店 本店 鶴橋", "泡菜和小菜，適合買回公寓。"),
      food("鶴橋まぐろ食堂", "鶴橋まぐろ食堂", "不吃燒肉時的市場感海鮮。"),
      food("SpaWorld", "SpaWorld Osaka", "泡完買牛奶或飲料收尾。"),
    ],
    tips: ["住宿有洗衣機，燒肉味不用怕。"],
  },
  {
    id: "d2-shinsekai-dinner",
    day: 1,
    type: "backup",
    time: "17:30-21:30",
    title: "備案：新世界串炸 + 回房洗衣",
    area: "新今宮 / 新世界",
    image: images.shinsekai,
    start: "Kintetsu Nara Station",
    end: "Shinsekai Osaka",
    mapQuery: "Shinsekai Osaka",
    duration: "2-3 小時。",
    summary: "奈良走到累就別再去鶴橋，直接回住宿附近吃新世界。",
    transit: "奈良回難波 / 日本橋，再回新今宮；或依 Google Maps 當下轉乘。",
    steps: ["先回新今宮放東西。", "新世界找串炸或鍋物。", "回房洗衣。"],
    foods: [
      food("八重勝", "八重勝 新世界 大阪", "新世界老派串炸代表。"),
      food("串かつ てんぐ", "串かつ てんぐ 新世界 大阪", "排隊較可控時可選。"),
      food("なべや", "なべや 西成 大阪", "冷天鍋物，坐下來吃比較恢復。"),
    ],
    tips: ["這張備案比硬撐鶴橋更適合腿痠日。"],
  },
  {
    id: "d3-usj-arrive",
    day: 2,
    type: "main",
    time: "07:30-09:30",
    title: "新今宮 → 西九條 → Universal City",
    area: "USJ",
    image: images.usj,
    start: "Shin-Imamiya Station",
    end: "Universal City Station Osaka",
    mapQuery: "Universal City Station Osaka",
    duration: "抓 60-90 分鐘含轉車和入園前排隊。",
    summary: "USJ 這天完整留給園區。早點出門，先把官方 App、門票 QR code、整理券都準備好。",
    transit: "JR 新今宮搭大阪環狀線到西九條，轉 JR 夢咲線到 Universal City。",
    steps: ["出門前確認票券、App、行動電源。", "新今宮上 JR，到西九條轉夢咲線。", "Universal City 出站後跟人潮步行進園。"],
    foods: [
      food("便利商店早餐", "convenience store near Shin-Imamiya Station", "入園前先吃，不要空腹排隊。"),
      food("Universal CityWalk 咖啡", "Universal CityWalk Osaka coffee", "入園前最後補給。"),
    ],
    tips: ["SUPER NINTENDO WORLD 依當天規則可能需要整理券或指定入場。"],
  },
  {
    id: "d3-usj-late",
    day: 2,
    type: "backup",
    time: "09:00-10:30",
    title: "備案：晚一點入園，保留重點設施",
    area: "USJ",
    image: images.usj,
    start: "Shin-Imamiya Station",
    end: "Universal Studios Japan",
    mapQuery: "Universal Studios Japan",
    duration: "睡飽再玩，不追早鳥。",
    summary: "如果前一天奈良太累，就把 USJ 改成晚點入園，鎖定 3-4 個最想玩的重點。",
    transit: "同樣 JR 到 Universal City。",
    steps: ["早餐吃完整一點。", "入園後先看 App 等待時間，不來回折返。"],
    foods: [food("CityWalk 早餐", "Universal CityWalk Osaka breakfast", "晚入園時比較從容。")],
    tips: ["這天不要再排大阪景點。"],
  },
  {
    id: "d3-usj-day",
    day: 2,
    type: "main",
    time: "09:30-18:30",
    title: "USJ 園區日：Nintendo、Harry Potter、熱門設施",
    area: "USJ 園內",
    image: images.usj,
    start: "Universal City Station Osaka",
    end: "Universal Studios Japan",
    mapQuery: "Universal Studios Japan",
    duration: "完整園區日。",
    summary: "這天不追 local 食物，重點是體驗和體力管理。用 App 看等待時間、整理券、表演和餐廳狀態。",
    transit: "園內步行，行程依 App 當天等待時間調整。",
    steps: ["進園先確認整理券和必玩區域。", "午餐避開尖峰，餓了就吃，不為餐廳影響設施。", "下午安排商店和比較不刺激的設施緩衝。"],
    foods: [
      food("園區限定餐", "Universal Studios Japan restaurant", "USJ 日吃氣氛，不用追 local。"),
      food("桶裝爆米花", "Universal Studios Japan popcorn", "可當紀念品和補給。"),
      food("園內熱飲", "Universal Studios Japan hot drink", "11 月底排隊會冷。"),
    ],
    tips: ["鞋子、行動電源、雨衣比穿搭更重要。"],
  },
  {
    id: "d3-usj-rain",
    day: 2,
    type: "backup",
    time: "09:30-18:30",
    title: "備案：雨天室內設施 + CityWalk",
    area: "USJ",
    image: images.usj,
    start: "Universal City Station Osaka",
    end: "Universal Studios Japan",
    mapQuery: "Universal Studios Japan",
    duration: "依雨勢調整。",
    summary: "下雨也能玩，但用室內設施、商店、表演和 CityWalk 讓節奏舒服一點。",
    transit: "JR 進出，不增加跨區。",
    steps: ["先買或穿雨衣。", "等雨勢小再做戶外拍照。", "提早用 CityWalk 吃飯也可以。"],
    foods: [food("CityWalk 餐廳", "Universal CityWalk Osaka restaurants", "雨天最實際。")],
    tips: ["雨天不要拿傘在園內走太多，雨衣比較順。"],
  },
  {
    id: "d3-citywalk-home",
    day: 2,
    type: "main",
    time: "19:00-22:00",
    title: "Universal CityWalk 晚餐 → 回新今宮",
    area: "USJ / 新今宮",
    image: images.usj,
    start: "Universal City Station Osaka",
    end: "大阪市西成区花園北1丁目1番3号",
    mapQuery: "Universal CityWalk Osaka restaurants",
    duration: "晚餐後直接回房。",
    summary: "不急著擠出站，先在 CityWalk 吃飯或買伴手禮，再回新今宮。",
    transit: "Universal City → 西九條 → 新今宮。",
    steps: ["出園後先吃飯，避開離園尖峰。", "回程照 JR 夢咲線到西九條，再轉環狀線。"],
    foods: [
      food("Universal CityWalk Osaka", "Universal CityWalk Osaka restaurants", "不是 local，但 USJ 日最省力。"),
      food("西九條站邊居酒屋", "西九条 居酒屋 大阪", "如果想更像大阪，可在轉車站附近吃。"),
    ],
    tips: ["回住宿後不再跨區，留體力給隔天。"],
  },
  {
    id: "d3-laundry-night",
    day: 2,
    type: "backup",
    time: "19:00-21:30",
    title: "備案：提早回房洗衣整理戰利品",
    area: "新今宮",
    image: images.shinsekai,
    start: "Universal City Station Osaka",
    end: "大阪市西成区花園北1丁目1番3号",
    mapQuery: "大阪市西成区花園北1丁目1番3号",
    duration: "回房恢復。",
    summary: "園區走到腿痠就直接回房，洗衣、泡澡、整理戰利品。",
    transit: "JR 回新今宮。",
    steps: ["回程買超市熟食或便利商店。", "回房先洗衣，隔天比較輕鬆。"],
    foods: [
      food("新今宮超市熟食", "supermarket near Shin-Imamiya Osaka", "回房吃最省力。"),
      food("便利商店熱食", "convenience store near Shin-Imamiya Station", "USJ 日晚餐備案。"),
    ],
    tips: ["這是體力管理，不是行程失敗。"],
  },
  {
    id: "d4-pokemon",
    day: 3,
    type: "main",
    time: "10:30-14:30",
    title: "Pokémon Center OSAKA DX + Pokémon Cafe",
    area: "心齋橋",
    image: images.pokemon,
    start: "Dobutsuen-mae Station Osaka",
    end: "Daimaru Shinsaibashi Osaka",
    mapQuery: "Pokemon Center Osaka DX Daimaru Shinsaibashi",
    duration: "2-4 小時，依 Cafe 預約和購物時間調整。",
    summary: "寶可夢中心 DX 和 Cafe 都在心齋橋大丸。Cafe 有訂到就坐，沒訂到就逛店和改百貨午餐。",
    transit: "從動物園前 / 大國町搭御堂筋線到心齋橋，出站步行到大丸。",
    steps: ["先確認 Cafe 預約時間。", "先逛 Pokémon Center，重物可晚點再買。", "如果 Cafe 沒位，百貨地下街或周邊午餐。"],
    foods: [
      food("Pokémon Cafe", "Pokemon Cafe Osaka", "有預約才穩，不要現場賭。"),
      food("心齋橋大丸地下街", "Daimaru Shinsaibashi depachika", "沒訂到 Cafe 時很好用。"),
      food("一芳亭 船場店", "一芳亭 船場店 大阪", "想吃老派燒賣可從心齋橋走過去。"),
    ],
    tips: ["Cafe 是這天唯一比較需要預約意識的點。"],
  },
  {
    id: "d4-pretty-lunch",
    day: 3,
    type: "backup",
    time: "10:30-14:00",
    title: "備案：Cafe 沒訂到就改漂亮午餐",
    area: "心齋橋 / 南船場",
    image: images.dotonbori,
    start: "Dobutsuen-mae Station Osaka",
    end: "Shinsaibashi Station Osaka",
    mapQuery: "Shinsaibashi lunch Osaka",
    duration: "2-3 小時。",
    summary: "這趟多數吃市場和小店，這餐可以安排漂亮一點，當作節奏變化。",
    transit: "御堂筋線到心齋橋，周邊步行。",
    steps: ["先逛寶可夢中心。", "中午找洋食、咖啡或百貨餐廳。"],
    foods: [
      food("北極星 心齋橋本店", "北極星 心斎橋本店", "蛋包飯，觀光但有大阪感。"),
      food("南船場咖啡", "Minamisenba cafe Osaka", "漂亮飯和咖啡區。"),
    ],
    tips: ["如果天氣差，百貨內解決最順。"],
  },
  {
    id: "d4-horie-walk",
    day: 3,
    type: "main",
    time: "15:00-17:30",
    title: "美國村 / Orange Street / 堀江",
    area: "心齋橋 / 堀江",
    image: images.dotonbori,
    start: "Daimaru Shinsaibashi Osaka",
    end: "Orange Street Osaka",
    mapQuery: "Orange Street Osaka",
    duration: "2 小時左右。",
    summary: "寶可夢後不跑遠，改走古著、雜貨、咖啡和街區散步。",
    transit: "心齋橋、大丸、美國村、堀江都能步行串起來。",
    steps: ["從大丸往美國村方向走。", "再往 Orange Street / 堀江逛雜貨和咖啡。", "傍晚回御堂筋線前往長居。"],
    foods: [
      food("甲賀流 たこ焼き", "甲賀流 たこ焼き アメリカ村", "美國村小吃，可分食。"),
      food("堀江咖啡", "Horie cafe Osaka", "展前休息點。"),
      food("Elk Osaka", "Elk Osaka Shinsaibashi", "甜點鬆餅類，想吃漂亮甜食可看。"),
    ],
    tips: ["這段不要買太多，晚上還要去戶外展。"],
  },
  {
    id: "d4-indoor-namba",
    day: 3,
    type: "backup",
    time: "15:00-17:30",
    title: "備案：難波 Parks / 高島屋室內逛",
    area: "難波",
    image: images.kuromon,
    start: "Shinsaibashi Station Osaka",
    end: "Namba Parks Osaka",
    mapQuery: "Namba Parks Osaka",
    duration: "2 小時。",
    summary: "下雨就往難波室內商場移動，保持同一條線，不要硬逛戶外街區。",
    transit: "心齋橋到難波可搭御堂筋線一站或步行。",
    steps: ["先找室內商場。", "把伴手禮、藥妝或甜點補一點。", "晚餐前再搭御堂筋線去長居。"],
    foods: [
      food("高島屋大阪店地下食品", "Takashimaya Osaka depachika", "熟食和甜點。"),
      food("Namba Parks 餐廳", "Namba Parks restaurants", "雨天坐下休息。"),
    ],
    tips: ["這張備案是為了保留晚上 teamLab 體力。"],
  },
  {
    id: "d4-teamlab",
    day: 3,
    type: "main",
    time: "18:30-21:45",
    title: "teamLab Botanical Garden Osaka",
    area: "長居",
    image: images.umeda,
    start: "Shinsaibashi Station Osaka",
    end: "teamLab Botanical Garden Osaka",
    mapQuery: "teamLab Botanical Garden Osaka",
    duration: "2-3 小時含交通。",
    summary: "長居植物園夜間戶外展，場地暗、路面不一定平，穿好走鞋。遇到強風或公告就改天王寺。",
    transit: "御堂筋線到長居，出站後步行到長居植物園。",
    steps: ["展前先吃簡單晚餐或帶熱飲。", "到長居站後用 Google Maps 步行到植物園入口。", "看完搭御堂筋線回動物園前 / 大國町。"],
    foods: [
      food("釜ひろ", "釜ひろ 大阪", "長居附近手打烏龍麵，展前很順。"),
      food("又三郎", "又三郎 長居 大阪", "熟成肉漂亮飯，預算較高。"),
      food("長居站周邊定食", "長居駅 定食", "展前快速坐下吃。"),
    ],
    tips: ["官方若因天氣調整，直接啟用天王寺備案。"],
  },
  {
    id: "d4-tennoji-night",
    day: 3,
    type: "backup",
    time: "18:30-21:30",
    title: "備案：天王寺 / 阿倍野室內夜",
    area: "天王寺",
    image: images.shinsekai,
    start: "Shinsaibashi Station Osaka",
    end: "Tennoji Station Osaka",
    mapQuery: "Tennoji Station Osaka restaurants",
    duration: "2-3 小時。",
    summary: "teamLab 天氣不穩時，改天王寺商場、阿倍野、Harukas 周邊。",
    transit: "御堂筋線到天王寺，回新今宮只要一小段。",
    steps: ["先吃晚餐。", "逛商場或看夜景。", "回程搭 JR / Metro 到新今宮或動物園前。"],
    foods: [
      food("阿倍野商場餐廳", "Abeno restaurants Osaka", "雨天室內最穩。"),
      food("天王寺地下街小吃", "Tennoji underground restaurants", "快速晚餐。"),
    ],
    tips: ["這張備案交通最省，適合下雨或腿痠。"],
  },
  {
    id: "d5-kizu-market",
    day: 4,
    type: "main",
    time: "09:00-10:45",
    title: "木津市場早午餐",
    area: "大國町 / 木津市場",
    image: images.kuromon,
    start: "大阪市西成区花園北1丁目1番3号",
    end: "Osaka Kizu Market",
    mapQuery: "Osaka Kizu Market",
    duration: "75-90 分鐘。",
    summary: "比黑門更偏批發市場感，離大國町近。回程日只排南區短距離，不拖大行李進市場。",
    transit: "從新今宮 / 大國町一帶步行或搭一站；大行李先寄放或留住宿。",
    steps: ["先退房或整理行李。", "只帶小包去市場。", "吃完回難波補買或直接往機場。"],
    foods: [
      food("木津市場食堂", "大阪木津卸売市場 食堂", "現場看當天開什麼。"),
      food("天ぷら 大吉 なんば店", "天ぷら 大吉 なんば店", "市場系天婦羅，坐下吃比較穩。"),
      food("市場玉子 / 熟食", "Osaka Kizu Market tamagoyaki", "小份補吃。"),
    ],
    tips: ["市場日越早越有感，不要拖到接近中午。"],
  },
  {
    id: "d5-kuromon-nihonbashi",
    day: 4,
    type: "backup",
    time: "09:00-10:45",
    title: "備案：黑門市場 + 日本橋",
    area: "黑門 / 日本橋",
    image: images.kuromon,
    start: "大阪市西成区花園北1丁目1番3号",
    end: "Kuromon Market Osaka",
    mapQuery: "Kuromon Market Osaka",
    duration: "90 分鐘。",
    summary: "如果想回熟悉的難波圈，就黑門小吃 + 日本橋補買。",
    transit: "Metro 到日本橋或難波後步行。",
    steps: ["行李先寄放。", "黑門少量吃，不豪賭。", "日本橋補小東西後回難波。"],
    foods: [
      food("黒門 三平", "黒門 三平 大阪", "海鮮丼或握壽司小份。"),
      food("まぐろや黒銀", "まぐろや黒銀 黒門市場本店", "路過吃鮪魚。"),
    ],
    tips: ["黑門偏觀光，當補吃就好。"],
  },
  {
    id: "d5-sleep-in",
    day: 4,
    type: "backup",
    time: "09:00-10:30",
    title: "備案：睡飽，飯店附近早餐",
    area: "新今宮",
    image: images.shinsekai,
    start: "大阪市西成区花園北1丁目1番3号",
    end: "Shin-Imamiya Station",
    mapQuery: "Shin-Imamiya Station breakfast",
    duration: "60-90 分鐘。",
    summary: "前一晚太累就睡飽退房，把時間留給機場和補買。",
    transit: "住宿周邊步行。",
    steps: ["吃簡單早餐。", "整理行李和退房。", "直接往難波或機場。"],
    foods: [
      food("新今宮咖啡", "coffee near Shin-Imamiya Station", "簡單醒腦。"),
      food("便利商店早餐", "convenience store near Shin-Imamiya Station", "最省事。"),
    ],
    tips: ["回程日不要把自己逼到趕飛機。"],
  },
  {
    id: "d5-namba-shopping",
    day: 4,
    type: "main",
    time: "11:00-12:10",
    title: "難波高島屋 / Namba Parks 補買",
    area: "難波",
    image: images.dotonbori,
    start: "Osaka Kizu Market",
    end: "Namba Station Osaka",
    mapQuery: "Namba Station Osaka",
    duration: "60-70 分鐘。",
    summary: "買伴手禮、藥妝、零食，行李整理好就往機場。這段不排景點。",
    transit: "大國町 / 難波周邊步行或一站 Metro；接著從南海難波往關西機場。",
    steps: ["只買能安心帶上飛機和入境台灣的東西。", "12:00 前後開始往機場移動。", "Peach 在 KIX T2，抵達機場後再抓接駁和報到時間。"],
    foods: [
      food("高島屋地下食品", "Takashimaya Osaka depachika souvenirs", "甜點、餅乾、熟食觀察。"),
      food("藥妝補買", "drugstore near Namba Station Osaka", "藥品以自用量為主。"),
      food("南海難波站便當", "Nankai Namba Station bento", "機場前最後補給。"),
    ],
    tips: ["回程日不要買需冷藏太久的東西。"],
  },
  {
    id: "d5-direct-airport",
    day: 4,
    type: "backup",
    time: "11:00-12:20",
    title: "備案：直接新今宮搭南海去機場",
    area: "新今宮 / 關西機場",
    image: images.dotonbori,
    start: "Shin-Imamiya Station",
    end: "Kansai Airport Terminal 2",
    mapQuery: "Kansai Airport Terminal 2",
    duration: "機場優先。",
    summary: "如果行李多或天氣差，從新今宮直接走，少折返難波。",
    transit: "南海新今宮 → 關西機場，抵達後依 Peach / T2 指示接駁。",
    steps: ["先查南海班次。", "抵達關西機場站後前往 T2。", "保留報到、安檢和出境時間。"],
    foods: [
      food("機場簡餐", "Kansai Airport Terminal 2 restaurants", "時間緊就機場吃。"),
      food("便利商店補貨", "Kansai Airport convenience store", "水、飲料、小點。"),
    ],
    tips: ["趕飛機時，少一個補買點會快樂很多。"],
  },
];

const days = [
  {
    kicker: "Day 1 / 11.28 Sat",
    title: "難波放行李、道頓堀、裏難波",
    note: "第一晚住難波核心。抵達後不跨區，直接用步行圈吃大阪第一餐。",
    base: "住宿：難波 2 Chome-3-9",
    transport: "主交通：南海 / Metro / 步行",
    activityIds: [
      "d1-arrive-namba",
      "d1-arrive-slow",
      "d1-namba-walk",
      "d1-kuromon-lite",
      "d1-uranamba-dinner",
      "d1-indoor-dinner",
    ],
  },
  {
    kicker: "Day 2 / 11.29 Sun",
    title: "搬到新今宮、奈良餵鹿、鶴橋、SpaWorld",
    note: "先處理換住宿，再去奈良。晚上回大阪吃鶴橋或新世界，泡湯當恢復選項。",
    base: "住宿：Apartment Hotel 11 Shinimamiya 3",
    transport: "主交通：南海 / 近鐵 / JR 環狀線",
    activityIds: [
      "d2-luggage-shinimamiya",
      "d2-locker-backup",
      "d2-nara-park",
      "d2-nara-short",
      "d2-tsuruhashi-spa",
      "d2-shinsekai-dinner",
    ],
  },
  {
    kicker: "Day 3 / 11.30 Mon",
    title: "Universal Studios Japan 一日",
    note: "USJ 需要完整一天。從新今宮用 JR 到西九條轉夢咲線，出 Universal City 後步行進園。",
    base: "住宿：新今宮",
    transport: "主交通：JR 環狀線 / JR 夢咲線",
    activityIds: [
      "d3-usj-arrive",
      "d3-usj-late",
      "d3-usj-day",
      "d3-usj-rain",
      "d3-citywalk-home",
      "d3-laundry-night",
    ],
  },
  {
    kicker: "Day 4 / 12.01 Tue",
    title: "心齋橋寶可夢、堀江、美國村、長居 teamLab",
    note: "這天主線是御堂筋線：心齋橋逛寶可夢，晚上到長居看 teamLab。",
    base: "住宿：新今宮",
    transport: "主交通：Metro 御堂筋線",
    activityIds: [
      "d4-pokemon",
      "d4-pretty-lunch",
      "d4-horie-walk",
      "d4-indoor-namba",
      "d4-teamlab",
      "d4-tennoji-night",
    ],
  },
  {
    kicker: "Day 5 / 12.02 Wed",
    title: "木津市場或黑門、難波補買、回機場",
    note: "15:25 起飛，這天只排南區短距離。12:00 前後離開市區比較安心。",
    base: "住宿：新今宮 → KIX T2",
    transport: "主交通：南海 / JR / Metro",
    activityIds: [
      "d5-kizu-market",
      "d5-kuromon-nihonbashi",
      "d5-sleep-in",
      "d5-namba-shopping",
      "d5-direct-airport",
    ],
  },
];

const activityById = Object.fromEntries(activities.map((activity) => [activity.id, activity]));
let activeDay = Number(localStorage.getItem("activeDay") || 0);

function food(name, query, note) {
  return { name, query, note };
}

function escapeText(value) {
  return String(value).replace(/[&<>"']/g, (char) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char])
  );
}

function renderSharedNav() {
  const navs = document.querySelectorAll(".nav-links");
  navs.forEach((navEl) => {
    navEl.innerHTML = nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("");
  });
}

function renderPlanner() {
  const routeList = document.querySelector("#routeList");
  if (!routeList) return;

  const dayTabs = document.querySelectorAll(".day-tab");

  function renderDay() {
    const day = days[activeDay];
    document.querySelector("#dayKicker").textContent = day.kicker;
    document.querySelector("#dayTitle").textContent = day.title;
    document.querySelector("#dayNote").textContent = day.note;
    document.querySelector("#dayBase").textContent = day.base;
    document.querySelector("#dayTransport").textContent = day.transport;
    dayTabs.forEach((tab) => tab.classList.toggle("is-active", Number(tab.dataset.day) === activeDay));

    const dayActivities = day.activityIds.map((id) => activityById[id]);
    const mainActivities = dayActivities.filter((activity) => activity.type === "main");

    routeList.innerHTML = renderDayGroups(dayActivities, mainActivities);
  }

  dayTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activeDay = Number(tab.dataset.day);
      localStorage.setItem("activeDay", String(activeDay));
      renderDay();
    });
  });

  renderDay();
}

function renderDayGroups(dayActivities, mainActivities) {
  const groups = [];
  dayActivities.forEach((activity) => {
    if (activity.type === "main" || groups.length === 0) {
      groups.push({ main: activity.type === "main" ? activity : null, backups: activity.type === "backup" ? [activity] : [] });
      return;
    }
    groups[groups.length - 1].backups.push(activity);
  });

  return groups
    .map((group) => {
      const cards = [group.main, ...group.backups].filter(Boolean).map(renderActivityCard).join("");
      const nextMain = group.main ? nextMainAfter(mainActivities, group.main.id) : null;
      return `${cards}${nextMain ? renderConnector(group.main, nextMain) : ""}`;
    })
    .join("");
}

function nextMainAfter(mainActivities, id) {
  const index = mainActivities.findIndex((activity) => activity.id === id);
  return index >= 0 ? mainActivities[index + 1] : null;
}

function renderActivityCard(activity) {
  const label = activity.type === "main" ? "主計畫" : "備案";
  const foods = activity.foods.slice(0, 4).map((item) => `<li>${escapeText(item.name)}</li>`).join("");
  return `
    <article class="route-card ${activity.type === "backup" ? "is-backup" : ""}">
      <a class="route-image" href="activity.html?id=${activity.id}" aria-label="查看 ${escapeText(activity.title)} 詳情">
        <img src="${activity.image}" alt="${escapeText(activity.title)}">
      </a>
      <div class="route-content">
        <div class="slot-topline">
          <span class="slot-time">${activity.time}</span>
          <span class="type-pill">${label}</span>
        </div>
        <a class="route-title" href="activity.html?id=${activity.id}">${escapeText(activity.title)}</a>
        <p>${escapeText(activity.summary)}</p>
        <div class="route-facts">
          <div>
            <span>怎麼去</span>
            <p>${escapeText(activity.transit)}</p>
          </div>
          <div>
            <span>吃什麼</span>
            <ul class="mini-list">${foods}</ul>
          </div>
        </div>
        <div class="card-actions">
          <a class="button primary small" href="activity.html?id=${activity.id}">詳細說明</a>
          <a class="button small" href="${mapSearch(activity.mapQuery)}" target="_blank" rel="noreferrer">用 Google Maps 開啟</a>
        </div>
      </div>
    </article>
  `;
}

function renderConnector(current, next) {
  return `
    <div class="transit-connector">
      <span>${escapeText(current.end)} → ${escapeText(next.start)}</span>
      <a href="${mapDirections(current.end, next.start)}" target="_blank" rel="noreferrer">
        查這段交通：${escapeText(current.title)} → ${escapeText(next.title)}
      </a>
    </div>
  `;
}

function renderStayCards() {
  const stayGrid = document.querySelector("#stayGrid");
  if (!stayGrid) return;
  stayGrid.innerHTML = hotels
    .map(
      (hotel) => `
        <article class="stay-card hotel-card">
          <span>${hotel.dates}</span>
          <h3>${escapeText(hotel.title)}</h3>
          <p class="address">${escapeText(hotel.address)}</p>
          <p>${escapeText(hotel.role)}</p>
          <div class="station-list">
            ${hotel.stations.map((station) => `<strong>${escapeText(station)}</strong>`).join("")}
          </div>
          <div class="link-grid">
            ${hotel.links
              .map(([label, query]) => `<a href="${mapSearch(query)}" target="_blank" rel="noreferrer">${label}</a>`)
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderActivityDetail() {
  const detail = document.querySelector("#activityDetail");
  if (!detail) return;

  const params = new URLSearchParams(window.location.search);
  const activity = activityById[params.get("id")];
  if (!activity) {
    detail.innerHTML = `
      <section class="page-hero compact-hero">
        <p class="date-line">ACTIVITY NOT FOUND</p>
        <h1>找不到這張行程卡。</h1>
        <p class="lead">可能是舊連結或網址少了 id。回每日路線重新點一次會最準。</p>
        <a class="button primary" href="index.html#planner">回行程</a>
      </section>
    `;
    return;
  }

  const day = days[activity.day];
  const dayActivities = day.activityIds.map((id) => activityById[id]);
  const mainActivities = dayActivities.filter((item) => item.type === "main");
  const next = activity.type === "main" ? nextMainAfter(mainActivities, activity.id) : null;

  document.title = `${activity.title} | 一起去大阪`;
  detail.innerHTML = `
    <section class="activity-hero">
      <img src="${activity.image}" alt="${escapeText(activity.title)}">
      <div>
        <p class="date-line">${day.kicker} / ${activity.time}</p>
        <h1>${escapeText(activity.title)}</h1>
        <p class="lead">${escapeText(activity.summary)}</p>
        <div class="hero-actions">
          <a class="button primary" href="${mapDirections(activity.start, activity.end)}" target="_blank" rel="noreferrer">查大眾運輸</a>
          <a class="button ghost" href="${mapSearch(activity.mapQuery)}" target="_blank" rel="noreferrer">開地點</a>
          <a class="button ghost" href="index.html#planner">回每日路線</a>
        </div>
      </div>
    </section>
    <section class="section detail-section">
      <div class="detail-layout">
        <article class="detail-panel">
          <p class="panel-kicker">HOW TO MOVE</p>
          <h2>第一次去也看得懂的走法</h2>
          <p>${escapeText(activity.transit)}</p>
          <ol class="step-list">
            ${activity.steps.map((step) => `<li>${escapeText(step)}</li>`).join("")}
          </ol>
        </article>
        <article class="detail-panel">
          <p class="panel-kicker">FOOD AROUND</p>
          <h2>這張卡附近可以吃什麼</h2>
          <div class="restaurant-list">
            ${activity.foods
              .map(
                (item) => `
                  <a href="${mapSearch(item.query)}" target="_blank" rel="noreferrer">
                    <strong>${escapeText(item.name)}</strong>
                    <span>${escapeText(item.note)}</span>
                  </a>
                `
              )
              .join("")}
          </div>
        </article>
        <article class="detail-panel">
          <p class="panel-kicker">ON SITE</p>
          <h2>現場提醒</h2>
          <ul class="tip-list plain">
            <li>建議停留：${escapeText(activity.duration)}</li>
            ${activity.tips.map((tip) => `<li>${escapeText(tip)}</li>`).join("")}
          </ul>
          ${
            next
              ? `<a class="button primary full" href="${mapDirections(activity.end, next.start)}" target="_blank" rel="noreferrer">下一段交通：${escapeText(activity.title)} → ${escapeText(next.title)}</a>`
              : `<a class="button primary full" href="index.html#planner">這天主線到這裡，回行程看備案</a>`
          }
        </article>
      </div>
    </section>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderSharedNav();
  renderPlanner();
  renderStayCards();
  renderActivityDetail();
});

window.TRIP_DATA = { activities, days, hotels, mapSearch, mapDirections };
