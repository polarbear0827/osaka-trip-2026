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
};

const days = [
  {
    kicker: "Day 1 / 11.28 Sat",
    title: "關西機場、難波、道頓堀",
    note: "第一天先把入境、進市區、放行李排順，晚上只鎖一個吃飯區。",
    base: "建議住：難波 / 心齋橋",
    transport: "主交通：南海 / Metro",
    slots: [
      {
        time: "13:10-16:30",
        buffer: "含入境 + 30 分鐘緩衝",
        image: images.dotonbori,
        options: [
          {
            title: "KIX T2 → 難波 / 心齋橋放行李",
            body: "落地後不要急著排景點，先處理交通卡、行李和飯店 check-in。",
            eats: ["機場簡單補水", "難波車站買飯糰或甜點"],
            transport: "南海電鐵到難波，或利木津巴士到飯店附近。",
          },
          {
            title: "若入境很慢：直接去飯店休息",
            body: "第一天晚餐區域不變，只把下午購物刪掉。",
            eats: ["便利商店熱食", "飯店附近咖啡"],
            transport: "用 Google Maps 看最少轉乘路線。",
          },
        ],
      },
      {
        time: "17:30-21:00",
        buffer: "晚餐前後各留 30 分鐘",
        image: images.dotonbori,
        options: [
          {
            title: "道頓堀 + 法善寺橫丁",
            body: "第一晚用最大阪的夜景開場。散步比排太多店更舒服。",
            eats: ["章魚燒", "御好燒", "拉麵", "居酒屋小菜"],
            transport: "Metro 難波 / 日本橋，步行串起來。",
          },
          {
            title: "備案 1：裏難波居酒屋",
            body: "想吃得比較像在地晚上，就往裏難波找串燒、海鮮、立飲。",
            eats: ["串燒", "生魚片小盤", "炸物", "啤酒"],
            transport: "難波站步行。",
          },
          {
            title: "備案 2：心齋橋百貨晚餐",
            body: "下雨或太累就進百貨吃，不需要在戶外排隊。",
            eats: ["炸豬排", "洋食", "甜點", "咖啡"],
            transport: "Metro 心齋橋站。",
          },
        ],
      },
    ],
  },
  {
    kicker: "Day 2 / 11.29 Sun",
    title: "大阪城、梅田、Pokémon Center OSAKA",
    note: "上午戶外、下午百貨，晴雨都能接。梅田很好買也很好休息。",
    base: "建議住：難波 / 本町 / 梅田",
    transport: "主交通：JR 環狀線 / Metro",
    slots: [
      {
        time: "09:30-12:30",
        buffer: "公園散步 + 30 分鐘咖啡餘裕",
        image: images.castle,
        options: [
          {
            title: "大阪城公園慢走",
            body: "不一定要進天守閣；拍外觀、護城河、公園就很完整。",
            eats: ["咖啡", "便利店早餐", "公園附近輕食"],
            transport: "JR 森之宮 / 大阪城公園，或 Metro 谷町四丁目。",
          },
          {
            title: "備案 1：大阪歷史博物館",
            body: "下雨時比公園舒服，也能看到大阪城附近城市視角。",
            eats: ["博物館周邊咖啡", "谷町四丁目午餐"],
            transport: "Metro 谷町四丁目。",
          },
        ],
      },
      {
        time: "14:00-18:30",
        buffer: "購物不要排死，留找路時間",
        image: images.umeda,
        options: [
          {
            title: "梅田 Pokémon Center OSAKA + 百貨",
            body: "大丸梅田、LUCUA、Nintendo OSAKA 可以放一起，不用跨區。",
            eats: ["百貨美食街", "甜點", "咖啡", "伴手禮先買一點"],
            transport: "JR 大阪站 / Metro 梅田站。",
          },
          {
            title: "備案 1：Umeda Sky Building 夜景",
            body: "天氣好就傍晚去，天氣差就留在百貨地下街。",
            eats: ["滝見小路", "梅田地下街", "拉麵"],
            transport: "JR 大阪站步行約 10-15 分鐘。",
          },
        ],
      },
    ],
  },
  {
    kicker: "Day 3 / 11.30 Mon",
    title: "奈良半日，或大阪慢慢吃",
    note: "這天不要硬衝京都。奈良半日比較輕鬆，不想出城就改新世界。",
    base: "建議：看天氣與體力決定",
    transport: "主交通：近鐵 / JR / Metro",
    slots: [
      {
        time: "08:30-15:30",
        buffer: "來回交通 + 午餐都留餘裕",
        image: images.nara,
        options: [
          {
            title: "奈良公園 + 東大寺半日",
            body: "從大阪難波搭近鐵到近鐵奈良，步行就能串主要區域。",
            eats: ["釜飯", "柿葉壽司", "茶粥", "和菓子"],
            transport: "近鐵大阪難波 → 近鐵奈良。",
          },
          {
            title: "備案 1：留大阪走新世界",
            body: "如果天氣差或想睡晚一點，下午再去通天閣、新世界吃串炸。",
            eats: ["串炸", "土手燒", "啤酒", "章魚燒"],
            transport: "Metro 動物園前 / 惠美須町，JR 新今宮。",
          },
          {
            title: "備案 2：黑門市場 + 日本橋",
            body: "更懶一點就在難波附近吃吃逛逛，補藥妝和扭蛋。",
            eats: ["海鮮小吃", "玉子燒", "草莓", "烤扇貝"],
            transport: "Metro 日本橋站步行。",
          },
        ],
      },
      {
        time: "18:00-21:00",
        buffer: "晚餐區域固定，選擇自由",
        image: images.shinsekai,
        options: [
          {
            title: "新世界串炸夜",
            body: "復古招牌很適合晚上拍照；吃串炸不要排太滿，留散步時間。",
            eats: ["串炸蝦", "蓮藕串", "牛筋土手燒", "高球"],
            transport: "Metro 惠美須町 / 動物園前。",
          },
          {
            title: "備案：天王寺 Harukas / Q's Mall",
            body: "下雨或想逛室內，天王寺商場比新世界更穩。",
            eats: ["商場餐廳", "甜點", "咖啡"],
            transport: "JR / Metro 天王寺。",
          },
        ],
      },
    ],
  },
  {
    kicker: "Day 4 / 12.01 Tue",
    title: "心齋橋 Pokémon DX、Cafe、teamLab",
    note: "這天放你最想去的點。Cafe 和 teamLab 都要出發前再確認預約與開放。",
    base: "建議住：心齋橋 / 難波",
    transport: "主交通：Metro 御堂筋線",
    slots: [
      {
        time: "10:30-16:30",
        buffer: "Cafe 前後各 30 分鐘",
        image: images.dotonbori,
        options: [
          {
            title: "Pokémon Center OSAKA DX + Pokémon Cafe",
            body: "同在心齋橋大丸，最適合排成半天。Cafe 沒訂到也能逛店和百貨。",
            eats: ["Pokémon Cafe", "百貨甜點", "心齋橋午餐", "咖啡"],
            transport: "Metro 心齋橋站。",
          },
          {
            title: "備案 1：美國村 + Orange Street",
            body: "如果 Cafe 時段不漂亮，就把下午變成逛街、古著、咖啡。",
            eats: ["漢堡", "咖啡", "甜甜圈", "可麗餅"],
            transport: "心齋橋步行。",
          },
          {
            title: "備案 2：難波室內購物",
            body: "下雨時改走 Namba Parks、Marui、高島屋。",
            eats: ["百貨餐廳", "拉麵", "甜點"],
            transport: "Metro 難波站。",
          },
        ],
      },
      {
        time: "18:00-21:30",
        buffer: "夜間展 + 回程都留餘裕",
        image: images.umeda,
        options: [
          {
            title: "teamLab Botanical Garden Osaka",
            body: "長居植物園夜間戶外展，穿好走的鞋。雨天或強風要看當日公告。",
            eats: ["長居前簡單晚餐", "回難波宵夜", "便利店熱飲"],
            transport: "Metro 御堂筋線到長居。",
          },
          {
            title: "備案 1：梅田百貨 + 夜景",
            body: "若 teamLab 天氣不穩，梅田室內替代性最高。",
            eats: ["百貨美食街", "蛋糕", "拉麵", "地下街小吃"],
            transport: "Metro 御堂筋線到梅田。",
          },
          {
            title: "備案 2：道頓堀第二輪",
            body: "最後一晚想放鬆，就回難波吃沒吃到的清單。",
            eats: ["御好燒", "串炸", "拉麵", "居酒屋"],
            transport: "Metro 難波 / 日本橋。",
          },
        ],
      },
    ],
  },
  {
    kicker: "Day 5 / 12.02 Wed",
    title: "黑門市場、補買、回機場",
    note: "15:25 起飛，這天只排近距離。12:00 前後離開市區比較安心。",
    base: "建議：住難波最省心",
    transport: "主交通：南海 / 機場接駁",
    slots: [
      {
        time: "09:30-11:30",
        buffer: "行李 + 退房 + 市區移動",
        image: images.kuromon,
        options: [
          {
            title: "黑門市場早午餐",
            body: "當作最後一個大阪味散步，不要把整餐期待都壓在市場。",
            eats: ["玉子燒", "海鮮小份", "草莓", "烤物"],
            transport: "Metro 日本橋站，難波步行可到。",
          },
          {
            title: "備案 1：飯店附近咖啡",
            body: "如果前一天太累，睡飽比硬逛更重要。",
            eats: ["咖啡", "吐司", "飯糰", "便利店甜點"],
            transport: "步行。",
          },
        ],
      },
      {
        time: "12:00-15:25",
        buffer: "機場 T2 報到保守抓",
        image: images.dotonbori,
        options: [
          {
            title: "難波 → 關西機場 T2",
            body: "先把伴手禮和行李整理好，抓早一點到機場最安心。",
            eats: ["機場簡餐", "便利店補貨", "飲料"],
            transport: "南海難波到關西機場，T2 需接駁或依航空指示。",
          },
        ],
      },
    ],
  },
];

