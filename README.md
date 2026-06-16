# 一起去大阪

2026/11/28 - 2026/12/02 的大阪五天四夜旅行手冊。這是一個純靜態 GitHub Pages 專案，不需要安裝套件。

新版重點：

- `ROUTE PLANNER` 直接整合行程、交通、餐廳與 Google Maps 連結。
- 每個行程點都有獨立 `activity.html?id=...` 詳情頁。
- 住宿、行李、簡易日文、伴手禮各自成頁。
- 不做自製地圖，改用 Google Maps 真實地點與大眾運輸路線。

## 本機查看

直接用瀏覽器開 `index.html`，或在這個資料夾跑：

```bash
python3 -m http.server 8787
```

然後開 `http://localhost:8787/`。

## 部署到 GitHub Pages

1. 把這個資料夾推到 GitHub repository。
2. 到 repository 的 `Settings` → `Pages`。
3. Source 選 `GitHub Actions`。
4. 推送到 `main` 後，`.github/workflows/pages.yml` 會自動部署。
