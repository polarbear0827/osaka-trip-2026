const osakaCenter = { lat: 34.667, lng: 135.501 };

const stations = [
  {
    id: "shinimamiya",
    name: "新今宮",
    lat: 34.6502,
    lng: 135.5001,
    lines: ["JR 環狀線", "JR 大和路線", "南海"],
    text: "後三晚住宿基地。JR、南海都在這裡，旁邊可用動物園前站進 Metro。",
    maps: "https://www.google.com/maps/search/?api=1&query=Shin-Imamiya%20Station%20Osaka",
  },
  {
    id: "dobutsuen",
    name: "動物園前",
    lat: 34.6488,
    lng: 135.5053,
    lines: ["御堂筋線", "堺筋線"],
    text: "新今宮旁的 Metro 入口。去心齋橋、長居、梅田都很直覺，也靠近 SpaWorld。",
    maps: "https://www.google.com/maps/search/?api=1&query=Dobutsuen-mae%20Station%20Osaka",
  },
  {
    id: "daikokucho",
    name: "大國町",
    lat: 34.6569,
    lng: 135.4977,
    lines: ["御堂筋線", "四橋線"],
    text: "住宿附近的穩定替代站。去木津市場、難波、長居都好用。",
    maps: "https://www.google.com/maps/search/?api=1&query=Daikokucho%20Station%20Osaka",
  },
  {
    id: "namba",
    name: "難波",
    lat: 34.6663,
    lng: 135.5005,
    lines: ["御堂筋線", "南海", "近鐵/阪神"],
    text: "第一晚住宿、道頓堀、回程補買、去奈良轉近鐵的核心站。",
    maps: "https://www.google.com/maps/search/?api=1&query=Namba%20Station%20Osaka",
  },
  {
    id: "nippombashi",
    name: "日本橋",
    lat: 34.6661,
    lng: 135.5069,
    lines: ["堺筋線", "千日前線", "近鐵"],
    text: "黑門市場、日本橋、近鐵奈良線入口。比心齋橋更貼近這次的吃法。",
    maps: "https://www.google.com/maps/search/?api=1&query=Nippombashi%20Station%20Osaka",
  },
  {
    id: "shinsaibashi",
    name: "心齋橋",
    lat: 34.6751,
    lng: 135.5007,
    lines: ["御堂筋線", "長堀鶴見綠地線"],
    text: "Pokémon Center OSAKA DX、Pokémon Cafe、美國村、堀江的入口。",
    maps: "https://www.google.com/maps/search/?api=1&query=Shinsaibashi%20Station%20Osaka",
  },
  {
    id: "osaka",
    name: "大阪 / 梅田",
    lat: 34.7025,
    lng: 135.4959,
    lines: ["JR", "御堂筋線", "阪急/阪神"],
    text: "百貨、梅田地下街和 Pokémon Center OSAKA 所在的大站。不是住宿首選，但備案很強。",
    maps: "https://www.google.com/maps/search/?api=1&query=Osaka%20Station",
  },
  {
    id: "tsuruhashi",
    name: "鶴橋",
    lat: 34.6656,
    lng: 135.5302,
    lines: ["JR 環狀線", "近鐵", "千日前線"],
    text: "奈良回程吃燒肉、泡菜、韓式小菜的 local 晚餐點。",
    maps: "https://www.google.com/maps/search/?api=1&query=Tsuruhashi%20Station%20Osaka",
  },
  {
    id: "nara",
    name: "近鐵奈良",
    lat: 34.6844,
    lng: 135.8277,
    lines: ["近鐵奈良線"],
    text: "去奈良公園餵鹿最方便的站。出站後步行串奈良公園、東大寺、商店街。",
    maps: "https://www.google.com/maps/search/?api=1&query=Kintetsu%20Nara%20Station",
  },
  {
    id: "nishikujo",
    name: "西九條",
    lat: 34.6821,
    lng: 135.4669,
    lines: ["JR 環狀線", "JR 夢咲線", "阪神"],
    text: "去 USJ 的轉乘站。從新今宮搭 JR 到這裡，再轉往 Universal City。",
    maps: "https://www.google.com/maps/search/?api=1&query=Nishikujo%20Station%20Osaka",
  },
  {
    id: "usj",
    name: "Universal City",
    lat: 34.6675,
    lng: 135.439,
    lines: ["JR 夢咲線"],
    text: "USJ 最近站。出站後跟人流走到環球影城入口，步行約 5 分鐘。",
    maps: "https://www.google.com/maps/search/?api=1&query=Universal%20City%20Station%20Osaka",
  },
  {
    id: "nagai",
    name: "長居",
    lat: 34.6108,
    lng: 135.5132,
    lines: ["御堂筋線", "JR 阪和線"],
    text: "teamLab Botanical Garden Osaka 的下車站。夜間戶外展，走路抓 10-15 分鐘。",
    maps: "https://www.google.com/maps/search/?api=1&query=Nagai%20Station%20Osaka",
  },
  {
    id: "tennoji",
    name: "天王寺",
    lat: 34.6463,
    lng: 135.5138,
    lines: ["JR", "御堂筋線", "谷町線"],
    text: "新今宮旁的大商圈。雨天、晚餐、阿倍野備案都可用。",
    maps: "https://www.google.com/maps/search/?api=1&query=Tennoji%20Station%20Osaka",
  },
  {
    id: "kix",
    name: "關西機場",
    lat: 34.4347,
    lng: 135.2441,
    lines: ["南海", "JR"],
    text: "Peach 在 KIX T2。回程日保守抓時間，從新今宮或難波搭南海很順。",
    maps: "https://www.google.com/maps/search/?api=1&query=Kansai%20Airport%20Station",
  },
];

