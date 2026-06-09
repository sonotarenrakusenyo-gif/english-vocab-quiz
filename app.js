import { WORDS, WORD_CATEGORIES } from "./data/words.js";

const STORAGE_KEY = "english-vocab-quiz-progress";
const AUTO_ADVANCE_DELAY_MS = 700;
const SEARCH_RESULT_LIMIT = 8;

const QUIZ_MODES = {
  meaning: {
    label: "意味→英語",
    subtitle: "日本語の意味を見て、英単語を思い出そう",
    questionLabel: "日本語の意味",
    audioHint: "答えを見る前に、発音を当ててみよう",
  },
  listening: {
    label: "リスニング",
    subtitle: "音声だけ聞いて、英単語を当てよう",
    questionLabel: "リスニング問題",
    audioHint: "音声を再生して、英単語を思い浮かべよう",
  },
  reverse: {
    label: "英語→意味",
    subtitle: "英単語を見て、日本語の意味を思い出そう",
    questionLabel: "英単語",
    audioHint: "発音を確認してから、意味を思い出そう",
  },
  conversation: {
    label: "会話例",
    subtitle: "会話例から、使われている単語を当てよう",
    questionLabel: "会話例",
    audioHint: "会話例を読んで、該当する英単語を思い出そう",
  },
};

const STUDY_FILTERS = [
  { id: "all", label: "すべて" },
  { id: "unstudied", label: "未学習" },
  { id: "review", label: "復習リスト" },
  { id: "favorites", label: "★お気に入り" },
  { id: "exclude-known", label: "覚えた除外" },
];

const categoryMap = Object.fromEntries(
  WORD_CATEGORIES.map((category) => [category.id, category.label]),
);

const elements = {
  activeSummary: document.getElementById("activeSummary"),
  reviewBadgeBtn: document.getElementById("reviewBadgeBtn"),
  reviewBadgeCount: document.getElementById("reviewBadgeCount"),
  backBtn: document.getElementById("backBtn"),
  searchToggleBtn: document.getElementById("searchToggleBtn"),
  settingsToggleBtn: document.getElementById("settingsToggleBtn"),
  searchPanel: document.getElementById("searchPanel"),
  settingsPanel: document.getElementById("settingsPanel"),
  headerSubtitle: document.getElementById("headerSubtitle"),
  card: document.getElementById("card"),
  categoryLabel: document.getElementById("categoryLabel"),
  cardNumber: document.getElementById("cardNumber"),
  favoriteBtn: document.getElementById("favoriteBtn"),
  copyWordBtn: document.getElementById("copyWordBtn"),
  toast: document.getElementById("toast"),
  categoryChart: document.getElementById("categoryChart"),
  exportBtn: document.getElementById("exportBtn"),
  importBtn: document.getElementById("importBtn"),
  importInput: document.getElementById("importInput"),
  questionLabel: document.getElementById("questionLabel"),
  questionText: document.getElementById("questionText"),
  audioRow: document.getElementById("audioRow"),
  audioHint: document.getElementById("audioHint"),
  answerSection: document.getElementById("answerSection"),
  wordBlock: document.getElementById("wordBlock"),
  wordLabel: document.getElementById("wordLabel"),
  word: document.getElementById("word"),
  meaningBlock: document.getElementById("meaningBlock"),
  answerMeaning: document.getElementById("answerMeaning"),
  readingBlock: document.getElementById("readingBlock"),
  reading: document.getElementById("reading"),
  patternsWrap: document.getElementById("patternsWrap"),
  patternsContainer: document.getElementById("patternsContainer"),
  revealBtn: document.getElementById("revealBtn"),
  ratingSection: document.getElementById("ratingSection"),
  knowBtn: document.getElementById("knowBtn"),
  reviewBtn: document.getElementById("reviewBtn"),
  playBtn: document.getElementById("playBtn"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  progressFill: document.getElementById("progressFill"),
  progressText: document.getElementById("progressText"),
  searchInput: document.getElementById("searchInput"),
  jumpBtn: document.getElementById("jumpBtn"),
  searchResults: document.getElementById("searchResults"),
  categoryFilters: document.getElementById("categoryFilters"),
  studyFilters: document.getElementById("studyFilters"),
  quizModeFilters: document.getElementById("quizModeFilters"),
  shuffleBtn: document.getElementById("shuffleBtn"),
  autoAdvanceBtn: document.getElementById("autoAdvanceBtn"),
  resetProgressBtn: document.getElementById("resetProgressBtn"),
  reviewCount: document.getElementById("reviewCount"),
  knownCount: document.getElementById("knownCount"),
  unseenCount: document.getElementById("unseenCount"),
  todayStudiedCount: document.getElementById("todayStudiedCount"),
  streakCount: document.getElementById("streakCount"),
  favoriteCount: document.getElementById("favoriteCount"),
};

const state = {
  index: 0,
  revealed: false,
  categoryFilter: "all",
  studyFilter: "all",
  quizMode: "meaning",
  shuffled: false,
  autoAdvance: false,
  activeWords: [],
  reviewIds: new Set(),
  knownIds: new Set(),
  revealedIds: new Set(),
  favoriteIds: new Set(),
  lastWordId: null,
  autoAdvanceTimer: null,
  conversationExampleIndex: 0,
  streakCurrent: 0,
  streakBest: 0,
  streakLastDate: null,
  todayStudiedDate: null,
  todayStudiedCount: 0,
  toastTimer: null,
  swipeStartX: null,
  swipeStartY: null,
};

function shuffleArray(items) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function buildProgressPayload() {
  const current = getCurrentWord();

  return {
    v: 3,
    exportedAt: new Date().toISOString(),
    categoryFilter: state.categoryFilter,
    studyFilter: state.studyFilter,
    quizMode: state.quizMode,
    shuffled: state.shuffled,
    autoAdvance: state.autoAdvance,
    reviewIds: [...state.reviewIds],
    knownIds: [...state.knownIds],
    revealedIds: [...state.revealedIds],
    favoriteIds: [...state.favoriteIds],
    lastWordId: current?.id ?? state.lastWordId,
    streakCurrent: state.streakCurrent,
    streakBest: state.streakBest,
    streakLastDate: state.streakLastDate,
    todayStudiedDate: state.todayStudiedDate,
    todayStudiedCount: state.todayStudiedCount,
  };
}

function applyProgressPayload(saved) {
  const validIds = new Set(WORDS.map((word) => word.id));

  state.categoryFilter = saved.categoryFilter ?? "all";
  state.studyFilter = saved.studyFilter ?? (saved.reviewOnly ? "review" : "all");
  state.quizMode = QUIZ_MODES[saved.quizMode] ? saved.quizMode : "meaning";
  state.shuffled = Boolean(saved.shuffled);
  state.autoAdvance = Boolean(saved.autoAdvance);
  state.reviewIds = new Set((saved.reviewIds ?? []).filter((id) => validIds.has(id)));
  state.knownIds = new Set((saved.knownIds ?? []).filter((id) => validIds.has(id)));
  state.revealedIds = new Set((saved.revealedIds ?? []).filter((id) => validIds.has(id)));
  state.favoriteIds = new Set((saved.favoriteIds ?? []).filter((id) => validIds.has(id)));
  state.lastWordId = validIds.has(saved.lastWordId) ? saved.lastWordId : null;
  state.streakCurrent = Number(saved.streakCurrent) || 0;
  state.streakBest = Number(saved.streakBest) || 0;
  state.streakLastDate = saved.streakLastDate ?? null;
  state.todayStudiedDate = saved.todayStudiedDate ?? null;
  state.todayStudiedCount = Number(saved.todayStudiedCount) || 0;

  syncTodayStudiedCount();
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return;
    }

    applyProgressPayload(JSON.parse(raw));
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(buildProgressPayload()));
}

