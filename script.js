const images = {
  dotonbori:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Dotonbori%2C%20Osaka%2C%20at%20night%2C%20November%202016.jpg",
  castle:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Osaka%20Castle%2002bs3200.jpg",
  shinsekai:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Shinsekai%20and%20Tsutenkaku%20at%20night%202019-04-12.jpg",
  kuromon: "https://commons.wikimedia.org/wiki/Special:FilePath/JP-osaka-arkade.jpg",
  umeda:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Osaka_Umeda_Sky_Building_Panoramablick_05.jpg",
  nara:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Deer%20at%20nara%20park%201.jpg",
  tsuruhashi:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Osaka%20Ikuno%20Korea%20Town%20001.jpg",
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
    title: "搬到新今宮、大阪城、天滿、梅田寶可夢",
    note: "先處理換住宿，再用 JR / Metro 串大阪城、天滿商店街、梅田百貨。",
    base: "住宿：Apartment Hotel 11 Shinimamiya 3",
    transport: "主交通：JR 環狀線 / Metro / 南海",
    slots: [
      {
        time: "09:30-11:00",
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
        time: "11:30-14:30",
        buffer: "公園 + 午餐都留鬆",
        image: images.castle,
        options: [
          {
            title: "大阪城公園 + 森之宮周邊午餐",
            body: "不一定進天守閣，重點是公園、護城河、外觀。午餐在森之宮或天滿橋附近找小店。",
            eats: ["喫茶店午餐", "咖哩", "定食", "麵類"],
            transport: "JR 環狀線到森之宮 / 大阪城公園。",
            walk: "出站到公園 5-15 分鐘。",
          },
          {
            title: "雨天：大阪歷史博物館 + 谷町午餐",
            body: "雨天把公園縮短，改室內看大阪城周邊視角。",
            eats: ["谷町四丁目定食", "咖啡", "烏龍麵"],
            transport: "Metro 谷町四丁目。",
            walk: "站到博物館約 5 分鐘。",
          },
        ],
      },
      {
        time: "15:00-20:30",
        buffer: "天滿吃法 + 梅田購物",
        image: images.umeda,
        options: [
          {
            title: "天神橋筋商店街 → 梅田 Pokémon Center OSAKA",
            body: "下午先去天滿吃商店街，傍晚再進梅田百貨。Pokémon Center OSAKA、Nintendo OSAKA 可放一起。",
            eats: ["壽司小店", "關東煮", "炸物", "老喫茶"],
            transport: "天滿 / 扇町 → 梅田，JR 或 Metro。",
            walk: "商店街沿線走走停停，梅田站到百貨 5-10 分鐘。",
          },
          {
            title: "備案：只跑梅田室內",
            body: "雨天或累了就直接梅田。百貨地下街吃飯、逛寶可夢和任天堂。",
            eats: ["地下街定食", "甜點", "百貨熟食", "拉麵"],
            transport: "JR 大阪站 / Metro 梅田。",
            walk: "全程靠車站連通道。",
          },
        ],
      },
    ],
  },
  {
    kicker: "Day 3 / 11.30 Mon",
    title: "奈良餵鹿、鶴橋市場、SpaWorld",
    note: "這天是最像你要的版本：近鐵奈良白天，回大阪吃鶴橋，晚上泡湯或新世界。",
    base: "住宿：新今宮",
    transport: "主交通：近鐵 / JR 環狀線 / Metro",
    slots: [
      {
        time: "08:30-15:00",
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
        time: "16:30-19:30",
        buffer: "回大阪後直接吃在地",
        image: images.tsuruhashi,
        options: [
          {
            title: "鶴橋市場 / 商店街晚餐",
            body: "回大阪後不用回難波，直接鶴橋吃。這裡比觀光商圈更 local，煙火氣很強。",
            eats: ["燒肉", "泡菜", "韓式小菜", "蒸豬肉"],
            transport: "近鐵奈良 → 鶴橋，或 JR 環狀線接新今宮。",
            walk: "鶴橋站出來就是商店街與小店。",
          },
          {
            title: "備案：新世界串炸晚餐",
            body: "如果奈良走太累，直接回新今宮旁邊吃新世界，比再去鶴橋省力。",
            eats: ["串炸", "土手燒", "高球", "關東煮"],
            transport: "JR 新今宮 / Metro 動物園前。",
            walk: "住宿到新世界步行可處理。",
          },
        ],
      },
      {
        time: "20:00-22:30",
        buffer: "泡湯是選配，不硬排",
        image: images.shinsekai,
        options: [
          {
            title: "SpaWorld 泡湯收尾",
            body: "想泡溫泉就選這晚，離住宿近，奈良走一整天後很合理。",
            eats: ["泡湯後牛奶", "便利店甜點", "宵夜小吃"],
            transport: "動物園前 / 新今宮步行圈。",
            walk: "住宿附近，晚上回程單純。",
          },
          {
            title: "備案：回房洗衣 + 超市熟食",
            body: "Apartment 有洗衣機和廚房，這晚可以整理衣服、買水果熟食回去吃。",
            eats: ["超市熟食", "水果", "泡麵", "飲料"],
            transport: "新今宮周邊步行。",
            walk: "不再移動，讓體力回血。",
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
    title: "新今宮 / 新世界",
    image: images.shinsekai,
    intro: "後三晚的生活區。不是精緻飯店區，但最適合把新世界、SpaWorld、天王寺、回房洗衣串在一起。",
    dishes: [
      ["串炸", "蝦、蓮藕、牛肉、起司混點，不要一次吃太滿。"],
      ["土手燒", "牛筋味噌燉，適合當小菜。"],
      ["關東煮", "晚上想坐一下可以找老派小店。"],
      ["超市熟食", "房內有微波爐和廚房，回房吃也合理。"],
    ],
    tips: ["晚上回住宿走大路，優先用新今宮 / 動物園前 / 大國町。", "SpaWorld 當奈良日後的恢復選項。"],
  },
  {
    key: "tenma",
    tab: "天滿 / 天神橋筋",
    area: "商店街、立飲、老喫茶",
    title: "天滿 / 天神橋筋",
    image: images.kuromon,
    intro: "比心齋橋更生活感。適合排在大阪城後，下午到晚餐慢慢吃，不硬追名店。",
    dishes: [
      ["壽司小店", "找排隊不誇張、翻桌快的小店。"],
      ["立飲", "點小份炸物、煮物、刺身，吃氣氛。"],
      ["老喫茶", "下午回血，適合坐著休息。"],
      ["可樂餅 / 炸物", "商店街邊走邊補一點。"],
    ],
    tips: ["這區適合少量多攤，不適合一開始就吃大餐。", "回梅田或新今宮都能接 JR / Metro。"],
  },
  {
    key: "tsuruhashi",
    tab: "鶴橋",
    area: "市場、燒肉、泡菜",
    title: "鶴橋",
    image: images.tsuruhashi,
    intro: "奈良回大阪最順的 local 晚餐點。站一出來就是商店街和燒肉味，喜歡在地感會很有趣。",
    dishes: [
      ["燒肉", "不用追名店，挑座位舒服、排隊不長的。"],
      ["泡菜", "可買小份回房間配宵夜。"],
      ["韓式小菜", "煎餅、蒸豬肉、湯類都適合。"],
      ["市場水果", "看到漂亮水果可買回公寓。"],
    ],
    tips: ["衣服可能會有燒肉味，剛好住宿有洗衣機。", "從近鐵奈良回來可直接在鶴橋下車。"],
  },
  {
    key: "namba",
    tab: "難波 / 日本橋",
    area: "第一晚、補買、近鐵奈良入口",
    title: "難波 / 日本橋",
    image: images.dotonbori,
    intro: "不是只看觀光主街。往法善寺、裏難波、道具屋筋、日本橋小巷走，會比心齋橋更適合吃。",
    dishes: [
      ["立飲小菜", "晚餐前後很彈性。"],
      ["御好燒", "當正餐，排太久就換。"],
      ["章魚燒", "分一份就好，留胃給下一攤。"],
      ["百貨熟食", "回程補買或雨天很好用。"],
    ],
    tips: ["近鐵日本橋 / 大阪難波是奈良日的重要入口。", "黑門偏觀光，少量吃、不要把整餐賭在市場。"],
  },
  {
    key: "nara",
    tab: "奈良",
    area: "餵鹿、商店街、午餐",
    title: "奈良",
    image: images.nara,
    intro: "近鐵奈良下車後步行就能串奈良公園、東大寺、東向商店街。餵鹿好玩，但鹿是野生動物。",
    dishes: [
      ["釜飯", "適合午餐，但熱門店可能要等。"],
      ["柿葉壽司", "可買小份帶著吃。"],
      ["茶粥", "想吃清淡可以找這類。"],
      ["和菓子 / 麻糬", "下午茶或伴手禮。"],
    ],
    tips: ["鹿餅拿出來後不要逗鹿，餵完攤手讓牠知道沒了。", "秋冬傍晚涼，奈良步行日要穿好走的鞋。"],
  },
  {
    key: "kizu",
    tab: "木津 / 黑門",
    area: "回程日上午、市場早午餐",
    title: "木津市場 / 黑門市場",
    image: images.kuromon,
    intro: "回程日從新今宮出發，木津市場比黑門更偏在地；黑門則比較順路補買與拍照。",
    dishes: [
      ["海鮮定食", "木津市場可優先找坐下來吃的。"],
      ["玉子燒", "小份、好分食。"],
      ["水果", "買回飯店或路上吃。"],
      ["烤物", "不要一次買太貴，先看一圈。"],
    ],
    tips: ["市場早上比較有感，回程日別拖到太晚。", "拖大行李不要進市場，先寄放或直接去機場。"],
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
  document.querySelector("#foodDishes").innerHTML = guide.dishes
    .map(([name, note]) => `<article><strong>${name}</strong><span>${note}</span></article>`)
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