const routes = [
  {
    title: "住宿 → USJ",
    path: "新今宮 → 西九條 → Universal City",
    text: "JR 環狀線 + JR 夢咲線。USJ 日最重要的一條。",
    color: "#2d8b72",
    stops: ["shinimamiya", "nishikujo", "usj"],
  },
  {
    title: "住宿 → 奈良",
    path: "新今宮 → 難波/日本橋 → 近鐵奈良",
    text: "去奈良公園推薦近鐵，到站後步行比較順。",
    color: "#c79a24",
    stops: ["shinimamiya", "namba", "nippombashi", "nara"],
  },
  {
    title: "住宿 → teamLab",
    path: "動物園前 / 大國町 → 長居",
    text: "御堂筋線一路往南，夜間回程也單純。",
    color: "#d72f48",
    stops: ["dobutsuen", "daikokucho", "tennoji", "nagai"],
  },
  {
    title: "住宿 → 寶可夢",
    path: "動物園前 / 大國町 → 心齋橋",
    text: "Pokémon Center OSAKA DX 和 Cafe 在心齋橋大丸。",
    color: "#d72f48",
    stops: ["dobutsuen", "daikokucho", "namba", "shinsaibashi"],
  },
  {
    title: "住宿 → 機場",
    path: "新今宮 / 難波 → 關西機場",
    text: "南海很順。Peach T2 要再依機場接駁指示。",
    color: "#2367b1",
    stops: ["shinimamiya", "namba", "kix"],
  },
];

const tripPlaces = [
  ["第一晚住宿", 34.6668, 135.5027, "2 Chome-3-9 Namba, Chuo Ward"],
  ["後三晚住宿", 34.6515, 135.501, "Apartment Hotel 11 Shinimamiya 3"],
  ["USJ", 34.6654, 135.4323, "Universal Studios Japan"],
  ["奈良公園", 34.6851, 135.843, "餵鹿與東大寺步行圈"],
  ["teamLab 長居", 34.6123, 135.5199, "Botanical Garden Osaka"],
  ["Pokémon Cafe / DX", 34.6735, 135.5012, "心齋橋大丸"],
];

const stationName = document.querySelector("#stationName");
const stationText = document.querySelector("#stationText");
const stationTags = document.querySelector("#stationTags");
const stationMaps = document.querySelector("#stationMaps");
const nearestTitle = document.querySelector("#nearestTitle");
const nearestBody = document.querySelector("#nearestBody");
const nearestMeta = document.querySelector("#nearestMeta");
const locateMe = document.querySelector("#locateMe");
const routeCards = document.querySelector("#routeCards");
const stationList = document.querySelector("#stationList");

const markerById = new Map();
const routeByTitle = new Map();
let map;
let userMarker;

function stationById(id) {
  return stations.find((station) => station.id === id) || stations[0];
}

function toLatLng(station) {
  return [station.lat, station.lng];
}

function mapsSearchUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
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

function selectStation(id, shouldPan = true) {
  const station = stationById(id);
  stationName.textContent = station.name;
  stationText.textContent = station.text;
  stationTags.innerHTML = station.lines.map((line) => `<span>${line}</span>`).join("");
  stationMaps.href = station.maps;

  document.querySelectorAll(".station-list button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.station === station.id);
  });

  markerById.forEach((marker, markerId) => {
    const element = marker.getElement();
    if (element) element.classList.toggle("is-active", markerId === station.id);
  });

  const marker = markerById.get(station.id);
  if (marker) marker.openPopup();
  if (shouldPan) map.flyTo(toLatLng(station), station.id === "kix" || station.id === "nara" ? 11 : 14, { duration: 0.7 });
}

