const APP_VERSION = "noun_verb_norming_v4_probe_2026-04-27";

const CANDIDATES = [
  {
    rank: 1,
    candidate_id: "homo_nv_p02",
    headword: "cow",
    round1_role: "core_final_set_contender",
    known_noun_correct_ja: "牛",
    known_noun_distractors_ja: ["犬", "海岸", "床"],
    target_context_sentence_en: "The coach tried to cow the players into silence.",
    target_verb_correct_ja: "おびえさせて従わせる",
    target_verb_distractors_ja: ["餌をやる", "数える", "磨く"],
    gloss_variants_to_test: ["おびえさせて従わせる", "威圧する"],
    prompt_source: "top10_pre_pilot_pack",
    round1_use_priority: "core_contender",
    source_audit_decision: "continue_audit",
    risk_summary: "register=medium; phrase-boundness=medium"
  },
  {
    rank: 2,
    candidate_id: "homo_nv_p07",
    headword: "dog",
    round1_role: "core_final_set_contender",
    known_noun_correct_ja: "犬",
    known_noun_distractors_ja: ["牛", "アヒル", "帽子"],
    target_context_sentence_en: "Reporters may dog the actor for weeks.",
    target_verb_correct_ja: "しつこく追跡する",
    target_verb_distractors_ja: ["ほめる", "料理する", "眠らせる"],
    gloss_variants_to_test: ["しつこく追跡する", "つきまとう"],
    prompt_source: "top10_pre_pilot_pack",
    round1_use_priority: "core_contender",
    source_audit_decision: "continue_audit",
    risk_summary: "register=medium; phrase-boundness=medium; conversion transparency=medium; guessability=medium"
  },
  {
    rank: 3,
    candidate_id: "low_nv_x07",
    headword: "pound",
    round1_role: "core_final_set_contender",
    known_noun_correct_ja: "ポンド",
    known_noun_distractors_ja: ["針", "胃", "正方形"],
    target_context_sentence_en: "The rain will pound the roof all night.",
    target_verb_correct_ja: "激しく打つ",
    target_verb_distractors_ja: ["値段を下げる", "港に入る", "名前を変える"],
    gloss_variants_to_test: ["激しく打つ", "強くたたく"],
    prompt_source: "top10_pre_pilot_pack",
    round1_use_priority: "core_contender",
    source_audit_decision: "continue_audit",
    risk_summary: "school English=medium; loanword=medium"
  },
  {
    rank: 4,
    candidate_id: "homo_nv_p04",
    headword: "coast",
    round1_role: "core_final_set_contender",
    known_noun_correct_ja: "海岸",
    known_noun_distractors_ja: ["床", "牛", "帽子"],
    target_context_sentence_en: "The bike can coast down the hill.",
    target_verb_correct_ja: "惰性で進む",
    target_verb_distractors_ja: ["海岸を作る", "強くたたく", "からかう"],
    gloss_variants_to_test: ["楽に進む", "惰性で進む"],
    prompt_source: "top10_pre_pilot_pack",
    round1_use_priority: "core_contender",
    source_audit_decision: "continue_audit",
    risk_summary: "domain=medium; phrase-boundness=medium; conversion transparency=medium; guessability=medium"
  },
  {
    rank: 5,
    candidate_id: "homo_nv_p03",
    headword: "floor",
    round1_role: "core_final_set_contender",
    known_noun_correct_ja: "床",
    known_noun_distractors_ja: ["海岸", "牛", "光線"],
    target_context_sentence_en: "The hard question will floor many students.",
    target_verb_correct_ja: "完全に困惑させる",
    target_verb_distractors_ja: ["掃除する", "歩かせる", "値段を決める"],
    gloss_variants_to_test: ["完全に困惑させる", "困惑させる"],
    prompt_source: "top10_pre_pilot_pack",
    round1_use_priority: "core_contender",
    source_audit_decision: "continue_audit",
    risk_summary: "loanword=medium; register=medium; phrase-boundness=medium; conversion transparency=medium; guessability=medium"
  },
  {
    rank: 6,
    candidate_id: "low_nv_x25",
    headword: "needle",
    round1_role: "core_final_set_contender",
    known_noun_correct_ja: "針",
    known_noun_distractors_ja: ["鉛筆", "スカート", "卵"],
    target_context_sentence_en: "His friends may needle him about the mistake.",
    target_verb_correct_ja: "しつこくからかう",
    target_verb_distractors_ja: ["縫う", "測る", "笑顔になる"],
    gloss_variants_to_test: ["からかう", "しつこくからかう"],
    prompt_source: "top10_pre_pilot_pack",
    round1_use_priority: "core_contender",
    source_audit_decision: "continue_audit",
    risk_summary: "register=medium"
  },
  {
    rank: 7,
    candidate_id: "low_nv_x13",
    headword: "cap",
    round1_role: "core_final_set_contender",
    known_noun_correct_ja: "帽子",
    known_noun_distractors_ja: ["牛", "針", "港"],
    target_context_sentence_en: "The school may cap the class at thirty students.",
    target_verb_correct_ja: "上限を設ける",
    target_verb_distractors_ja: ["帽子をかぶせる", "教室を掃除する", "大声で読む"],
    gloss_variants_to_test: ["制限する", "上限を設ける"],
    prompt_source: "top10_pre_pilot_pack",
    round1_use_priority: "core_contender",
    source_audit_decision: "continue_audit",
    risk_summary: "school English=medium; loanword=medium; Japanese transfer=medium; register=medium; domain=medium"
  },
  {
    rank: 8,
    candidate_id: "low_nv_x27",
    headword: "bolt",
    round1_role: "core_final_set_contender",
    known_noun_correct_ja: "ボルト",
    known_noun_distractors_ja: ["マグカップ", "切り株", "光線"],
    target_context_sentence_en: "The horse may bolt when it hears a loud noise.",
    target_verb_correct_ja: "急に逃げる",
    target_verb_distractors_ja: ["ねじで留める", "食べ物を出す", "静かに眠る"],
    gloss_variants_to_test: ["急に逃げる", "急に走り去る"],
    prompt_source: "top10_pre_pilot_pack",
    round1_use_priority: "core_contender",
    source_audit_decision: "continue_audit",
    risk_summary: "loanword=medium; Japanese transfer=medium"
  },
  {
    rank: 9,
    candidate_id: "low_nv_x03",
    headword: "frame",
    round1_role: "core_final_set_contender",
    known_noun_correct_ja: "額縁",
    known_noun_distractors_ja: ["ポンド", "海岸", "帽子"],
    target_context_sentence_en: "The thief tried to frame another man.",
    target_verb_correct_ja: "罪を着せる",
    target_verb_distractors_ja: ["写真を飾る", "道を渡る", "音を出す"],
    gloss_variants_to_test: ["罪を着せる", "でっち上げる"],
    prompt_source: "top10_pre_pilot_pack",
    round1_use_priority: "core_contender",
    source_audit_decision: "continue_audit",
    risk_summary: "loanword=medium; register=medium; domain=medium; phrase-boundness=medium"
  },
  {
    rank: 10,
    candidate_id: "low_nv_x24",
    headword: "stomach",
    round1_role: "core_final_set_contender",
    known_noun_correct_ja: "胃",
    known_noun_distractors_ja: ["針", "床", "銀行"],
    target_context_sentence_en: "I cannot stomach his rude jokes.",
    target_verb_correct_ja: "我慢する",
    target_verb_distractors_ja: ["食事を作る", "大声で笑う", "急に走る"],
    gloss_variants_to_test: ["我慢する", "耐える"],
    prompt_source: "top10_pre_pilot_pack",
    round1_use_priority: "core_contender",
    source_audit_decision: "continue_audit",
    risk_summary: "school English=medium; register=medium; phrase-boundness=medium; conversion transparency=medium; guessability=medium"
  },
  {
    rank: 11,
    candidate_id: "homo_nv_p12",
    headword: "duck",
    round1_role: "core_round1_watch",
    known_noun_correct_ja: "アヒル",
    known_noun_distractors_ja: ["牛", "帽子", "銀行"],
    target_context_sentence_en: "The player had to duck under the rope.",
    target_verb_correct_ja: "身をかがめる",
    target_verb_distractors_ja: ["鳴く", "泳ぐ", "料理する"],
    gloss_variants_to_test: ["さっと身をかがめる", "身をかがめる"],
    prompt_source: "new_round1_minimum_draft",
    round1_use_priority: "core_watch",
    source_audit_decision: "continue_audit",
    risk_summary: "school English=medium; conversion transparency=medium; guessability=medium"
  },
  {
    rank: 12,
    candidate_id: "low_nv_x29",
    headword: "beam",
    round1_role: "core_round1_watch",
    known_noun_correct_ja: "光線",
    known_noun_distractors_ja: ["港", "皿", "春"],
    target_context_sentence_en: "The child began to beam at her teacher.",
    target_verb_correct_ja: "にっこり笑う",
    target_verb_distractors_ja: ["光を当てる", "水を飲む", "値段を下げる"],
    gloss_variants_to_test: ["にっこり笑う", "晴れやかに笑う"],
    prompt_source: "new_round1_minimum_draft",
    round1_use_priority: "core_watch",
    source_audit_decision: "continue_audit",
    risk_summary: "loanword=medium; Japanese transfer=medium; conversion transparency=medium; guessability=medium"
  },
  {
    rank: 13,
    candidate_id: "low_nv_x26",
    headword: "mug",
    round1_role: "core_round1_watch",
    known_noun_correct_ja: "マグカップ",
    known_noun_distractors_ja: ["ボルト", "切り株", "卵"],
    target_context_sentence_en: "A man tried to mug a woman in the park.",
    target_verb_correct_ja: "襲って奪う",
    target_verb_distractors_ja: ["飲み物を入れる", "写真を撮る", "静かに眠る"],
    gloss_variants_to_test: ["襲って奪う", "強奪する"],
    prompt_source: "new_round1_minimum_draft",
    round1_use_priority: "core_watch",
    source_audit_decision: "continue_audit",
    risk_summary: "loanword=medium; register=medium; domain=medium"
  },
  {
    rank: 14,
    candidate_id: "low_nv_x09",
    headword: "doctor",
    round1_role: "core_round1_watch",
    known_noun_correct_ja: "医者",
    known_noun_distractors_ja: ["銀行", "春", "靴下"],
    target_context_sentence_en: "They tried to doctor the report.",
    target_verb_correct_ja: "改ざんする",
    target_verb_distractors_ja: ["診察する", "料理する", "港に入る"],
    gloss_variants_to_test: ["改ざんする", "不正に手を加える"],
    prompt_source: "new_round1_minimum_draft",
    round1_use_priority: "core_watch",
    source_audit_decision: "continue_audit",
    risk_summary: "loanword=medium; register=medium; domain=medium"
  },
  {
    rank: 15,
    candidate_id: "low_nv_x15",
    headword: "harbor",
    round1_role: "core_round1_watch",
    known_noun_correct_ja: "港",
    known_noun_distractors_ja: ["海岸", "床", "針"],
    target_context_sentence_en: "The family tried to harbor the thief.",
    target_verb_correct_ja: "かくまう",
    target_verb_distractors_ja: ["港に入る", "数を数える", "帽子をかぶる"],
    gloss_variants_to_test: ["かくまう", "隠して守る"],
    prompt_source: "new_round1_minimum_draft",
    round1_use_priority: "core_watch",
    source_audit_decision: "continue_audit",
    risk_summary: "register=medium; domain=medium; phrase-boundness=medium; conversion transparency=medium"
  },
  {
    rank: 16,
    candidate_id: "low_nv_x28",
    headword: "skirt",
    round1_role: "core_round1_watch",
    known_noun_correct_ja: "スカート",
    known_noun_distractors_ja: ["マグカップ", "光線", "切り株"],
    target_context_sentence_en: "The student tried to skirt the question.",
    target_verb_correct_ja: "避けて通る",
    target_verb_distractors_ja: ["スカートをはく", "声に出して読む", "水を温める"],
    gloss_variants_to_test: ["避けて通る", "回避する"],
    prompt_source: "new_round1_minimum_draft",
    round1_use_priority: "core_watch",
    source_audit_decision: "continue_audit",
    risk_summary: "school English=medium; loanword=medium; Japanese transfer=medium; register=medium; phrase-boundness=medium; conversion transparency=medium; guessability=medium"
  },
  {
    rank: 17,
    candidate_id: "homo_nv_p05",
    headword: "dish",
    round1_role: "reserve_fill_to_round1_minimum",
    known_noun_correct_ja: "皿",
    known_noun_distractors_ja: ["床", "針", "帽子"],
    target_context_sentence_en: "Friends may dish about the actor after class.",
    target_verb_correct_ja: "うわさ話をする",
    target_verb_distractors_ja: ["皿を洗う", "強くたたく", "水深を測る"],
    gloss_variants_to_test: ["うわさ話をする", "うわさを話す"],
    prompt_source: "new_round1_minimum_draft",
    round1_use_priority: "reserve_diagnostic",
    source_audit_decision: "reserve_only",
    risk_summary: "register=high; phrase-boundness=high"
  },
  {
    rank: 18,
    candidate_id: "low_nv_x19",
    headword: "spring",
    round1_role: "reserve_fill_to_round1_minimum",
    known_noun_correct_ja: "春",
    known_noun_distractors_ja: ["季節", "銀行", "皿"],
    target_context_sentence_en: "The cat may spring from the box.",
    target_verb_correct_ja: "跳び出る",
    target_verb_distractors_ja: ["春になる", "うわさ話をする", "水深を測る"],
    gloss_variants_to_test: ["跳び出る", "急に動く"],
    prompt_source: "new_round1_minimum_draft",
    round1_use_priority: "reserve_diagnostic",
    source_audit_decision: "reserve_only",
    risk_summary: "school English=medium; phrase-boundness=medium; conversion transparency=medium; guessability=medium"
  },
  {
    rank: 19,
    candidate_id: "homo_nv_p09",
    headword: "bank",
    round1_role: "reserve_fill_to_round1_minimum",
    known_noun_correct_ja: "銀行",
    known_noun_distractors_ja: ["港", "アヒル", "卵"],
    target_context_sentence_en: "The plane began to bank to the left.",
    target_verb_correct_ja: "機体を傾ける",
    target_verb_distractors_ja: ["お金を預ける", "にっこり笑う", "味付けする"],
    gloss_variants_to_test: ["機体を傾ける", "傾けて飛ぶ"],
    prompt_source: "new_round1_minimum_draft",
    round1_use_priority: "reserve_diagnostic",
    source_audit_decision: "reserve_only",
    risk_summary: "loanword=medium; register=medium; domain=high"
  },
  {
    rank: 20,
    candidate_id: "homo_nv_p01",
    headword: "sound",
    round1_role: "reserve_fill_to_round1_minimum",
    known_noun_correct_ja: "音",
    known_noun_distractors_ja: ["銀行", "皿", "港"],
    target_context_sentence_en: "The crew used a line to sound the water.",
    target_verb_correct_ja: "水深を測る",
    target_verb_distractors_ja: ["音を出す", "皿を洗う", "走って逃げる"],
    gloss_variants_to_test: ["水深を測る", "水深を調べる"],
    prompt_source: "new_round1_minimum_draft",
    round1_use_priority: "reserve_diagnostic",
    source_audit_decision: "reserve_only",
    risk_summary: "loanword=medium; register=medium; domain=high"
  },
  {
    rank: 21,
    candidate_id: "homo_nv_p06",
    headword: "sock",
    round1_role: "reserve_fill_to_round1_minimum",
    known_noun_correct_ja: "靴下",
    known_noun_distractors_ja: ["スカート", "皿", "春"],
    target_context_sentence_en: "He may sock the bag during practice.",
    target_verb_correct_ja: "強打する",
    target_verb_distractors_ja: ["靴下をはく", "味付けする", "改ざんする"],
    gloss_variants_to_test: ["強打する", "殴る"],
    prompt_source: "new_round1_minimum_draft",
    round1_use_priority: "reserve_diagnostic",
    source_audit_decision: "reserve_only",
    risk_summary: "loanword=medium; register=high; phrase-boundness=medium"
  },
  {
    rank: 22,
    candidate_id: "low_nv_x04",
    headword: "season",
    round1_role: "reserve_fill_to_round1_minimum",
    known_noun_correct_ja: "季節",
    known_noun_distractors_ja: ["春", "卵", "港"],
    target_context_sentence_en: "Please season the soup with salt.",
    target_verb_correct_ja: "味付けする",
    target_verb_distractors_ja: ["季節を選ぶ", "水深を測る", "罪を着せる"],
    gloss_variants_to_test: ["味付けする", "調味する"],
    prompt_source: "new_round1_minimum_draft",
    round1_use_priority: "reserve_diagnostic",
    source_audit_decision: "reserve_only",
    risk_summary: "school English=medium; loanword=medium; Japanese transfer=medium; domain=medium; conversion transparency=medium; guessability=medium"
  },
  {
    rank: 23,
    candidate_id: "low_nv_x33",
    headword: "stump",
    round1_role: "reserve_fill_to_round1_minimum",
    known_noun_correct_ja: "切り株",
    known_noun_distractors_ja: ["マグカップ", "ボルト", "光線"],
    target_context_sentence_en: "This problem may stump many students.",
    target_verb_correct_ja: "困らせる",
    target_verb_distractors_ja: ["木を切る", "港に入る", "強くたたく"],
    gloss_variants_to_test: ["困らせる", "答えに詰まらせる"],
    prompt_source: "new_round1_minimum_draft",
    round1_use_priority: "reserve_diagnostic",
    source_audit_decision: "reserve_only",
    risk_summary: "register=medium; phrase-boundness=medium"
  },
  {
    rank: 24,
    candidate_id: "low_nv_x32",
    headword: "egg",
    round1_role: "reserve_fill_to_round1_minimum",
    known_noun_correct_ja: "卵",
    known_noun_distractors_ja: ["春", "切り株", "皿"],
    target_context_sentence_en: "His friends may egg him on to jump.",
    target_verb_correct_ja: "けしかける",
    target_verb_distractors_ja: ["卵を料理する", "港に入る", "音を出す"],
    gloss_variants_to_test: ["けしかける", "そそのかす"],
    prompt_source: "new_round1_minimum_draft",
    round1_use_priority: "reserve_diagnostic",
    source_audit_decision: "reserve_only",
    risk_summary: "register=medium; phrase-boundness=high"
  }
];

