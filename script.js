const images = {
  dotonbori:
    "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/4/47/Dotonbori%2C_Osaka%2C_at_night%2C_November_2016.jpg/1280px-Dotonbori%2C_Osaka%2C_at_night%2C_November_2016.jpg&w=1280",
  castle:
    "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Osaka_Castle_02bs3200.jpg/1280px-Osaka_Castle_02bs3200.jpg&w=1280",
  shinsekai:
    "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/9/95/Shinsekai_and_Tsutenkaku_at_night_2019-04-12.jpg/1280px-Shinsekai_and_Tsutenkaku_at_night_2019-04-12.jpg&w=1280",
  kuromon:
    "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/9/9b/JP-osaka-arkade.jpg/1280px-JP-osaka-arkade.jpg&w=1280",
  umeda:
    "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/7/77/Osaka_Umeda_Sky_Building_Panoramablick_05.jpg/1280px-Osaka_Umeda_Sky_Building_Panoramablick_05.jpg&w=1280",
  nara:
    "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/2/29/Deer_at_nara_park_1.jpg/1280px-Deer_at_nara_park_1.jpg&w=1280",
  tsuruhashi:
    "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Osaka_Ikuno_Korea_Town_001.jpg/1280px-Osaka_Ikuno_Korea_Town_001.jpg&w=1280",
  usj: "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Universal_Studios_Japan_entrance.jpg/1280px-Universal_Studios_Japan_entrance.jpg&w=1280",
};

