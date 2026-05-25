const STORE_KEY = "paraArenasiState.v2";
const OLD_STORE_KEY = "paraArenasiState.v1";
const SESSION_KEY = "paraArenasiCurrentPlayer";
const MAX_PLAYERS = 15;
const CLUB_PRICE = 25000000000;
const SUPER_MARKET_PRICE = 2500000;
const BASE_AVATAR = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%23100f14'/%3E%3Ccircle cx='60' cy='45' r='25' fill='%23ff6b35'/%3E%3Cpath d='M20 108c8-27 23-40 40-40s32 13 40 40' fill='%238d5cff'/%3E%3C/svg%3E";
const DEFAULT_AVATARS = [
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%23100b10'/%3E%3Cpath d='M18 90C30 42 62 15 104 18 82 36 82 64 108 86 78 82 58 92 34 112Z' fill='%23ff6b35'/%3E%3Ccircle cx='62' cy='50' r='16' fill='%23ffd166'/%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%230b1320'/%3E%3Cpath d='M20 72 54 18l46 82-42-18-22 26Z' fill='%2374d9ff'/%3E%3Ccircle cx='60' cy='54' r='18' fill='%23ffffff'/%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%23140d1e'/%3E%3Cpath d='M22 98 48 16l18 30 34-18-18 70-30-16Z' fill='%239b5cff'/%3E%3Ccircle cx='66' cy='56' r='14' fill='%23ff3d5a'/%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%23141108'/%3E%3Cpath d='M16 88c28-8 18-52 52-62 16-4 32 4 42 18-28-2-28 22-18 48-24-18-46-8-76-4Z' fill='%23ffd166'/%3E%3Ccircle cx='70' cy='48' r='12' fill='%23ff6b35'/%3E%3C/svg%3E"
];

const incomeUpgrades = [
  { id: "tl10", label: "10 TL/sn", add: 10, basePrice: 15000 },
  { id: "tl100", label: "100 TL/sn", add: 100, basePrice: 340000 },
  { id: "tl500", label: "500 TL/sn", add: 500, basePrice: 2800000 },
  { id: "tl1000", label: "1.000 TL/sn", add: 1000, basePrice: 8500000 },
  { id: "tl5000", label: "5.000 TL/sn", add: 5000, basePrice: 72000000 },
  { id: "tl10000", label: "10.000 TL/sn", add: 10000, basePrice: 210000000 },
  { id: "tl50000", label: "50.000 TL/sn", add: 50000, basePrice: 1900000000 },
  { id: "tl1000000", label: "1.000.000 TL/sn", add: 1000000, basePrice: 95000000000 },
  { id: "tl1t", label: "1 Trilyon TL/sn", add: 1000000000000, basePrice: 750000000000000 }
];

const cosmetics = [
  { id: "nameEmber", type: "nameColor", name: "Kor Isim", rarity: "Nadir", price: 8000000, value: "#ff8a3d" },
  { id: "nameEmerald", type: "nameColor", name: "Zumrut Isim", rarity: "Nadir", price: 18000000, value: "#35f0a0" },
  { id: "nameIce", type: "nameColor", name: "Buz Isim", rarity: "Epik", price: 95000000, value: "#74d9ff" },
  { id: "nameGold", type: "nameColor", name: "Altin Isim", rarity: "Epik", price: 450000000, value: "#ffd166" },
  { id: "nameRuby", type: "nameColor", name: "Yakut Isim", rarity: "Efsane", price: 3400000000, value: "#ff4f6d" },
  { id: "nameVoid", type: "nameColor", name: "Kara Alev Isim", rarity: "Mitik", price: 90000000000, value: "#b690ff" },
  { id: "tagBoss", type: "tag", name: "Para Patronu Etiketi", rarity: "Nadir", price: 45000000, value: "Para Patronu" },
  { id: "tagDragon", type: "tag", name: "Ejder Binicisi Etiketi", rarity: "Epik", price: 900000000, value: "Ejder Binicisi" },
  { id: "tagLegend", type: "tag", name: "Arena Efsanesi Etiketi", rarity: "Efsane", price: 12000000000, value: "Arena Efsanesi" },
  { id: "frameFlame", type: "frame", name: "Alev Cerceve", rarity: "Nadir", price: 120000000, value: "frame-flame" },
  { id: "frameIce", type: "frame", name: "Buz Cerceve", rarity: "Nadir", price: 260000000, value: "frame-ice" },
  { id: "frameGold", type: "frame", name: "Kral Cerceve", rarity: "Epik", price: 1800000000, value: "frame-gold" },
  { id: "frameStorm", type: "frame", name: "Firtina Cerceve", rarity: "Epik", price: 5500000000, value: "frame-storm" },
  { id: "frameComet", type: "frame", name: "Kuyruklu Yildiz Cerceve", rarity: "Efsane", price: 18000000000, value: "frame-comet" },
  { id: "frameMagma", type: "frame", name: "Magma Cerceve", rarity: "Efsane", price: 48000000000, value: "frame-magma" },
  { id: "frameNebula", type: "frame", name: "Nebula Cerceve", rarity: "Mitik", price: 125000000000, value: "frame-nebula" },
  { id: "frameVoid", type: "frame", name: "Sonsuz Cerceve", rarity: "Mitik", price: 420000000000, value: "frame-void" },
  { id: "frameDragon", type: "frame", name: "Ejderha Cercevesi", rarity: "Ilahi", price: 8000000000000, value: "frame-dragon" }
];