const BLOCKS = [
  {
    id: "form_familiarity",
    title: "単語のなじみ",
    description: "今の時点で分かる範囲で答えてください。"
  },
  {
    id: "known_noun_check",
    title: "名詞意味チェック",
    description: "英単語の名詞としての意味を選んでください。"
  },
  {
    id: "target_prior_knowledge",
    title: "文中の動詞意味を事前に知っていたか",
    description: "文を読んで、文中の単語の意味を実験前から知っていた程度を答えてください。"
  },
  {
    id: "target_objective_check",
    title: "文中の動詞意味チェック",
    description: "文中の英単語の意味として最も適切なものを選んでください。"
  },
  {
    id: "meaning_ratings",
    title: "意味間の関連度・推測可能性",
    description: "名詞意味と動詞意味を両方見たうえで評価してください。"
  },
  {
    id: "probe_ratings",
    title: "日本語語の適合度",
    description: "英単語と日本語語の組み合わせが、それぞれの意味にどの程度合うかを評価してください。"
  }
];

const DEFAULT_SET_MODE = "full24";
const LEGACY_STORAGE_KEYS = ["noun_verb_norming_state_v2"];

const app = document.getElementById("app");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

let state = null;

function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed) {
  return function rng() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleWithSeed(items, seedText) {
  const rng = mulberry32(hashString(seedText));
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function candidateSet() {
  return [...CANDIDATES];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function markTarget(sentence, headword) {
  const escaped = escapeHtml(sentence);
  const pattern = new RegExp(`\\b(${headword})\\b`, "i");
  return escaped.replace(pattern, '<span class="target-word">$1</span>');
}

function scale(name, title, low, high) {
  const options = Array.from({ length: 7 }, (_, index) => {
    const value = index + 1;
    return `
      <label class="scale-option">
        <input type="radio" name="${name}" value="${value}" required>
        <span>${value}</span>
      </label>
    `;
  }).join("");
  return `
    <div class="scale" data-scale="${name}">
      <div class="scale-title">${escapeHtml(title)}</div>
      <div class="scale-options">${options}</div>
      <div class="scale-anchors"><span>1 = ${escapeHtml(low)}</span><span>7 = ${escapeHtml(high)}</span></div>
    </div>
  `;
}

function choiceList(name, choices) {
  return `
    <div class="choices">
      ${choices.map((choice) => `
        <label class="choice-option">
          <input type="radio" name="${name}" value="${escapeHtml(choice.value)}" data-correct="${choice.correct ? "yes" : "no"}" required>
          <span>${escapeHtml(choice.label)}</span>
        </label>
      `).join("")}
    </div>
  `;
}

function selectedRadio(name) {
  return document.querySelector(`input[name="${name}"]:checked`);
}

function requiredRadioValue(name) {
  const selected = selectedRadio(name);
  return selected ? selected.value : "";
}

function selectedRadioLabel(name) {
  const selected = selectedRadio(name);
  if (!selected) return "";
  const label = selected.closest("label");
  return label ? label.innerText.trim().replace(/\s+/g, " ") : "";
}

function showError(message) {
  const error = document.getElementById("errorBox");
  if (!error) return;
  error.textContent = message;
  error.style.display = "block";
}

function clearError() {
  const error = document.getElementById("errorBox");
  if (!error) return;
  error.textContent = "";
  error.style.display = "none";
}

function updateProgress() {
  if (!state || state.phase === "welcome") {
    progressText.textContent = "未開始";
    progressBar.style.width = "0%";
    return;
  }
  if (state.phase === "finished") {
    progressText.textContent = "完了";
    progressBar.style.width = "100%";
    return;
  }
  const total = state.totalTrials;
  const done = state.blockIndex * state.itemCount + state.itemIndex;
  const percent = Math.round((done / total) * 100);
  progressText.textContent = `${done + 1} / ${total} (${percent}%)`;
  progressBar.style.width = `${percent}%`;
}

function persistState() {
  // Each survey run starts fresh; do not restore prior participant state.
}

function clearPersistedState() {
  LEGACY_STORAGE_KEYS.forEach((key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      // Storage access can fail in private modes; the survey can still run.
    }
  });
}

function renderWelcome() {
  clearPersistedState();
  state = { phase: "welcome" };
  updateProgress();
  app.innerHTML = `
    <div class="stack">
      <div>
        <h2>英単語の意味に関する調査</h2>
        <p>この調査では、英単語の見慣れ、名詞としての意味、文中で使われている動詞の意味、2つの意味の関連度、日本語語との合いやすさを答えてもらいます。</p>
      </div>
      <div class="notice">
        辞書や翻訳ツールは使わず、その場で分かる範囲で答えてください。正解を競うテストではないので、分からない場合も直感に近い選択でかまいません。
      </div>
      <div class="grid">
        <div>
          <label for="participantId">参加者ID</label>
          <input id="participantId" type="text" autocomplete="off" placeholder="例: P001">
        </div>
        <div>
          <label for="proficiency">英語レベル自己申告</label>
          <select id="proficiency">
            <option value="">選択してください</option>
            <option value="A2">A2</option>
            <option value="A2-B1">A2-B1</option>
            <option value="B1">B1</option>
            <option value="B1_or_higher">B1以上</option>
            <option value="unknown">わからない</option>
          </select>
        </div>
      </div>
      <div class="btn-row">
        <button id="startBtn">開始する</button>
      </div>
      <p class="footer-note">回答は最後にファイルとして保存できます。外部サーバーへの送信は行いません。</p>
      <div id="errorBox" class="error"></div>
    </div>
  `;

  document.getElementById("startBtn").addEventListener("click", startExperiment);
}

function startExperiment() {
  clearError();
  const participantId = document.getElementById("participantId").value.trim();
  const proficiency = document.getElementById("proficiency").value;
  if (!participantId) {
    showError("参加者IDを入力してください。");
    return;
  }
  if (!proficiency) {
    showError("英語レベル自己申告を選択してください。");
    return;
  }

  const setMode = DEFAULT_SET_MODE;
  const seed = `${participantId}-${Date.now()}`;
  const items = candidateSet();
  const blockOrders = {};
  BLOCKS.forEach((block) => {
    blockOrders[block.id] = shuffleWithSeed(items.map((item) => item.candidate_id), `${seed}:${block.id}`);
  });

  state = {
    phase: "running",
    appVersion: APP_VERSION,
    participant: {
      participant_id: participantId,
      proficiency_self_report: proficiency,
      set_mode: setMode
    },
    seed,
    startedAt: new Date().toISOString(),
    finishedAt: "",
    itemCount: items.length,
    totalTrials: items.length * BLOCKS.length,
    blockIndex: 0,
    itemIndex: 0,
    blockOrders,
    responses: []
  };
  persistState();
  renderTrial();
}

function currentBlock() {
  return BLOCKS[state.blockIndex];
}

function currentItem() {
  const block = currentBlock();
  const id = state.blockOrders[block.id][state.itemIndex];
  return CANDIDATES.find((item) => item.candidate_id === id);
}

function randomizedChoices(item, kind) {
  if (kind === "known_noun") {
    return shuffleWithSeed(
      [
        { value: item.known_noun_correct_ja, label: item.known_noun_correct_ja, correct: true },
        ...item.known_noun_distractors_ja.map((label) => ({ value: label, label, correct: false }))
      ],
      `${state.seed}:${kind}:${item.candidate_id}`
    );
  }
  if (kind === "target_verb") {
    return shuffleWithSeed(
      [
        { value: item.target_verb_correct_ja, label: item.target_verb_correct_ja, correct: true },
        ...item.target_verb_distractors_ja.map((label) => ({ value: label, label, correct: false }))
      ],
      `${state.seed}:${kind}:${item.candidate_id}`
    );
  }
  return shuffleWithSeed(
    item.gloss_variants_to_test.map((label) => ({ value: label, label, correct: label === item.target_verb_correct_ja })),
    `${state.seed}:${kind}:${item.candidate_id}`
  );
}

function renderTrial() {
  if (!state || state.phase !== "running") {
    renderWelcome();
    return;
  }
  if (state.blockIndex >= BLOCKS.length) {
    finishExperiment();
    return;
  }

  updateProgress();
  const block = currentBlock();
  const item = currentItem();
  const blockProgress = `${state.blockIndex + 1}/${BLOCKS.length}`;
  const itemProgress = `${state.itemIndex + 1}/${state.itemCount}`;
  state.currentTrialStartedAt = new Date().toISOString();
  state.currentTrialStartMs = performance.now();

  app.innerHTML = `
    <div class="stack">
      <div>
        <p class="meta">セクション ${blockProgress} - 項目 ${itemProgress}</p>
        <h2>${escapeHtml(block.title)}</h2>
        <p>${escapeHtml(block.description)}</p>
      </div>
      <div id="trialBody"></div>
      <div id="errorBox" class="error"></div>
      <div class="btn-row">
        <button id="nextBtn">次へ</button>
      </div>
    </div>
  `;

  const body = document.getElementById("trialBody");
  if (block.id === "form_familiarity") {
    body.innerHTML = renderFormFamiliarity(item);
  } else if (block.id === "known_noun_check") {
    body.innerHTML = renderKnownNounCheck(item);
  } else if (block.id === "target_prior_knowledge") {
    body.innerHTML = renderTargetPrior(item);
  } else if (block.id === "target_objective_check") {
    body.innerHTML = renderTargetObjective(item);
  } else if (block.id === "meaning_ratings") {
    body.innerHTML = renderMeaningRatings(item);
  } else if (block.id === "probe_ratings") {
    body.innerHTML = renderProbeRatings(item);
  }

  document.getElementById("nextBtn").addEventListener("click", submitTrial);
}

function renderFormFamiliarity(item) {
  return `
    <div class="word">${escapeHtml(item.headword)}</div>
    <div class="stack">
      ${scale("written_form_familiarity", "この英単語のつづりを見たとき、あなたにはどの程度なじみがありますか。", "全くなじみがない", "非常になじみがある")}
      ${scale("spoken_form_familiarity", "この英単語を聞いたことがある、または発音を知っていると思いますか。", "全く知らない", "よく知っている")}
      ${scale("known_noun_familiarity", "この英単語の名詞としての意味を、あなたはどの程度知っていますか。", "全く知らない", "よく知っている")}
    </div>
  `;
}

function renderKnownNounCheck(item) {
  return `
    <div class="word">${escapeHtml(item.headword)}</div>
    <p><strong>${escapeHtml(item.headword)}</strong> の名詞の意味として最も適切なものを選んでください。</p>
    ${choiceList("known_noun_choice", randomizedChoices(item, "known_noun"))}
  `;
}

function renderTargetPrior(item) {
  return `
    <div class="sentence">${markTarget(item.target_context_sentence_en, item.headword)}</div>
    <div class="stack">
      ${scale("target_verb_prior_knowledge", `文中の ${item.headword} の動詞の意味を、実験前からどの程度知っていましたか。`, "全く知らなかった", "よく知っていた")}
    </div>
  `;
}

function renderTargetObjective(item) {
  return `
    <div class="sentence">${markTarget(item.target_context_sentence_en, item.headword)}</div>
    <p>文中の <strong>${escapeHtml(item.headword)}</strong> の意味として最も適切なものを選んでください。</p>
    ${choiceList("target_verb_choice", randomizedChoices(item, "target_verb"))}
  `;
}

function renderMeaningRatings(item) {
  return `
    <div class="meaning-pair">
      <div class="meaning-box">
        <div class="meaning-label">名詞としての意味</div>
        <div class="meaning-value">${escapeHtml(item.known_noun_correct_ja)}</div>
      </div>
      <div class="meaning-box">
        <div class="meaning-label">文中の動詞としての意味</div>
        <div class="meaning-value">${escapeHtml(item.target_verb_correct_ja)}</div>
      </div>
    </div>
    <div class="sentence">${markTarget(item.target_context_sentence_en, item.headword)}</div>
    <div class="stack">
      ${scale("relatedness", "この名詞の意味と動詞の意味は、どの程度関連していると感じますか。", "全く関連していない", "非常に関連している")}
      ${scale("guessability", "名詞の意味だけを知っていたとして、この動詞の意味をどの程度推測できそうですか。", "全く推測できない", "非常に推測できる")}
      ${scale("overlap_confusability", "この名詞の意味と動詞の意味は、どの程度混同しやすいですか。", "全く混同しない", "非常に混同しやすい")}
      ${scale("gloss_clarity", "動詞の日本語訳は分かりやすいですか。", "全く分かりにくい", "非常に分かりやすい")}
      <div class="scale">
        <div class="scale-title">動詞の日本語訳として最も分かりやすいものを選んでください。</div>
        ${choiceList("gloss_variant_preference", randomizedChoices(item, "gloss_variant"))}
      </div>
      <div>
        <label for="itemNote">任意メモ</label>
        <textarea id="itemNote" placeholder="分かりにくかった点があれば記入してください。"></textarea>
      </div>
    </div>
  `;
}

function renderProbeRatings(item) {
  const knownProbe = item.known_noun_correct_ja;
  const targetProbe = item.target_verb_correct_ja;
  const alternativeTargetProbes = item.gloss_variants_to_test
    .filter((probe) => probe !== targetProbe);
  const unrelatedProbeChoices = randomizedChoices(
    {
      ...item,
      gloss_variants_to_test: item.known_noun_distractors_ja
    },
    "probe_unrelated_candidate"
  );
  const alternativeHtml = alternativeTargetProbes.length > 0
    ? `<p class="meta">別候補: ${alternativeTargetProbes.map(escapeHtml).join(" / ")}</p>`
    : "";

  return `
    <div class="meaning-pair">
      <div class="meaning-box">
        <div class="meaning-label">名詞としての意味</div>
        <div class="meaning-value">${escapeHtml(item.known_noun_correct_ja)}</div>
      </div>
      <div class="meaning-box">
        <div class="meaning-label">文中の動詞としての意味</div>
        <div class="meaning-value">${escapeHtml(item.target_verb_correct_ja)}</div>
      </div>
    </div>
    <div class="sentence">${markTarget(item.target_context_sentence_en, item.headword)}</div>
    <div class="meaning-pair">
      <div class="meaning-box">
        <div class="meaning-label">日本語語A</div>
        <div class="meaning-value">${escapeHtml(knownProbe)}</div>
      </div>
      <div class="meaning-box">
        <div class="meaning-label">日本語語B</div>
        <div class="meaning-value">${escapeHtml(targetProbe)}</div>
        ${alternativeHtml}
      </div>
    </div>
    <div class="stack">
      ${scale("known_probe_fit_to_noun", `日本語語A「${knownProbe}」は、この英単語の名詞の意味にどの程度合っていますか。`, "全く合っていない", "非常によく合っている")}
      ${scale("known_probe_leaks_to_target", `日本語語A「${knownProbe}」は、文中の動詞の意味にもどの程度関係してしまいますか。`, "全く関係しない", "非常に関係する")}
      ${scale("target_probe_fit_to_verb", `日本語語B「${targetProbe}」は、文中の動詞の意味にどの程度合っていますか。`, "全く合っていない", "非常によく合っている")}
      ${scale("target_probe_leaks_to_noun", `日本語語B「${targetProbe}」は、この英単語の名詞の意味にもどの程度関係してしまいますか。`, "全く関係しない", "非常に関係する")}
      ${scale("target_probe_naturalness", `日本語語B「${targetProbe}」は、日本語としてどの程度自然ですか。`, "非常に不自然", "非常に自然")}
      <div class="scale">
        <div class="scale-title">「どちらの意味にも関係しにくい日本語語」として、最もよい候補を1つ選んでください。</div>
        ${choiceList("best_unrelated_probe_candidate", unrelatedProbeChoices)}
      </div>
      ${scale("selected_unrelated_probe_separation", "選んだ日本語語は、名詞の意味にも文中の動詞の意味にも関係しにくいと思いますか。", "かなり関係してしまう", "ほとんど関係しない")}
      <div>
        <label for="probeNote">任意メモ</label>
        <textarea id="probeNote" placeholder="日本語語が分かりにくい、別の語を思いつく、などがあれば記入してください。"></textarea>
      </div>
    </div>
  `;
}

function submitTrial() {
  clearError();
  const block = currentBlock();
  const item = currentItem();
  const common = {
    app_version: state.appVersion,
    participant_id: state.participant.participant_id,
    proficiency_self_report: state.participant.proficiency_self_report,
    set_mode: state.participant.set_mode,
    seed: state.seed,
    block_id: block.id,
    block_index: state.blockIndex + 1,
    item_position_in_block: state.itemIndex + 1,
    candidate_id: item.candidate_id,
    rank: item.rank,
    headword: item.headword,
    round1_role: item.round1_role,
    round1_use_priority: item.round1_use_priority,
    prompt_source: item.prompt_source,
    source_audit_decision: item.source_audit_decision,
    response_started_at: state.currentTrialStartedAt,
    response_submitted_at: new Date().toISOString(),
    response_time_ms: Math.round(performance.now() - state.currentTrialStartMs)
  };

  let response = null;
  if (block.id === "form_familiarity") {
    const fields = ["written_form_familiarity", "spoken_form_familiarity", "known_noun_familiarity"];
    if (fields.some((field) => !requiredRadioValue(field))) {
      showError("すべての尺度に回答してください。");
      return;
    }
    response = Object.fromEntries(fields.map((field) => [field, requiredRadioValue(field)]));
  } else if (block.id === "known_noun_check") {
    const selected = selectedRadio("known_noun_choice");
    if (!selected) {
      showError("選択肢を1つ選んでください。");
      return;
    }
    response = {
      known_noun_choice: selected.value,
      known_noun_choice_label: selectedRadioLabel("known_noun_choice"),
      known_noun_correct: selected.dataset.correct === "yes" ? "1" : "0",
      known_noun_correct_answer: item.known_noun_correct_ja
    };
  } else if (block.id === "target_prior_knowledge") {
    if (!requiredRadioValue("target_verb_prior_knowledge")) {
      showError("尺度に回答してください。");
      return;
    }
    response = {
      target_context_sentence_en: item.target_context_sentence_en,
      target_verb_prior_knowledge: requiredRadioValue("target_verb_prior_knowledge")
    };
  } else if (block.id === "target_objective_check") {
    const selected = selectedRadio("target_verb_choice");
    if (!selected) {
      showError("選択肢を1つ選んでください。");
      return;
    }
    response = {
      target_context_sentence_en: item.target_context_sentence_en,
      target_verb_choice: selected.value,
      target_verb_choice_label: selectedRadioLabel("target_verb_choice"),
      target_verb_correct: selected.dataset.correct === "yes" ? "1" : "0",
      target_verb_correct_answer: item.target_verb_correct_ja
    };
  } else if (block.id === "meaning_ratings") {
    const fields = ["relatedness", "guessability", "overlap_confusability", "gloss_clarity", "gloss_variant_preference"];
    if (fields.some((field) => !requiredRadioValue(field))) {
      showError("すべての必須項目に回答してください。");
      return;
    }
    response = {
      known_noun_correct_answer: item.known_noun_correct_ja,
      target_verb_correct_answer: item.target_verb_correct_ja,
      relatedness: requiredRadioValue("relatedness"),
      guessability: requiredRadioValue("guessability"),
      overlap_confusability: requiredRadioValue("overlap_confusability"),
      gloss_clarity: requiredRadioValue("gloss_clarity"),
      gloss_variant_preference: requiredRadioValue("gloss_variant_preference"),
      optional_note: document.getElementById("itemNote").value.trim()
    };
  } else if (block.id === "probe_ratings") {
    const fields = [
      "known_probe_fit_to_noun",
      "known_probe_leaks_to_target",
      "target_probe_fit_to_verb",
      "target_probe_leaks_to_noun",
      "target_probe_naturalness",
      "best_unrelated_probe_candidate",
      "selected_unrelated_probe_separation"
    ];
    if (fields.some((field) => !requiredRadioValue(field))) {
      showError("すべての必須項目に回答してください。");
      return;
    }
    response = {
      known_noun_correct_answer: item.known_noun_correct_ja,
      target_verb_correct_answer: item.target_verb_correct_ja,
      known_probe_candidate: item.known_noun_correct_ja,
      target_probe_candidate: item.target_verb_correct_ja,
      target_probe_alternatives: item.gloss_variants_to_test.filter((probe) => probe !== item.target_verb_correct_ja).join(" / "),
      known_probe_fit_to_noun: requiredRadioValue("known_probe_fit_to_noun"),
      known_probe_leaks_to_target: requiredRadioValue("known_probe_leaks_to_target"),
      target_probe_fit_to_verb: requiredRadioValue("target_probe_fit_to_verb"),
      target_probe_leaks_to_noun: requiredRadioValue("target_probe_leaks_to_noun"),
      target_probe_naturalness: requiredRadioValue("target_probe_naturalness"),
      best_unrelated_probe_candidate: requiredRadioValue("best_unrelated_probe_candidate"),
      best_unrelated_probe_candidate_label: selectedRadioLabel("best_unrelated_probe_candidate"),
      selected_unrelated_probe_separation: requiredRadioValue("selected_unrelated_probe_separation"),
      probe_optional_note: document.getElementById("probeNote").value.trim()
    };
  }

  state.responses.push({ ...common, ...response });
  state.itemIndex += 1;
  if (state.itemIndex >= state.itemCount) {
    state.itemIndex = 0;
    state.blockIndex += 1;
  }
  persistState();
  renderTrial();
}

function finishExperiment() {
  state.phase = "finished";
  state.finishedAt = new Date().toISOString();
  persistState();
  updateProgress();
  app.innerHTML = `
    <div class="stack">
      <div>
        <h2>完了</h2>
        <p>すべての候補への回答が完了しました。必要な形式のファイルを保存してください。</p>
      </div>
      <div class="notice">
        回答数: ${state.responses.length} / ${state.totalTrials}<br>
        回答完了時刻: ${escapeHtml(state.finishedAt)}
      </div>
      <div class="btn-row">
        <button id="downloadLongCsv">長形式CSV</button>
        <button id="downloadWideCsv">横形式CSV</button>
        <button id="downloadJson">JSON</button>
        <button class="secondary" id="clearAndRestart">最初へ戻る</button>
      </div>
      <p class="footer-note">長形式CSVは1行=1画面回答、横形式CSVは1行=1候補です。</p>
    </div>
  `;
  document.getElementById("downloadLongCsv").addEventListener("click", () => downloadText(longCsv(), fileName("long.csv"), "text/csv"));
  document.getElementById("downloadWideCsv").addEventListener("click", () => downloadText(wideCsv(), fileName("wide.csv"), "text/csv"));
  document.getElementById("downloadJson").addEventListener("click", () => downloadText(JSON.stringify(state, null, 2), fileName("data.json"), "application/json"));
  document.getElementById("clearAndRestart").addEventListener("click", () => {
    clearPersistedState();
    renderWelcome();
  });
}

function fileName(suffix) {
  const id = state.participant.participant_id.replace(/[^A-Za-z0-9_-]/g, "");
  const mode = state.participant.set_mode;
  return `noun_verb_norming_${mode}_${id}_${suffix}`;
}

function csvEscape(value) {
  if (value === undefined || value === null) return "";
  const text = String(value);
  if (/[",\n\r]/.test(text)) return `"${text.replaceAll('"', '""')}"`;
  return text;
}

function rowsToCsv(rows) {
  const fields = Array.from(rows.reduce((set, row) => {
    Object.keys(row).forEach((key) => set.add(key));
    return set;
  }, new Set()));
  const lines = [fields.join(",")];
  rows.forEach((row) => {
    lines.push(fields.map((field) => csvEscape(row[field])).join(","));
  });
  return `${lines.join("\n")}\n`;
}

function longCsv() {
  return rowsToCsv(state.responses);
}

function wideCsv() {
  const byItem = new Map();
  state.responses.forEach((row) => {
    if (!byItem.has(row.candidate_id)) {
      byItem.set(row.candidate_id, {
        app_version: row.app_version,
        participant_id: row.participant_id,
        proficiency_self_report: row.proficiency_self_report,
        set_mode: row.set_mode,
        seed: row.seed,
        candidate_id: row.candidate_id,
        rank: row.rank,
        headword: row.headword,
        round1_role: row.round1_role,
        round1_use_priority: row.round1_use_priority,
        prompt_source: row.prompt_source,
        source_audit_decision: row.source_audit_decision
      });
    }
    const target = byItem.get(row.candidate_id);
    Object.entries(row).forEach(([key, value]) => {
      if (key.includes("response_") || key.endsWith("_at") || key === "block_id") return;
      if (!(key in target)) target[key] = value;
      else target[`${row.block_id}_${key}`] = value;
    });
  });
  return rowsToCsv(Array.from(byItem.values()).sort((a, b) => Number(a.rank) - Number(b.rank)));
}

function downloadText(text, name, type) {
  const blob = new Blob([text], { type: `${type};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

window.addEventListener("beforeunload", (event) => {
  if (state && state.phase === "running") {
    event.preventDefault();
    event.returnValue = "";
  }
});

renderWelcome();
