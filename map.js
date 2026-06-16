const stations = [
  {
    id: "shinimamiya",
    name: "新今宮",
    lat: 34.6502,
    lng: 135.5001,
    x: 380,
    y: 360,
    lines: ["JR 環狀線", "JR 大和路線", "南海"],
    text: "後三晚住宿基地，接 JR、南海，旁邊可用動物園前站進 Metro。",
    maps: "https://maps.google.com/?q=Shin-Imamiya%20Station%20Osaka",
  },
  {
    id: "dobutsuen",
    name: "動物園前",
    lat: 34.6488,
    lng: 135.5053,
    x: 415,
    y: 380,
    lines: ["御堂筋線", "堺筋線"],
    text: "新今宮旁的 Metro 入口。去心齋橋、長居、梅田都很直覺，也靠近 SpaWorld。",
    maps: "https://maps.google.com/?q=Dobutsuen-mae%20Station%20Osaka",
  },
  {
    id: "daikokucho",
    name: "大國町",
    lat: 34.6569,
    lng: 135.4977,
    x: 410,
    y: 330,
    lines: ["御堂筋線", "四橋線"],
    text: "住宿附近的穩定替代站，去木津市場、難波、長居都好用。",
    maps: "https://maps.google.com/?q=Daikokucho%20Station%20Osaka",
  },
  {
    id: "namba",
    name: "難波",
    lat: 34.6663,
    lng: 135.5005,
    x: 430,
    y: 280,
    lines: ["御堂筋線", "南海", "近鐵/阪神"],
    text: "第一晚、道頓堀、回程補買、去奈良轉近鐵的核心站。",
    maps: "https://maps.google.com/?q=Namba%20Station%20Osaka",
  },
  {
    id: "nippombashi",
    name: "日本橋",
    lat: 34.6661,
    lng: 135.5069,
    x: 470,
    y: 300,
    lines: ["堺筋線", "千日前線", "近鐵"],
    text: "黑門市場、日本橋、近鐵奈良線入口。比心齋橋更貼近這次的吃法。",
    maps: "https://maps.google.com/?q=Nippombashi%20Station%20Osaka",
  },
  {
    id: "shinsaibashi",
    name: "心齋橋",
    lat: 34.6751,
    lng: 135.5007,
    x: 440,
    y: 230,
    lines: ["御堂筋線", "長堀鶴見綠地線"],
    text: "Pokémon Center OSAKA DX、Pokémon Cafe、美國村、堀江的入口。",
    maps: "https://maps.google.com/?q=Shinsaibashi%20Station%20Osaka",
  },
  {
    id: "osaka",
    name: "大阪 / 梅田",
    lat: 34.7025,
    lng: 135.4959,
    x: 455,
    y: 120,
    lines: ["JR", "御堂筋線", "阪急/阪神"],
    text: "百貨和 Pokémon Center OSAKA 所在的大站。這趟不是住宿首選，但備案很強。",
    maps: "https://maps.google.com/?q=Osaka%20Station",
  },
  {
    id: "tsuruhashi",
    name: "鶴橋",
    lat: 34.6656,
    lng: 135.5302,
    x: 560,
    y: 315,
    lines: ["JR 環狀線", "近鐵", "千日前線"],
    text: "奈良回程吃燒肉、泡菜、韓式小菜的 local 晚餐點。",
    maps: "https://maps.google.com/?q=Tsuruhashi%20Station%20Osaka",
  },
  {
    id: "nara",
    name: "近鐵奈良",
    lat: 34.6844,
    lng: 135.8277,
    x: 870,
    y: 360,
    lines: ["近鐵奈良線"],
    text: "去奈良公園餵鹿最方便的站，出站後步行串奈良公園、東大寺、商店街。",
    maps: "https://maps.google.com/?q=Kintetsu%20Nara%20Station",
  },
  {
    id: "nishikujo",
    name: "西九條",
    lat: 34.6821,
    lng: 135.4669,
    x: 150,
    y: 210,
    lines: ["JR 環狀線", "JR 夢咲線", "阪神"],
    text: "去 USJ 的轉乘站。從新今宮搭 JR 到這裡，再轉往 Universal City。",
    maps: "https://maps.google.com/?q=Nishikujo%20Station%20Osaka",
  },
  {
    id: "usj",
    name: "Universal City",
    lat: 34.6675,
    lng: 135.439,
    x: 90,
    y: 180,
    lines: ["JR 夢咲線"],
    text: "USJ 最近站。出站後跟人流走到環球影城入口，步行約 5 分鐘。",
    maps: "https://maps.google.com/?q=Universal%20City%20Station%20Osaka",
  },
  {
    id: "nagai",
    name: "長居",
    lat: 34.6108,
    lng: 135.5132,
    x: 390,
    y: 560,
    lines: ["御堂筋線", "JR 阪和線"],
    text: "teamLab Botanical Garden Osaka 的下車站。夜間戶外展，走路抓 10-15 分鐘。",
    maps: "https://maps.google.com/?q=Nagai%20Station%20Osaka",
  },
  {
    id: "tennoji",
    name: "天王寺",
    lat: 34.6463,
    lng: 135.5138,
    x: 420,
    y: 430,
    lines: ["JR", "御堂筋線", "谷町線"],
    text: "新今宮旁的大商圈。雨天、晚餐、阿倍野備案都可用。",
    maps: "https://maps.google.com/?q=Tennoji%20Station%20Osaka",
  },
  {
    id: "kix",
    name: "關西機場",
    lat: 34.4347,
    lng: 135.2441,
    x: 120,
    y: 590,
    lines: ["南海", "JR"],
    text: "Peach 在 KIX T2，回程日保守抓時間，從新今宮或難波搭南海很順。",
    maps: "https://maps.google.com/?q=Kansai%20Airport%20Station",
  },
];

