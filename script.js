const days = [
  {
    kicker: "Day 1 / 抵達大阪",
    title: "關西機場 → 難波 → 道頓堀吃第一餐",
    mood: "先不要塞太滿，把入境、交通、寄放行李和第一晚的胃口留好。",
    area: "建議住：難波 / 心齋橋",
    pace: "步調：輕鬆",
    items: [
      ["13:10", "抵達關西機場 T2", "抓入境、領行李、買交通卡或補票時間。"],
      ["15:00", "進市區放行李", "第一次大阪推薦住難波、心齋橋、本町或梅田。"],
      ["17:30", "道頓堀晚餐", "章魚燒、御好燒、拉麵先挑一種，不要第一晚就吃爆。"],
      ["20:00", "法善寺橫丁散步", "晚上氣氛很大阪，適合慢慢拍照。"],
    ],
  },
  {
    kicker: "Day 2 / 經典大阪",
    title: "大阪城公園 → 梅田 → Pokémon Center OSAKA",
    mood: "白天用大阪城開場，下午移到梅田逛街，晚上看城市夜景。",
    area: "區域：大阪城 / 梅田",
    pace: "步調：中等",
    items: [
      ["09:30", "大阪城公園", "散步拍照就很夠，想看歷史再進天守閣。"],
      ["12:30", "梅田午餐", "百貨美食街選擇多，下雨也很好躲。"],
      ["14:00", "Pokémon Center OSAKA", "在大丸梅田，順路也可逛 Nintendo OSAKA。"],
      ["17:30", "梅田 Sky Building", "天氣好的話排夕陽到夜景，收尾很漂亮。"],
    ],
  },
  {
    kicker: "Day 3 / 小出走",
    title: "奈良半日，或改成京都一日",
    mood: "你們如果想多一點關西感，奈良比較溫柔；京都漂亮但要早起。",
    area: "備案：留在大阪吃新世界",
    pace: "步調：看體力",
    items: [
      ["08:30", "奈良或京都出發", "奈良適合半日，京都建議清水寺、祇園一帶少量精選。"],
      ["12:30", "在當地吃午餐", "奈良可找釜飯或和食；京都可排咖啡甜點。"],
      ["16:30", "回大阪休息", "不要把晚餐排太遠，留餘裕比較舒服。"],
      ["19:00", "新世界串炸", "如果不出城，也可以改成通天閣和串炸夜晚。"],
    ],
  },
  {
    kicker: "Day 4 / 心齋橋重點日",
    title: "Pokémon Center OSAKA DX → Cafe → teamLab",
    mood: "這天放你最想去的 Pokémon，晚上接 teamLab，主題感很完整。",
    area: "區域：心齋橋 / 長居",
    pace: "步調：中等偏滿",
    items: [
      ["10:30", "心齋橋 / 美國村", "先逛街、買藥妝或找咖啡，讓下午節奏柔一點。"],
      ["13:00", "Pokémon Center OSAKA DX", "在大丸心齋橋，跟 Pokémon Cafe 同棟最方便。"],
      ["15:00", "Pokémon Cafe Osaka", "務必出發前確認預約；沒訂到就改甜點或百貨餐廳。"],
      ["18:30", "teamLab Botanical Garden Osaka", "夜間戶外展，冬天注意保暖與當日開放公告。"],
    ],
  },
  {
    kicker: "Day 5 / 回台日",
    title: "黑門市場早午餐 → 補買伴手禮 → 關西機場",
    mood: "回程是 15:25，這天只排近距離活動，讓心情不要卡在趕車。",
    area: "區域：難波 / 關西機場",
    pace: "步調：保守",
    items: [
      ["09:30", "黑門市場或咖啡店", "吃一點海鮮、玉子燒、水果，避開太晚人潮。"],
      ["10:45", "最後補買", "難波、心齋橋、車站都可買伴手禮。"],
      ["12:00", "離開市區前往 KIX", "T2 航班要多留接駁與報到時間。"],
      ["15:25", "MM027 起飛", "座位 13E / 13F，回台 17:55 抵達桃園 T1。"],
    ],
  },
];

