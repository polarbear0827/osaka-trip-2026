function image(url, alt, sourceName, sourceUrl, subject) {
  return { url, alt, sourceName, sourceUrl, subject };
}

const images = {
  dotonbori: image(
    "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/4/47/Dotonbori%2C_Osaka%2C_at_night%2C_November_2016.jpg/1280px-Dotonbori%2C_Osaka%2C_at_night%2C_November_2016.jpg&w=1280",
    "大阪道頓堀夜景與戎橋招牌",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Dotonbori,_Osaka,_at_night,_November_2016.jpg",
    "道頓堀"
  ),
  shinsekai: image(
    "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/9/95/Shinsekai_and_Tsutenkaku_at_night_2019-04-12.jpg/1280px-Shinsekai_and_Tsutenkaku_at_night_2019-04-12.jpg&w=1280",
    "大阪新世界與通天閣夜景",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Shinsekai_and_Tsutenkaku_at_night_2019-04-12.jpg",
    "新世界"
  ),
  nara: image(
    "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/2/29/Deer_at_nara_park_1.jpg/1280px-Deer_at_nara_park_1.jpg&w=1280",
    "奈良公園的鹿",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Deer_at_nara_park_1.jpg",
    "奈良公園"
  ),
  todaiji: image(
    "https://commons.wikimedia.org/wiki/Special:FilePath/Daibutsu-den_in_Todaiji_Nara01bs3200.jpg?width=1280",
    "奈良東大寺大佛殿",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Daibutsu-den_in_Todaiji_Nara01bs3200.jpg",
    "東大寺"
  ),
  kintetsuNara: image(
    "https://commons.wikimedia.org/wiki/Special:FilePath/Kintetsu_Nara_Station_20110409_(8406710279).jpg?width=1280",
    "近鐵奈良站外觀",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Kintetsu_Nara_Station_20110409_(8406710279).jpg",
    "近鐵奈良"
  ),
  spaWorld: image(
    "https://commons.wikimedia.org/wiki/Special:FilePath/SpaWorld.jpg?width=1280",
    "大阪 SpaWorld 建築外觀",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:SpaWorld.jpg",
    "SpaWorld"
  ),
  ramenOsaka: image(
    "https://commons.wikimedia.org/wiki/Special:FilePath/A_bowl_of_ramen_in_Osaka%2C_Japan.jpg?width=1280",
    "大阪拉麵實拍",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:A_bowl_of_ramen_in_Osaka,_Japan.jpg",
    "大阪拉麵"
  ),
  ramenShio: image(
    "https://commons.wikimedia.org/wiki/Special:FilePath/Bowl_of_shio_ramen_with_pork.jpg?width=1280",
    "日式鹽味叉燒拉麵實拍",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Bowl_of_shio_ramen_with_pork.jpg",
    "鹽味拉麵"
  ),
  owl: image(
    "https://commons.wikimedia.org/wiki/Special:FilePath/Barn_Owl_R1_1749.jpg?width=1280",
    "貓頭鷹近照（咖啡廳體驗示意）",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Barn_Owl_R1_1749.jpg",
    "貓頭鷹（示意）"
  ),
  kaiyukan: image(
    "https://commons.wikimedia.org/wiki/Special:FilePath/Osaka_Kaiyukan01s3872.jpg?width=1280",
    "大阪海遊館太平洋水槽",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Osaka_Kaiyukan01s3872.jpg",
    "大阪海遊館"
  ),
  whaleShark: image(
    "https://commons.wikimedia.org/wiki/Special:FilePath/Whale_Shark_-_Osaka_Aquarium.jpg?width=1280",
    "大阪海遊館鯨鯊",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Whale_Shark_-_Osaka_Aquarium.jpg",
    "海遊館鯨鯊"
  ),
  tempozan: image(
    "https://commons.wikimedia.org/wiki/Special:FilePath/Osaka_tempozan_giant_ferris_wheel.jpg?width=1280",
    "大阪天保山摩天輪",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Osaka_tempozan_giant_ferris_wheel.jpg",
    "天保山"
  ),
  umeda: image(
    "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/7/77/Osaka_Umeda_Sky_Building_Panoramablick_05.jpg/1280px-Osaka_Umeda_Sky_Building_Panoramablick_05.jpg&w=1280",
    "大阪梅田空中庭園視角",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Osaka_Umeda_Sky_Building_Panoramablick_05.jpg",
    "梅田"
  ),
  pokemon: image(
    "https://shop.pokemon.co.jp/en/shop/pokemoncenter-osakadx/images/mv-pokemoncenter-osakadx-001.webp",
    "Pokémon Center OSAKA DX 官方主視覺",
    "Pokémon Center",
    "https://shop.pokemon.co.jp/en/shop/pokemoncenter-osakadx/",
    "Pokémon Center OSAKA DX"
  ),
  teamlab: image(
    "https://assets.team-lab.com/b5EBo9Uo-OK6SM09ZTkEZQ/9cf18fad-ce15-4688-c57a-4c886f573f00/width=1200,format=jpeg",
    "teamLab Botanical Garden Osaka 夜間戶外作品",
    "teamLab",
    "https://www.teamlab.art/e/botanicalgarden/",
    "teamLab Botanical Garden Osaka"
  ),
  nambaYasaka: image(
    "https://commons.wikimedia.org/wiki/Special:FilePath/Namba-yasaka-jinja%20shishibutai.jpg?width=1280",
    "難波八阪神社獅子殿",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Namba-yasaka-jinja_shishibutai.jpg",
    "難波八阪神社"
  ),
  doguyasuji: image(
    "https://commons.wikimedia.org/wiki/Special:FilePath/Doguyasuji_South.jpg?width=1280",
    "千日前道具屋筋商店街",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Doguyasuji_South.jpg",
    "道具屋筋"
  ),
  hozenji: image(
    "https://commons.wikimedia.org/wiki/Special:FilePath/Hozenji_Yokocho_at_night.jpg?width=1280",
    "大阪法善寺橫丁夜景",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Hozenji_Yokocho_at_night.jpg",
    "法善寺橫丁"
  ),
  nambaParks: image(
    "https://commons.wikimedia.org/wiki/Special:FilePath/Namba_Parks.jpg?width=1280",
    "大阪 Namba Parks 商業設施",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Namba_Parks.jpg",
    "Namba Parks"
  ),
  nankaiNamba: image(
    "https://commons.wikimedia.org/wiki/Special:FilePath/Nankai_namba_station05s3200.jpg?width=1280",
    "南海難波站月台",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Nankai_namba_station05s3200.jpg",
    "南海難波"
  ),
  kixT2: image(
    "https://commons.wikimedia.org/wiki/Special:FilePath/Kansai_International_Airport_Terminal2.JPG?width=1280",
    "關西國際機場第二航廈",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Kansai_International_Airport_Terminal2.JPG",
    "KIX T2"
  ),
  daimaru: image(
    "https://commons.wikimedia.org/wiki/Special:FilePath/DAIMARU_Shinsaibashi_store_Osaka_Japan01-r.jpg?width=1280",
    "大丸心齋橋店外觀",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:DAIMARU_Shinsaibashi_store_Osaka_Japan01-r.jpg",
    "大丸心齋橋"
  ),
  amerikamura: image(
    "https://commons.wikimedia.org/wiki/Special:FilePath/JP-osaka-amerikamura.jpg?width=1280",
    "大阪美國村街景",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:JP-osaka-amerikamura.jpg",
    "美國村"
  ),
  imamiyaEbisu: image(
    "https://commons.wikimedia.org/wiki/Special:FilePath/Imamiya-Ebisu-jinja_Torii.jpg?width=1280",
    "大阪今宮戎神社鳥居",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Imamiya-Ebisu-jinja_Torii.jpg",
    "今宮戎神社"
  ),
  sumiyoshiTaisha: image(
    "https://commons.wikimedia.org/wiki/Special:FilePath/Sumiyoshi_Taisha_Taikobashi_(drum_bridge)_1.jpg?width=1280",
    "大阪住吉大社反橋",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Sumiyoshi_Taisha_Taikobashi_(drum_bridge)_1.jpg",
    "住吉大社"
  ),
};

const fallbackImage = images.dotonbori;
const hiyoriHotelName = "Hiyori Hotel Osaka Shinsekai";
const hiyoriHotelAddress = "2-10-9 Ebisuhigashi, Naniwa-ku, Osaka";
const hiyoriHotelAddressJa = "大阪府大阪市浪速区恵美須東2-10-9";

const mapSearch = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const mapDirections = (origin, destination) =>
  `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    origin
  )}&destination=${encodeURIComponent(destination)}&travelmode=transit`;

function mediaUrl(asset) {
  return (asset && asset.url) || fallbackImage.url;
}

function mediaAlt(asset, fallback = "大阪行程照片") {
  return escapeText((asset && asset.alt) || fallback);
}