function syncTodayStudiedCount() {
  const today = getTodayKey();
  if (state.todayStudiedDate !== today) {
    state.todayStudiedDate = today;
    state.todayStudiedCount = 0;
  }
}

function recordStudyActivity() {
  const today = getTodayKey();
  syncTodayStudiedCount();
  state.todayStudiedCount += 1;

  if (state.streakLastDate === today) {
    saveProgress();
    return;
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = yesterday.toISOString().slice(0, 10);

  if (state.streakLastDate === yesterdayKey) {
    state.streakCurrent += 1;
  } else {
    state.streakCurrent = 1;
  }

  state.streakLastDate = today;
  state.streakBest = Math.max(state.streakBest, state.streakCurrent);
  saveProgress();
}

function clearAutoAdvanceTimer() {
  if (state.autoAdvanceTimer) {
    clearTimeout(state.autoAdvanceTimer);
    state.autoAdvanceTimer = null;
  }
}

function matchesStudyFilter(word) {
  switch (state.studyFilter) {
    case "unstudied":
      return !state.revealedIds.has(word.id);
    case "review":
      return state.reviewIds.has(word.id);
    case "favorites":
      return state.favoriteIds.has(word.id);
    case "exclude-known":
      return !state.knownIds.has(word.id);
    default:
      return true;
  }
}

function getFilteredWords() {
  let words = state.categoryFilter === "all"
    ? [...WORDS]
    : WORDS.filter((word) => word.category === state.categoryFilter);

  words = words.filter(matchesStudyFilter);
  return words;
}

function findResumeIndex(words) {
  if (!state.lastWordId || words.length === 0) {
    return 0;
  }

  const foundIndex = words.findIndex((word) => word.id === state.lastWordId);
  return foundIndex >= 0 ? foundIndex : 0;
}

function rebuildActiveWords({ resetIndex = true, resume = false } = {}) {
  const filtered = getFilteredWords();
  state.activeWords = state.shuffled ? shuffleArray(filtered) : filtered;

  if (resetIndex) {
    state.index = resume ? findResumeIndex(state.activeWords) : 0;
  } else if (state.index >= state.activeWords.length) {
    state.index = Math.max(0, state.activeWords.length - 1);
  }

  clearAutoAdvanceTimer();
  stopSpeech();
  hideSearchResults();
  renderCard();
  updateFilterButtons();
  updateToolButtons();
  updateStats();
  updateActiveSummary();
  renderCategoryChart();
  saveProgress();
}

function getCurrentWord() {
  return state.activeWords[state.index];
}

function getDeckSize() {
  return state.activeWords.length;
}

function getQuizModeConfig() {
  return QUIZ_MODES[state.quizMode] ?? QUIZ_MODES.meaning;
}

function pickConversationExample(word) {
  if (!word?.patterns?.length) {
    return "";
  }

  state.conversationExampleIndex = Math.floor(Math.random() * word.patterns.length);
  return word.patterns[state.conversationExampleIndex].example;
}

function setRevealed(revealed) {
  state.revealed = revealed;

  elements.answerSection.classList.toggle("card__answer--hidden", !revealed);
  elements.answerSection.setAttribute("aria-hidden", String(!revealed));
  elements.ratingSection.classList.toggle("card__rating--hidden", !revealed);
  elements.ratingSection.setAttribute("aria-hidden", String(!revealed));
  elements.card.classList.toggle("card--revealed", revealed);
  elements.revealBtn.hidden = revealed;
  elements.backBtn.hidden = !revealed;

  if (revealed) {
    const current = getCurrentWord();
    if (current) {
      const isFirstReveal = !state.revealedIds.has(current.id);
      state.revealedIds.add(current.id);

      if (isFirstReveal) {
        recordStudyActivity();
      } else {
        saveProgress();
      }

      elements.copyWordBtn.hidden = false;
      updateStats();
      renderCategoryChart();
    }
  } else {
    elements.copyWordBtn.hidden = true;
  }
}

function applyQuizModeLayout(current) {
  const mode = state.quizMode;
  const config = getQuizModeConfig();

  elements.headerSubtitle.textContent = config.subtitle;
  elements.questionLabel.textContent = config.questionLabel;
  elements.audioHint.textContent = config.audioHint;

  elements.card.classList.toggle("card--mode-listening", mode === "listening");
  elements.card.classList.toggle("card--mode-reverse", mode === "reverse");
  elements.card.classList.toggle("card--mode-conversation", mode === "conversation");

  if (mode === "meaning") {
    elements.questionText.textContent = current.meaning;
    elements.questionText.classList.remove("card__question-text--english");
    elements.audioRow.hidden = false;
  } else if (mode === "listening") {
    elements.questionText.textContent = "音声を再生して、英単語を思い浮かべてください";
    elements.questionText.classList.remove("card__question-text--english");
    elements.audioRow.hidden = false;
  } else if (mode === "reverse") {
    elements.questionText.textContent = current.word;
    elements.questionText.classList.add("card__question-text--english");
    elements.audioRow.hidden = false;
  } else if (mode === "conversation") {
    elements.questionText.textContent = pickConversationExample(current);
    elements.questionText.classList.remove("card__question-text--english");
    elements.audioRow.hidden = true;
  }

  elements.word.textContent = current.word;
  elements.answerMeaning.textContent = current.meaning;
  elements.reading.textContent = current.reading;
  renderPatterns(current.patterns);

  elements.wordBlock.hidden = mode === "reverse";
  elements.meaningBlock.hidden = mode === "meaning";
  elements.readingBlock.hidden = false;
  elements.patternsWrap.hidden = false;
}

function renderEmptyDeck() {
  elements.card.classList.add("card--empty");
  elements.categoryLabel.textContent = "";

  const emptyMessages = {
    review: "復習リストに単語がありません。答えを見たあと「復習リストへ」を押して追加しよう。",
    favorites: "お気に入りに単語がありません。☆ボタンで追加しよう。",
    unstudied: "未学習の単語がありません。すべて一度は答えを確認済みです。",
    "exclude-known": "出題できる単語がありません。覚えた除外の条件を変えてみよう。",
    all: "この条件では単語がありません。フィルターを変更してみよう。",
  };

  elements.cardNumber.textContent = "";
  elements.questionText.textContent = emptyMessages[state.studyFilter] ?? emptyMessages.all;
  elements.questionText.classList.remove("card__question-text--english");
  elements.audioRow.hidden = true;
  elements.word.textContent = "";
  elements.answerMeaning.textContent = "";
  elements.reading.textContent = "";
  renderPatterns([]);
  elements.prevBtn.disabled = true;
  elements.nextBtn.disabled = true;
  elements.playBtn.disabled = true;
  elements.revealBtn.disabled = true;
  elements.backBtn.hidden = true;
  elements.revealBtn.hidden = false;
  elements.knowBtn.disabled = true;
  elements.reviewBtn.disabled = true;
  elements.progressFill.style.width = "0%";
  elements.progressText.textContent = "0 / 0";
  setRevealed(false);
}

function renderPatterns(patterns = []) {
  if (patterns.length === 0) {
    elements.patternsContainer.innerHTML = "";
    return;
  }

  elements.patternsContainer.innerHTML = patterns
    .map(
      (pattern, index) => `
        <article class="pattern-block">
          <div class="pattern-block__head">
            <p class="pattern-block__label">パターン${index + 1}</p>
            <button class="btn btn--copy btn--copy-sm" type="button" data-copy-pattern="${index}">
              📋 コピー
            </button>
          </div>
          <p class="pattern-block__usage">${pattern.usage}</p>
          <p class="pattern-block__example-label">会話例</p>
          <p class="pattern-block__example">${pattern.example}</p>
        </article>
      `,
    )
    .join("");
}

function renderCard() {
  const deckSize = getDeckSize();

  if (deckSize === 0) {
    renderEmptyDeck();
    return;
  }

  elements.card.classList.remove("card--empty");
  const current = getCurrentWord();

  elements.categoryLabel.textContent = categoryMap[current.category] ?? "";
  elements.cardNumber.textContent = `#${current.id}`;
  updateFavoriteButton(current);
  applyQuizModeLayout(current);

  elements.prevBtn.disabled = state.index === 0;
  elements.nextBtn.disabled = state.index === deckSize - 1;
  elements.playBtn.disabled = false;
  elements.knowBtn.disabled = false;
  elements.reviewBtn.disabled = false;

  const progress = ((state.index + 1) / deckSize) * 100;
  elements.progressFill.style.width = `${progress}%`;
  elements.progressText.textContent = `${state.index + 1} / ${deckSize}`;

  setRevealed(false);
}

function stopSpeech() {
  window.speechSynthesis.cancel();
  elements.playBtn.classList.remove("is-playing");
}

function goToIndex(nextIndex) {
  const deckSize = getDeckSize();

  if (nextIndex < 0 || nextIndex >= deckSize) {
    return;
  }

  clearAutoAdvanceTimer();
  stopSpeech();
  state.index = nextIndex;
  renderCard();
  saveProgress();
}

function goToNextCard() {
  const deckSize = getDeckSize();

  if (deckSize === 0) {
    return;
  }

  if (state.index < deckSize - 1) {
    goToIndex(state.index + 1);
    return;
  }

  saveProgress();
}

function hideAnswer() {
  if (!state.revealed || getDeckSize() === 0) {
    return;
  }

  clearAutoAdvanceTimer();
  setRevealed(false);
}

function revealAnswer() {
  if (state.revealed || getDeckSize() === 0) {
    return;
  }

  setRevealed(true);
}

function markAsKnown() {
  const current = getCurrentWord();
  if (!current || !state.revealed) {
    return;
  }

  state.knownIds.add(current.id);
  state.reviewIds.delete(current.id);
  showToast("覚えたとして記録しました");
  afterRating({ removedFromReview: true });
}

function markForReview() {
  const current = getCurrentWord();
  if (!current || !state.revealed) {
    return;
  }

  const wasAlreadyInReview = state.reviewIds.has(current.id);
  state.reviewIds.add(current.id);
  state.knownIds.delete(current.id);

  if (wasAlreadyInReview) {
    showToast(`復習リストに入っています（全${state.reviewIds.size}語）`);
  } else {
    showToast(`復習リストに追加しました（全${state.reviewIds.size}語）`);
    pulseReviewBadge();
  }

  afterRating({ removedFromReview: false });
}

function afterRating({ removedFromReview }) {
  updateStats();
  saveProgress();

  const shouldRefreshDeck =
    (state.studyFilter === "review" && removedFromReview) ||
    (state.studyFilter === "exclude-known" && removedFromReview) ||
    (state.studyFilter === "unstudied");

  if (shouldRefreshDeck) {
    const indexBefore = state.index;
    const filtered = getFilteredWords();
    state.activeWords = state.shuffled ? shuffleArray(filtered) : filtered;

    if (state.activeWords.length === 0) {
      clearAutoAdvanceTimer();
      renderCard();
      updateToolButtons();
      return;
    }

    state.index = Math.min(indexBefore, state.activeWords.length - 1);
    clearAutoAdvanceTimer();
    stopSpeech();
    renderCard();
    updateToolButtons();

    if (state.autoAdvance) {
      state.autoAdvanceTimer = setTimeout(() => {
        goToNextCard();
      }, AUTO_ADVANCE_DELAY_MS);
    }
    return;
  }

  scheduleAutoAdvance();
}

function scheduleAutoAdvance() {
  clearAutoAdvanceTimer();

  if (!state.autoAdvance) {
    return;
  }

  state.autoAdvanceTimer = setTimeout(() => {
    goToNextCard();
  }, AUTO_ADVANCE_DELAY_MS);
}

function resetProgress() {
  const confirmed = window.confirm("学習履歴（復習リスト・覚えた記録・設定）をすべてリセットしますか？");
  if (!confirmed) {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  state.index = 0;
  state.revealed = false;
  state.categoryFilter = "all";
  state.studyFilter = "all";
  state.quizMode = "meaning";
  state.shuffled = false;
  state.autoAdvance = false;
  state.reviewIds = new Set();
  state.knownIds = new Set();
  state.revealedIds = new Set();
  state.favoriteIds = new Set();
  state.streakCurrent = 0;
  state.streakBest = 0;
  state.streakLastDate = null;
  state.todayStudiedDate = null;
  state.todayStudiedCount = 0;
  state.lastWordId = null;
  elements.searchInput.value = "";
  clearAutoAdvanceTimer();
  rebuildActiveWords();
}

function pickEnglishVoice() {
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find((voice) => voice.lang.startsWith("en-US") && voice.localService) ??
    voices.find((voice) => voice.lang.startsWith("en-US")) ??
    voices.find((voice) => voice.lang.startsWith("en")) ??
    null
  );
}

function speakCurrentWord() {
  if (!window.speechSynthesis || getDeckSize() === 0) {
    return;
  }

  const current = getCurrentWord();
  stopSpeech();

  const utterance = new SpeechSynthesisUtterance(current.word);
  utterance.lang = "en-US";
  utterance.rate = 0.92;
  utterance.pitch = 1;

  const voice = pickEnglishVoice();
  if (voice) {
    utterance.voice = voice;
  }

  elements.playBtn.classList.add("is-playing");

  utterance.onend = () => {
    elements.playBtn.classList.remove("is-playing");
  };

  utterance.onerror = () => {
    elements.playBtn.classList.remove("is-playing");
  };

  window.speechSynthesis.speak(utterance);
}

function updateStats() {
  syncTodayStudiedCount();
  const reviewTotal = String(state.reviewIds.size);
  elements.reviewCount.textContent = reviewTotal;
  elements.reviewBadgeCount.textContent = reviewTotal;
  elements.knownCount.textContent = String(state.knownIds.size);
  elements.unseenCount.textContent = String(WORDS.length - state.revealedIds.size);
  elements.todayStudiedCount.textContent = String(state.todayStudiedCount);
  elements.streakCount.textContent = String(state.streakCurrent);
  elements.favoriteCount.textContent = String(state.favoriteIds.size);
  elements.reviewBadgeBtn.classList.toggle(
    "app-bar__review-badge--active",
    state.studyFilter === "review",
  );
  elements.reviewBadgeBtn.setAttribute(
    "aria-pressed",
    String(state.studyFilter === "review"),
  );
}

function getCategorySummaryLabel(categoryId) {
  if (categoryId === "all") {
    return "すべて";
  }

  const category = WORD_CATEGORIES.find((item) => item.id === categoryId);
  if (!category) {
    return "すべて";
  }

  return category.label.split("・")[0];
}

function updateActiveSummary() {
  const studyLabel =
    STUDY_FILTERS.find((filter) => filter.id === state.studyFilter)?.label ?? "すべて";
  const modeLabel = QUIZ_MODES[state.quizMode]?.label ?? "意味→英語";
  const parts = [getCategorySummaryLabel(state.categoryFilter), studyLabel, modeLabel];

  if (state.shuffled) {
    parts.push("シャッフル");
  }

  if (state.autoAdvance) {
    parts.push("自動送り");
  }

  elements.activeSummary.textContent = parts.join(" · ");
}

function setSearchPanelOpen(open) {
  elements.searchPanel.classList.toggle("search-panel--hidden", !open);
  elements.searchToggleBtn.setAttribute("aria-expanded", String(open));
  elements.searchToggleBtn.classList.toggle("btn--icon-active", open);
  elements.searchToggleBtn.setAttribute("aria-label", open ? "検索を閉じる" : "検索を開く");

  if (open) {
    elements.searchInput.focus();
  }
}

function setSettingsPanelOpen(open) {
  elements.settingsPanel.classList.toggle("settings-panel--hidden", !open);
  elements.settingsToggleBtn.setAttribute("aria-expanded", String(open));
  elements.settingsToggleBtn.classList.toggle("btn--icon-active", open);
  elements.settingsToggleBtn.setAttribute(
    "aria-label",
    open ? "学習設定を閉じる" : "学習設定を開く",
  );
}

function toggleSearchPanel() {
  const willOpen = elements.searchPanel.classList.contains("search-panel--hidden");
  setSearchPanelOpen(willOpen);

  if (willOpen) {
    setSettingsPanelOpen(false);
  }
}

function toggleSettingsPanel() {
  const willOpen = elements.settingsPanel.classList.contains("settings-panel--hidden");
  setSettingsPanelOpen(willOpen);

  if (willOpen) {
    setSearchPanelOpen(false);
  }
}

function renderCategoryChart() {
  const rows = WORD_CATEGORIES.map((category) => {
    const words = WORDS.filter((word) => word.category === category.id);
    const known = words.filter((word) => state.knownIds.has(word.id)).length;
    const total = words.length;
    const percent = total === 0 ? 0 : Math.round((known / total) * 100);

    return `
      <div class="category-chart__row">
        <span class="category-chart__label">${category.label}</span>
        <div class="category-chart__bar" aria-hidden="true">
          <div class="category-chart__fill" style="width: ${percent}%"></div>
        </div>
        <span class="category-chart__value">${known}/${total} (${percent}%)</span>
      </div>
    `;
  }).join("");

  elements.categoryChart.innerHTML = `
    <p class="category-chart__title">カテゴリ別「覚えた」進捗</p>
    ${rows}
  `;
}

function updateFavoriteButton(word) {
  const isFavorite = state.favoriteIds.has(word.id);
  elements.favoriteBtn.textContent = isFavorite ? "★" : "☆";
  elements.favoriteBtn.classList.toggle("btn--favorite-active", isFavorite);
  elements.favoriteBtn.setAttribute("aria-pressed", String(isFavorite));
  elements.favoriteBtn.setAttribute(
    "aria-label",
    isFavorite ? "お気に入りから外す" : "お気に入りに追加",
  );
}

function toggleFavorite() {
  const current = getCurrentWord();
  if (!current) {
    return;
  }

  if (state.favoriteIds.has(current.id)) {
    state.favoriteIds.delete(current.id);
    showToast("お気に入りから外しました");
  } else {
    state.favoriteIds.add(current.id);
    showToast("お気に入りに追加しました");
  }

  updateFavoriteButton(current);
  updateStats();

  if (state.studyFilter === "favorites") {
    rebuildActiveWords({ resetIndex: false });
    return;
  }

  saveProgress();
}

function formatPatternCopy(pattern, word) {
  return `${word.word}（${word.reading}）\n${pattern.usage}\n${pattern.example}`;
}

function formatWordCopyText(word) {
  const patterns = (word.patterns ?? [])
    .map((pattern, index) => `【パターン${index + 1}】\n${pattern.usage}\n${pattern.example}`)
    .join("\n\n");

  return `${word.word}（${word.reading}）\n${word.meaning}\n\n${patterns}`;
}

async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("クリップボードにコピーしました");
    return true;
  } catch {
    showToast("コピーに失敗しました");
    return false;
  }
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.remove("toast--hidden");

  if (state.toastTimer) {
    clearTimeout(state.toastTimer);
  }

  state.toastTimer = setTimeout(() => {
    elements.toast.classList.add("toast--hidden");
  }, 2200);
}