const routes = [
  ["住宿 → USJ", "新今宮 → 西九條 → Universal City", "JR 環狀線 + JR 夢咲線，USJ 日最重要的一條。"],
  ["住宿 → 奈良", "新今宮 → 難波/日本橋 → 近鐵奈良", "去奈良公園推薦近鐵，到站後步行比較順。"],
  ["住宿 → teamLab", "動物園前 / 大國町 → 長居", "御堂筋線一路往南，夜間回程也單純。"],
  ["住宿 → 寶可夢", "動物園前 / 大國町 → 心齋橋", "Pokémon Center OSAKA DX 和 Cafe 在心齋橋大丸。"],
  ["住宿 → 機場", "新今宮 / 難波 → 關西機場", "南海很順，Peach T2 要再依機場接駁指示。"],
];

const stationLayer = document.querySelector("#stationLayer");
const stationName = document.querySelector("#stationName");
const stationText = document.querySelector("#stationText");
const stationTags = document.querySelector("#stationTags");
const stationMaps = document.querySelector("#stationMaps");
const nearestTitle = document.querySelector("#nearestTitle");
const nearestBody = document.querySelector("#nearestBody");
const nearestMeta = document.querySelector("#nearestMeta");
const locateMe = document.querySelector("#locateMe");
const routeCards = document.querySelector("#routeCards");

function renderStations() {
  stationLayer.innerHTML = stations
    .map(
      (station) => `
        <g class="station-node" data-station="${station.id}" transform="translate(${station.x} ${station.y})" tabindex="0" role="button" aria-label="${station.name}">
          <circle r="12"></circle>
          <text x="18" y="5">${station.name}</text>
        </g>
      `
    )
    .join("");

  document.querySelectorAll(".station-node").forEach((node) => {
    node.addEventListener("click", () => selectStation(node.dataset.station));
    node.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") selectStation(node.dataset.station);
    });
  });
}

function selectStation(id) {
  const station = stations.find((item) => item.id === id) || stations[0];
  document.querySelectorAll(".station-node").forEach((node) => {
    node.classList.toggle("is-active", node.dataset.station === station.id);
  });
  stationName.textContent = station.name;
  stationText.textContent = station.text;
  stationTags.innerHTML = station.lines.map((line) => `<span>${line}</span>`).join("");
  stationMaps.href = station.maps;
}

function renderRoutes() {
  routeCards.innerHTML = routes
    .map(
      ([title, path, text]) => `
        <article class="route-card">
          <span>${title}</span>
          <strong>${path}</strong>
          <p>${text}</p>
        </article>
      `
    )
    .join("");
}

function distanceKm(a, b) {
  const earthRadius = 6371;
  const toRad = (degree) => (degree * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return earthRadius * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

function setNearestFromPosition(position) {
  const current = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
  const ranked = stations
    .map((station) => ({ ...station, distance: distanceKm(current, station) }))
    .sort((a, b) => a.distance - b.distance);
  const nearest = ranked[0];
  nearestTitle.textContent = nearest.name;
  nearestBody.textContent = nearest.text;
  nearestMeta.innerHTML = ranked
    .slice(0, 3)
    .map((station) => `<span>${station.name}：${station.distance.toFixed(1)} km</span>`)
    .join("");
  selectStation(nearest.id);
}

locateMe.addEventListener("click", () => {
  if (!navigator.geolocation) {
    nearestTitle.textContent = "這個瀏覽器不支援定位";
    nearestBody.textContent = "可以改用手動點地圖站點，或用 Google Maps 開啟站名。";
    return;
  }
  nearestTitle.textContent = "定位中...";
  nearestBody.textContent = "請在瀏覽器權限視窗按允許。";
  navigator.geolocation.getCurrentPosition(setNearestFromPosition, () => {
    nearestTitle.textContent = "沒有取得位置";
    nearestBody.textContent = "可能是你按了拒絕、系統定位關閉，或瀏覽器沒有權限。可以手動點地圖上的站。";
    nearestMeta.innerHTML = "";
  });
});

renderStations();
renderRoutes();
selectStation("shinimamiya");