const specialRewards = {
  30: { tag: "Usta" },
  50: { color: "#74d9ff" },
  100: { tag: "Sonsuz" }
};

let state = loadState();
let currentName = sessionStorage.getItem(SESSION_KEY) || "";
let currentBoard = "money";
let currentChat = "global";

const $ = (id) => document.getElementById(id);

function defaultState() {
  return { players: {}, chat: [], clubs: {}, clubChat: {} };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY) || localStorage.getItem(OLD_STORE_KEY);
    const loaded = raw ? JSON.parse(raw) : {};
    return migrateState({ ...defaultState(), ...loaded });
  } catch {
    return defaultState();
  }
}

function migrateState(nextState) {
  if (!nextState.clubs) nextState.clubs = {};
  if (!nextState.clubChat) nextState.clubChat = {};
  if (!nextState.chat) nextState.chat = [];
  Object.values(nextState.players || {}).forEach(ensurePlayerDefaults);
  return nextState;
}

function ensurePlayerDefaults(player) {
  if (!player.avatar) player.avatar = randomDefaultAvatar(player.name || "");
  if (!player.joinedAt) player.joinedAt = Date.now();
  if (!player.lastSeen) player.lastSeen = Date.now();
  if (!player.lastTick) player.lastTick = Date.now();
  if (!player.money) player.money = 0;
  if (!player.rebirths) player.rebirths = 0;
  if (!player.rebirthCost) player.rebirthCost = 250000;
  if (player.rebirthCost < 250000) player.rebirthCost = 250000;
  if (!player.baseIncome) player.baseIncome = 1;
  if (!player.upgrades) player.upgrades = {};
  if (!player.ownedCosmetics) player.ownedCosmetics = [];
  if (!player.rewardsClaimed) player.rewardsClaimed = [];
  if (!player.clubId) player.clubId = "";
  if (!player.superMarketUnlocked) player.superMarketUnlocked = false;
  if (!player.style) player.style = {};
  if (!player.style.nameColor) player.style.nameColor = "";
  if (!player.style.tag) player.style.tag = "Yeni Oyuncu";
  if (!player.style.frame) player.style.frame = "";
  if (player.style.frame.startsWith("#")) player.style.frame = "";
}

function randomDefaultAvatar(name) {
  let hash = 0;
  for (let index = 0; index < name.length; index += 1) {
    hash = (hash + name.charCodeAt(index) * (index + 3)) % DEFAULT_AVATARS.length;
  }
  return DEFAULT_AVATARS[hash] || BASE_AVATAR;
}

function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function clearSave() {
  localStorage.removeItem(STORE_KEY);
  localStorage.removeItem(OLD_STORE_KEY);
  sessionStorage.removeItem(SESSION_KEY);
  state = defaultState();
  currentName = "";
  $("authMessage").textContent = "Kayitlar sifirlandi. Simdi yeni hesapla girebilirsin.";
  render();
}