const foodGuides = [
  {
    key: "namba",
    tab: "難波 / 道頓堀",
    area: "夜晚、招牌、第一餐",
    title: "難波 / 道頓堀",
    image: images.dotonbori,
    intro: "適合第一晚或最後一晚。重點不是排名店，而是把散步、拍照、宵夜留鬆。",
    dishes: [
      ["章魚燒", "先買一份分著吃，不要第一站就吃飽。"],
      ["御好燒", "適合當正餐，排隊太長就換店。"],
      ["拉麵", "宵夜備案，雨天也穩。"],
      ["居酒屋", "想坐久一點聊天就選它。"],
    ],
    tips: ["法善寺橫丁比主街安靜，適合飯後散步。", "不要在同一條街連吃三攤炸物，胃會先投降。"],
  },
  {
    key: "shinsekai",
    tab: "新世界",
    area: "串炸、通天閣、復古夜景",
    title: "新世界",
    image: images.shinsekai,
    intro: "晚上很有大阪味。串炸店很多，選不用排太久、座位舒服的更適合情侶旅行。",
    dishes: [
      ["串炸", "蝦、蓮藕、牛肉、起司都適合混點。"],
      ["土手燒", "牛筋味噌燉，適合配飲料。"],
      ["高球 / 啤酒", "不喝酒就改烏龍茶，重點是氣氛。"],
      ["鯛魚燒 / 甜點", "飯後散步時再補。"],
    ],
    tips: ["新世界可接天王寺，天氣差就直接往商場移動。", "串炸不要沾第二次醬，很多店會有規則。"],
  },
  {
    key: "kuromon",
    tab: "黑門市場",
    area: "早午餐、小份吃",
    title: "黑門市場",
    image: images.kuromon,
    intro: "觀光市場感比較強，適合少量多樣，排回程日上午剛剛好。",
    dishes: [
      ["玉子燒", "便宜、好分食、當早餐很剛好。"],
      ["烤海鮮", "挑小份，不要一次買太貴。"],
      ["水果", "草莓、蜜柑類適合邊走邊吃。"],
      ["咖啡", "市場逛完找店坐一下。"],
    ],
    tips: ["市場人多時不要拖行李進去。", "價格落差大，先看一圈再買。"],
  },
  {
    key: "umeda",
    tab: "梅田",
    area: "百貨、甜點、雨天最強",
    title: "梅田",
    image: images.umeda,
    intro: "交通複雜但室內選擇多。排 Pokémon Center OSAKA、Nintendo OSAKA、夜景都順。",
    dishes: [
      ["百貨美食街", "下雨、冷天、想坐舒服就選這個。"],
      ["甜點咖啡", "逛街中段回血。"],
      ["地下街拉麵", "不用跨區，很多選擇。"],
      ["伴手禮", "先買一部分，回程比較輕鬆。"],
    ],
    tips: ["梅田地下街容易迷路，約定用 JR 大阪站或百貨門口集合。", "Umeda Sky Building 晴天傍晚比較值得。"],
  },
  {
    key: "nara",
    tab: "奈良",
    area: "半日小旅行",
    title: "奈良",
    image: images.nara,
    intro: "比京都輕鬆很多。近鐵奈良下車後步行串公園、東大寺和商店街。",
    dishes: [
      ["釜飯", "適合午餐，但名店可能要等。"],
      ["柿葉壽司", "可買小份，帶著當點心。"],
      ["和菓子", "下午茶感很舒服。"],
      ["茶粥", "想吃清淡可以找這類。"],
    ],
    tips: ["鹿是野生動物，餵食時注意手上紙袋和地圖。", "不想走太多就只排東大寺 + 公園。"],
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
  return Number.isInteger(saved) ? saved : modeFallbackIndex(slot);
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
            <ul class="mini-list">
              ${selected.eats.map((eat) => `<li>吃：${eat}</li>`).join("")}
            </ul>
            <div class="transport-line">${selected.transport}</div>
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
