// Scene: Mission Briefing

var avatarClickCount = 0;
var avatarClickTimer = null;
var signalPressTimer = null;
var egg1Found = false;
var egg2Found = false;

function initBriefingScene() {
  // Show status bar
  document.getElementById('status-bar').classList.add('visible');
  
  var briefingText = document.getElementById('briefing-text');
  var btnStart = document.getElementById('btn-start-mission');
  var loadingText = document.getElementById('briefing-loading');
  
  // Reset
  briefingText.innerHTML = '';
  btnStart.style.display = 'none';
  loadingText.style.display = 'none';
  avatarClickCount = 0;
  egg1Found = getState().eggsFound.indexOf('egg1') !== -1;
  egg2Found = getState().eggsFound.indexOf('egg2') !== -1;
  
  // Setup avatar easter egg
  setupAvatarEasterEgg();
  
  // Setup signal easter egg
  setupSignalEasterEgg();
  
  // Start briefing text
  setTimeout(startBriefingText, 500);
}

function startBriefingText() {
  var briefingText = document.getElementById('briefing-text');
  var btnStart = document.getElementById('btn-start-mission');
  
  var groups = [
    { lines: ['乙鸣。'], delay: 800 },
    { lines: ['你哥。', '人在西安，离你约1000公里。'], delay: 1200 },
    { lines: ['今天你9岁。', '我没赶回去。'], delay: 1200 },
    { lines: ['但我搞了个东西给你——'], delay: 1000 },
    { lines: ['一共5关。', '不算简单。', '敢不敢来？'], delay: 1200 },
    { lines: ['（我赌你全能过。）'], delay: 800 }
  ];
  
  var groupIndex = 0;
  
  function showNextGroup() {
    if (groupIndex >= groups.length) {
      // Show start button
      setTimeout(function() {
        btnStart.style.display = 'inline-flex';
        btnStart.style.animation = 'fade-in 0.5s ease';
      }, 500);
      return;
    }
    
    var group = groups[groupIndex];
    var groupEl = document.createElement('div');
    groupEl.style.margin = '16px 0';
    groupEl.style.animation = 'fade-in 0.5s ease';
    
    group.lines.forEach(function(line) {
      var p = document.createElement('p');
      p.textContent = line;
      groupEl.appendChild(p);
    });
    
    briefingText.appendChild(groupEl);
    groupIndex++;
    
    setTimeout(showNextGroup, group.delay);
  }
  
  showNextGroup();
  
  // Start button handler
  btnStart.onclick = function() {
    startWormholeTransition();
  };
}

function startWormholeTransition() {
  var btnStart = document.getElementById('btn-start-mission');
  var loadingText = document.getElementById('briefing-loading');
  
  btnStart.style.display = 'none';
  loadingText.style.display = 'block';
  
  var loadingLines = [
    '>> BREACHING FIREWALL 01...',
    '>> DECRYPTING...',
    '>> LOADING ASSETS...',
    '>> READY.'
  ];
  
  var lineIndex = 0;
  
  function showNextLine() {
    if (lineIndex >= loadingLines.length) {
      // Show progress bar and go to level 1
      setTimeout(function() {
        document.getElementById('progress-bar').classList.add('visible');
        saveProgress('level1');
        startScene('level1');
      }, 500);
      return;
    }
    
    loadingText.textContent = loadingLines[lineIndex];
    lineIndex++;
    setTimeout(showNextLine, 300);
  }
  
  // Wormhole effect
  triggerWormholeTransition(1500, function() {
    showNextLine();
  });
}

function setupAvatarEasterEgg() {
  var avatar = document.getElementById('avatar-wrapper');
  
  avatar.onclick = function() {
    if (egg1Found) return;
    
    avatarClickCount++;
    
    if (avatarClickTimer) clearTimeout(avatarClickTimer);
    
    avatarClickTimer = setTimeout(function() {
      avatarClickCount = 0;
    }, 2000);
    
    if (avatarClickCount >= 5) {
      egg1Found = true;
      saveEasterEgg('egg1');
      showEasterEggCard({
        icon: '🤫',
        title: '你发现了隐藏通讯频道！',
        content: '老哥的秘密留言：\n\n说实话，你比我9岁的时候强。\n但这话你别告诉咱妈。\n\n—— 已阅即焚 💨',
        duration: 4000
      });
      avatarClickCount = 0;
    }
  };
}

function setupSignalEasterEgg() {
  var signal = document.getElementById('signal-strength');
  
  signal.addEventListener('touchstart', function() {
    if (egg2Found) return;
    signalPressTimer = setTimeout(function() {
      egg2Found = true;
      saveEasterEgg('egg2');
      showToast('📡 信号详情：西安交大·某宿舍楼·一个熬夜的哥哥·在给你搞事情', 3000);
    }, 3000);
  });
  
  signal.addEventListener('touchend', function() {
    if (signalPressTimer) clearTimeout(signalPressTimer);
  });
  
  signal.addEventListener('mousedown', function() {
    if (egg2Found) return;
    signalPressTimer = setTimeout(function() {
      egg2Found = true;
      saveEasterEgg('egg2');
      showToast('📡 信号详情：西安交大·某宿舍楼·一个熬夜的哥哥·在给你搞事情', 3000);
    }, 3000);
  });
  
  signal.addEventListener('mouseup', function() {
    if (signalPressTimer) clearTimeout(signalPressTimer);
  });
}