function pulseReviewBadge() {
  elements.reviewBadgeBtn.classList.remove("app-bar__review-badge--pulse");
  void elements.reviewBadgeBtn.offsetWidth;
  elements.reviewBadgeBtn.classList.add("app-bar__review-badge--pulse");
}

function activateReviewListFilter() {
  if (state.reviewIds.size === 0) {
    showToast("復習リストは空です。「復習リストへ」で追加できます");
    setSettingsPanelOpen(true);
    return;
  }

  state.studyFilter = "review";
  rebuildActiveWords({ resetIndex: true });
  showToast(`復習リスト ${state.reviewIds.size}語 を出題します`);
}

function exportProgressBackup() {
  const payload = buildProgressPayload();
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `english-vocab-quiz-backup-${getTodayKey()}.json`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("バックアップをダウンロードしました");
}

function importProgressBackup(file) {
  if (!file) {
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    try {
      const data = JSON.parse(String(reader.result));
      applyProgressPayload(data);
      rebuildActiveWords({ resume: true });
      showToast("バックアップを復元しました");
    } catch {
      window.alert("バックアップファイルの形式が正しくありません。");
    }
  };

  reader.readAsText(file);
}

function initSwipeNavigation() {
  const swipeThreshold = 50;
  const maxVerticalDrift = 80;

  elements.card.addEventListener(
    "touchstart",
    (event) => {
      if (event.touches.length !== 1) {
        return;
      }

      state.swipeStartX = event.touches[0].clientX;
      state.swipeStartY = event.touches[0].clientY;
    },
    { passive: true },
  );

  elements.card.addEventListener(
    "touchend",
    (event) => {
      if (state.swipeStartX === null || state.swipeStartY === null) {
        return;
      }

      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - state.swipeStartX;
      const deltaY = touch.clientY - state.swipeStartY;

      state.swipeStartX = null;
      state.swipeStartY = null;

      if (Math.abs(deltaY) > maxVerticalDrift) {
        return;
      }

      if (Math.abs(deltaX) < swipeThreshold) {
        return;
      }

      if (deltaX < 0) {
        goToIndex(state.index + 1);
        return;
      }

      goToIndex(state.index - 1);
    },
    { passive: true },
  );
}