function mediaSource(asset) {
  if (!asset?.sourceName || !asset?.sourceUrl) return "";
  return `<a href="${asset.sourceUrl}" target="_blank" rel="noreferrer">${escapeText(asset.sourceName)}</a>`;
}

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
    title: `後三晚：${hiyoriHotelName}`,
    dates: "11/29-12/02",
    address: hiyoriHotelAddressJa,
    role: "位在新世界核心，JR 新今宮東口與 Metro 動物園前 5 號出口都約步行 2 分鐘；通天閣約 3 分鐘、SpaWorld 約 2 分鐘。館內 1 樓有投幣洗衣與 24 小時微波爐。",
    stations: ["JR 新今宮（東口）", "動物園前（5 號出口）", "南海新今宮（西口）", "阪堺 新今宮駅前"],
    mealPlan: "已加購 CONA 早餐",
    perks: [
      ["06:00-12:00", "免費晨間咖啡", "不想吃太多時，可搭配超商飯糰或三明治。"],
      ["07:00-10:00", "CONA 和洋早餐 buffet", "已加購；L.O. 09:30。大阪名物與菜色依當日供應。"],
      ["Check-in", "每人挑一件 Happy Present", "入浴劑、面膜等選項依現場供應。"],
      ["12:00-18:00", "免費迎賓飲料", "咖啡、茶飲、抹茶拿鐵等依當日供應。"],
      ["18:00-19:30", "免費 Happy Hour", "生啤酒或日本酒，依現場供應。"],
      ["20:00-22:00", "免費日和高湯茶泡飯", "L.O. 21:30；配料與其他小食依當日供應。"],
    ],
    sourceLinks: [
      ["飯店官方早餐", "https://shinsekai.hiyori-hotel.jp/breakfast/"],
      ["飯店官方服務", "https://shinsekai.hiyori-hotel.jp/services/"],
    ],
    links: [
      ["飯店 Google Maps", hiyoriHotelName],
      ["附近便利商店", `convenience store near ${hiyoriHotelName}`],
      ["24 小時店家", `24 hour store near ${hiyoriHotelName}`],
      ["藥妝補貨", `drugstore near ${hiyoriHotelName}`],
      ["宵夜小店", `late night food near ${hiyoriHotelName}`],
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
      "搭南海往難波，抵達後先放行李，不要拖著行李進鬧區。",
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
    title: "難波八阪神社 / 千日前道具屋筋商店街短散步",
    area: "難波",
    image: images.nambaYasaka,
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
    id: "d1-hozenji-sweets",
    day: 0,
    type: "backup",
    time: "16:45-18:00",
    title: "備案：法善寺、水掛不動、日式甘味",
    area: "法善寺 / 千日前",
    image: images.hozenji,
    start: "2 Chome-3-9 Namba Osaka",
    end: "Hozenji Temple Osaka",
    mapQuery: "Hozenji Temple Osaka",
    duration: "45-60 分鐘，參拜、巷弄和甜點。",
    summary: "不想再走神社與廚具街，就改走法善寺橫丁。看水掛不動明王，再選一份大阪老甘味。",
    transit: "從難波住宿步行約 10-15 分鐘；最近為 Osaka Metro 難波站與近鐵日本橋站。",
    steps: ["先進法善寺參拜水掛不動明王。", "穿過石疊橫丁看老店與燈籠。", "甘味只選一間，留肚子給晚餐。"],
    foods: [
      food("夫婦善哉", "夫婦善哉 法善寺", "兩碗小紅豆湯，很適合兩人旅行。"),
      food("浪芳庵 本店", "浪芳庵 本店", "烤麻糬與和菓子。"),
      food("甘党まえだ なんばウォーク店", "甘党まえだ なんばウォーク店", "叭好燒、紅豆湯與抹茶甘味。"),
      food("鳴門鯛焼本舗 千日前相合橋店", "鳴門鯛焼本舗 千日前相合橋店", "鯢魚燒適合邊走邊分食。"),
      food("道頓堀今井 本店", "道頓堀今井 本店", "不想吃甜就改狐狸烏龍麵。"),
    ],
    tips: ["法善寺正式日文是「法善寺（ほうぜんじ）」，水掛不動在寺內。"],
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
    title: "難波退房 → Hiyori Hotel 放行李",
    area: "難波 / 新今宮",
    image: images.shinsekai,
    start: "2 Chome-3-9 Namba Osaka",
    end: hiyoriHotelAddress,
    mapQuery: hiyoriHotelAddress,
    duration: "90 分鐘含退房、移動和寄放處理。",
    summary: `先到 ${hiyoriHotelName} 寄放行李。飯店靠 JR 新今宮東口與動物園前 5 號出口，換住宿後可直接走去今宮戎神社。`,
    transit: "從南海なんば搭南海本線到新今宮，走西口約 6 分鐘到飯店；或搭御堂筋線到動物園前，走 5 號出口約 2 分鐘。",
    steps: ["退房前把奈良日小包整理好。", "拖行李先到 Hiyori Hotel 櫃台寄放。", "記住 JR 新今宮東口與動物園前 5 號出口，晚間回飯店最好辨認。"],
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
    summary: "如果飯店寄放行李臨時不順，行李先留在難波站，奈良回來再取。",
    transit: "住宿步行到難波站置物櫃，接著從大阪難波搭近鐵去奈良。",
    steps: ["找大站置物櫃，比拖去飯店再折返更省事。", "拍下置物櫃位置和號碼。"],
    foods: [
      food("Namba Walk 早餐", "Namba Walk breakfast", "地下街早餐好找。"),
      food("咖啡外帶", "coffee near Osaka Namba Station", "近鐵前補咖啡。"),
    ],
    tips: ["這張備案適合入住規則不確定時使用。"],
  },
  {
    id: "d2-imamiya-ebisu",
    day: 1,
    type: "main",
    time: "10:15-10:55",
    title: "今宮戎神社：換住宿後順路參拜",
    area: "新世界 / 今宮戎",
    image: images.imamiyaEbisu,
    start: hiyoriHotelAddress,
    end: "Imamiya Ebisu Shrine Osaka",
    mapQuery: "Imamiya Ebisu Shrine Osaka",
    duration: "30-40 分鐘，短參拜、看境內和御守即可。",
    summary: "今宮戎神社是大阪商業信仰很有代表性的神社，從新飯店步行約 10-12 分鐘，剛好放在寄行李與奈良之間。",
    transit: "從 Hiyori Hotel 沿新世界往北，步行到今宮戎神社；參拜後可走到大國町或惠美須町搭 Metro 前往日本橋 / 難波轉近鐵奈良線。",
    steps: ["飯店寄放行李後只帶小包出發。", "進鳥居前先稍微停步，手水舍簡單淨手後參拜。", "參拜後不要逗留太久，往大國町 / 日本橋方向接奈良交通。"],
    foods: [
      food("喫茶ドレミ", "喫茶ドレミ 新世界", "若早餐還沒吃飽，可在新世界先補一點。"),
      food("今宮戎站周邊咖啡", "今宮戎駅 カフェ", "短暫休息，不影響奈良出發。"),
    ],
    tips: ["正式名稱是「今宮戎神社（いまみやえびすじんじゃ）」，不要和京都的今宮神社混在一起。"],
  },
  {
    id: "d2-skip-shrine",
    day: 1,
    type: "backup",
    time: "10:15-10:45",
    title: "備案：行李處理較久就直接去奈良",
    area: "新世界 / 奈良",
    image: images.kintetsuNara,
    start: hiyoriHotelAddress,
    end: "Kintetsu Nara Station",
    mapQuery: "Kintetsu Nara Station",
    nextActivityId: "d2-nara-park",
    duration: "省下約 30 分鐘，保留奈良步行時間。",
    summary: "如果寄放、退房或早餐花比較久，今宮戎留到回飯店附近散步，不延誤奈良主線。",
    transit: "動物園前搭堺筋線到日本橋，步行轉近鐵日本橋；搭近鐵奈良線到近鐵奈良。也可依 Google Maps 當下班次走難波轉乘。",
    steps: ["從飯店走回動物園前 5 號出口附近。", "搭堺筋線到日本橋，轉近鐵奈良線。", "抵達近鐵奈良後才開始午餐和餵鹿。"],
    foods: [
      food("近鐵奈良站飯糰", "Kintetsu Nara Station onigiri", "交通途中補給。"),
      food("東向商店街午餐", "Higashimuki Shopping Street lunch Nara", "到奈良再吃，不在大阪拖時間。"),
    ],
    tips: ["這張備案的目的就是把奈良留完整。"],
  },
  {
    id: "d2-nara-park",
    day: 1,
    type: "main",
    time: "11:15-16:15",
    title: "近鐵奈良 → 奈良公園 → 東大寺",
    area: "奈良",
    image: images.nara,
    start: hiyoriHotelAddress,
    end: "Todaiji Temple Nara",
    mapQuery: "Todaiji Temple Nara",
    duration: "4-5 小時，含午餐和餵鹿。",
    summary: "從大阪難波或近鐵日本橋搭近鐵到近鐵奈良。出站後先走奈良公園，沿路餵鹿，再走到東大寺。",
    transit: "從動物園前搭堺筋線到日本橋，轉近鐵奈良線到近鐵奈良；出站後用步行串景點。",
    steps: [
      "抵達近鐵奈良後，先看 Google Maps 往奈良公園方向。",
      "鹿餅買了就快點餵，不要拿在手上逗鹿。",
      "體力夠就走到東大寺；不夠就只做公園和商店街。",
      "回大阪時搭近鐵奈良線往大阪難波，在大阪難波下車就能接晚餐。"
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
    id: "d2-namba-ramen-spa",
    day: 1,
    type: "main",
    time: "17:00-22:00",
    title: "奈良 → 難波日本食 → SpaWorld 泡湯",
    area: "難波日本食 / 新世界",
    image: images.hozenji,
    start: "Kintetsu Nara Station",
    end: "SpaWorld Osaka",
    mapQuery: "SpaWorld Osaka",
    duration: "晚餐 90 分鐘，泡湯 90-120 分鐘。",
    summary: "奈良回程先回大阪難波，晚餐改成壽司、烏龍麵、炸豬排或大阪燒四選一。吃完再回飯店旁泡湯。",
    transit: "近鐵奈良搭近鐵奈良線到大阪難波；晚餐後從 Metro 難波站搭御堂筋線到動物園前，5 號出口後步行約 2 分鐘到飯店 / SpaWorld。",
    steps: ["近鐵奈良站搭往大阪難波方向的車。", "先選料理類型，不要為單一名店排太久。", "吃完搭御堂筋線回動物園前。", "還有體力再去 SpaWorld，太累就直接回房。"],
    foods: [
      food("道頓堀今井 本店", "道頓堀今井 本店", "大阪高湯狐狸烏龍麵，奈良後吃很舒服。"),
      food("ときすし 本店", "ときすし 本店 大阪", "裏難波壽司，坐下來慢慢吃。"),
      food("とんかつ吉兆", "とんかつ吉兆 大阪難波", "老派炸豬排定食。"),
      food("福太郎 本店", "福太郎 本店 大阪", "大阪燒與蔥燒，想補粉物就選。"),
      food("正宗屋 相合橋", "正宗屋 相合橋", "土手燒、關東煮與大眾酒場感。"),
      food("SpaWorld", "SpaWorld Osaka", "泡完買牛奶或飲料收尾。"),
    ],
    tips: ["這天已經有奈良大量步行，晚餐以坐得下、吃得舒服為優先。"],
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
    summary: "奈良走到累就不再回難波吃晚餐，直接回住宿附近吃新世界。",
    transit: "奈良回難波 / 日本橋，再回新今宮；或依 Google Maps 當下轉乘。",
    steps: ["先回新今宮放東西。", "新世界找串炸或鍋物。", "回房洗衣。"],
    foods: [
      food("八重勝", "八重勝 新世界 大阪", "新世界老派串炸代表。"),
      food("串かつ てんぐ", "串かつ てんぐ 新世界 大阪", "排隊較可控時可選。"),
      food("なべや", "なべや 西成 大阪", "冷天鍋物，坐下來吃比較恢復。"),
    ],
    tips: ["這張備案比硬撐難波排隊更適合腿痠日。"],
  },
  {
    id: "d3-kaiyukan",
    day: 2,
    type: "main",
    time: "10:00-14:00",
    title: "大阪海遊館 + 天保山散步",
    area: "大阪港 / 海遊館",
    image: images.whaleShark,
    start: hiyoriHotelAddress,
    end: "Osaka Aquarium Kaiyukan",
    mapQuery: "Osaka Aquarium Kaiyukan",
    duration: "交通約 35-45 分鐘，館內 2-2.5 小時，天保山周邊 45 分鐘。",
    summary: "把 11/30 改成水族館日：從新世界搭 Metro 到大阪港，看太平洋水槽與鯨鯊，午餐在天保山周邊解決。",
    transit: "從動物園前搭御堂筋線到本町，轉中央線往大阪港；在大阪港站下車，1 號出口後步行約 5 分鐘到海遊館。",
    steps: ["出發前先看海遊館官方營業時間與時段票。", "大阪港站 1 號出口出來後照 Google Maps 往海遊館步行。", "館內先照動線慢慢下樓，不要只拍鯨鯊就走。", "出館後看體力，天保山摩天輪、港邊散步或咖啡三選一。"],
    foods: [
      food("Kuma Kafe", "Kuma Kafe Osaka", "海遊館附近評價穩的漢堡與咖啡，想坐下來休息可查。"),
      food("Tempozan Marketplace", "Tempozan Marketplace restaurants", "天保山市場街餐廳集合，兩個人想吃不同東西時好用。"),
      food("なにわ食いしんぼ横丁", "Naniwa Kuishinbo Yokocho Tempozan", "昭和風餐飲街，可找大阪燒、洋食或甜點。"),
      food("Mel's Drive-In Osaka", "Mel's Drive-In Osaka Aquarium", "想吃西式簡餐可當備案。"),
      food("大阪港咖啡", "Osakako Station cafe", "出館後找咖啡，不用餓著接下午行程。"),
      food("天保山冰淇淋", "Tempozan ice cream Osaka", "逛完港邊想吃甜的再買。"),
    ],
    tips: ["這天不要再安排拉麵午餐；海遊館比拉麵更需要完整停留時間。"],
  },
  {
    id: "d3-tempozan-slow",
    day: 2,
    type: "backup",
    time: "10:30-14:00",
    title: "備案：海遊館時段太滿就慢逛天保山",
    area: "大阪港 / 天保山",
    image: images.tempozan,
    start: hiyoriHotelAddress,
    end: "Tempozan Marketplace Osaka",
    mapQuery: "Tempozan Marketplace Osaka",
    duration: "2.5-3 小時，少排隊、少趕路。",
    summary: "若海遊館票太晚、天氣不好或人潮太多，就改成天保山摩天輪、Marketplace、港邊咖啡的鬆散版。",
    transit: "從動物園前搭御堂筋線到本町，轉中央線到大阪港；1 號出口後步行到天保山 Marketplace。",
    steps: ["先確認海遊館是否有適合時段。", "沒有就不要硬擠，改天保山 Marketplace 午餐。", "港邊散步或搭摩天輪，留體力給下午千日前。"],
    foods: [
      food("Tempozan Marketplace", "Tempozan Marketplace restaurants", "室內餐廳多，雨天很順。"),
      food("なにわ食いしんぼ横丁", "Naniwa Kuishinbo Yokocho Tempozan", "昭和風餐飲街。"),
      food("Kuma Kafe", "Kuma Kafe Osaka", "咖啡、漢堡與甜點。"),
      food("海遊館周邊章魚燒", "Kaiyukan takoyaki", "想補大阪味可現場找。"),
      food("大阪港站周邊定食", "Osakako Station lunch", "人潮太多時回車站附近找簡單午餐。"),
    ],
    tips: ["這張備案的目的不是取代海遊館，而是避免票券時段不漂亮時卡住整天。"],
  },
  {
    id: "d3-fukushima-ramen",
    day: 2,
    type: "main",
    time: "10:30-13:30",
    title: "福島拉麵午餐 → 梅田短散步",
    area: "福島拉麵 / 梅田",
    image: images.ramenOsaka,
    start: hiyoriHotelAddress,
    end: "JR Fukushima Station Osaka",
    mapQuery: "JR Fukushima Station Osaka ramen",
    duration: "交通約 25 分鐘，排隊與用餐抓 90-120 分鐘。",
    summary: "早上在 CONA 慢慢吃已加購早餐，中午去大阪拉麵密度很高的福島。鴨湯醬油、雞白湯、魚介與豚骨只挑一碗。",
    transit: "從 JR 新今宮東口搭大阪環狀線外回到福島站；出站後「燃えよ麺助」約步行 1 分鐘，其他店依 Google Maps 步行。",
    steps: ["09:00 左右到 1 樓 CONA 吃早餐，午餐要吃拉麵就不要吃太撐。", "從 JR 新今宮東口進站，搭大阪環狀線外回往大阪 / 福島方向。", "燃えよ麺助排太久就直接換福島同區第二間，不為一碗空等兩小時。", "吃完可沿福島散步到梅田，也可搭 JR 一站到大阪站。"],
    foods: [
      food("燃えよ麺助", "燃えよ麺助 大阪福島", "紀州鴨醬油與金色貝湯；排隊常見。"),
      food("らーめん人生JET", "らーめん人生JET 福島", "大阪人氣雞白湯，濃鬱但有雞鮮味。"),
      food("烈志笑魚油 麺香房 三く", "烈志笑魚油 麺香房 三く", "魚介風味拉麵，想吃海鮮系湯頭可選。"),
      food("極濃豚骨らーめん 小僧", "極濃豚骨らーめん 小僧 福島", "非常濃的豚骨，口味重再選。"),
      food("つけ麺みさわ 本店", "つけ麺みさわ 福島大阪", "想換沾麵時的備案。"),
      food("麦と麺助", "麦と麺助 中津", "雞與魚介清湯；若後續改去中津再吃。"),
    ],
    tips: ["這段是選店池，不是要連吃六碗；現場以排隊、休息日和想吃的湯頭決定。"],
  },
  {
    id: "d3-namba-ramen",
    day: 2,
    type: "backup",
    time: "10:30-13:30",
    title: "備案：不跑梅田，難波拉麵選一碗",
    area: "難波拉麵",
    image: images.ramenShio,
    start: hiyoriHotelAddress,
    end: "Namba Station Osaka",
    mapQuery: "Namba Station Osaka ramen",
    duration: "交通約 10 分鐘，用餐與散步 2 小時。",
    summary: "奈良後想睡飽就不跑福島，難波同樣有蛤蜊、牡蠣、高井田黑醬油、雞白湯與豚骨。",
    transit: "從動物園前 5 號出口附近搭御堂筋線到難波；出站後依選定店家步行 2-12 分鐘。",
    steps: ["先看想吃的湯頭，再挑店。", "なにわ麺次郎在近鐵改札內，沒有要進站就不要硬找。", "午後要去千日前，吃完不需要回飯店。"],
    foods: [
      food("なにわ麺次郎", "なにわ麺次郎 大阪難波", "近鐵大阪難波站改札內，蛤蜊鹽味。"),
      food("麺屋丈六 難波店", "麺屋丈六 難波店", "大阪高井田系黑醬油中華麵。"),
      food("NEXT□", "NEXT□ 難波", "牡蠣白湯、清湯與沾麵。"),
      food("花丸軒 法善寺店", "花丸軒 法善寺店", "大塊叉燒豚骨，接法善寺最順。"),
      food("ぼっこ志", "ぼっこ志 難波", "濃鬱雞白湯。"),
      food("難波ラーメン一座", "難波ラーメン一座", "多店集中，下雨或意見不合時好用。"),
    ],
    tips: ["難波站群很大，Google Maps 要看清楚是南海、Metro 還是近鐵改札。"],
  },
  {
    id: "d3-owl-cafe",
    day: 2,
    type: "main",
    time: "14:30-16:00",
    title: "Sunset Owl Cafe 貓頭鷹咖啡廳",
    area: "千日前 / 貓頭鷹咖啡廳",
    image: images.owl,
    start: "Osaka Aquarium Kaiyukan",
    end: "Sunset Owl Cafe Osaka",
    mapQuery: "Sunset Owl Cafe Osaka",
    duration: "官方觀光頁列為 50 分鐘一個時段，含一杯飲料。",
    summary: "夕焼けのふくろうカフェ在千日前 Tomato Building B1。不強迫抱、摸或拍每隻貓頭鷹，以店員說明與動物當下狀態為優先。",
    transit: "從大阪港站搭中央線到本町，轉御堂筋線到難波；從難波站步行約 7 分鐘到 Tomato Building B1。若 Google Maps 顯示日本橋更順，就從近鐵日本橋方向步行。",
    steps: ["出發前先開官方 / Google Maps 確認當日時段與預約方式。", "地址是大阪市中央區千日前 1-9-12 Tomato Building B1。", "現場先聽觸摸、拍照與休息中動物的規則。", "不閃光、不喊叫、不驚醒動物；若動物正在休息就只觀察。"],
    foods: [
      food("Sunset Owl Cafe", "Sunset Owl Cafe Osaka", "50 分鐘體驗與一杯飲料，以現場最新規則為準。"),
      food("夫婦善哉", "夫婦善哉 法善寺", "體驗後可吃小碗紅豆湯。"),
      food("浪芳庵 本店", "浪芳庵 本店", "烤麻糬與日式茶。"),
      food("甘党まえだ", "甘党まえだ なんばウォーク店", "叭好燒、抹茶與紅豆甘味。"),
      food("鳴門鯛焼本舗 千日前相合橋店", "鳴門鯛焼本舗 千日前相合橋店", "鯢魚燒可兩人分食。"),
    ],
    tips: ["官方觀光頁目前列為近鐵日本橋站步行約 4 分鐘、Metro 難波站約 7 分鐘；營業時段仍請當天再查。"],
  },
  {
    id: "d3-owl-cafe-skip",
    day: 2,
    type: "backup",
    time: "14:30-16:00",
    title: "備案：沒預約到就逛法善寺與日式甘味",
    area: "法善寺 / 難波",
    image: images.hozenji,
    start: "Namba Station Osaka",
    end: "Hozenji Temple Osaka",
    mapQuery: "Hozenji Temple Osaka",
    duration: "60-90 分鐘。",
    summary: "貓頭鷹咖啡廳沒位子、臨時休息，或現場狀態讓你們不想進去，就不勉強，直接走法善寺。",
    transit: "從 Metro 難波站 / 近鐵日本橋站步行約 5-10 分鐘到法善寺。",
    steps: ["參拜水掛不動明王。", "沿法善寺橫丁看石疊、燈籠與老店。", "選一間甘味休息，不要每間都吃。"],
    foods: [
      food("夫婦善哉", "夫婦善哉 法善寺", "法善寺旁的代表甘味。"),
      food("浪芳庵 本店", "浪芳庵 本店", "麻糬與和菓子。"),
      food("甘党まえだ", "甘党まえだ なんばウォーク店", "經典日式甘味。"),
      food("鳴門鯛焼本舗", "鳴門鯛焼本舗 千日前相合橋店", "熱鯢魚燒。"),
      food("丸福珈琲店 千日前本店", "丸福珈琲店 千日前本店", "想坐久一點可改老派咖啡。"),
    ],
    tips: ["備案不會比主線差，而且與晚餐都在同一個步行圈。"],
  },
  {
    id: "d3-japanese-food-dinner",
    day: 2,
    type: "main",
    time: "16:30-21:00",
    title: "日本必吃晚餐：壽司、炸豬排、烏龍麵、關東煮",
    area: "難波 / 法善寺 / 裏難波",
    image: images.hozenji,
    start: "Sunset Owl Cafe Osaka",
    end: "Hozenji Yokocho Osaka",
    mapQuery: "Hozenji Yokocho Osaka dinner",
    duration: "只選一間主餐，餐後散步；不是八間全吃。",
    summary: "這一餐不再吃邊走邊拿的食物，好好坐下來選一種日本經典：壽司、炸豬排、狐狸烏龍麵、關東煮、烤鳥或大阪燒。",
    transit: "貓頭鷹咖啡廳、法善寺、千日前與裏難波之間以步行為主；飯後從難波搭御堂筋線到動物園前。",
    steps: ["先決定今晚想吃的類型，不要先決定網路排名。", "點進 Google Maps 看當天營業、排隊和最後點餐。", "排太久就換同類型的第二間。", "飯後短走道頓堀或法善寺橫丁，再回飯店。"],
    foods: [
      food("ときすし 本店", "ときすし 本店 大阪", "裏難波壽司，可好好坐著吃。"),
      food("とんかつ吉兆", "とんかつ吉兆 大阪難波", "老派炸豬排定食。"),
      food("道頓堀今井 本店", "道頓堀今井 本店", "大阪風高湯狐狸烏龍麵。"),
      food("正宗屋 相合橋", "正宗屋 相合橋", "土手燒、關東煮與大眾酒場感。"),
      food("福太郎 本店", "福太郎 本店 大阪", "大阪燒與蔥燒，想補經典大阪味就選這間。"),
      food("八重勝", "八重勝 新世界 大阪", "回飯店附近再吃串炸的選項。"),
      food("裏難波 烤鳥", "裏なんば 焼き鳥", "想吃烤鳥串與居酒屋小菜就現場挑店。"),
      food("天ぷら大吉 なんばこめじるし店", "天ぷら大吉 なんばこめじるし店", "想吃坐下來的天婦羅與蛤蜊湯。"),
    ],
    tips: ["白天是海遊館與咖啡廳，晚餐可以好好坐下來吃一種日本料理，不需要再追拉麵。"],
  },
  {
    id: "d3-shinsekai-food",
    day: 2,
    type: "backup",
    time: "16:30-20:30",
    title: "備案：回新世界吃串炸、鍋物、壽司",
    area: "新世界 / 新今宮",
    image: images.shinsekai,
    start: "Namba Station Osaka",
    end: hiyoriHotelAddress,
    mapQuery: "Shinsekai Osaka restaurants",
    duration: "晚餐後直接回房，節省體力。",
    summary: "午後累了就不在難波繼續排隊，搭御堂筋線回動物園前，在飯店步行圈吃一頓。",
    transit: "從難波搭 Osaka Metro 御堂筋線到動物園前，5 號出口後步行約 2 分鐘回飯店；新世界店家都在附近步行圈。",
    steps: ["先回房放東西。", "串炸、鍋物、壽司三選一。", "趁 20:00-22:00 回飯店看當日免費高湯茶泡飯供應。"],
    foods: [
      food("八重勝", "八重勝 新世界 大阪", "老派串炸代表。"),
      food("串かつ てんぐ", "串かつ てんぐ 新世界", "新世界串炸備選。"),
      food("なべや", "なべや 西成 大阪", "冷天吃鍋物很恢復。"),
      food("佐兵衛すし 本店", "佐兵衛すし 本店 大阪", "不想吃炸物就改壽司。"),
      food("喫茶ドレミ", "喫茶ドレミ 新世界", "復古布丁、蜜瓜蘇打與下午茶。"),
      food("Hiyori Hotel 高湯茶泡飯", "Hiyori Hotel Osaka Shinsekai dashi chazuke", "依飯店當日時段與供應狀況。"),
    ],
    tips: ["這天已經有很多吃的選擇，備案的價值是早點回房，不是再多塞一站。"],
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
    steps: ["早上先在 CONA 吃已加購早餐，不需要另外找早餐店。", "確認 Cafe 預約時間。", "先逛 Pokémon Center，重物可晚點再買。", "如果 Cafe 沒位，百貨地下街或周邊午餐。"],
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
    summary: "這趟日本食很多，這餐可以安排漂亮一點，當作節奏變化。",
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
    id: "d4-sumiyoshi-taisha",
    day: 3,
    type: "backup",
    time: "14:50-17:30",
    title: "神社備案：住吉大社與反橋",
    area: "住吉大社",
    image: images.sumiyoshiTaisha,
    start: "Daimaru Shinsaibashi Osaka",
    end: "Sumiyoshi Taisha Osaka",
    mapQuery: "Sumiyoshi Taisha Osaka",
    nextActivityId: "d4-teamlab",
    duration: "含往返約 2.5 小時，境內停留 60-75 分鐘。",
    summary: "如果比起堀江逛街更想看大阪代表性神社，就從難波搭南海普通車到住吉大社，走反橋、本殿與境內小社。",
    transit: "心齋橋搭御堂筋線一站到難波，走到南海なんば；搭南海本線普通車到住吉大社站，下車步行約 2 分鐘。前往 teamLab 時可先回新今宮，再從動物園前搭御堂筋線到長居。",
    steps: ["從心齋橋先回難波，依標示走到南海なんば。", "只能搭停靠住吉大社站的普通車，不要直接跳上急行。", "出站往東約 2 分鐘到大鳥居，先看反橋，再進本殿參拜。", "17:00 前後開始回程，保留長居 teamLab 交通時間。"],
    foods: [
      food("洋食やろく 本店", "洋食やろく 本店 住吉大社", "住吉名物洋食，想吃玉子可樂餅可查現場營業。"),
      food("汐かけ横丁", "汐かけ横丁 住吉公園", "住吉公園旁的餐飲集合點。"),
      food("粉浜商店街小吃", "粉浜商店街 グルメ", "比景點餐廳更有住宅區商店街感。"),
      food("住吉大社前 甘味", "住吉大社 甘味", "參拜後找日式甜點或熱茶。"),
      food("粟玄", "粟玄 住吉 大阪", "想找小眾大阪甜點伴手禮可搜尋。"),
    ],
    tips: ["10-3 月官方參拜時間到 17:00；這張方案要準時離開心齋橋。", "境內原則上不要邊走邊吃，現金留一點給御守與賽錢。"],
  },
  {
    id: "d4-indoor-namba",
    day: 3,
    type: "backup",
    time: "15:00-17:30",
    title: "備案：難波 Parks / 高島屋室內逛",
    area: "難波",
    image: images.nambaParks,
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
    id: "d5-hotel-breakfast",
    day: 4,
    type: "main",
    time: "07:30-09:45",
    title: "CONA 早餐 → 退房寄行李",
    area: "Hiyori Hotel / 新世界",
    image: images.shinsekai,
    start: hiyoriHotelAddress,
    end: hiyoriHotelAddress,
    mapQuery: hiyoriHotelAddress,
    duration: "早餐 45-60 分鐘，整理與退房抓 60 分鐘。",
    summary: "回程日就好好吃已加購的 CONA 和洋早餐，再整理行李。章魚燒、魚板、串炸等大阪名物以當日供應為準。",
    transit: "這段全部在飯店內；退房後先詢問櫃檯寄放行李，只帶小包去難波吃最後一餐。",
    steps: ["07:30-08:30 到 1 樓 CONA 吃早餐，別錯過 L.O. 09:30。", "回房確認護照、充電器、藥品與戰利品。", "退房後寄行李，拍下寄放憑證。", "帶小包前往難波，中午回來拿行李或直接從難波去機場。"],
    foods: [
      food("Hiyori Hotel CONA 和洋早餐", "Hiyori Hotel Osaka Shinsekai breakfast CONA", "已加購，07:00-10:00，官方列 L.O. 09:30。"),
      food("CONA 大阪名物專區", "Hiyori Hotel Osaka Shinsekai breakfast Osaka specialties", "章魚燒、魚板、串炸等以小份品嘗，依當日菜色。"),
      food("免費晨間咖啡", "Hiyori Hotel Osaka Shinsekai morning coffee", "06:00-12:00 可外帶，依飯店現場供應。"),
      food("新世界便利商店飯糰", "convenience store near Hiyori Hotel Osaka Shinsekai", "若午餐不想太撐，買一個留車上。"),
      food("南海新今宮站飲料", "Nankai Shin-Imamiya Station drinks", "取行李後去機場前補水。"),
    ],
    tips: ["回程日不需要再用第二頓早餐證明吃得多；留空間給最後一餐日本食或百貨熟食。"],
  },
  {
    id: "d5-sleep-in",
    day: 4,
    type: "backup",
    time: "08:30-10:30",
    title: "備案：睡飽，CONA 早餐後直接退房",
    area: "新今宮",
    image: images.shinsekai,
    start: hiyoriHotelAddress,
    end: "Shin-Imamiya Station",
    mapQuery: "Shin-Imamiya Station breakfast",
    duration: "60-90 分鐘。",
    summary: "前一晚太累就睡飽，把已加購的 CONA 早餐吃完再退房，把時間留給機場和補買。",
    transit: "住宿周邊步行。",
    steps: ["08:30 左右到 CONA 吃早餐，最晚不要超過 L.O. 09:30。", "整理行李和退房。", "直接往難波或機場。"],
    foods: [
      food("Hiyori Hotel CONA 早餐", "Hiyori Hotel Osaka Shinsekai breakfast CONA", "已加購，睡飽版本也不要錯過。"),
      food("免費晨間咖啡", "Hiyori Hotel Osaka Shinsekai morning coffee", "06:00-12:00，可外帶。"),
    ],
    tips: ["回程日不要把自己逼到趕飛機。"],
  },
  {
    id: "d5-last-ramen-shopping",
    day: 4,
    type: "main",
    time: "11:00-12:10",
    title: "難波最後日本食 → 補買",
    area: "難波日本食 / 補買",
    image: images.daimaru,
    start: hiyoriHotelAddress,
    end: "Namba Station Osaka",
    mapQuery: "Namba Station Osaka",
    duration: "60-70 分鐘。",
    summary: "回台灣前吃一餐穩的日本食：烏龍麵、壽司、蛋包飯、炸豬排或百貨地下熟食。用餐後只留 20-30 分鐘補買，不排景點。",
    transit: "從動物園前搭御堂筋線到難波；用餐後從南海難波搭 Airport Express / Rapi:t 往關西機場，再接驗航站接駁去 T2。",
    steps: ["最後一餐選不用排太久、能掌控時間的店。", "只買能安心帶上飛機和入境台灣的東西。", "12:00 前後開始往機場移動。", "Peach 在 KIX T2，抵達機場後再抓接駁和報到時間。"],
    foods: [
      food("道頓堀今井 本店", "道頓堀今井 本店", "大阪高湯狐狸烏龍麵，回程日前最穩。"),
      food("北極星 心齋橋本店", "北極星 心齋橋本店", "日式蛋包飯。"),
      food("とんかつ吉兆", "とんかつ吉兆 大阪難波", "炸豬排定食。"),
      food("ときすし 本店", "ときすし 本店 大阪", "最後一餐想吃飯就改壽司。"),
      food("一芳亭 本店", "一芳亭 本店 難波", "老派燒賣中華定食，距離難波方便。"),
      food("高島屋大阪店地下食品", "Takashimaya Osaka depachika souvenirs", "用餐後補餅乾與甜點。"),
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

const activityDetails = {
  "d1-arrive-namba": {
    jpName: "関西国際空港 第2ターミナル → 南海なんば駅",
    stationAccess: [
      "Peach 抵達 KIX Terminal 2。出關後先找「AEROPLAZA / Terminal 1 / Railway」方向，搭免費接駁巴士到 Aeroplaza，官方時間約 7-9 分鐘。",
      "Aeroplaza 連到「関西空港駅」。進站時看清楚南海電鐵 Nankai，不要走到 JR 閘口。",
      "往難波可選南海 Airport Express，約 44 分鐘到南海なんば；或加價搭特急 Rapi:t，最快約 34 分鐘且有指定席。",
      "南海なんば到第一晚住宿再用 Google Maps 步行。抵達日先不要拖行李進鬧區。"
    ],
    musts: {
      eat: ["南海難波站飯糰或便當", "高島屋地下街甜點"],
      drink: ["車站咖啡", "便利商店熱茶"],
      experience: ["第一次看懂 KIX T2 → Aeroplaza → 鐵道站的動線", "先把行李放好再開始逛"]
    },
    article: [
      "這張卡的核心不是景點，而是把第一天的節奏穩住。Peach 在關西機場 T2，T2 本身沒有鐵路站，所以第一步一定是搭免費接駁巴士到 Aeroplaza / 關西機場站。第一次來大阪最容易混亂的地方，就是以為一出航廈就能直接搭鐵路。",
      "到關西機場站後，去難波最直覺的是南海電鐵。一般 Airport Express 比較便宜、不需指定席；Rapi:t 較快、有指定席與行李空間。你們抵達時間是下午，若出關順利可以看現場班次決定，不需要出發前把這段排死。",
      "到南海難波後先去住宿，不要被道頓堀人潮吸走。第一天身上有行李、手機電量也可能掉很快，先把房間、交通卡、現金和晚餐方向整理好，後面才會順。"
    ],
    sources: [
      source("關西機場 T2 接駁", "https://www.kansai-airport.or.jp/en/access/t2"),
      source("南海 Rapi:t", "https://www.nankai.co.jp/en_railway/traffic/express/rapit.html")
    ]
  },
  "d1-namba-walk": {
    titleNote: "正式名稱是「難波八阪神社」，不是「難波神社」。難波神社在本町/心齋橋北側，是另一間神社。",
    jpName: "難波八阪神社（なんばやさかじんじゃ） / 千日前道具屋筋商店街（せんにちまえどうぐやすじしょうてんがい）",
    stationAccess: [
      "從第一晚難波住宿出發，以步行為主。",
      "難波八阪神社官方交通：Osaka Metro 御堂筋線・四つ橋線「なんば」站步行約 6 分，或「大国町」站步行約 7 分；南海なんば站也約 6 分。",
      "道具屋筋靠近南海なんば、なんば、近鐵日本橋；從神社回到難波站方向時順路接進去。"
    ],
    musts: {
      eat: ["一芳亭燒賣", "裏難波小店的串燒或小菜"],
      drink: ["道具屋筋周邊咖啡", "便利商店熱茶"],
      experience: ["看獅子殿拍照", "逛料理刀、章魚燒器、食器、食品模型", "確認「難波八阪神社」日文名稱"]
    },
    article: [
      "難波八阪神社最有辨識度的是巨大獅子殿，旅遊照片裡常看到一張大獅子嘴把舞台含在裡面。這裡不是難波神社；你在 Google Maps 或日本標示上要看「難波八阪神社」。若搜尋到「難波神社」，那會把你帶到心齋橋北邊，完全不同方向。",
      "千日前道具屋筋商店街不是一般逛街街道，而是大阪餐飲文化的工具街。你會看到料理刀、鍋具、章魚燒器、關東煮鍋、餐具、咖啡器具、食品模型、餐廳招牌用品。就算不買，也很適合看大阪『吃倒太郎』背後的廚房工具。",
      "這段放在第一晚剛好，因為兩個點都不用搭車。你們可以用神社拍照當開場，再鑽進道具屋筋看小物。真的想買刀具或玻璃器皿，建議先記店名和價格，最後一天再決定，避免第一晚就多一堆重量。"
    ],
    sources: [
      source("難波八阪神社官方交通", "https://nambayasaka.jp/?page_id=142"),
      source("大阪觀光局：道具屋筋", "https://osaka-info.jp/en/spot/sennichimae-doguyasuji-shopping-street/"),
      source("Osaka Metro NiNE：道具屋筋", "https://metronine.osaka/en/spot-details/?spot_id=15623450142899")
    ]
  },
  "d2-luggage-shinimamiya": {
    jpName: "日和ホテル大阪新世界（ひよりホテル おおさか しんせかい）",
    stationAccess: [
      "從第一晚難波住宿前往南海なんば站，搭南海本線到「新今宮」站；飯店官方寫南海新今宮西口步行約 6 分鐘。",
      "若改搭 Metro，可在難波搭御堂筋線到「動物園前」站，走 5 號出口約 2 分鐘。",
      "JR 新今宮站請走東口，官方步行約 2 分鐘；這個出口也適合之後去福島、梅田與天王寺。"
    ],
    musts: {
      eat: ["已加購 CONA 和洋早餐", "20:00 後日和高湯茶泡飯"],
      drink: ["06:00-12:00 晨間咖啡", "12:00-18:00 迎賓飲料", "18:00-19:30 Happy Hour"],
      experience: ["先寄放大行李", "Check-in 每人挑一件 Happy Present", "確認 1 樓投幣洗衣位置"]
    },
    article: [
      "Hiyori Hotel Osaka Shinsekai 的最大優勢是出口非常清楚：JR 新今宮東口、Metro 動物園前 5 號出口都約 2 分鐘。南海新今宮西口則約 6 分鐘，回關西機場時很好用。",
      "這裡不是舊公寓式住宿。洗衣設備在飯店 1 樓，是投幣式洗衣；公共微波爐同樣在 1 樓並可 24 小時使用。抵達後先問櫃台寄放行李，再只帶奈良日需要的小包。",
      "你們已加購 1 樓 CONA 早餐，供應時間是 07:00-10:00、L.O. 09:30。海遊館日建議 08:30-09:00 左右吃、取用七分飽；早餐內容與大阪名物專區會依當日供應調整。",
      "免費服務可以當作行程緩衝：晨間咖啡 06:00-12:00、迎賓飲料 12:00-18:00、Happy Hour 18:00-19:30、高湯茶泡飯 20:00-22:00（L.O. 21:30）。入住時也記得每人挑一件 Happy Present。",
      "飯店就在新世界核心，SpaWorld 約 2 分鐘、通天閣約 3 分鐘。晚間從 JR 或 Metro 回來都不用再走長距離，這也讓奈良、梅田、長居與機場日更省力。"
    ],
    sources: [
      source("Hiyori Hotel 官方交通", "https://shinsekai.hiyori-hotel.jp/access/"),
      source("Hiyori Hotel 官方館內設施", "https://shinsekai.hiyori-hotel.jp/facilities/"),
      source("Hiyori Hotel 官方早餐", "https://shinsekai.hiyori-hotel.jp/breakfast/"),
      source("Hiyori Hotel 官方免費服務", "https://shinsekai.hiyori-hotel.jp/services/")
    ]
  },
  "d2-imamiya-ebisu": {
    jpName: "今宮戎神社（いまみやえびすじんじゃ）",
    stationAccess: [
      "從 Hiyori Hotel Osaka Shinsekai 步行約 10-12 分鐘；飯店官方位置在 JR 新今宮東口 / 動物園前 5 號出口約 2 分鐘處。",
      "今宮戎神社官方交通：南海高野線「今宮戎」站往東很快就到；Metro 惠美須町 5 號出口約 8 分鐘、JR 新今宮約 10 分鐘。",
      "參拜後去奈良：走到大國町或惠美須町，接 Metro 到日本橋，再轉近鐵奈良線。"
    ],
    musts: {
      eat: ["新世界復古喫茶", "惠美須町小店"],
      drink: ["喫茶店咖啡", "參拜後熱茶"],
      experience: ["看南側鳥居", "向商業與福德之神參拜", "記住今宮戎的日文正式名稱"]
    },
    article: [
      "今宮戎神社是浪速區很有大阪性格的神社，祭祀與商業繁盛、福德圓滿有關的えびす様。最有名的是每年 1 月的十日戎，但平日來反而能安靜看境內，不需要在人潮裡趕路。",
      "這張卡之所以放在換住宿後，是因為新飯店就在新世界核心，從飯店走過去約 10 分鐘上下。參拜不需要排成大型景點，留 30-40 分鐘就夠，接著往日本橋轉近鐵去奈良。",
      "正式名稱是「今宮戎神社」，不是京都北區的「今宮神社」。在 Google Maps 或車站標示上請看「今宮戎」與「えびす」兩個關鍵字。"
    ],
    sources: [
      source("今宮戎神社官方交通", "https://www.imamiya-ebisu.jp/access"),
      source("大阪觀光局：今宮戎神社", "https://osaka-info.jp/experience/en/osaka/spot/533"),
      source("Hiyori Hotel Osaka Shinsekai 官方交通", "https://shinsekai.hiyori-hotel.jp/access/")
    ]
  },
  "d4-sumiyoshi-taisha": {
    jpName: "住吉大社（すみよしたいしゃ）",
    stationAccess: [
      "從心齋橋搭御堂筋線到難波，依站內標示步行到南海なんば站。",
      "搭南海本線普通車到「住吉大社」站；不要搭不停靠的急行。出站後往東步行約 2 分鐘就是入口。",
      "另一種體驗是搭阪堺電車到「住吉鳥居前」，下車就是大鳥居與反橋前方。"
    ],
    musts: {
      eat: ["洋食やろく玉子可樂餅", "粉浜商店街小吃", "住吉大社前甘味"],
      drink: ["日式熱茶", "商店街咖啡"],
      experience: ["走反橋（太鼓橋）", "看住吉造本殿", "找御守與おもかる石"]
    },
    article: [
      "住吉大社是大阪最有代表性的神社之一，也是全國眾多住吉神社的總本社。它和航海安全、和歌、藝能、商業與緣結等信仰都有關，境內比今宮戎大很多，建議至少留 60-75 分鐘。",
      "第一次去先看紅色反橋，再依境內動線走本殿。住吉造的建築線條和一般印象中的華麗神社不同；不要只在橋邊拍照就離開。官方 10 月到 3 月參拜時間為 06:30-17:00，所以午後版本必須準時出發。",
      "這張卡是堀江散步的替代版本，不是硬塞的第四個景點。選住吉大社時就不要再逛 Orange Street；17:00 左右離開，再回新今宮 / 動物園前轉御堂筋線到長居看 teamLab。"
    ],
    sources: [
      source("住吉大社官方網站", "https://www.sumiyoshitaisha.net/en/"),
      source("住吉大社官方 FAQ 與參拜時間", "https://www.sumiyoshitaisha.net/en/faq.html"),
      source("住吉大社官方境內地圖", "https://www.sumiyoshitaisha.net/en/cmn/pdf/map_en.pdf")
    ]
  },
  "d4-pokemon": {
    jpName: "ポケモンセンターオーサカDX / ポケモンカフェ大阪",
    stationAccess: [
      "從動物園前或大國町搭 Osaka Metro 御堂筋線到「心斎橋」站。",
      "官方交通是心齋橋站 4 號出口，地下通道直通大丸心齋橋店本館。",
      "Pokémon Center OSAKA DX 在大丸心齋橋店本館 9F；Pokémon Cafe OSAKA 是附近設施，Cafe 以事前預約最穩。"
    ],
    musts: {
      eat: ["Pokémon Cafe 主題餐點", "大丸地下街甜點"],
      drink: ["Pokémon Cafe 飲料", "心齋橋咖啡"],
      experience: ["看三聖鳥展示", "買大阪限定或小型周邊", "檢查扭蛋、貼紙、卡牌配件"]
    },
    article: [
      "這張卡要拆成兩件事：Pokémon Center 是逛店買周邊；Pokémon Cafe 是餐廳體驗。兩者在同一個心齋橋大丸本館動線上，但 Cafe 不能當作臨時一定吃得到，建議把它視為有預約就上，沒預約就改漂亮午餐。",
      "官方寫 OSAKA DX 在大丸心齋橋店本館 9F，從 Osaka Metro 御堂筋線心齋橋站 4 號出口可由地下通道直通。第一次去不用先鑽地面巷子，照著大丸本館與 9F 走比較不會迷路。",
      "購物策略建議小物優先：吊飾、貼紙、襪子、文具、卡牌周邊最適合塞行李。大型娃娃很可愛，但你們後面還有 teamLab、回程補買和機場移動，真的要買就先想好箱子空間。"
    ],
    sources: [
      source("Pokémon Center 官方頁", "https://shop.pokemon.co.jp/en/shop/pokemoncenter-osakadx/"),
      source("Osaka Metro NiNE：Pokémon Center OSAKA DX", "https://metronine.osaka/en/spot-details/?spot_id=16889556312516")
    ]
  },
  "d2-nara-park": {
    jpName: "近鉄奈良駅 / 奈良公園 / 東大寺",
    stationAccess: [
      "從 Hiyori Hotel 走到動物園前站，搭堺筋線到日本橋；步行轉近鐵日本橋，搭近鐵奈良線到「近鉄奈良」站。",
      "近鐵奈良站往東走就是奈良公園方向，官方觀光資訊寫奈良公園離近鐵奈良很近；JR 奈良則約 20 分鐘步行。",
      "東大寺在公園深處，從近鐵奈良邊餵鹿邊走過去，比單純導航直衝更舒服。"
    ],
    musts: {
      eat: ["志津香釜飯", "柿葉壽司", "中谷堂草餅"],
      drink: ["商店街熱茶", "咖啡休息"],
      experience: ["餵鹿餅", "東大寺大佛殿", "東向商店街補食"]
    },
    article: [
      "奈良這天最適合用近鐵奈良站進出，因為一下車就能往奈良公園走。第一次去不要把地圖看成一串地名，而是想像成：車站 → 商店街 → 鹿開始變多的公園 → 東大寺。",
      "鹿不是遊樂設施，是會靠近人的野生動物。鹿餅買了就快點餵，一片一片給，餵完把手攤開表示沒有了。紙袋、地圖、塑膠袋不要拿在手上晃。",
      "午餐可以押志津香釜飯，但它熱門，排太久就改柿葉壽司或商店街。奈良的重點是慢走和看鹿，不是用餐廳把整天卡死。"
    ],
    sources: [
      source("奈良官方旅遊：奈良公園", "https://www.visitnara.jp/destinations/area/nara-park/"),
      source("Japan Travel：奈良公園交通", "https://www.japan.travel/en/destinations/kansai/nara/nara-park-and-around/")
    ]
  },
  "d2-namba-ramen-spa": {
    jpName: "大阪難波ごはん / スパワールド",
    stationAccess: [
      "從近鐵奈良站搭近鐵奈良線往大阪難波；部分車種需轉車，以 Google Maps 當時班次為準。",
      "大阪難波站出來後，法善寺、道頓堀、裏難波、千日前都在步行圈；先決定想吃壽司、烏龍麵、炸豬排或大阪燒。",
      "吃完後從 Metro 難波站搭御堂筋線到動物園前，5 號出口後步行約 2 分鐘到 SpaWorld / Hiyori Hotel。"
    ],
    musts: {
      eat: ["狐狸烏龍麵", "壽司或炸豬排", "大阪燒"],
      drink: ["熱茶", "泡湯後牛奶"],
      experience: ["奈良後坐下來吃", "飯後短走法善寺", "SpaWorld 放鬆奈良走累的腿"]
    },
    article: [
      "奈良回程回到大阪難波很直覺：近鐵奈良線的目標就是大阪難波站。這晚不再把拉麵當主題，因為前面已經走很多路，最適合的是坐下來吃一份熱的、穩的日本料理。",
      "選店方式很簡單：想喝湯就道頓堀今井的狐狸烏龍麵；想吃飯就ときすし或炸豬排；想補大阪味就福太郎大阪燒。排隊超過 20-30 分鐘就換同類型第二間，不要讓腿痠日卡在門口。",
      "SpaWorld 是恢復選項，不是硬性任務。奈良走了一整天，腿還有力再泡；如果只想回房洗澡和洗衣，就直接回 Hiyori，也很合理。"
    ],
    sources: [
      source("Inside Osaka：What to Eat in Osaka", "https://insideosaka.com/what-to-eat-in-osaka/"),
      source("SpaWorld 官方網站", "https://www.spaworld.co.jp/")
    ]
  },
  "d3-kaiyukan": {
    jpName: "海遊館 / Osaka Aquarium Kaiyukan",
    stationAccess: [
      "從 Hiyori Hotel 步行到動物園前站，搭御堂筋線到本町。",
      "在本町站轉 Osaka Metro 中央線往大阪港 / 夢洲方向，在「大阪港」下車。",
      "大阪港站 1 號出口出來後，沿指標與 Google Maps 步行約 5 分鐘到海遊館。"
    ],
    musts: {
      eat: ["天保山周邊午餐", "Kuma Kafe 漢堡或咖啡", "なにわ食いしんぼ横丁小吃"],
      drink: ["出館後咖啡", "館內外補水"],
      experience: ["太平洋水槽", "鯨鯊", "慢慢看水母與海豹區"]
    },
    article: [
      "大阪海遊館的正式名稱是「海遊館」，英文是 Osaka Aquarium Kaiyukan。它不是只看一個大水槽的地方，動線會從上層一路慢慢往下，像繞著太平洋水槽走一圈。第一次去最值得留意的是不同高度看同一個水槽：魚群、魟魚、鯨鯊和光線會一直變。",
      "這天把原本拉麵午餐改成海遊館，是因為水族館需要完整停留時間。建議先買好時段票或至少出發前查官方日曆，抵達大阪港後不要急著找午餐，先照預約時間進館；出館後再到天保山 Marketplace 或 Kuma Kafe 坐下來吃。",
      "天保山周邊適合當海遊館後的緩衝區：摩天輪、港邊、Marketplace 都不用再轉車。若館內人很多，就放慢節奏，只保留太平洋水槽、水母與最後紀念品區，不要把下午貓頭鷹咖啡廳壓得太緊。"
    ],
    sources: [
      source("海遊館官方網站", "https://www.kaiyukan.com/language/eng/"),
      source("海遊館官方交通", "https://www.kaiyukan.com/language/eng/access.html"),
      source("OSAKA-INFO：海遊館", "https://osaka-info.jp/en/spot/kaiyukan/")
    ]
  },
  "d3-tempozan-slow": {
    jpName: "天保山 / Tempozan Harbor Village",
    stationAccess: [
      "從動物園前搭御堂筋線到本町，轉中央線到大阪港。",
      "大阪港站 1 號出口出來後，天保山 Marketplace、摩天輪與海遊館都在步行圈。",
      "要接下午千日前，回大阪港站搭中央線到本町，再轉御堂筋線到難波。"
    ],
    musts: {
      eat: ["Tempozan Marketplace", "なにわ食いしんぼ横丁", "港邊咖啡"],
      drink: ["咖啡或熱飲", "便利商店水"],
      experience: ["天保山摩天輪", "港邊散步", "不硬排滿水族館"]
    },
    article: [
      "這張不是放棄海遊館，而是把票券或天氣不漂亮時的出口先準備好。天保山區域本身就是一個港邊小區，Marketplace、摩天輪和海遊館很近，適合當半天行程。",
      "如果海遊館時段只剩太晚、或當天人潮太多，就先吃飯、喝咖啡、看港邊和摩天輪。旅行手冊現場最有用的地方就是：遇到不順時不用重新想整天，只要切到備案卡。",
      "下午還要回千日前，所以 14:00 左右就該準備離開大阪港。大阪港到難波不是同線直達，記得在本町轉御堂筋線。"
    ],
    sources: [
      source("OSAKA-INFO：Tempozan Harbor Village", "https://osaka-info.jp/en/spot/tempozan-harbor-village/"),
      source("海遊館官方交通", "https://www.kaiyukan.com/language/eng/access.html")
    ]
  },
  "d3-fukushima-ramen": {
    jpName: "大阪・福島ラーメン巡り",
    stationAccess: [
      "JR 新今宮東口搭大阪環狀線外回，往大阪、福島方向，在「福島」下車。",
      "燃えよ麺助從 JR 福島站步行約 1 分鐘；食評資訊也列出從 JR 新福島與阪神福島可步行抵達。",
      "吃完要去千日前，可搭 JR 一站到大阪站，走到梅田轉御堂筋線到難波。"
    ],
    musts: {
      eat: ["燃えよ麺助紀州鴨醬油", "金色貝湯", "人生JET雞白湯"],
      drink: ["拉麵後的水或無糖茶", "福島咖啡"],
      experience: ["在售票機選麵", "看排隊果斷換店", "吃一碗而不是趕店"]
    },
    article: [
      "福島是大阪站西邊一站，街區不大，但拉麵選擇密集。主選「燃えよ麺助」的理由不是只看名氣，而是它把和歌山紀州鴨、醬油與貝類清湯做成兩種風格。Time Out Osaka 2026 介紹也提到這兩種主要選項。",
      "這間常排隊、座位少，所以行程卡才會把人生JET、三く、小僧與沾麵みさわ放在同一區。排隊超過你們的耐心，換店才是正確玩法。",
      "點餐前先認漢字：鴨是鴨湯醬油，貝是較清爽的貝湯，白湯則是濃鬱乳白湯。兩人可選不同湯頭互相喝一口，不需要另外加第二碗。"
    ],
    sources: [
      source("Time Out Osaka：Moeyo Mensuke", "https://www.timeout.com/osaka/restaurants/moeyo-mensuke"),
      source("Tabelog：燃えよ麺助", "https://tabelog.com/en/osaka/A2701/A270108/27091454/"),
      source("Tabelog：2025 大阪拉麵選店", "https://tabelog.com/en/matome/3526/")
    ]
  },
  "d3-owl-cafe": {
    jpName: "夕焼けのふくろうカフェ / Sunset Owl Cafe",
    stationAccess: [
      "地址為大阪市中央區千日前 1-9-12 Tomato Building B1。",
      "OSAKA-INFO 列出：近鐵日本橋站步行約 4 分鐘；近鐵大阪難波與 Metro 難波站約 7 分鐘；JR 難波約 13 分鐘。",
      "建築入口到後找 Tomato Building 與 B1 標示，不要只靠地圖的藍點在路邊繞。"
    ],
    musts: {
      eat: ["體驗後的夫婦善哉", "浪芳庵麻糬", "鯢魚燒"],
      drink: ["時段內附的一杯飲料", "附近老派咖啡"],
      experience: ["觀察不同種類貓頭鷹", "跟著店員說明互動", "不觸摸正在休息的動物"]
    },
    article: [
      "OSAKA-INFO 的現行頁面將這間店列在千日前 Tomato Building 地下 1 樓，一個時段約 50 分鐘並含一杯飲料。頁面也說明，不同種類的貓頭鷹會分為可互動與僅觀察，不是每隻都能觸摸。",
      "把它排在千日前，交通上比較友善：海遊館後從大阪港回本町轉難波，下午就能接上千日前。體驗完再走法善寺與晚餐，不用折返。",
      "最重要的現場原則是不閃光、不喊叫、不追著動物拍照，而且接受「今天它不想被碰」。若現場狀態讓你們不舒服，就啟用法善寺甘味備案，完全不需要勉強進去。"
    ],
    sources: [
      source("OSAKA-INFO EXPERIENCE：Sunset Owl Cafe", "https://osaka-info.jp/experience/en/osaka/spot/460")
    ]
  },
  "d3-japanese-food-dinner": {
    jpName: "大阪難波の寿司・とんかつ・うどん・おでん",
    stationAccess: [
      "從 Sunset Owl Cafe 步行到法善寺 / 裏難波約 5-12 分鐘，不需搭車。",
      "要回飯店時，搭 Metro 御堂筋線從難波到動物園前；5 號出口後步行約 2 分鐘。",
      "若最後選八重勝或新世界鍋物，可先回動物園前，再在飯店步行圈吃。"
    ],
    musts: {
      eat: ["壽司或炸豬排", "狐狸烏龍麵或關東煮", "大阪燒或串炸"],
      drink: ["居酒屋烏龍茶", "餐後熱茶"],
      experience: ["先選料理再選店", "看手寫菜單", "排太久就換同類型第二間"]
    },
    article: [
      "「日本必吃」不等於一晚把所有東西都點過。這張卡的用法是先選今晚最想吃的類型：米飯系就選壽司或蛋包飯，炸物系選炸豬排或串炸，湯物系選狐狸烏龍麵或關東煮。",
      "難波的好處是同類店密度高。福太郎排太久，就捨棄大阪燒改吃ときすし；とんかつ吉兆休息，就改道頓堀今井的狐狸烏龍麵。一餐的目標是吃得好，不是按排名打卡。",
      "因為白天已經把時間留給海遊館，晚餐最推薦切換到壽司、炸豬排、關東煮或烤鳥。這樣一天的節奏會有水族館、咖啡廳和坐下來吃飯，不會全部變成追店。"
    ],
    sources: [
      source("OSAKA-INFO Discover Osaka Guidebook", "https://octb.osaka-info.jp/common/img/downloads/discoverosaka_guidebook.pdf"),
      source("Inside Osaka：What to Eat in Osaka", "https://insideosaka.com/what-to-eat-in-osaka/")
    ]
  },
  "d4-teamlab": {
    jpName: "チームラボ ボタニカルガーデン 大阪 / 長居植物園",
    stationAccess: [
      "從心齋橋搭 Osaka Metro 御堂筋線到「長居」站。",
      "Osaka Metro NiNE 與 Inside Osaka 都建議從長居站步行約 10 分鐘進長居公園 / 植物園方向。",
      "這是夜間戶外展，入口與動線依官方當日公告為準。"
    ],
    musts: {
      eat: ["釜ひろ烏龍麵", "長居站周邊定食"],
      drink: ["展前熱飲", "回程便利商店飲料"],
      experience: ["夜間植物園光影", "池邊作品", "用好走鞋慢慢走"]
    },
    article: [
      "teamLab Botanical Garden Osaka 不是室內美術館，而是把長居植物園夜間變成戶外光影作品。官方介紹它位在長居公園內的長居植物園，植物園本身面積很大，晚上路面、池邊和樹影都會影響體驗。",
      "這天一定要把鞋子、保暖和手機電量放在漂亮穿搭前面。下雨或強風時，官方可能調整開放狀態，所以天王寺備案要保留。",
      "吃飯不要拖到展後才找。長居站附近先吃烏龍麵、定食或買熱飲，進展場後就專心走，出來再回新今宮宵夜。"
    ],
    sources: [
      source("teamLab 官方頁", "https://www.teamlab.art/e/botanicalgarden/"),
      source("Osaka Metro NiNE：teamLab 交通", "https://metronine.osaka/en/article_tour/20230901-teamlab-botanicalgarden/")
    ]
  },
  "d5-hotel-breakfast": {
    jpName: "日和ホテル大阪新世界 CONA 朝食",
    stationAccess: [
      "早餐在飯店 1 樓 CONA，不需移動；官方列供應 07:00-10:00，最後入店 / 點餐時間請依現場。",
      "退房後要去難波，可從動物園前 5 號出口附近搭御堂筋線三站到難波。",
      "若不想折返，可帶行李從南海新今宮直接往關西機場。"
    ],
    musts: {
      eat: ["已加購和洋早餐", "依當日供應品嘗大阪名物"],
      drink: ["06:00-12:00 晨間咖啡", "早餐飲品"],
      experience: ["不趕路吃完最後一頓飯店早餐", "退房前二次檢查房間"]
    },
    article: [
      "你們已經加購 CONA 早餐，回程日沒有必要另外再找早餐點。和洋自助餐能先吃到飯、湯、蛋、麵包與當日大阪名物小品，中午再依肚子狀態決定烏龍麵、壽司、蛋包飯或輕食。",
      "吃完回房時做一次系統化檢查：床下、插座、浴室、保險箱、冰箱。手提行李另留一袋放護照、行動電源、藥品和機上外套，不要全塞入託運箱。",
      "最後半天的價值是穩定。若吃飯、補買與取行李的時間變緊，就從南海新今宮直接去機場，不為最後一間店賭飛機。"
    ],
    sources: [
      source("Hiyori Hotel 官方早餐", "https://shinsekai.hiyori-hotel.jp/breakfast/"),
      source("Hiyori Hotel 官方免費服務", "https://shinsekai.hiyori-hotel.jp/services/")
    ]
  }
};

const areaDefaults = {
  "難波": {
    stationAccess: ["以 Osaka Metro / 南海 / 近鐵的難波站群為中心；第一次去請直接開 Google Maps 到該卡地點。", "站到點之間大多是步行圈，行李日避免鑽狹窄巷弄。"],
    musts: { eat: ["粉物或老派定食"], drink: ["咖啡或熱茶"], experience: ["看街區招牌", "鑽巷弄找小店"] },
    article: ["難波不是單一車站，而是一整片站群與商店街。第一次去最重要的是先分清楚南海なんば、Osaka Metro なんば、近鐵/阪神大阪難波、日本橋各自的位置，再用 Google Maps 接最後一段步行。", "這區很適合把吃飯放進散步裡：主街拍照，真正想吃 local 一點就往法善寺、裏難波、千日前和道具屋筋附近鑽。"]
  },
  "新今宮": {
    stationAccess: ["用 JR 新今宮、南海新今宮、Osaka Metro 動物園前 / 大國町當回家錨點。", "晚上回房優先走大站與大路線，不硬抄小路。"],
    musts: { eat: ["串炸", "鍋物", "超市熟食"], drink: ["泡湯後牛奶", "便利商店熱飲"], experience: ["回房洗衣", "SpaWorld 或新世界散步"] },
    article: ["Hiyori Hotel Osaka Shinsekai 這幾天是基地，不是每次都要當景點玩。JR 新今宮東口與動物園前 5 號出口都約步行 2 分鐘，去奈良、福島、長居與機場都能接上。", "晚上如果累了，直接在新世界或住宿附近吃，不要為了名店再跨區。飯店 1 樓有投幣洗衣與 24 小時微波爐，超市熟食也是很好的旅行解法。"]
  },
  "奈良": {
    stationAccess: ["從大阪難波 / 近鐵日本橋搭近鐵奈良線到近鉄奈良。", "近鐵奈良站往東步行就是奈良公園方向。"],
    musts: { eat: ["柿葉壽司", "釜飯"], drink: ["熱茶"], experience: ["餵鹿", "慢走公園"] },
    article: ["奈良適合慢慢走，不適合把地名塞成任務清單。近鐵奈良站出來後往公園方向走，鹿會慢慢變多，東大寺則在更裡面。", "把午餐當彈性選項，不要為一間店犧牲公園散步。"]
  }
};

const defaultFoodPools = {
  airport: [
    food("南海難波站飯糰 / 便當", "Nankai Namba Station onigiri bento", "剛進市區先止餓，避免拖著行李找店。"),
    food("高島屋大阪店地下食品", "Takashimaya Osaka depachika", "甜點、熟食、早餐補給都好用。"),
    food("南海難波站咖啡", "coffee near Nankai Namba Station", "等入住或整理交通卡時用。"),
    food("KIX Terminal 2 便利商店", "Kansai Airport Terminal 2 convenience store", "出關慢時先補水和簡單熱食。"),
    food("南海なんば駅弁当", "南海なんば駅 弁当", "坐車前後最穩的補給。"),
  ],
  namba: [
    food("福太郎 本店", "福太郎 本店 大阪", "御好燒與蔥燒，第一晚大阪粉物代表。"),
    food("道頓堀 今井 本店", "道頓堀 今井 本店", "想吃溫柔一點就選大阪烏龍麵。"),
    food("一芳亭 本店", "一芳亭 本店 難波", "老派燒賣中華定食，很像真的在難波吃飯。"),
    food("自由軒 難波本店", "自由軒 難波本店", "名物咖哩飯，份量適合當散步中的一餐。"),
    food("會津屋 なんば店", "会津屋 なんば店", "章魚燒可分食，不必當整餐。"),
    food("裏難波居酒屋", "裏なんば 居酒屋", "現場看人潮和菜單挑小店。"),
  ],
  nara: [
    food("志津香 公園店", "志津香 公園店 奈良", "釜飯，冷天很適合，排太久就換。"),
    food("柿の葉ずし 平宗 奈良店", "柿の葉ずし 平宗 奈良店", "奈良特色，適合買小份。"),
    food("中谷堂", "中谷堂 奈良", "草餅點心，觀光但有地方性。"),
    food("春日荷茶屋", "春日荷茶屋 奈良", "走到春日大社方向時可用。"),
    food("まほろば大仏プリン本舗", "まほろば大仏プリン本舗 近鉄奈良", "想買甜點或伴手禮小點。"),
    food("東向商店街午餐", "Higashimuki Shopping Street lunch Nara", "排隊失敗時回商店街找飯。"),
  ],
  kaiyukan: [
    food("Kuma Kafe", "Kuma Kafe Osaka", "海遊館附近漢堡、咖啡與甜點。"),
    food("Tempozan Marketplace", "Tempozan Marketplace restaurants", "餐廳選擇集中，雨天也方便。"),
    food("なにわ食いしんぼ横丁", "Naniwa Kuishinbo Yokocho Tempozan", "昭和風餐飲街，可找大阪味。"),
    food("Mel's Drive-In Osaka", "Mel's Drive-In Osaka Aquarium", "想吃西式簡餐時可查。"),
    food("大阪港站咖啡", "Osakako Station cafe", "出館後休息和補水。"),
    food("天保山甜點", "Tempozan dessert Osaka", "摩天輪或港邊散步前的小甜點。"),
  ],
  ramenFukushima: [
    food("燃えよ麺助", "燃えよ麺助 大阪福島", "紀州鴨醬油與金色貝湯。"),
    food("らーめん人生JET", "らーめん人生JET 福島", "大阪人氣雞白湯。"),
    food("烈志笑魚油 麺香房 三く", "烈志笑魚油 麺香房 三く", "魚介風味湯頭。"),
    food("極濃豚骨らーめん 小僧", "極濃豚骨らーめん 小僧 福島", "重口味濃厚豚骨。"),
    food("つけ麺みさわ 本店", "つけ麺みさわ 福島大阪", "想換沾麵時的選項。"),
  ],
  ramenNamba: [
    food("なにわ麺次郎", "なにわ麺次郎 大阪難波", "改札內蛤蜊鹽味拉麵。"),
    food("麺屋丈六 難波店", "麺屋丈六 難波店", "高井田系黑醬油中華麵。"),
    food("NEXT□", "NEXT□ 難波", "牡蠣白湯、清湯與沾麵。"),
    food("花丸軒 法善寺店", "花丸軒 法善寺店", "叉燒豚骨。"),
    food("ぼっこ志", "ぼっこ志 難波", "濃鬱雞白湯。"),
    food("らーめん砦 大國町店", "らーめん砦 大國町店", "豚骨與貝湯系。"),
  ],
  owl: [
    food("Sunset Owl Cafe", "Sunset Owl Cafe Osaka", "時段含一杯飲料，以當天規則為準。"),
    food("夫婦善哉", "夫婦善哉 法善寺", "兩碗小紅豆湯。"),
    food("浪芳庵 本店", "浪芳庵 本店", "麻糬與和菓子。"),
    food("甘党まえだ", "甘党まえだ なんばウォーク店", "日式甘味。"),
    food("丸福珈琲店 千日前本店", "丸福珈琲店 千日前本店", "老派咖啡。"),
  ],
  japaneseFood: [
    food("ときすし 本店", "ときすし 本店 大阪", "裏難波壽司。"),
    food("とんかつ吉兆", "とんかつ吉兆 大阪難波", "炸豬排定食。"),
    food("道頓堀今井 本店", "道頓堀今井 本店", "狐狸烏龍麵。"),
    food("正宗屋 相合橋", "正宗屋 相合橋", "土手燒與關東煮。"),
    food("福太郎 本店", "福太郎 本店 大阪", "大阪燒與蔥燒。"),
    food("裏難波 烤鳥", "裏なんば 焼き鳥", "現場挑非連鎖烤鳥店。"),
  ],
  shinsekai: [
    food("八重勝", "八重勝 新世界 大阪", "新世界老派串炸代表。"),
    food("串かつ てんぐ", "串かつ てんぐ 新世界 大阪", "排隊較可控時可選。"),
    food("なべや", "なべや 西成 大阪", "冷天鍋物，坐下來吃比較恢復。"),
    food("喫茶ドレミ", "喫茶ドレミ 新世界", "復古喫茶，適合慢慢休息。"),
    food("スーパー玉出 新今宮", "スーパー玉出 新今宮", "回房熟食、飲料、隔天早餐補給。"),
    food("ジャンジャン横丁 小吃", "ジャンジャン横丁 グルメ", "不用排名店，沿路看想吃什麼。"),
  ],
  shinsaibashi: [
    food("Pokémon Cafe", "Pokemon Cafe Osaka", "有預約才穩，不要現場賭。"),
    food("心齋橋大丸地下街", "Daimaru Shinsaibashi depachika", "沒訂到 Cafe 時很好用。"),
    food("北極星 心齋橋本店", "北極星 心斎橋本店", "蛋包飯，觀光但有大阪感。"),
    food("甲賀流 たこ焼き", "甲賀流 たこ焼き アメリカ村", "美國村小吃，可分食。"),
    food("一芳亭 船場店", "一芳亭 船場店 大阪", "想吃老派燒賣可從心齋橋走過去。"),
    food("堀江咖啡", "Horie cafe Osaka", "散步中間休息。"),
  ],
  nagai: [
    food("釜ひろ", "釜ひろ 大阪", "長居附近手打烏龍麵，展前很順。"),
    food("又三郎", "又三郎 長居 大阪", "熟成肉漂亮飯，預算較高。"),
    food("長居站周邊定食", "長居駅 定食", "展前快速坐下吃。"),
    food("長居站咖啡", "長居駅 カフェ", "入場前休息和充電。"),
    food("天王寺地下街小吃", "Tennoji underground restaurants", "展覽取消時回天王寺解決。"),
    food("便利商店熱飲", "convenience store near Nagai Station Osaka", "夜間戶外展前補熱飲。"),
  ],
};

const foodIntros = {
  airport: "這段重點是順利進市區，食物以車站補給和地下街為主。",
  namba: "難波不要只吃主街連鎖，往法善寺、裏難波、千日前鑽會比較有味道。",
  nara: "奈良午餐要彈性，排隊太久就改商店街或柿葉壽司外帶。",
  kaiyukan: "海遊館日把餐食放在天保山周邊，先顧好入館時段，再坐下來吃。",
  ramenFukushima: "福島拉麵店密度高，先選湯頭，再用排隊長度決定店家。",
  ramenNamba: "難波有蛤蜊、牡蠣、黑醬油、雞白湯與豚骨，只選一碗最想吃的。",
  owl: "咖啡廳時段本身含飲料，周邊食物放日式甘味與老派咖啡。",
  japaneseFood: "這區先選想吃的日本料理類型，再選店：壽司、炸豬排、烏龍麵、關東煮都有。",
  shinsekai: "新世界與新今宮適合恢復體力：串炸、鍋物、喫茶、超市熟食都能成立。",
  shinsaibashi: "心齋橋可以漂亮一點：寶可夢、百貨地下街、蛋包飯、咖啡都放在同一圈。",
  nagai: "teamLab 前先吃好、喝熱的，進場後就不要再分心找飯。",
};

const mediaByActivity = {
  "d1-arrive-namba": { hero: images.kixT2, gallery: [images.kixT2, images.nankaiNamba, images.dotonbori] },
  "d1-arrive-slow": { hero: images.nankaiNamba, gallery: [images.nankaiNamba, images.nambaParks, images.dotonbori] },
  "d1-namba-walk": { hero: images.nambaYasaka, gallery: [images.nambaYasaka, images.doguyasuji, images.hozenji] },
  "d1-hozenji-sweets": { hero: images.hozenji, gallery: [images.hozenji, images.doguyasuji, images.dotonbori] },
  "d1-uranamba-dinner": { hero: images.hozenji, gallery: [images.hozenji, images.dotonbori, images.doguyasuji] },
  "d1-indoor-dinner": { hero: images.nambaParks, gallery: [images.nambaParks, images.nankaiNamba, images.dotonbori] },
  "d2-luggage-shinimamiya": { hero: images.shinsekai, gallery: [images.nankaiNamba, images.shinsekai, images.spaWorld] },
  "d2-locker-backup": { hero: images.nankaiNamba, gallery: [images.nankaiNamba, images.nambaParks, images.dotonbori] },
  "d2-imamiya-ebisu": { hero: images.imamiyaEbisu, gallery: [images.imamiyaEbisu, images.shinsekai, images.nankaiNamba] },
  "d2-skip-shrine": { hero: images.kintetsuNara, gallery: [images.kintetsuNara, images.nara, images.todaiji] },
  "d2-nara-park": { hero: images.nara, gallery: [images.kintetsuNara, images.nara, images.todaiji] },
  "d2-nara-short": { hero: images.kintetsuNara, gallery: [images.kintetsuNara, images.nara, images.todaiji] },
  "d2-namba-ramen-spa": { hero: images.hozenji, gallery: [images.hozenji, images.dotonbori, images.spaWorld] },
  "d2-shinsekai-dinner": { hero: images.shinsekai, gallery: [images.shinsekai, images.spaWorld, images.nambaParks] },
  "d3-kaiyukan": { hero: images.whaleShark, gallery: [images.whaleShark, images.kaiyukan, images.tempozan] },
  "d3-tempozan-slow": { hero: images.tempozan, gallery: [images.tempozan, images.kaiyukan, images.nankaiNamba] },
  "d3-fukushima-ramen": { hero: images.ramenOsaka, gallery: [images.ramenOsaka, images.ramenShio, images.umeda] },
  "d3-namba-ramen": { hero: images.ramenShio, gallery: [images.ramenShio, images.ramenOsaka, images.hozenji] },
  "d3-owl-cafe": { hero: images.owl, gallery: [images.owl, images.hozenji, images.dotonbori] },
  "d3-owl-cafe-skip": { hero: images.hozenji, gallery: [images.hozenji, images.doguyasuji, images.dotonbori] },
  "d3-japanese-food-dinner": { hero: images.hozenji, gallery: [images.hozenji, images.dotonbori, images.ramenShio] },
  "d3-shinsekai-food": { hero: images.shinsekai, gallery: [images.shinsekai, images.spaWorld, images.hozenji] },
  "d4-pokemon": { hero: images.pokemon, gallery: [images.pokemon, images.daimaru, images.amerikamura] },
  "d4-pretty-lunch": { hero: images.daimaru, gallery: [images.daimaru, images.nambaParks, images.hozenji] },
  "d4-horie-walk": { hero: images.amerikamura, gallery: [images.amerikamura, images.daimaru, images.dotonbori] },
  "d4-sumiyoshi-taisha": { hero: images.sumiyoshiTaisha, gallery: [images.sumiyoshiTaisha, images.shinsekai, images.teamlab] },
  "d4-indoor-namba": { hero: images.nambaParks, gallery: [images.nambaParks, images.daimaru, images.nankaiNamba] },
  "d4-teamlab": { hero: images.teamlab, gallery: [images.teamlab, images.nambaParks, images.shinsekai] },
  "d4-tennoji-night": { hero: images.shinsekai, gallery: [images.shinsekai, images.nambaParks, images.spaWorld] },
  "d5-hotel-breakfast": { hero: images.shinsekai, gallery: [images.shinsekai, images.nankaiNamba, images.ramenOsaka] },
  "d5-sleep-in": { hero: images.shinsekai, gallery: [images.shinsekai, images.spaWorld, images.nankaiNamba] },
  "d5-last-ramen-shopping": { hero: images.daimaru, gallery: [images.daimaru, images.nankaiNamba, images.dotonbori] },
  "d5-direct-airport": { hero: images.nankaiNamba, gallery: [images.nankaiNamba, images.kixT2, images.dotonbori] },
};

function activityKind(activity) {
  if (activity.id.startsWith("d1-arrive") || activity.area.includes("關西機場")) return "airport";
  if (activity.area.includes("奈良")) return "nara";
  if (activity.area.includes("海遊館") || activity.area.includes("天保山") || activity.area.includes("大阪港")) return "kaiyukan";
  if (activity.area.includes("貓頭鷹")) return "owl";
  if (activity.area.includes("福島拉麵")) return "ramenFukushima";
  if (activity.area.includes("難波拉麵") || activity.title.includes("拉麵")) return "ramenNamba";
  if (activity.area.includes("日本食") || activity.title.includes("日本必吃")) return "japaneseFood";
  if (activity.area.includes("心齋橋") || activity.area.includes("堀江") || activity.area.includes("南船場")) return "shinsaibashi";
  if (activity.area.includes("長居")) return "nagai";
  if (activity.area.includes("新今宮") || activity.area.includes("新世界") || activity.area.includes("天王寺")) return "shinsekai";
  return "namba";
}

function normalizeFoods(activity) {
  const kind = activityKind(activity);
  const seen = new Set();
  const merged = [...activity.foods, ...(defaultFoodPools[kind] || defaultFoodPools.namba)].filter((item) => {
    if (seen.has(item.name)) return false;
    seen.add(item.name);
    return true;
  });
  activity.foods = merged.slice(0, 8);
  activity.foodIntro = activity.foodIntro || foodIntros[kind] || foodIntros.namba;
}

function normalizeMedia(activity) {
  const assigned = mediaByActivity[activity.id] || {};
  const hero = assigned.hero || activity.image || fallbackImage;
  const gallery = uniqueMedia([...(assigned.gallery || []), hero, activity.image, fallbackImage]).slice(0, 3);
  while (gallery.length < 3) gallery.push(fallbackImage);
  activity.media = { hero, gallery };
  activity.image = hero;
}

function uniqueMedia(items) {
  const seen = new Set();
  return items.filter((item) => {
    const url = mediaUrl(item);
    if (seen.has(url)) return false;
    seen.add(url);
    return true;
  });
}

function normalizeFallbackPlan(activity) {
  if (activity.fallbackPlan) return;
  if (activity.type === "backup") {
    activity.fallbackPlan = "這張本來就是備案；如果現場還是不順，就縮短停留，只保留吃飯和回住宿。";
    return;
  }
  const kind = activityKind(activity);
  const plans = {
    nara: "奈良如果下雨或走太累，就只保留近鐵奈良、東向商店街、奈良公園入口，不硬走完整個東大寺圈。",
    kaiyukan: "海遊館時段不漂亮或人潮太滿，就改天保山 Marketplace、摩天輪與港邊咖啡，不硬塞館內。",
    ramenFukushima: "福島主選排隊超過 30 分鐘就換同區下一間；大雨則改難波拉麵備案。",
    ramenNamba: "拉麵店臨時休息或排太久，就換同區另一種湯頭，不跨區追店。",
    owl: "沒預約到、店家臨時調整，或動物狀態不適合互動，就改法善寺與日式甘味。",
    japaneseFood: "先選料理類型再選店；排隊過長就改同區的壽司、烏龍麵、炸豬排或關東煮。",
    nagai: "teamLab 若天氣公告不穩，直接改天王寺 / 阿倍野室內夜，不要賭戶外展。",
    shinsaibashi: "Cafe 沒訂到或排隊太久，就改大丸地下街、北極星或堀江咖啡，不讓一間店卡死整天。",
  };
  activity.fallbackPlan = plans[kind] || "排隊超過 20-30 分鐘就換同區下一個點；這趟重點是順，不是把每間店打卡完。";
}

function source(name, url) {
  return { name, url };
}

function detailFallback(activity) {
  const key = activity.area.includes("奈良")
    ? "奈良"
    : activity.area.includes("新今宮") || activity.area.includes("新世界")
        ? "新今宮"
        : "難波";
  const fallback = areaDefaults[key];
  return {
    jpName: activity.area,
    stationAccess: fallback.stationAccess,
    musts: fallback.musts,
    article: fallback.article,
    sources: [],
  };
}

activities.forEach((activity) => {
  Object.assign(activity, detailFallback(activity), activityDetails[activity.id] || {});
  normalizeFoods(activity);
  normalizeMedia(activity);
  normalizeFallbackPlan(activity);
});

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
      "d1-hozenji-sweets",
      "d1-uranamba-dinner",
      "d1-indoor-dinner",
    ],
  },
  {
    kicker: "Day 2 / 11.29 Sun",
    title: "搬到 Hiyori、今宮戎、奈良餵鹿、難波日本食",
    note: "先到新飯店寄行李，順路走今宮戎神社，再去奈良。晚上回大阪難波吃一餐坐得下的日本食，泡湯當恢復選項。",
    base: `住宿：${hiyoriHotelName}`,
    transport: "主交通：南海 / 近鐵 / JR 環狀線",
    activityIds: [
      "d2-luggage-shinimamiya",
      "d2-locker-backup",
      "d2-imamiya-ebisu",
      "d2-skip-shrine",
      "d2-nara-park",
      "d2-nara-short",
      "d2-namba-ramen-spa",
      "d2-shinsekai-dinner",
    ],
  },
  {
    kicker: "Day 3 / 11.30 Mon",
    title: "大阪海遊館、貓頭鷹咖啡、日本必吃晚餐",
    note: "早餐後搭 Metro 到大阪港看海遊館；下午回千日前貓頭鷹咖啡，晚餐再補壽司、炸豬排、烏龍麵或關東煮。",
    base: `住宿：${hiyoriHotelName}`,
    transport: "主交通：JR 大阪環狀線 / Metro 御堂筋線 / 步行",
    activityIds: [
      "d3-kaiyukan",
      "d3-tempozan-slow",
      "d3-owl-cafe",
      "d3-owl-cafe-skip",
      "d3-japanese-food-dinner",
      "d3-shinsekai-food",
    ],
  },
  {
    kicker: "Day 4 / 12.01 Tue",
    title: "心齋橋寶可夢、堀江或住吉大社、長居 teamLab",
    note: "早上可在 CONA 慢慢吃早餐；下午在堀江散步或改去住吉大社，晚上到長居看 teamLab。",
    base: `住宿：${hiyoriHotelName}`,
    transport: "主交通：Metro 御堂筋線",
    activityIds: [
      "d4-pokemon",
      "d4-pretty-lunch",
      "d4-horie-walk",
      "d4-sumiyoshi-taisha",
      "d4-indoor-namba",
      "d4-teamlab",
      "d4-tennoji-night",
    ],
  },
  {
    kicker: "Day 5 / 12.02 Wed",
    title: "CONA 早餐、難波最後日本食、回機場",
    note: "早餐已加購，中午依肚子選烏龍麵、壽司、蛋包飯或輕食；15:25 起飛，12:00 前後離開市區比較安心。",
    base: `住宿：${hiyoriHotelName} → KIX T2`,
    transport: "主交通：南海 / JR / Metro",
    activityIds: [
      "d5-hotel-breakfast",
      "d5-sleep-in",
      "d5-last-ramen-shopping",
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
      const groupCards = [group.main, ...group.backups].filter(Boolean);
      const cards = groupCards.map((activity, index) => renderActivityCard(activity, index, groupCards.length)).join("");
      const nextMain = group.main ? nextMainAfter(mainActivities, group.main.id) : null;
      return `
        <section class="route-group" aria-label="${group.main ? escapeText(group.main.time) : "備案"} 行程選項">
          <div class="route-group-topline">
            <span>${groupCards.length > 1 ? `左右滑看 ${groupCards.length} 個版本` : "單一路線"}</span>
            <strong>${groupCards.map((item) => (item.type === "main" ? "主計畫" : "備案")).join(" / ")}</strong>
          </div>
          <div class="route-group-strip">${cards}</div>
          ${nextMain ? renderConnector(group.main, nextMain) : ""}
        </section>
      `;
    })
    .join("");
}

