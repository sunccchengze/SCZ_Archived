// Main Entry Point

var SCENES = [
  'password', 'dna', 'briefing',
  'level1', 'level2', 'minigame',
  'level3', 'level4', 'level5',
  'merge', 'hidden', 'certificate',
  'cake', 'fireworks', 'final', 'wish'
];

var sceneInitMap = {
  'password': initPasswordScene,
  'dna': initDnaScene,
  'briefing': initBriefingScene,
  'level1': initLevel1Scene,
  'level2': initLevel2Scene,
  'minigame': initMinigameScene,
  'level3': initLevel3Scene,
  'level4': initLevel4Scene,
  'level5': initLevel5Scene,
  'merge': initMergeScene,
  'hidden': initHiddenScene,
  'certificate': initCertificateScene,
  'cake': initCakeScene,
  'fireworks': initFireworksScene,
  'final': initFinalScene,
  'wish': initWishScene
};

function startScene(sceneId) {
  // Hide current active scene
  var currentActive = document.querySelector('.scene.scene-active');
  if (currentActive) {
    currentActive.classList.remove('scene-active');
  }
  
  // Show new scene
  var newScene = document.getElementById('scene-' + sceneId);
  if (newScene) {
    newScene.classList.add('scene-active');
  }
  
  // Call scene init function
  var initFn = sceneInitMap[sceneId];
  if (initFn) {
    initFn();
  }
  
  // Update UI based on scene
  updateUIForScene(sceneId);
}

function updateUIForScene(sceneId) {
  var statusBar = document.getElementById('status-bar');
  var progressBar = document.getElementById('progress-bar');
  
  // Scenes that should show status bar
  var statusBarScenes = ['briefing', 'level1', 'level2', 'minigame', 'level3', 'level4', 'level5'];
  
  // Scenes that should show progress bar
  var progressBarScenes = ['level1', 'level2', 'minigame', 'level3', 'level4', 'level5'];
  
  if (statusBarScenes.indexOf(sceneId) !== -1) {
    statusBar.classList.add('visible');
  } else {
    statusBar.classList.remove('visible');
  }
  
  if (progressBarScenes.indexOf(sceneId) !== -1) {
    progressBar.classList.add('visible');
  } else {
    progressBar.classList.remove('visible');
  }
}

function activateMedal(num) {
  var medal = document.querySelector('.medal[data-medal="' + num + '"]');
  if (medal) {
    medal.classList.remove('inactive');
    medal.classList.add('active');
  }
}

function updateProgress(percent, label) {
  var fill = document.getElementById('progress-fill');
  var labelEl = document.getElementById('progress-label');
  
  fill.style.width = percent + '%';
  labelEl.textContent = 'LV ' + label;
}

function transitionToNextLevel(nextSceneId) {
  var loadingText = document.createElement('div');
  loadingText.className = 'loading-text font-mono';
  loadingText.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);z-index:100;text-align:center;';
  document.body.appendChild(loadingText);
  
  var sceneIndex = SCENES.indexOf(nextSceneId);
  var levelNum = sceneIndex >= 3 && sceneIndex <= 5 ? sceneIndex - 2 : sceneIndex - 2;
  
  var lines = [
    '>> ENTERING LAYER ' + String(levelNum).padStart(2, '0') + '...',
    '>> SYNCING DATA...',
    '>> READY.'
  ];
  
  var lineIndex = 0;
  
  function showLine() {
    if (lineIndex >= lines.length) {
      setTimeout(function() {
        loadingText.remove();
        saveProgress(nextSceneId);
        startScene(nextSceneId);
      }, 500);
      return;
    }
    
    loadingText.textContent = lines[lineIndex];
    lineIndex++;
    setTimeout(showLine, 400);
  }
  
  showLine();
}

function showResumeDialog(sceneId) {
  var overlay = document.getElementById('resume-overlay');
  var detail = document.getElementById('resume-detail');
  
  detail.textContent = 'LAST · ' + getSceneDisplayName(sceneId);
  overlay.classList.add('visible');
  
  document.getElementById('btn-resume').onclick = function() {
    overlay.classList.remove('visible');
    
    // Restore medals
    var state = getState();
    state.medalsEarned.forEach(function(num) {
      activateMedal(num);
    });
    
    // Calculate progress
    var sceneIndex = SCENES.indexOf(sceneId);
    var progressScenes = ['level1', 'level2', 'minigame', 'level3', 'level4', 'level5'];
    var progressIndex = progressScenes.indexOf(sceneId);
    if (progressIndex >= 0) {
      var percent = progressIndex * 20;
      updateProgress(percent, (progressIndex + 1) + '/5');
    }
    
    startScene(sceneId);
  };
  
  document.getElementById('btn-restart').onclick = function() {
    clearAllData();
    overlay.classList.remove('visible');
    startScene('password');
  };
}

function init() {
  // Initialize canvases
  initCanvasBg();
  initCanvasFx();
  
  // Check for existing progress
  if (hasProgress()) {
    var state = getState();
    showResumeDialog(state.currentScene);
  } else {
    startScene('password');
  }
}

// Start when DOM is ready
document.addEventListener('DOMContentLoaded', init);