function updateFilterButtons() {
  elements.categoryFilters.querySelectorAll("[data-category]").forEach((button) => {
    const isActive = button.dataset.category === state.categoryFilter;
    button.classList.toggle("filter-chip--active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  elements.studyFilters.querySelectorAll("[data-study]").forEach((button) => {
    const isActive = button.dataset.study === state.studyFilter;
    button.classList.toggle("filter-chip--active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  elements.quizModeFilters.querySelectorAll("[data-mode]").forEach((button) => {
    const isActive = button.dataset.mode === state.quizMode;
    button.classList.toggle("filter-chip--active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function updateToolButtons() {
  elements.shuffleBtn.classList.toggle("btn--tool-active", state.shuffled);
  elements.shuffleBtn.setAttribute("aria-pressed", String(state.shuffled));
  elements.shuffleBtn.textContent = state.shuffled ? "🔀 シャッフル中" : "🔀 シャッフル";

  elements.autoAdvanceBtn.classList.toggle("btn--tool-active", state.autoAdvance);
  elements.autoAdvanceBtn.setAttribute("aria-pressed", String(state.autoAdvance));
  elements.autoAdvanceBtn.textContent = state.autoAdvance ? "⏭ 自動送り ON" : "⏭ 自動で次へ";

  updateActiveSummary();
}

function renderCategoryFilters() {
  const filters = [
    { id: "all", label: "すべて" },
    ...WORD_CATEGORIES.map((category) => ({
      id: category.id,
      label: category.label,
    })),
  ];

  elements.categoryFilters.innerHTML = filters
    .map(
      (filter) => `
        <button
          class="filter-chip"
          type="button"
          data-category="${filter.id}"
          aria-pressed="${filter.id === state.categoryFilter}"
        >
          ${filter.label}
        </button>
      `,
    )
    .join("");
}

function renderStudyFilters() {
  elements.studyFilters.innerHTML = STUDY_FILTERS.map(
    (filter) => `
      <button
        class="filter-chip"
        type="button"
        data-study="${filter.id}"
        aria-pressed="${filter.id === state.studyFilter}"
      >
        ${filter.label}
      </button>
    `,
  ).join("");
}

function renderQuizModeFilters() {
  elements.quizModeFilters.innerHTML = Object.entries(QUIZ_MODES)
    .map(
      ([id, config]) => `
        <button
          class="filter-chip"
          type="button"
          data-mode="${id}"
          aria-pressed="${id === state.quizMode}"
        >
          ${config.label}
        </button>
      `,
    )
    .join("");
}

function normalizeSearchQuery(query) {
  return query.trim().toLowerCase();
}

function wordMatchesQuery(word, query) {
  const normalized = normalizeSearchQuery(query);
  if (!normalized) {
    return false;
  }

  const idMatch = normalized.match(/^#?(\d+)$/);
  if (idMatch && String(word.id) === idMatch[1]) {
    return true;
  }

  const haystack = [
    word.word,
    word.reading,
    word.meaning,
    String(word.id),
    categoryMap[word.category] ?? "",
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(normalized);
}

function searchWords(query) {
  const normalized = normalizeSearchQuery(query);
  if (!normalized) {
    return [];
  }

  return WORDS.filter((word) => wordMatchesQuery(word, normalized)).slice(0, SEARCH_RESULT_LIMIT);
}

function hideSearchResults() {
  elements.searchResults.classList.add("search-results--hidden");
  elements.searchResults.innerHTML = "";
}

function renderSearchResults(results) {
  if (results.length === 0) {
    elements.searchResults.innerHTML = `<li class="search-results__empty">該当する単語がありません</li>`;
    elements.searchResults.classList.remove("search-results--hidden");
    return;
  }

  elements.searchResults.innerHTML = results
    .map(
      (word) => `
        <li>
          <button class="search-results__item" type="button" data-word-id="${word.id}">
            <span class="search-results__id">#${word.id}</span>
            <span class="search-results__word">${word.word}</span>
            <span class="search-results__meaning">${word.meaning}</span>
          </button>
        </li>
      `,
    )
    .join("");

  elements.searchResults.classList.remove("search-results--hidden");
}

function handleSearchInput() {
  const query = elements.searchInput.value;
  const results = searchWords(query);
  renderSearchResults(results);
}

function jumpToWordById(wordId, { relaxFilters = true } = {}) {
  const word = WORDS.find((item) => item.id === wordId);
  if (!word) {
    return false;
  }

  let index = state.activeWords.findIndex((item) => item.id === wordId);

  if (index < 0 && relaxFilters) {
    state.categoryFilter = "all";
    state.studyFilter = "all";
    rebuildActiveWords({ resetIndex: false });
    index = state.activeWords.findIndex((item) => item.id === wordId);
    updateFilterButtons();
  }

  if (index < 0) {
    window.alert(`#${wordId} ${word.word} は現在のフィルター条件では表示できません。`);
    return false;
  }

  hideSearchResults();
  elements.searchInput.value = "";
  goToIndex(index);
  elements.card.scrollIntoView({ behavior: "smooth", block: "center" });
  return true;
}

function jumpFromSearchInput() {
  const query = elements.searchInput.value.trim();
  if (!query) {
    return;
  }

  const idMatch = query.match(/^#?(\d+)$/);
  if (idMatch) {
    jumpToWordById(Number(idMatch[1]));
    return;
  }

  const results = searchWords(query);
  if (results.length === 1) {
    jumpToWordById(results[0].id);
    return;
  }

  if (results.length > 1) {
    renderSearchResults(results);
    return;
  }

  window.alert("該当する単語が見つかりませんでした。");
}

function isTypingTarget(target) {
  return (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement ||
    target?.isContentEditable
  );
}

function bindEvents() {
  elements.revealBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    revealAnswer();
  });

  elements.backBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    hideAnswer();
  });

  elements.reviewBadgeBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    activateReviewListFilter();
  });

  elements.card.addEventListener("click", (event) => {
    if (event.target.closest("button")) {
      return;
    }

    if (elements.card.classList.contains("card--empty")) {
      return;
    }

    revealAnswer();
  });

  elements.card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      revealAnswer();
    }
  });

  elements.playBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    speakCurrentWord();
  });

  elements.knowBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    markAsKnown();
  });

  elements.reviewBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    markForReview();
  });

  elements.prevBtn.addEventListener("click", () => {
    goToIndex(state.index - 1);
  });

  elements.nextBtn.addEventListener("click", () => {
    goToIndex(state.index + 1);
  });

  elements.categoryFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button || button.dataset.category === state.categoryFilter) {
      return;
    }

    state.categoryFilter = button.dataset.category;
    rebuildActiveWords();
  });

  elements.studyFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-study]");
    if (!button || button.dataset.study === state.studyFilter) {
      return;
    }

    state.studyFilter = button.dataset.study;
    rebuildActiveWords();
  });

  elements.quizModeFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-mode]");
    if (!button || button.dataset.mode === state.quizMode) {
      return;
    }

    state.quizMode = button.dataset.mode;
    stopSpeech();
    renderCard();
    updateFilterButtons();
    saveProgress();
  });

  elements.shuffleBtn.addEventListener("click", () => {
    state.shuffled = !state.shuffled;
    rebuildActiveWords();
  });

  elements.autoAdvanceBtn.addEventListener("click", () => {
    state.autoAdvance = !state.autoAdvance;
    updateToolButtons();
    saveProgress();
  });

  elements.resetProgressBtn.addEventListener("click", resetProgress);

  elements.searchToggleBtn.addEventListener("click", toggleSearchPanel);
  elements.settingsToggleBtn.addEventListener("click", toggleSettingsPanel);

  elements.exportBtn.addEventListener("click", exportProgressBackup);

  elements.importBtn.addEventListener("click", () => {
    elements.importInput.click();
  });

  elements.importInput.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    importProgressBackup(file);
    event.target.value = "";
  });

  elements.favoriteBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleFavorite();
  });

  elements.copyWordBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    const current = getCurrentWord();
    if (current) {
      copyTextToClipboard(formatWordCopyText(current));
    }
  });

  elements.patternsContainer.addEventListener("click", (event) => {
    const button = event.target.closest("[data-copy-pattern]");
    if (!button) {
      return;
    }

    event.stopPropagation();
    const current = getCurrentWord();
    const patternIndex = Number(button.dataset.copyPattern);
    const pattern = current?.patterns?.[patternIndex];

    if (current && pattern) {
      copyTextToClipboard(formatPatternCopy(pattern, current));
    }
  });

  elements.searchInput.addEventListener("input", handleSearchInput);
  elements.searchInput.addEventListener("focus", handleSearchInput);

  elements.searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      jumpFromSearchInput();
    }

    if (event.key === "Escape") {
      hideSearchResults();
      elements.searchInput.blur();
    }
  });

  elements.jumpBtn.addEventListener("click", jumpFromSearchInput);

  elements.searchResults.addEventListener("click", (event) => {
    const button = event.target.closest("[data-word-id]");
    if (!button) {
      return;
    }

    jumpToWordById(Number(button.dataset.wordId));
  });

  document.addEventListener("click", (event) => {
    if (
      !event.target.closest("#searchPanel") &&
      !event.target.closest("#searchToggleBtn")
    ) {
      hideSearchResults();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && !isTypingTarget(event.target)) {
      event.preventDefault();
      setSearchPanelOpen(true);
      setSettingsPanelOpen(false);
      elements.searchInput.focus();
      elements.searchInput.select();
      return;
    }

    if (isTypingTarget(event.target)) {
      return;
    }

    if (event.key === "Escape" && state.revealed && !isTypingTarget(event.target)) {
      event.preventDefault();
      hideAnswer();
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToIndex(state.index - 1);
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToIndex(state.index + 1);
      return;
    }

    if (event.key === " " || event.code === "Space") {
      if (event.target === elements.card) {
        return;
      }

      event.preventDefault();
      revealAnswer();
      return;
    }

    if (event.key === "s" || event.key === "S") {
      event.preventDefault();
      speakCurrentWord();
      return;
    }

    if ((event.key === "1" || event.key === "y" || event.key === "Y") && state.revealed) {
      event.preventDefault();
      markAsKnown();
      return;
    }

    if ((event.key === "2" || event.key === "n" || event.key === "N") && state.revealed) {
      event.preventDefault();
      markForReview();
    }
  });

  window.speechSynthesis.onvoiceschanged = () => {};
  window.addEventListener("beforeunload", saveProgress);
}

function init() {
  loadProgress();
  renderCategoryFilters();
  renderStudyFilters();
  renderQuizModeFilters();
  bindEvents();
  initSwipeNavigation();
  updateActiveSummary();
  rebuildActiveWords({ resume: true });
}

init();