function renderStationList() {
  stationList.innerHTML = stations
    .map(
      (station) => `
        <button type="button" data-station="${station.id}">
          <strong>${station.name}</strong>
          <span>${station.lines[0]}</span>
        </button>
      `
    )
    .join("");

  stationList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => selectStation(button.dataset.station));
  });
}

function initMap() {
  if (!window.L) {
    document.querySelector("#osakaMap").innerHTML =
      '<div class="map-load-fallback">地圖套件暫時載不到。可以先用右側站點按鈕開 Google Maps。</div>';
    return;
  }

  map = L.map("osakaMap", {
    zoomControl: true,
    scrollWheelZoom: true,
  }).setView([34.667, 135.505], 12);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  routes.forEach((route) => {
    const latLngs = route.stops.map((id) => toLatLng(stationById(id)));
    const polyline = L.polyline(latLngs, {
      color: route.color,
      weight: 5,
      opacity: 0.78,
      lineCap: "round",
      lineJoin: "round",
    }).addTo(map);
    routeByTitle.set(route.title, polyline);
  });

  stations.forEach((station) => {
    const marker = L.marker(toLatLng(station), {
      title: station.name,
      icon: L.divIcon({
        className: "station-map-marker",
        html: `<span>${station.name}</span>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      }),
    })
      .addTo(map)
      .bindPopup(
        `<strong>${station.name}</strong><br>${station.lines.join(" / ")}<br><a href="${station.maps}" target="_blank" rel="noreferrer">Google Maps</a>`
      );
    marker.on("click", () => selectStation(station.id, false));
    markerById.set(station.id, marker);
  });

  tripPlaces.forEach(([name, lat, lng, text]) => {
    L.marker([lat, lng], {
      title: name,
      icon: L.divIcon({
        className: "place-map-marker",
        html: `<span>${name}</span>`,
        iconSize: [26, 26],
        iconAnchor: [13, 13],
      }),
    })
      .addTo(map)
      .bindPopup(`<strong>${name}</strong><br>${text}<br><a href="${mapsSearchUrl(`${name} Osaka Japan`)}" target="_blank" rel="noreferrer">Google Maps</a>`);
  });

  const bounds = L.latLngBounds(stations.map(toLatLng));
  map.fitBounds(bounds, { padding: [32, 32] });
}

function renderRoutes() {
  routeCards.innerHTML = routes
    .map(
      (route) => `
        <button class="route-card map-route-card" type="button" data-route="${route.title}">
          <span style="--route-color: ${route.color}">${route.title}</span>
          <strong>${route.path}</strong>
          <p>${route.text}</p>
        </button>
      `
    )
    .join("");

  routeCards.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const route = routes.find((item) => item.title === button.dataset.route);
      const polyline = routeByTitle.get(button.dataset.route);
      document.querySelectorAll(".map-route-card").forEach((card) => card.classList.toggle("is-active", card === button));
      if (polyline) map.fitBounds(polyline.getBounds(), { padding: [60, 60] });
      if (route) selectStation(route.stops[0], false);
    });
  });
}

function setNearestFromPosition(position) {
  const current = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
  const distanceFromOsaka = distanceKm(current, osakaCenter);
  const ranked = stations
    .map((station) => ({ ...station, distance: distanceKm(current, station) }))
    .sort((a, b) => a.distance - b.distance);

  if (window.L) {
    if (userMarker) userMarker.remove();
    userMarker = L.circleMarker([current.lat, current.lng], {
      radius: 8,
      color: "#102724",
      fillColor: "#f0b43c",
      fillOpacity: 1,
      weight: 3,
    }).addTo(map);
  }

  if (distanceFromOsaka > 80) {
    nearestTitle.textContent = "你目前不在大阪附近";
    nearestBody.textContent = `現在距離大阪中心約 ${distanceFromOsaka.toFixed(0)} km。這個按鈕到日本後才有實用意義；先把地圖固定在住宿基地新今宮。`;
    nearestMeta.innerHTML = ranked
      .slice(0, 3)
      .map((station) => `<span>${station.name}：${station.distance.toFixed(0)} km</span>`)
      .join("");
    selectStation("shinimamiya");
    return;
  }

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

renderStationList();
initMap();
renderRoutes();
selectStation("shinimamiya", false);