const days = [
  {
    kicker: "Day 1 / 11.28 Sat",
    title: "難波放行李、道頓堀、裏難波",
    note: "第一晚住難波核心。抵達後不跨區，直接用步行圈吃大阪第一餐。",
    base: "住宿：難波 2 Chome-3-9",
    transport: "主交通：南海 / Metro / 步行",
    slots: [
      {
        time: "13:10-16:30",
        buffer: "入境 + 進市區 + 30 分鐘緩衝",
        image: images.dotonbori,
        options: [
          {
            title: "KIX T2 → 南海難波 → 住宿放行李",
            body: "第一天先穩穩進市區。到難波後放行李、整理交通卡，再開始吃。",
            eats: ["難波車站飯糰", "便利店熱飲", "百貨地下街小甜點"],
            transport: "南海到難波，住宿在難波核心步行圈。",
            walk: "到站後以步行 10-15 分鐘內為目標。",
          },
          {
            title: "備案：入境慢就砍掉下午點",
            body: "如果出關拖到 15:00 後，直接去住宿休息，不硬塞景點。",
            eats: ["車站便當", "超商補水", "飯店附近咖啡"],
            transport: "南海或利木津，以少轉乘為主。",
            walk: "晚餐仍在難波步行圈處理。",
          },
        ],
      },
      {
        time: "16:45-18:00",
        buffer: "短點，不超過一站距離",
        image: images.kuromon,
        options: [
          {
            title: "難波八阪神社或道具屋筋",
            body: "如果體力好，先補一個近距離點。神社拍照、道具屋筋看廚具雜貨都不累。",
            eats: ["可樂餅", "咖啡", "小份章魚燒"],
            transport: "難波周邊步行。",
            walk: "全程步行，不需要再轉車。",
          },
          {
            title: "備案：黑門市場只看不吃飽",
            body: "黑門偏觀光，但順路可以先看一圈，回程日再決定要不要補吃。",
            eats: ["玉子燒", "水果", "烤物小份"],
            transport: "日本橋站或難波步行。",
            walk: "從難波步行約 10-15 分鐘。",
          },
        ],
      },
      {
        time: "18:30-21:30",
        buffer: "晚餐 + 散步，不趕下一站",
        image: images.dotonbori,
        options: [
          {
            title: "道頓堀、法善寺、裏難波晚餐",
            body: "第一晚吃氣氛和巷弄。主街拍照，真正坐下吃可往法善寺或裏難波鑽。",
            eats: ["立飲小菜", "串燒", "御好燒", "章魚燒分食"],
            transport: "難波 / 日本橋站步行圈。",
            walk: "吃完直接走回住宿，第一晚最省腦。",
          },
          {
            title: "備案：百貨地下街 + 早點睡",
            body: "如果飛機日太累，進高島屋或 Namba Walk 吃，不在戶外排隊。",
            eats: ["炸豬排", "洋食", "便當熟食", "甜點"],
            transport: "難波地下街。",
            walk: "全程室內或地下街。",
          },
        ],
      },
    ],
  },
  {
    kicker: "Day 2 / 11.29 Sun",
    title: "搬到新今宮、奈良餵鹿、鶴橋、SpaWorld",
    note: "先處理換住宿，再去奈良。晚上回大阪吃鶴橋或新世界，泡湯當恢復選項。",
    base: "住宿：Apartment Hotel 11 Shinimamiya 3",
    transport: "主交通：南海 / 近鐵 / JR 環狀線",
    slots: [
      {
        time: "08:45-10:15",
        buffer: "換住宿日多留 30 分鐘",
        image: images.shinsekai,
        options: [
          {
            title: "難波退房 → 新今宮放行李",
            body: "如果公寓不能寄放，改用難波或新今宮置物櫃。這段先把後三晚基地安頓好。",
            eats: ["便利店早餐", "車站咖啡", "超市水果先買一點"],
            transport: "難波 → 新今宮，南海或 Metro + 步行。",
            walk: "站到住宿抓 10 分鐘上下，走大路。",
          },
          {
            title: "備案：行李先鎖難波車站",
            body: "若自助入住太晚才能進房，行李先放 locker，下午回程再取。",
            eats: ["難波地下街早餐", "咖啡", "飯糰"],
            transport: "用難波當臨時基地。",
            walk: "不拖行李進市場或景點。",
          },
        ],
      },
      {
        time: "10:45-16:00",
        buffer: "奈良步行多，午餐不趕",
        image: images.nara,
        options: [
          {
            title: "近鐵奈良 → 奈良公園 → 東大寺",
            body: "從大阪難波或近鐵日本橋出發到近鐵奈良。出站後步行串鹿、東大寺、東向商店街。",
            eats: ["釜飯", "柿葉壽司", "茶粥", "和菓子"],
            transport: "新今宮 → 難波 / 日本橋轉近鐵奈良。",
            walk: "近鐵奈良到公園 5-15 分鐘，園區內慢走。",
          },
          {
            title: "備案：晚起奈良縮短版",
            body: "如果起不來，只做奈良公園 + 東向商店街，不硬塞春日大社。",
            eats: ["商店街午餐", "麻糬", "咖啡", "柿葉壽司外帶"],
            transport: "近鐵奈良來回。",
            walk: "把步行集中在站前到公園。",
          },
        ],
      },
      {
        time: "17:00-22:00",
        buffer: "回大阪後直接吃在地",
        image: images.tsuruhashi,
        options: [
          {
            title: "鶴橋市場晚餐 → SpaWorld 泡湯",
            body: "奈良回大阪可在鶴橋下車吃燒肉、泡菜和小菜。還有體力就回新今宮泡湯收尾。",
            eats: ["燒肉", "泡菜", "韓式小菜", "泡湯後牛奶"],
            transport: "近鐵奈良 → 鶴橋 → JR 新今宮 / Metro 動物園前。",
            walk: "鶴橋站出來就是商店街，SpaWorld 在住宿附近。",
          },
          {
            title: "備案：新世界串炸 + 回房洗衣",
            body: "如果奈良走太累，直接回新今宮旁邊吃新世界，比再去鶴橋省力。",
            eats: ["串炸", "土手燒", "關東煮", "超市熟食"],
            transport: "JR 新今宮 / Metro 動物園前。",
            walk: "住宿、新世界、SpaWorld 都在步行圈。",
          },
        ],
      },
    ],
  },
  {
    kicker: "Day 3 / 11.30 Mon",
    title: "Universal Studios Japan 一日",
    note: "USJ 需要完整一天。從新今宮用 JR 到西九條轉夢咲線，出 Universal City 後步行進園。",
    base: "住宿：新今宮",
    transport: "主交通：JR 環狀線 / JR 夢咲線",
    slots: [
      {
        time: "07:30-09:30",
        buffer: "入園日抓早，預留轉車與排隊",
        image: images.usj,
        options: [
          {
            title: "新今宮 → 西九條 → Universal City",
            body: "早點到比較舒服。官方 App 先裝好，SUPER NINTENDO WORLD 可能需要整理券或指定入場。",
            eats: ["便利店早餐", "車站咖啡", "入園前補水"],
            transport: "JR 新今宮 → 西九條轉 JR 夢咲線 → Universal City。",
            walk: "Universal City 站到 USJ 入口約 5 分鐘。",
          },
          {
            title: "備案：晚一點入園",
            body: "如果前一天奈良太累，就把早鳥策略改成晚一點入園，先保留想玩的 3-4 個重點。",
            eats: ["飯店早餐", "CityWalk 咖啡", "園區小食"],
            transport: "同樣 JR 到 Universal City。",
            walk: "減少園外移動，把體力留給園內。",
          },
        ],
      },
      {
        time: "09:30-18:30",
        buffer: "園區完整日，不再排其他景點",
        image: images.usj,
        options: [
          {
            title: "USJ 園區日：Nintendo、Harry Potter、熱門設施",
            body: "這天不追 local 食物，重點是園區體驗。用 App 看等待時間、整理券、表演和餐廳狀態。",
            eats: ["園區限定餐", "桶裝爆米花", "CityWalk 晚餐", "水和小點"],
            transport: "園內步行，回程同 JR。",
            walk: "園區會走很多，鞋子優先。",
          },
          {
            title: "雨天：室內設施 + CityWalk",
            body: "下雨也能玩，但用雨衣、室內設施、商店和 CityWalk 調整節奏。",
            eats: ["熱飲", "室內餐廳", "CityWalk 晚餐", "便利店補給"],
            transport: "JR 進出，避免多換線。",
            walk: "園內濕滑，減少來回折返。",
          },
        ],
      },
      {
        time: "19:00-22:00",
        buffer: "回程保留體力與晚餐",
        image: images.usj,
        options: [
          {
            title: "Universal CityWalk 晚餐 → 回新今宮",
            body: "不急著擠出站，先在 CityWalk 吃飯或買伴手禮，再回新今宮。",
            eats: ["CityWalk 晚餐", "甜點", "便利店熱飲"],
            transport: "Universal City → 西九條 → 新今宮。",
            walk: "回住宿後不再跨區。",
          },
          {
            title: "備案：提早回房洗衣",
            body: "如果園區走到腿痠，直接回 Apartment 洗衣、泡澡、整理戰利品。",
            eats: ["超市熟食", "水果", "泡麵", "飲料"],
            transport: "JR 回新今宮。",
            walk: "把最後一段步行降到最低。",
          },
        ],
      },
    ],
  },
  {
    kicker: "Day 4 / 12.01 Tue",
    title: "心齋橋寶可夢、堀江、美國村、長居 teamLab",
    note: "這天主線是御堂筋線：心齋橋逛寶可夢，晚上到長居看 teamLab。",
    base: "住宿：新今宮",
    transport: "主交通：Metro 御堂筋線",
    slots: [
      {
        time: "10:30-14:30",
        buffer: "Cafe 前後留找路與排隊",
        image: images.dotonbori,
        options: [
          {
            title: "Pokémon Center OSAKA DX + Pokémon Cafe",
            body: "同在心齋橋大丸。Cafe 有訂到就坐，沒訂到就逛店、買周邊、改百貨午餐。",
            eats: ["Pokémon Cafe", "百貨地下熟食", "心齋橋定食", "咖啡"],
            transport: "動物園前 / 大國町 → 心齋橋。",
            walk: "心齋橋站到大丸 5 分鐘內。",
          },
          {
            title: "備案：Cafe 沒訂到就改漂亮午餐",
            body: "這天可以安排一餐漂亮飯，讓整趟不是只有市場和小店。",
            eats: ["洋食", "咖啡甜點", "壽司午餐", "百貨餐廳"],
            transport: "心齋橋站周邊。",
            walk: "全部在心齋橋步行圈。",
          },
        ],
      },
      {
        time: "15:00-17:30",
        buffer: "逛街不跨區",
        image: images.dotonbori,
        options: [
          {
            title: "美國村 / Orange Street / 堀江",
            body: "寶可夢後不跑遠，改走古著、雜貨、咖啡和街區散步。",
            eats: ["漢堡", "咖啡", "甜甜圈", "小酒館前菜"],
            transport: "心齋橋步行。",
            walk: "心齋橋到堀江約 10-15 分鐘。",
          },
          {
            title: "雨天：難波 Parks / 高島屋",
            body: "如果下雨，就往難波室內商場移動，保持同一條線。",
            eats: ["百貨餐廳", "甜點", "拉麵", "熟食"],
            transport: "心齋橋 → 難波。",
            walk: "以地下街和商場為主。",
          },
        ],
      },
      {
        time: "18:30-21:45",
        buffer: "夜間戶外展 + 回程緩衝",
        image: images.umeda,
        options: [
          {
            title: "teamLab Botanical Garden Osaka",
            body: "長居植物園夜間戶外展，官方提醒場地暗、路面不平，要穿好走鞋；雨天強風需看公告。",
            eats: ["展前簡單晚餐", "回新今宮宵夜", "便利店熱飲"],
            transport: "御堂筋線到長居，再步行到植物園。",
            walk: "長居站出站後抓 10-15 分鐘。",
          },
          {
            title: "雨天：天王寺 / 阿倍野室內夜",
            body: "如果 teamLab 天氣不穩，改天王寺商場或 Harukas 周邊。",
            eats: ["商場定食", "甜點", "地下街小吃"],
            transport: "御堂筋線到天王寺，回新今宮很近。",
            walk: "站內商場為主。",
          },
        ],
      },
    ],
  },
  {
    kicker: "Day 5 / 12.02 Wed",
    title: "木津市場或黑門、難波補買、回機場",
    note: "15:25 起飛，這天只排南區短距離。12:00-12:20 左右離開市區比較安心。",
    base: "住宿：新今宮 → KIX T2",
    transport: "主交通：南海 / JR / Metro",
    slots: [
      {
        time: "09:00-10:45",
        buffer: "退房 + 早餐，不拖行李進市場",
        image: images.kuromon,
        options: [
          {
            title: "木津市場早午餐",
            body: "比黑門更偏批發市場感，離大國町近。適合吃海鮮、定食、玉子、熟食。",
            eats: ["海鮮定食", "玉子燒", "炸物", "市場咖啡"],
            transport: "新今宮 / 大國町一帶步行或一站移動。",
            walk: "大國町站步行約 5-10 分鐘。",
          },
          {
            title: "備案：黑門市場 + 日本橋",
            body: "如果想回到第一晚熟悉區域，就黑門小吃 + 日本橋補買。",
            eats: ["水果", "烤物小份", "玉子燒", "咖啡"],
            transport: "Metro 日本橋 / 近鐵日本橋。",
            walk: "站到市場約 5 分鐘。",
          },
          {
            title: "晚起：飯店附近早餐",
            body: "如果前一晚太累，睡飽退房，把時間留給機場和補買。",
            eats: ["咖啡", "便利店早餐", "超市熟食"],
            transport: "新今宮周邊步行。",
            walk: "不再跨區。",
          },
        ],
      },
      {
        time: "11:00-12:10",
        buffer: "最後補買，不排景點",
        image: images.dotonbori,
        options: [
          {
            title: "難波高島屋 / Namba Parks 補買",
            body: "買伴手禮、藥妝、零食，行李整理好就往機場。",
            eats: ["百貨熟食", "甜點", "機場前咖啡"],
            transport: "難波站周邊。",
            walk: "商場與車站步行圈。",
          },
          {
            title: "備案：直接新今宮搭南海去機場",
            body: "如果行李多或天氣差，從新今宮直接走，少折返難波。",
            eats: ["機場簡餐", "便利店補貨", "飲料"],
            transport: "南海新今宮 → 關西機場，T2 依航空指示接駁。",
            walk: "優先減少拖行李步行。",
          },
        ],
      },
    ],
  },
];

