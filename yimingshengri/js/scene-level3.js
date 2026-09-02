// Scene: Level 3 - Code Matching

var level3Matches = {};
var level3Selected = null;
var level3CorrectPairs = {
  'code1': 'B',
  'code2': 'D',
  'code3': 'C',
  'code4': 'A'
};

function initLevel3Scene() {
  level3Matches = {};
  level3Selected = null;
  
  var hint = document.getElementById('level3-hint');
  var result = document.getElementById('level3-result');
  var submit = document.getElementById('level3-submit');
  
  hint.textContent = '';
  result.style.display = 'none';
  submit.style.display = 'none';
  
  // Reset items
  var items = document.querySelectorAll('#matching-area .match-item');
  items.forEach(function(item) {
    item.classList.remove('selected', 'matched', 'wrong');
    item.onclick = function() {
      handleLevel3Click(item);
    };
  });
  
  // Clear SVG connections
  var svg = document.getElementById('connections-svg');
  svg.innerHTML = '';
  
  submit.onclick = checkLevel3Answers;
}

function handleLevel3Click(item) {
  var id = item.getAttribute('data-id');
  var isCode = id.startsWith('code');
  
  if (item.classList.contains('matched')) {
    // Unmatch
    unmatchLevel3(id, isCode);
    return;
  }
  
  if (level3Selected === null) {
    // First selection - must be a code
    if (!isCode) {
      showToast('先选左边的代码', 1500);
      return;
    }
    level3Selected = id;
    item.classList.add('selected');
  } else {
    // Second selection - must be a meaning
    if (isCode) {
      // Switch selection
      document.querySelector('[data-id="' + level3Selected + '"]').classList.remove('selected');
      level3Selected = id;
      item.classList.add('selected');
      return;
    }
    
    // Make match
    makeLevel3Match(level3Selected, id);
    document.querySelector('[data-id="' + level3Selected + '"]').classList.remove('selected');
    level3Selected = null;
  }
}

function makeLevel3Match(codeId, meaningId) {
  // Remove previous match for this code
  if (level3Matches[codeId]) {
    var prevMeaning = level3Matches[codeId];
    document.querySelector('[data-id="' + prevMeaning + '"]').classList.remove('matched');
    document.querySelector('[data-id="' + codeId + '"]').classList.remove('matched');
  }
  
  // Remove previous match for this meaning (if matched to another code)
  for (var key in level3Matches) {
    if (level3Matches[key] === meaningId) {
      delete level3Matches[key];
      document.querySelector('[data-id="' + key + '"]').classList.remove('matched');
    }
  }
  
  level3Matches[codeId] = meaningId;
  document.querySelector('[data-id="' + codeId + '"]').classList.add('matched');
  document.querySelector('[data-id="' + meaningId + '"]').classList.add('matched');
  
  updateLevel3Lines();
  
  // Show submit if all matched
  if (Object.keys(level3Matches).length === 4) {
    document.getElementById('level3-submit').style.display = 'inline-flex';
  }
}

function unmatchLevel3(id, isCode) {
  if (isCode) {
    var meaningId = level3Matches[id];
    if (meaningId) {
      document.querySelector('[data-id="' + meaningId + '"]').classList.remove('matched');
      delete level3Matches[id];
    }
    document.querySelector('[data-id="' + id + '"]').classList.remove('matched');
  } else {
    // Find the code matched to this meaning
    for (var key in level3Matches) {
      if (level3Matches[key] === id) {
        document.querySelector('[data-id="' + key + '"]').classList.remove('matched');
        delete level3Matches[key];
        break;
      }
    }
    document.querySelector('[data-id="' + id + '"]').classList.remove('matched');
  }
  
  updateLevel3Lines();
  
  if (Object.keys(level3Matches).length < 4) {
    document.getElementById('level3-submit').style.display = 'none';
  }
}