const food = {
  namba: {
    title: "難波 / 道頓堀",
    text: "第一晚最穩。先吃章魚燒或御好燒，再去法善寺橫丁散步，最後留一點胃給宵夜拉麵。",
    tags: ["章魚燒", "御好燒", "金龍拉麵一帶", "法善寺橫丁", "居酒屋"],
  },
  shinsekai: {
    title: "新世界",
    text: "想吃大阪味又想拍復古街景，可以把通天閣和串炸排一起。比較適合晚餐前後，不要太早去。",
    tags: ["串炸", "通天閣", "復古商店街", "啤酒", "宵夜感"],
  },
  kuromon: {
    title: "黑門市場",
    text: "比較像觀光市場，適合早午餐與少量吃。建議當成回程日前的小散步，不要把整餐期待全押在這裡。",
    tags: ["海鮮", "水果", "玉子燒", "早午餐", "邊走邊吃"],
  },
  umeda: {
    title: "梅田",
    text: "下雨備案很強，百貨美食街、地下街、甜點和咖啡都多。安排 Pokémon Center OSAKA 那天最順。",
    tags: ["百貨餐廳", "甜點", "咖啡", "地下街", "夜景"],
  },
};

const dayTabs = document.querySelectorAll(".day-tab");
const dayKicker = document.querySelector("#dayKicker");
const dayTitle = document.querySelector("#dayTitle");
const dayMood = document.querySelector("#dayMood");
const dayList = document.querySelector("#dayList");
const dayArea = document.querySelector("#dayArea");
const dayPace = document.querySelector("#dayPace");

function renderDay(index) {
  const day = days[index];
  dayKicker.textContent = day.kicker;
  dayTitle.textContent = day.title;
  dayMood.textContent = day.mood;
  dayArea.textContent = day.area;
  dayPace.textContent = day.pace;
  dayList.innerHTML = day.items
    .map(
      ([time, title, note]) => `
        <li>
          <time>${time}</time>
          <div>
            <strong>${title}</strong>
            <span>${note}</span>
          </div>
        </li>
      `
    )
    .join("");

  dayTabs.forEach((tab) => {
    const isActive = Number(tab.dataset.day) === index;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

dayTabs.forEach((tab) => {
  tab.addEventListener("click", () => renderDay(Number(tab.dataset.day)));
});

const foodRows = document.querySelectorAll(".food-row");
const foodTitle = document.querySelector("#foodTitle");
const foodText = document.querySelector("#foodText");
const foodTags = document.querySelector("#foodTags");

function renderFood(key) {
  const item = food[key];
  foodTitle.textContent = item.title;
  foodText.textContent = item.text;
  foodTags.innerHTML = item.tags.map((tag) => `<span>${tag}</span>`).join("");
  foodRows.forEach((row) => {
    row.classList.toggle("is-active", row.dataset.food === key);
  });
}

foodRows.forEach((row) => {
  row.addEventListener("click", () => renderFood(row.dataset.food));
});

const saved = new Set(JSON.parse(localStorage.getItem("osakaSavedPlaces") || "[]"));
document.querySelectorAll(".save-button").forEach((button) => {
  const key = button.dataset.save;
  const sync = () => {
    const isSaved = saved.has(key);
    button.classList.toggle("is-saved", isSaved);
    button.textContent = isSaved ? "已加入" : "加入想去";
  };
  button.addEventListener("click", () => {
    if (saved.has(key)) {
      saved.delete(key);
    } else {
      saved.add(key);
    }
    localStorage.setItem("osakaSavedPlaces", JSON.stringify([...saved]));
    sync();
  });
  sync();
});

document.querySelectorAll(".check-card input").forEach((input, index) => {
  const key = `osakaChecklist${index}`;
  input.checked = localStorage.getItem(key) === "true";
  input.addEventListener("change", () => {
    localStorage.setItem(key, String(input.checked));
  });
});

renderDay(0);
renderFood("namba");