const foodGuides = [
  {
    key: "shinsekai",
    tab: "新今宮 / 新世界",
    area: "住宿基地、宵夜、泡湯後",
    title: "新今宮 / 新世界推薦",
    image: images.shinsekai,
    intro: "後三晚的生活區，適合宵夜、泡湯後補食、或不想回難波排隊的晚上。這區我會優先排老派小店，不追台灣也吃得到的連鎖。",
    restaurants: [
      {
        name: "八重勝",
        kind: "串炸 / 土手燒",
        station: "動物園前 / 新今宮",
        why: "新世界老派串炸代表，適合點少量多款。排太長就換旁邊備案，不要把整晚卡死。",
        order: "蓮藕、牛肉、蝦、土手燒",
        query: "八重勝 新世界 大阪",
      },
      {
        name: "串かつ てんぐ",
        kind: "串炸 / 居酒屋感",
        station: "動物園前",
        why: "比起拍照名店，更像坐下來吃一輪大阪味。適合奈良日後不用再跑遠。",
        order: "串炸、土手燒、啤酒或烏龍茶",
        query: "串かつ てんぐ 新世界 大阪",
      },
      {
        name: "ホルモン マルフク",
        kind: "站邊荷爾蒙",
        station: "動物園前 / 新今宮",
        why: "非常在地、很街邊，適合想吃一點大阪下町感。環境不是漂亮飯，介意油煙就跳過。",
        order: "荷爾蒙、肝、泡菜小菜",
        query: "ホルモン マルフク 大阪",
      },
      {
        name: "なべや",
        kind: "鍋物 / すき焼き",
        station: "今船 / 動物園前",
        why: "冷天很適合，份量和價格通常比觀光區可愛。適合想坐下來慢慢吃的一晚。",
        order: "一人鍋、すき焼き、烏龍收尾",
        query: "なべや 西成 大阪",
      },
    ],
    tips: ["晚上回住宿走大路，優先用新今宮 / 動物園前 / 大國町。", "SpaWorld 當奈良日後的恢復選項。"],
  },
  {
    key: "namba",
    tab: "難波 / 裏難波",
    area: "第一晚、補買、近鐵奈良入口",
    title: "難波 / 裏難波推薦",
    image: images.kuromon,
    intro: "不要只吃道頓堀主街。第一晚住難波，往法善寺、裏難波、道具屋筋、日本橋小巷走，比較像真的在大阪吃晚餐。",
    restaurants: [
      {
        name: "一芳亭 本店",
        kind: "燒賣 / 中華定食",
        station: "難波",
        why: "老派難波小店，吃起來比觀光章魚燒更像日常午晚餐。",
        order: "燒賣、春卷、定食",
        query: "一芳亭 本店 難波",
      },
      {
        name: "福太郎 本店",
        kind: "御好燒 / ねぎ焼き",
        station: "日本橋 / 難波",
        why: "想吃漂亮一點的大阪粉物正餐可以放這間；熱門時段要排，太久就換店。",
        order: "ねぎ焼き、豬玉、炒麵",
        query: "福太郎 本店 大阪",
      },
      {
        name: "道頓堀 今井 本店",
        kind: "大阪烏龍麵",
        station: "難波",
        why: "不是市場型，但很大阪，適合冷天或回程前想吃溫柔一餐。",
        order: "きつねうどん、親子丼",
        query: "道頓堀 今井 本店",
      },
      {
        name: "會津屋 なんば店",
        kind: "章魚燒",
        station: "難波",
        why: "章魚燒原型店系，口味不是台式重醬路線。適合分一份，不要當整餐。",
        order: "元祖たこ焼き、ラヂオ焼き",
        query: "会津屋 なんば店",
      },
    ],
    tips: ["第一晚可以用這區當主戰場，走累就回 2 Chome-3-9 Namba。", "熱門店排太長就直接換，這區不值得為一間店犧牲整晚。"],
  },
  {
    key: "tsuruhashi",
    tab: "鶴橋",
    area: "市場、燒肉、泡菜",
    title: "鶴橋推薦",
    image: images.tsuruhashi,
    intro: "奈良回大阪最順的 local 晚餐點。站一出來就是商店街和燒肉味，喜歡在地感會很有趣。",
    restaurants: [
      {
        name: "焼肉 空 鶴橋本店",
        kind: "燒肉 / 荷爾蒙",
        station: "鶴橋",
        why: "鶴橋代表型燒肉，適合奈良回程晚餐。衣服會有味道，剛好住宿有洗衣機。",
        order: "鹽タン、ハラミ、ホルモン",
        query: "焼肉 空 鶴橋本店",
      },
      {
        name: "鶴橋まぐろ食堂",
        kind: "鮪魚丼 / 海鮮",
        station: "鶴橋",
        why: "不想燒肉時的市場感選項，適合午餐或早一點回大阪吃。",
        order: "まぐろ丼、中トロ、赤身",
        query: "鶴橋まぐろ食堂",
      },
      {
        name: "豊田商店 本店",
        kind: "泡菜 / 韓式小菜",
        station: "鶴橋",
        why: "買小份回公寓當宵夜最適合，跟你住新今宮有洗衣機、冰箱的條件很搭。",
        order: "白菜泡菜、山芋泡菜、韓式小菜",
        query: "豊田商店 本店 鶴橋",
      },
      {
        name: "オモニ 本店",
        kind: "御好燒 / 韓日下町感",
        station: "鶴橋 / 桃谷",
        why: "如果燒肉太重，這間比較像坐下來吃熱食的備案。",
        order: "御好燒、焼きそば、すじねぎ",
        query: "オモニ 本店 大阪",
      },
    ],
    tips: ["衣服可能會有燒肉味，剛好住宿有洗衣機。", "從近鐵奈良回來可直接在鶴橋下車。"],
  },
  {
    key: "kizu",
    tab: "木津 / 黑門",
    area: "市場早午餐、回程日上午",
    title: "木津市場 / 黑門推薦",
    image: images.dotonbori,
    intro: "木津市場比黑門更貼近批發市場感；黑門比較觀光，但補買和拍照順。市場日不要拖太晚，也不要拖大行李進去。",
    restaurants: [
      {
        name: "天ぷら 大吉 なんば店",
        kind: "天婦羅 / 市場系",
        station: "難波 / 木津市場旁",
        why: "想吃市場感但又想坐下來，這間比一路買觀光小吃穩。",
        order: "蝦、穴子、蛤蜊味噌湯",
        query: "天ぷら 大吉 なんば店",
      },
      {
        name: "木津市場",
        kind: "市場巡店",
        station: "大國町",
        why: "不硬指定單店，先看當天開什麼。適合早上走一圈吃海鮮、玉子燒、定食。",
        order: "海鮮定食、玉子燒、水果",
        query: "大阪木津卸売市場 食堂",
      },
      {
        name: "黒門 三平",
        kind: "海鮮 / 市場食堂",
        station: "日本橋",
        why: "黑門裡相對好理解的海鮮選項。價格觀光區，適合少量吃，不建議豪賭大餐。",
        order: "海鮮丼、握壽司、小份刺身",
        query: "黒門 三平 大阪",
      },
      {
        name: "まぐろや黒銀 黒門市場本店",
        kind: "鮪魚 / 站食",
        station: "日本橋",
        why: "黑門很觀光，但這種小份鮪魚可以當路過補食，吃完就走。",
        order: "赤身、中トロ、鮪魚握壽司",
        query: "まぐろや黒銀 黒門市場本店",
      },
    ],
    tips: ["木津市場早上比較有感，回程日不要拖到太晚。", "黑門偏觀光，少量吃、不要把整餐預算壓在市場。"],
  },
  {
    key: "nara",
    tab: "奈良",
    area: "餵鹿、商店街、午餐",
    title: "奈良推薦",
    image: images.nara,
    intro: "近鐵奈良下車後步行就能串奈良公園、東大寺、東向商店街。餵鹿好玩，但鹿是野生動物。",
    restaurants: [
      {
        name: "志津香 公園店",
        kind: "釜飯",
        station: "近鐵奈良 / 奈良公園",
        why: "奈良午餐很合理，熱熱一鍋很適合 11 月底。熱門時段可能等，當主方案但留備案。",
        order: "奈良七種釜飯、雞肉釜飯",
        query: "志津香 公園店 奈良",
      },
      {
        name: "柿の葉ずし 平宗 奈良店",
        kind: "柿葉壽司",
        station: "近鐵奈良",
        why: "奈良特色，適合買小份路上吃或當回大阪前補給。",
        order: "鯖、鮭、綜合柿葉壽司",
        query: "柿の葉ずし 平宗 奈良店",
      },
      {
        name: "中谷堂",
        kind: "草餅 / 點心",
        station: "近鐵奈良",
        why: "觀光但有地方性，適合當下午小點。不要為了看搗麻糬卡太久。",
        order: "よもぎ餅",
        query: "中谷堂 奈良",
      },
      {
        name: "春日荷茶屋",
        kind: "茶粥 / 和食",
        station: "春日大社",
        why: "如果你們走到春日大社，這比硬回商店街找餐廳更順。",
        order: "萬葉粥、季節茶點",
        query: "春日荷茶屋 奈良",
      },
    ],
    tips: ["鹿餅拿出來後不要逗鹿，餵完攤手讓牠知道沒了。", "秋冬傍晚涼，奈良步行日要穿好走的鞋。"],
  },
  {
    key: "nagai",
    tab: "長居 / USJ日",
    area: "teamLab 夜晚、USJ 回程",
    title: "長居 / USJ 日推薦",
    image: images.usj,
    intro: "USJ 園內和 CityWalk 很多是觀光餐。這天我會把吃飯當體力管理：園內簡單補給，晚上看你們累不累再決定回新今宮或繞去西九條。",
    restaurants: [
      {
        name: "釜ひろ",
        kind: "手打烏龍麵",
        station: "鶴ヶ丘 / 長居",
        why: "teamLab 長居日很適合，吃完再去植物園，路線不繞。",
        order: "竹輪天ぶっかけ、咖哩烏龍",
        query: "釜ひろ 大阪",
      },
      {
        name: "又三郎",
        kind: "熟成肉 / 漂亮飯",
        station: "長居",
        why: "這是比較漂亮、預算高一點的選項；想把某一餐吃好可以放這裡。",
        order: "熟成肉、午晚套餐",
        query: "又三郎 長居 大阪",
      },
      {
        name: "Universal CityWalk Osaka",
        kind: "USJ 日補給",
        station: "Universal City",
        why: "不是 local，但 USJ 日最實際。重點是不要餓到影響玩設施。",
        order: "快速吃、快速回園或回飯店",
        query: "Universal CityWalk Osaka restaurants",
      },
      {
        name: "西九條站周邊居酒屋",
        kind: "USJ 回程備案",
        station: "西九條",
        why: "如果 CityWalk 太觀光，回程在西九條找站邊小店，會比園區晚餐更像大阪。",
        order: "串燒、炸物、小菜",
        query: "西九条 居酒屋 大阪",
      },
    ],
    tips: ["USJ 日不要為了吃名店離園太遠，體力比較重要。", "teamLab 是夜間戶外，吃飯和保暖都要提前處理。"],
  },
];