function updateLevel3Lines() {
  var svg = document.getElementById('connections-svg');
  svg.innerHTML = '';
  
  // Only draw lines on desktop
  if (window.innerWidth < 600) return;
  
  var matchingArea = document.getElementById('matching-area');
  var areaRect = matchingArea.getBoundingClientRect();
  
  for (var codeId in level3Matches) {
    var meaningId = level3Matches[codeId];
    var codeEl = document.querySelector('[data-id="' + codeId + '"]');
    var meaningEl = document.querySelector('[data-id="' + meaningId + '"]');
    
    var codeRect = codeEl.getBoundingClientRect();
    var meaningRect = meaningEl.getBoundingClientRect();
    
    var x1 = codeRect.right - areaRect.left;
    var y1 = codeRect.top + codeRect.height / 2 - areaRect.top;
    var x2 = meaningRect.left - areaRect.left;
    var y2 = meaningRect.top + meaningRect.height / 2 - areaRect.top;
    
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    var midX = (x1 + x2) / 2;
    path.setAttribute('d', 'M' + x1 + ',' + y1 + ' Q' + midX + ',' + y1 + ' ' + midX + ',' + (y1 + y2) / 2 + ' T' + x2 + ',' + y2);
    path.setAttribute('class', 'connection-line');
    path.setAttribute('data-code', codeId);
    svg.appendChild(path);
  }
}

function checkLevel3Answers() {
  var allCorrect = true;
  var hint = document.getElementById('level3-hint');
  var result = document.getElementById('level3-result');
  
  // Check each match
  for (var codeId in level3Matches) {
    var meaningId = level3Matches[codeId];
    var isCorrect = level3CorrectPairs[codeId] === meaningId;
    
    var codeEl = document.querySelector('[data-id="' + codeId + '"]');
    var meaningEl = document.querySelector('[data-id="' + meaningId + '"]');
    var line = document.querySelector('[data-code="' + codeId + '"]');
    
    if (!isCorrect) {
      allCorrect = false;
      codeEl.classList.add('wrong');
      meaningEl.classList.add('wrong');
      if (line) line.classList.add('wrong');
    }
  }
  
  if (allCorrect) {
    // All correct!
    result.innerHTML = 
      '<p style="font-size:24px;margin-bottom:16px;">💻 全部正确！</p>' +
      '<p>注意第三行：</p>' +
      '<p style="font-family:var(--font-mono);color:var(--cyan-glow);">while (想你) { 打电话 }</p>' +
      '<p>意思是"只要想你，就打电话"。</p>' +
      '<p>这是你哥的日常代码，</p>' +
      '<p>已经在后台跑了9年了 🙃</p>' +
      '<p class="medal-earned">解锁勋章：💻 代码破译师 · CODE BREAKER</p>';
    result.style.display = 'block';
    document.getElementById('level3-submit').style.display = 'none';
    
    saveMedal(3);
    activateMedal(3);
    updateProgress(60, '3/5');
    
    setTimeout(function() {
      showFloatingComment('老哥：好小子，真会');
    }, 500);
    
    setTimeout(function() {
      transitionToNextLevel('level4');
    }, 3000);
  } else {
    incrementWrongCount();
    shakeScreen();
    
    hint.innerHTML = '⚠ 有几条连错了<br><br>红色是错的，蓝色是对的。<br>💡 提示：<br>· print = 说出来<br>· if = 如果<br>· while = 只要……就一直<br>· = 是等于<br><br>改改红线。';
    
    // Allow retry
    setTimeout(function() {
      var wrongItems = document.querySelectorAll('.match-item.wrong');
      wrongItems.forEach(function(item) {
        item.classList.remove('wrong', 'matched');
      });
      var wrongLines = document.querySelectorAll('.connection-line.wrong');
      wrongLines.forEach(function(line) {
        line.remove();
      });
      
      // Clear wrong matches
      for (var codeId in level3Matches) {
        if (level3CorrectPairs[codeId] !== level3Matches[codeId]) {
          delete level3Matches[codeId];
        }
      }
      
      if (Object.keys(level3Matches).length < 4) {
        document.getElementById('level3-submit').style.display = 'none';
      }
    }, 1500);
  }
}