function normalizeName(name) {
  return name.trim().replace(/[<>"'&]/g, "").replace(/\s+/g, " ").slice(0, 18);
}

function createPlayer(name, password, avatar) {
  const player = {
    name,
    password,
    avatar: avatar || randomDefaultAvatar(name),
    joinedAt: Date.now(),
    lastSeen: Date.now(),
    lastTick: Date.now(),
    money: 0,
    rebirths: 0,
    rebirthCost: 250000,
    baseIncome: 1,
    upgrades: {},
    ownedCosmetics: [],
    rewardsClaimed: [],
    clubId: "",
    superMarketUnlocked: false,
    style: { nameColor: "", tag: "Yeni Oyuncu", frame: "" }
  };
  return player;
}

function currentPlayer() {
  const player = state.players[currentName];
  if (player) ensurePlayerDefaults(player);
  return player;
}

function readAvatar(file) {
  return new Promise((resolve) => {
    if (!file) return resolve("");
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => resolve("");
    reader.readAsDataURL(file);
  });
}

function activePlayers() {
  const now = Date.now();
  return Object.values(state.players).filter((p) => now - p.lastSeen < 10 * 60 * 1000);
}

function rankedPlayers(type = "money") {
  return Object.values(state.players).sort((a, b) => {
    if (type === "rebirth") return b.rebirths - a.rebirths || b.money - a.money;
    return b.money - a.money || b.rebirths - a.rebirths;
  });
}

function rankedClubs() {
  return Object.values(state.clubs).sort((a, b) => clubMoney(b.id) - clubMoney(a.id) || clubRebirths(b.id) - clubRebirths(a.id));
}

function rankOf(name) {
  return rankedPlayers("money").findIndex((p) => p.name === name) + 1;
}

function rankMultiplier(name) {
  const rank = rankOf(name);
  if (rank === 1) return 10;
  if (rank === 2) return 5;
  if (rank === 3) return 2;
  return 1;
}

function totalIncome(player) {
  const upgradeIncome = incomeUpgrades.reduce((sum, upg) => sum + (player.upgrades[upg.id] || 0) * upg.add, 0);
  return (player.baseIncome + upgradeIncome) * rankMultiplier(player.name);
}

function formatMoney(value) {
  if (!Number.isFinite(value)) return "sonsuz";
  const units = [
    [1000000000000000, "Katrilyon"],
    [1000000000000, "T"],
    [1000000000, "Mr"],
    [1000000, "Mn"],
    [1000, "Bin"]
  ];
  for (const [size, label] of units) {
    if (Math.abs(value) >= size) return `${(value / size).toLocaleString("tr-TR", { maximumFractionDigits: 2 })} ${label}`;
  }
  return Math.floor(value).toLocaleString("tr-TR");
}

function formatDate(timestamp) {
  return new Date(timestamp).toLocaleString("tr-TR", { dateStyle: "medium", timeStyle: "short" });
}

function tickPlayer(player) {
  const now = Date.now();
  const elapsed = Math.max(0, (now - player.lastTick) / 1000);
  if (elapsed > 0) {
    player.money += totalIncome(player) * elapsed;
    player.lastTick = now;
  }
}

function tickAll() {
  Object.values(state.players).forEach(tickPlayer);
  const player = currentPlayer();
  if (player) player.lastSeen = Date.now();
  saveState();
}

function upgradePrice(player, upgrade) {
  return upgrade.basePrice * Math.pow(2.35, player.upgrades[upgrade.id] || 0);
}

function applyRewards(player) {
  for (let milestone = 10; milestone <= player.rebirths; milestone += 10) {
    if (player.rewardsClaimed.includes(milestone)) continue;
    const reward = rewardFor(milestone);
    player.money += reward.money;
    if (reward.tag) player.style.tag = reward.tag;
    if (reward.color) player.style.nameColor = reward.color;
    player.rewardsClaimed.push(milestone);
    pushChat("global", { system: true, text: `${player.name}, ${milestone} rebirth odulunu aldi: ${reward.text}`, at: Date.now() });
  }
}

function rewardFor(milestone) {
  const step = milestone / 10;
  const money = 100000 * Math.pow(4.2, step - 1);
  const special = specialRewards[milestone] || {};
  let extra = "";
  if (special.tag) extra = ` + ${special.tag} etiketi`;
  if (special.color) extra = " + ozel isim rengi";
  if (milestone > 100 && milestone % 100 === 0) extra = " + sonsuz yol bonusu";
  return {
    rebirths: milestone,
    money,
    tag: special.tag || (milestone > 100 && milestone % 100 === 0 ? `R${milestone}` : ""),
    color: special.color,
    text: `${formatMoney(money)} TL odul${extra}`
  };
}

function pushChat(scope, message, clubId = "") {
  if (scope === "club") {
    if (!clubId) return;
    if (!state.clubChat[clubId]) state.clubChat[clubId] = [];
    state.clubChat[clubId].push(message);
    state.clubChat[clubId] = state.clubChat[clubId].slice(-80);
    return;
  }
  state.chat.push(message);
  state.chat = state.chat.slice(-80);
}

function clubMembers(clubId) {
  return Object.values(state.players).filter((p) => p.clubId === clubId);
}

function clubMoney(clubId) {
  return clubMembers(clubId).reduce((sum, player) => sum + player.money, 0);
}

function clubRebirths(clubId) {
  return clubMembers(clubId).reduce((sum, player) => sum + player.rebirths, 0);
}

function renderAuth() {
  $("authScreen").classList.toggle("hidden", Boolean(currentPlayer()));
  $("gameScreen").classList.toggle("hidden", !currentPlayer());
}

function render() {
  const player = currentPlayer();
  renderAuth();
  if (!player) return;

  const rank = rankOf(player.name);
  $("avatarFrame").className = `avatar-frame ${player.style.frame || ""}`;
  $("playerAvatar").src = player.avatar;
  $("playerName").textContent = player.name;
  $("playerName").style.color = player.style.nameColor || "var(--text)";
  $("playerTag").textContent = player.style.tag;
  $("moneyValue").textContent = `${formatMoney(player.money)} TL`;
  $("incomeValue").textContent = `${formatMoney(totalIncome(player))} TL/sn`;
  $("rebirthValue").textContent = player.rebirths.toLocaleString("tr-TR");
  $("rankValue").textContent = rank ? `#${rank}` : "-";
  $("rankBonus").textContent = `Liderlik carpani: ${rankMultiplier(player.name)}x`;
  $("rebirthButton").textContent = `Rebirth yap (${formatMoney(player.rebirthCost)} TL)`;
  $("rebirthButton").disabled = player.money < player.rebirthCost;
  $("playerCount").textContent = `${Math.min(activePlayers().length, MAX_PLAYERS)}/${MAX_PLAYERS}`;

  renderIncomeShop(player);
  renderSuperMarket(player);
  renderCosmetics(player);
  renderLeaderboard();
  renderClub(player);
  renderChat();
  renderRoad(player);
  renderTabs();
}

function renderTabs() {
  document.querySelectorAll("[data-board]").forEach((button) => button.classList.toggle("active", button.dataset.board === currentBoard));
  document.querySelectorAll("[data-chat]").forEach((button) => button.classList.toggle("active", button.dataset.chat === currentChat));
}

function renderSuperMarket(player) {
  const income = totalIncome(player);
  if (player.superMarketUnlocked) {
    $("superMarketText").textContent = `Her tikta mevcut gelir kadar para verir: ${formatMoney(income)} TL.`;
    $("superMarketButton").textContent = `Para bas +${formatMoney(income)} TL`;
    $("superMarketButton").disabled = false;
    $("superMarketButton").classList.add("unlocked");
    return;
  }
  $("superMarketText").textContent = `Orta fiyatli ozel alan. Acinca her tikta gelirinin aynisi kadar para alirsin.`;
  $("superMarketButton").textContent = `Ac (${formatMoney(SUPER_MARKET_PRICE)} TL)`;
  $("superMarketButton").disabled = player.money < SUPER_MARKET_PRICE;
  $("superMarketButton").classList.remove("unlocked");
}

function renderIncomeShop(player) {
  $("incomeShop").innerHTML = incomeUpgrades.map((upgrade) => {
    const owned = player.upgrades[upgrade.id] || 0;
    const price = upgradePrice(player, upgrade);
    return `
      <article class="upgrade-card">
        <div>
          <strong>${upgrade.label}</strong>
          <p>Alinan: ${owned} | Her alis fiyat 2.35x</p>
        </div>
        <button class="dragon-button" data-buy-upgrade="${upgrade.id}" ${player.money < price ? "disabled" : ""}>
          ${formatMoney(price)} TL
        </button>
      </article>
    `;
  }).join("");
}

function renderCosmetics(player) {
  $("cosmeticShop").innerHTML = cosmetics.map((item) => {
    const owned = player.ownedCosmetics.includes(item.id);
    const equipped = player.style[item.type] === item.value;
    return `
      <article class="cosmetic-item">
        <div>
          <strong>${item.name}</strong><br>
          <small>${item.rarity} | ${formatMoney(item.price)} TL</small>
        </div>
        <button data-cosmetic="${item.id}" ${!owned && player.money < item.price ? "disabled" : ""}>
          ${equipped ? "Takili" : owned ? "Tak" : "Al"}
        </button>
      </article>
    `;
  }).join("");
}

function renderLeaderboard() {
  if (currentBoard === "club") {
    $("leaderboard").innerHTML = rankedClubs().slice(0, MAX_PLAYERS).map((club, index) => `
      <article class="leader-row">
        <strong>#${index + 1}</strong>
        <img src="${club.avatar || BASE_AVATAR}" alt="">
        <div>
          <strong>${club.name}</strong>
          <div class="leader-money">${formatMoney(clubMoney(club.id))} TL | ${clubRebirths(club.id)} toplam rebirth | ${clubMembers(club.id).length} kisi</div>
        </div>
      </article>
    `).join("") || `<div class="empty">Henuz kulup yok.</div>`;
    return;
  }

  $("leaderboard").innerHTML = rankedPlayers(currentBoard).slice(0, MAX_PLAYERS).map((player, index) => {
    const bonus = index === 0 ? "10x" : index === 1 ? "5x" : index === 2 ? "2x" : "1x";
    return `
      <article class="leader-row">
        <strong>#${index + 1}</strong>
        <img src="${player.avatar}" alt="">
        <div>
          <button data-profile="${player.name}" style="color:${player.style.nameColor || "inherit"}">${player.name}</button>
          <div class="leader-money">${formatMoney(player.money)} TL | ${player.rebirths} rebirth | ${bonus}</div>
        </div>
      </article>
    `;
  }).join("");
}

function renderClub(player) {
  const club = state.clubs[player.clubId];
  $("clubSummary").textContent = club ? club.name : "Kulupsuz";
  $("clubInfo").innerHTML = club ? `
    <div class="club-card">
      <img src="${club.avatar || BASE_AVATAR}" alt="">
      <div>
        <strong>${club.name}</strong>
        <p>${club.info || "Bu kulup henuz aciklama yazmadi."}</p>
      </div>
    </div>
    <div class="profile-stats compact">
      <div><span>Oyuncu</span><strong>${clubMembers(club.id).length}</strong></div>
      <div><span>Toplam para</span><strong>${formatMoney(clubMoney(club.id))} TL</strong></div>
      <div><span>Toplam rebirth</span><strong>${clubRebirths(club.id)}</strong></div>
      <div><span>Kurulus</span><strong>${formatDate(club.createdAt)}</strong></div>
    </div>
  ` : `<p class="empty">Kulup kurmak ${formatMoney(CLUB_PRICE)} TL. Katilmak bedava; listeden kulup secip sadece sifresini yaz.</p>`;
  renderClubList(player);
}

function renderClubList(player) {
  const clubs = Object.values(state.clubs);
  $("clubList").innerHTML = clubs.length ? `
    <div class="club-list-title">Katilabilecegin kulupler</div>
    ${clubs.map((club) => `
      <article class="club-join-card">
        <img src="${club.avatar || BASE_AVATAR}" alt="">
        <div>
          <strong>${club.name}</strong>
          <small>${clubMembers(club.id).length} kisi | ${formatMoney(clubMoney(club.id))} TL</small>
        </div>
        <button type="button" data-join-club="${club.id}" ${player.clubId === club.id ? "disabled" : ""}>
          ${player.clubId === club.id ? "Icindesin" : "Sifreyle katil"}
        </button>
      </article>
    `).join("")}
  ` : `<p class="empty">Henuz kulup yok.</p>`;
}

function renderChat() {
  const player = currentPlayer();
  const messages = currentChat === "club" ? (player.clubId ? state.clubChat[player.clubId] || [] : []) : state.chat;
  $("chatLog").innerHTML = messages.slice(-50).map((msg) => {
    if (msg.system) return `<div class="chat-message">${escapeHtml(msg.text)}</div>`;
    const owner = state.players[msg.name];
    const color = owner && owner.style ? owner.style.nameColor || "var(--text)" : "var(--text)";
    return `
      <div class="chat-message">
        <button class="chat-name" data-profile="${msg.name}" style="color:${color}">${msg.name}</button>
        <span>${escapeHtml(msg.text)}</span>
      </div>
    `;
  }).join("") || `<div class="empty">${currentChat === "club" ? "Kulup chat'i bos." : "Chat bos."}</div>`;
  $("chatLog").scrollTop = $("chatLog").scrollHeight;
}

function renderRoad(player) {
  const firstMilestone = Math.max(10, Math.floor(player.rebirths / 10) * 10 - 20);
  const milestones = Array.from({ length: 8 }, (_, index) => firstMilestone + index * 10);
  $("rebirthRoad").innerHTML = milestones.map((milestone) => {
    const reward = rewardFor(milestone);
    return `
      <div class="road-step ${player.rebirths >= reward.rebirths ? "done" : ""}">
        <strong>${reward.rebirths} rebirth</strong>
        <p>${reward.text}</p>
      </div>
    `;
  }).join("");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function buyUpgrade(id) {
  const player = currentPlayer();
  const upgrade = incomeUpgrades.find((item) => item.id === id);
  const price = upgradePrice(player, upgrade);
  if (player.money < price) return;
  player.money -= price;
  player.upgrades[id] = (player.upgrades[id] || 0) + 1;
  saveState();
  render();
}

function buyCosmetic(id) {
  const player = currentPlayer();
  const item = cosmetics.find((entry) => entry.id === id);
  if (!player.ownedCosmetics.includes(id)) {
    if (player.money < item.price) return;
    player.money -= item.price;
    player.ownedCosmetics.push(id);
  }
  player.style[item.type] = item.value;
  saveState();
  render();
}

function useSuperMarket() {
  const player = currentPlayer();
  if (!player) return;
  if (!player.superMarketUnlocked) {
    if (player.money < SUPER_MARKET_PRICE) return;
    player.money -= SUPER_MARKET_PRICE;
    player.superMarketUnlocked = true;
  } else {
    player.money += totalIncome(player);
  }
  saveState();
  render();
}

function doRebirth() {
  const player = currentPlayer();
  if (player.money < player.rebirthCost) return;
  player.money = 0;
  player.baseIncome *= 2;
  player.rebirths += 1;
  player.rebirthCost *= 2.4;
  applyRewards(player);
  saveState();
  render();
}

function showProfile(name) {
  const player = state.players[name];
  if (!player) return;
  ensurePlayerDefaults(player);
  const rank = rankOf(name);
  const club = state.clubs[player.clubId];
  $("profileDetails").innerHTML = `
    <div class="profile-details">
      <header>
        <div class="avatar-frame ${player.style.frame || ""}"><img src="${player.avatar}" alt=""></div>
        <div>
          <h2 style="color:${player.style.nameColor || "var(--text)"}">${player.name}</h2>
          <p class="tag">${player.style.tag}</p>
        </div>
      </header>
      <div class="profile-stats">
        <div><span>Para</span><strong>${formatMoney(player.money)} TL</strong></div>
        <div><span>Gelir</span><strong>${formatMoney(totalIncome(player))} TL/sn</strong></div>
        <div><span>Rebirth</span><strong>${player.rebirths}</strong></div>
        <div><span>Siralama</span><strong>#${rank}</strong></div>
        <div><span>Kulup</span><strong>${club ? club.name : "Yok"}</strong></div>
        <div><span>Giris tarihi</span><strong>${formatDate(player.joinedAt)}</strong></div>
      </div>
    </div>
  `;
  $("profileDialog").showModal();
}

async function createClub() {
  const player = currentPlayer();
  const name = normalizeName($("clubNameInput").value);
  const password = $("clubPasswordInput").value.trim();
  if (!name || password.length < 3 || !player) return;
  if (player.money < CLUB_PRICE) return;
  if (Object.values(state.clubs).some((club) => club.name.toLowerCase() === name.toLowerCase())) return;
  const avatar = await readAvatar($("clubAvatarInput").files[0]);
  const id = `club-${Date.now()}`;
  player.money -= CLUB_PRICE;
  player.clubId = id;
  state.clubs[id] = {
    id,
    name,
    password,
    avatar: avatar || BASE_AVATAR,
    info: `${name} kulubu ejderha.fun arenasina girdi.`,
    owner: player.name,
    createdAt: Date.now()
  };
  state.clubChat[id] = [];
  pushChat("global", { system: true, text: `${player.name}, ${name} kulubunu kurdu.`, at: Date.now() });
  saveState();
  render();
}

function joinClub(clubId) {
  const player = currentPlayer();
  const password = $("clubPasswordInput").value.trim();
  const club = state.clubs[clubId];
  if (!club || club.password !== password || !player) return;
  player.clubId = club.id;
  pushChat("club", { system: true, text: `${player.name} kulube katildi.`, at: Date.now() }, club.id);
  saveState();
  render();
}

$("authForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  state = loadState();
  const name = normalizeName($("nameInput").value);
  const password = $("passwordInput").value;
  const existing = state.players[name];
  const avatar = await readAvatar($("avatarInput").files[0]);

  if (name.length < 3) {
    $("authMessage").textContent = "Oyuncu adi en az 3 karakter olmali.";
    return;
  }
  if (password.length < 5) {
    $("authMessage").textContent = "Sifre en az 5 karakter olmali.";
    return;
  }
  if (!existing && Object.keys(state.players).length >= MAX_PLAYERS) {
    $("authMessage").textContent = "Oyun dolu: en fazla 15 oyuncu.";
    return;
  }
  if (existing && existing.password !== password) {
    $("authMessage").textContent = `"${name}" daha once alinmis. Eski sifresini yaz veya baska bir isim dene: ${name}${Math.floor(Math.random() * 90 + 10)}`;
    return;
  }
  if (!existing) {
    state.players[name] = createPlayer(name, password, avatar);
    pushChat("global", { system: true, text: `${name} oyuna katildi.`, at: Date.now() });
  } else {
    ensurePlayerDefaults(existing);
    if (avatar) existing.avatar = avatar;
  }
  currentName = name;
  sessionStorage.setItem(SESSION_KEY, currentName);
  state.players[name].lastSeen = Date.now();
  state.players[name].lastTick = Date.now();
  saveState();
  render();
});

$("logoutButton").addEventListener("click", () => {
  currentName = "";
  sessionStorage.removeItem(SESSION_KEY);
  render();
});

$("rebirthButton").addEventListener("click", doRebirth);
$("playerName").addEventListener("click", () => showProfile(currentName));
$("closeProfile").addEventListener("click", () => $("profileDialog").close());
$("createClubButton").addEventListener("click", createClub);
$("resetSaveButton").addEventListener("click", clearSave);
$("superMarketButton").addEventListener("click", useSuperMarket);

$("incomeShop").addEventListener("click", (event) => {
  const id = event.target.dataset.buyUpgrade;
  if (id) buyUpgrade(id);
});

$("cosmeticShop").addEventListener("click", (event) => {
  const id = event.target.dataset.cosmetic;
  if (id) buyCosmetic(id);
});

$("leaderboard").addEventListener("click", (event) => {
  const name = event.target.dataset.profile;
  if (name) showProfile(name);
});

$("clubList").addEventListener("click", (event) => {
  const clubId = event.target.dataset.joinClub;
  if (clubId) joinClub(clubId);
});

$("chatLog").addEventListener("click", (event) => {
  const name = event.target.dataset.profile;
  if (name) showProfile(name);
});

document.querySelectorAll("[data-board]").forEach((button) => {
  button.addEventListener("click", () => {
    currentBoard = button.dataset.board;
    render();
  });
});

document.querySelectorAll("[data-chat]").forEach((button) => {
  button.addEventListener("click", () => {
    currentChat = button.dataset.chat;
    render();
  });
});

$("chatForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const player = currentPlayer();
  const text = $("chatInput").value.trim();
  if (!player || !text) return;
  if (currentChat === "club") {
    if (!player.clubId) return;
    pushChat("club", { name: player.name, text, at: Date.now() }, player.clubId);
  } else {
    pushChat("global", { name: player.name, text, at: Date.now() });
  }
  $("chatInput").value = "";
  saveState();
  render();
});

window.addEventListener("storage", (event) => {
  if (event.key === STORE_KEY || event.key === OLD_STORE_KEY) {
    state = loadState();
    render();
  }
});

setInterval(() => {
  if (!currentPlayer()) return;
  tickAll();
  applyRewards(currentPlayer());
  render();
}, 1000);

if (currentPlayer()) {
  currentPlayer().lastTick = Date.now();
}

render();