let activeDay = Number(localStorage.getItem("activeDay") || 0);
let activeMode = localStorage.getItem("activeMode") || "balanced";
let choices = JSON.parse(localStorage.getItem("osakaFlexChoices") || "{}");

const dayTabs = document.querySelectorAll(".day-tab");
const modeButtons = document.querySelectorAll(".mode-button");
const slotList = document.querySelector("#slotList");
const selectedSummary = document.querySelector("#selectedSummary");
const resetChoices = document.querySelector("#resetChoices");

function choiceKey(dayIndex, slotIndex) {
  return `${dayIndex}-${slotIndex}`;
}

function modeFallbackIndex(slot) {
  if (activeMode === "balanced") return 0;
  if (activeMode === "rain") return Math.min(1, slot.options.length - 1);
  return Math.min(slot.options.length - 1, slot.options.length > 2 ? 2 : 1);
}

function currentOption(dayIndex, slotIndex, slot) {
  const saved = choices[choiceKey(dayIndex, slotIndex)];
  return Number.isInteger(saved) && saved < slot.options.length ? saved : modeFallbackIndex(slot);
}

function renderDay() {
  const day = days[activeDay];
  document.querySelector("#dayKicker").textContent = day.kicker;
  document.querySelector("#dayTitle").textContent = day.title;
  document.querySelector("#dayNote").textContent = day.note;
  document.querySelector("#dayBase").textContent = day.base;
  document.querySelector("#dayTransport").textContent = day.transport;

  dayTabs.forEach((tab) => tab.classList.toggle("is-active", Number(tab.dataset.day) === activeDay));
  modeButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.mode === activeMode));

  slotList.innerHTML = day.slots
    .map((slot, slotIndex) => {
      const selectedIndex = currentOption(activeDay, slotIndex, slot);
      const selected = slot.options[selectedIndex];
      const options = slot.options
        .map(
          (option, optionIndex) => `
            <button class="option-button ${optionIndex === selectedIndex ? "is-active" : ""}" data-slot="${slotIndex}" data-option="${optionIndex}">
              ${optionIndex === 0 ? "主方案" : `備案 ${optionIndex}`}
            </button>
          `
        )
        .join("");
      return `
        <article class="slot-card">
          <img src="${slot.image}" alt="${selected.title}">
          <div class="slot-content">
            <div class="slot-topline">
              <span class="slot-time">${slot.time}</span>
              <span class="buffer-pill">${slot.buffer}</span>
            </div>
            <div class="option-row">${options}</div>
            <h4>${selected.title}</h4>
            <p>${selected.body}</p>
            <div class="detail-grid">
              <div>
                <span>吃法</span>
                <ul class="mini-list">
                  ${selected.eats.map((eat) => `<li>${eat}</li>`).join("")}
                </ul>
              </div>
              <div>
                <span>交通</span>
                <p>${selected.transport}</p>
              </div>
              <div>
                <span>步行規則</span>
                <p>${selected.walk}</p>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll(".option-button").forEach((button) => {
    button.addEventListener("click", () => {
      choices[choiceKey(activeDay, Number(button.dataset.slot))] = Number(button.dataset.option);
      localStorage.setItem("osakaFlexChoices", JSON.stringify(choices));
      renderDay();
    });
  });

  renderSummary();
}

function renderSummary() {
  const day = days[activeDay];
  selectedSummary.innerHTML = day.slots
    .map((slot, index) => {
      const selected = slot.options[currentOption(activeDay, index, slot)];
      return `
        <article>
          <span>${slot.time}</span>
          <strong>${selected.title}</strong>
        </article>
      `;
    })
    .join("");
}

dayTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeDay = Number(tab.dataset.day);
    localStorage.setItem("activeDay", String(activeDay));
    renderDay();
  });
});

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeMode = button.dataset.mode;
    localStorage.setItem("activeMode", activeMode);
    renderDay();
  });
});

resetChoices.addEventListener("click", () => {
  const prefix = `${activeDay}-`;
  choices = Object.fromEntries(Object.entries(choices).filter(([key]) => !key.startsWith(prefix)));
  localStorage.setItem("osakaFlexChoices", JSON.stringify(choices));
  renderDay();
});

const foodTabs = document.querySelector("#foodTabs");
let activeFood = localStorage.getItem("activeFood") || foodGuides[0].key;

function renderFood() {
  const guide = foodGuides.find((item) => item.key === activeFood) || foodGuides[0];
  foodTabs.innerHTML = foodGuides
    .map(
      (item) => `
        <button class="food-tab ${item.key === guide.key ? "is-active" : ""}" data-food="${item.key}">
          ${item.tab}
        </button>
      `
    )
    .join("");
  document.querySelector("#foodImage").src = guide.image;
  document.querySelector("#foodImage").alt = guide.title;
  document.querySelector("#foodArea").textContent = guide.area;
  document.querySelector("#foodTitle").textContent = guide.title;
  document.querySelector("#foodIntro").textContent = guide.intro;
  document.querySelector("#foodDishes").innerHTML = guide.restaurants
    .map((restaurant) => {
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.query)}`;
      return `
        <a class="restaurant-card" href="${mapsUrl}" target="_blank" rel="noreferrer">
          <span class="restaurant-kind">${restaurant.kind}</span>
          <strong>${restaurant.name}</strong>
          <em>${restaurant.station}</em>
          <p>${restaurant.why}</p>
          <span class="restaurant-order">建議：${restaurant.order}</span>
        </a>
      `;
    })
    .join("");
  document.querySelector("#foodTips").innerHTML = guide.tips.map((tip) => `<span>${tip}</span>`).join("");

  document.querySelectorAll(".food-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      activeFood = tab.dataset.food;
      localStorage.setItem("activeFood", activeFood);
      renderFood();
    });
  });
}

renderDay();
renderFood();
