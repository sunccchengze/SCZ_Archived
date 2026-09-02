// State Management (localStorage)

var STORAGE_KEY = 'starMission_yiming';

var defaultState = {
  currentScene: null,
  startTime: null,
  endTime: null,
  wrongCount: 0,
  gameScore: 0,
  medalsEarned: [],
  hiddenCompleted: false,
  hiddenSkipped: false,
  eggsFound: [],
  wish: null,
  wishSent: false
};

function getState() {
  try {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Error reading state:', e);
  }
  return Object.assign({}, defaultState);
}

function setState(updates) {
  var current = getState();
  var newState = Object.assign({}, current, updates);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
  } catch (e) {
    console.error('Error saving state:', e);
  }
  return newState;
}

function saveProgress(sceneId) {
  setState({ currentScene: sceneId });
}

function saveMedal(num) {
  var state = getState();
  if (state.medalsEarned.indexOf(num) === -1) {
    var medals = state.medalsEarned.slice();
    medals.push(num);
    setState({ medalsEarned: medals });
  }
}

function incrementWrongCount() {
  var state = getState();
  setState({ wrongCount: state.wrongCount + 1 });
}

function addGameScore(points) {
  var state = getState();
  setState({ gameScore: state.gameScore + points });
}

function saveEasterEgg(eggId) {
  var state = getState();
  if (state.eggsFound.indexOf(eggId) === -1) {
    var eggs = state.eggsFound.slice();
    eggs.push(eggId);
    setState({ eggsFound: eggs });
  }
}

function clearAllData() {
  localStorage.removeItem(STORAGE_KEY);
}

function hasProgress() {
  return getState().currentScene !== null;
}

// Scene name mapping for resume dialog
var sceneNameMap = {
  'password': 'PASSWORD · 密码验证',
  'dna': 'DNA · 身份扫描',
  'briefing': 'BRIEFING · 任务简报',
  'level1': 'LEVEL 1 · 星图解密',
  'level2': 'LEVEL 2 · 宇宙知识',
  'minigame': 'MINIGAME · 能量收集',
  'level3': 'LEVEL 3 · 代码连线',
  'level4': 'LEVEL 4 · 脑筋急转弯',
  'level5': 'LEVEL 5 · 终极挑战',
  'merge': 'MERGE · 勋章合并',
  'hidden': 'HIDDEN · 隐藏关卡',
  'certificate': 'CERTIFICATE · 证书颁发',
  'cake': 'CAKE · 生日蛋糕',
  'fireworks': 'FIREWORKS · 烟花',
  'final': 'FINAL · 最终通讯',
  'wish': 'WISH · 愿望兑换'
};

function getSceneDisplayName(sceneId) {
  return sceneNameMap[sceneId] || sceneId;
}