function nextMainAfter(mainActivities, id) {
  const index = mainActivities.findIndex((activity) => activity.id === id);
  return index >= 0 ? mainActivities[index + 1] : null;
}

function renderActivityCard(activity, index = 0, total = 1) {
  const label = activity.type === "main" ? "主計畫" : "備案";
  const foods = activity.foods.slice(0, 5).map((item) => `<li>${escapeText(item.name)}</li>`).join("");
  const stationPreview = activity.transit || activity.stationAccess?.[0];
  const optionLabel = total > 1 ? `${index + 1}/${total}` : "1/1";
  return `
    <article class="route-card ${activity.type === "backup" ? "is-backup" : ""}">
      <a class="route-image" href="activity.html?id=${activity.id}" aria-label="查看 ${escapeText(activity.title)} 詳情">
        <img src="${mediaUrl(activity.media.hero)}" alt="${mediaAlt(activity.media.hero, activity.title)}" loading="lazy" onerror="this.src='${fallbackImage.url}'">
        <span class="image-subject">${escapeText(activity.media.hero.subject || activity.area)}</span>
      </a>
      <div class="route-content">
        <div class="slot-topline">
          <span class="slot-time">${activity.time}</span>
          <span class="type-pill">${label} ${optionLabel}</span>
        </div>
        <a class="route-title" href="activity.html?id=${activity.id}">${escapeText(activity.title)}</a>
        <span class="jp-name">${escapeText(activity.jpName || activity.area)}</span>
        <p>${escapeText(activity.summary)}</p>
        <div class="route-facts">
          <div>
            <span>下哪站</span>
            <p>${escapeText(stationPreview)}</p>
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
  const origin = current.end;
  const destination = next.end;
  return `
    <div class="transit-connector">
      <span>${escapeText(origin)} → ${escapeText(destination)}</span>
      <a href="${mapDirections(origin, destination)}" target="_blank" rel="noreferrer">
        查下一段大眾運輸
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
          ${hotel.mealPlan ? `<strong class="meal-plan">${escapeText(hotel.mealPlan)}</strong>` : ""}
          <div class="station-list">
            ${hotel.stations.map((station) => `<strong>${escapeText(station)}</strong>`).join("")}
          </div>
          ${
            hotel.perks
              ? `<div class="hotel-perks" aria-label="飯店餐飲與免費服務">${hotel.perks
                  .map(
                    ([time, title, note]) => `
                      <div>
                        <span>${escapeText(time)}</span>
                        <strong>${escapeText(title)}</strong>
                        <p>${escapeText(note)}</p>
                      </div>`
                  )
                  .join("")}</div>`
              : ""
          }
          <div class="link-grid">
            ${hotel.links
              .map(([label, query]) => `<a href="${mapSearch(query)}" target="_blank" rel="noreferrer">${label}</a>`)
              .join("")}
            ${(hotel.sourceLinks || [])
              .map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`)
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
  const next = activity.nextActivityId
    ? activityById[activity.nextActivityId]
    : activity.type === "main"
      ? nextMainAfter(mainActivities, activity.id)
      : null;
  const nextOrigin = activity.end;
  const nextDestination = next?.end;

  document.title = `${activity.title} | 一起去大阪`;
  detail.innerHTML = `
    <section class="activity-hero">
      <figure class="activity-hero-media">
        <img src="${mediaUrl(activity.media.hero)}" alt="${mediaAlt(activity.media.hero, activity.title)}" onerror="this.src='${fallbackImage.url}'">
        <figcaption>${mediaSource(activity.media.hero) || escapeText(activity.media.hero.subject || activity.title)}</figcaption>
      </figure>
      <div>
        <p class="date-line">${day.kicker} / ${activity.time}</p>
        <h1>${escapeText(activity.title)}</h1>
        <p class="jp-title">${escapeText(activity.jpName || activity.area)}</p>
        <p class="lead">${escapeText(activity.summary)}</p>
        ${activity.titleNote ? `<p class="name-note">${escapeText(activity.titleNote)}</p>` : ""}
        <div class="hero-actions">
          <a class="button primary" href="${mapDirections(activity.start, activity.end)}" target="_blank" rel="noreferrer">查大眾運輸</a>
          <a class="button ghost" href="${mapSearch(activity.mapQuery)}" target="_blank" rel="noreferrer">開地點</a>
          <a class="button ghost" href="index.html#planner">回每日路線</a>
        </div>
      </div>
    </section>
    <section class="detail-gallery" aria-label="圖文導覽">
      ${galleryFor(activity)
        .map(
          (item) => `
            <figure>
              <img src="${mediaUrl(item.image)}" alt="${mediaAlt(item.image, item.caption)}" loading="lazy" onerror="this.src='${fallbackImage.url}'">
              <figcaption>${escapeText(item.caption)}</figcaption>
              ${mediaSource(item.image) ? `<small>${mediaSource(item.image)}</small>` : ""}
            </figure>
          `
        )
        .join("")}
    </section>
    <section class="section detail-section">
      <div class="detail-layout">
        <article class="detail-panel">
          <p class="panel-kicker">HOW TO MOVE</p>
          <h2>第一次去也看得懂的走法</h2>
          <p>${escapeText(activity.transit)}</p>
          <div class="station-access">
            ${activity.stationAccess.map((item) => `<span>${escapeText(item)}</span>`).join("")}
          </div>
          <ol class="step-list">
            ${activity.steps.map((step) => `<li>${escapeText(step)}</li>`).join("")}
          </ol>
        </article>
        <article class="detail-panel">
          <p class="panel-kicker">FOOD AROUND</p>
          <h2>這張卡附近可以吃什麼</h2>
          <p>${escapeText(activity.foodIntro)}</p>
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
            <li>如果排隊或下雨：${escapeText(activity.fallbackPlan)}</li>
            ${activity.tips.map((tip) => `<li>${escapeText(tip)}</li>`).join("")}
          </ul>
          ${
            next
              ? `<a class="button primary full" href="${mapDirections(nextOrigin, nextDestination)}" target="_blank" rel="noreferrer">下一段交通：${escapeText(activity.title)} → ${escapeText(next.title)}</a>`
              : `<a class="button primary full" href="index.html#planner">這天主線到這裡，回行程看備案</a>`
          }
        </article>
      </div>
      <div class="feature-grid">
        <article>
          <span>必吃</span>
          ${activity.musts.eat.map((item) => `<strong>${escapeText(item)}</strong>`).join("")}
        </article>
        <article>
          <span>必喝</span>
          ${activity.musts.drink.map((item) => `<strong>${escapeText(item)}</strong>`).join("")}
        </article>
        <article>
          <span>必體驗</span>
          ${activity.musts.experience.map((item) => `<strong>${escapeText(item)}</strong>`).join("")}
        </article>
      </div>
      <article class="story-panel">
        <p class="panel-kicker">FIELD GUIDE</p>
        <h2>把這張卡當成一段小旅行</h2>
        ${activity.article.map((paragraph) => `<p>${escapeText(paragraph)}</p>`).join("")}
        ${
          activity.sources?.length
            ? `<div class="source-links compact">${activity.sources
                .map((item) => `<a href="${item.url}" target="_blank" rel="noreferrer">${escapeText(item.name)}</a>`)
                .join("")}</div>`
            : ""
        }
      </article>
    </section>
  `;
}

function galleryFor(activity) {
  const captions = [
    `${activity.media.gallery[0]?.subject || activity.area}：${activity.title}`,
    activity.type === "main" ? "主線節奏：照這張卡慢慢走" : "備案節奏：少跑一點、保留體力",
    activity.foodIntro,
  ];
  return activity.media.gallery.map((asset, index) => ({
    image: asset,
    caption: captions[index] || asset.subject || activity.title,
  }));
}

document.addEventListener("DOMContentLoaded", () => {
  renderSharedNav();
  renderPlanner();
  renderStayCards();
  renderActivityDetail();
});

window.TRIP_DATA = { activities, days, hotels, mapSearch, mapDirections };
