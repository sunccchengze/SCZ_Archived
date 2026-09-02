// Scene: Level 4 - Logic Trap

var level4Answered = false;

function initLevel4Scene() {
  level4Answered = false;
  
  var options = document.getElementById('level4-options');
  var hint = document.getElementById('level4-hint');
  var result = document.getElementById('level4-result');
  
  hint.textContent = '';
  result.style.display = 'none';
  
  var btns = options.querySelectorAll('.option-btn');
  btns.forEach(function(btn) {
    btn.classList.remove('selected', 'correct', 'wrong');
    btn.disabled = false;
    btn.onclick = function() {
      if (level4Answered) return;
      selectLevel4Option(btn);
    };
  });
}

function selectLevel4Option(btn) {
  if (level4Answered) return;
  level4Answered = true;
  
  var value = btn.getAttribute('data-value');
  var hint = document.getElementById('level4-hint');
  var result = document.getElementById('level4-result');
  var options = document.getElementById('level4-options');
  
  var btns = options.querySelectorAll('.option-btn');
  btns.forEach(function(b) { b.disabled = true; });
  
  if (value === 'B') {
    // Correct
    btn.classList.add('correct');
    
    setTimeout(function() {
      result.innerHTML = 
        '<p style="font-size:24px;margin-bottom:16px;">🧠 漂亮！</p>' +
        '<p>1楼到10楼是9段楼梯，不是10段。</p>' +
        '<p>很多人会掉进"10层=10段"的坑里。</p>' +
        '<p>你没掉。不错。</p>' +
        '<p class="medal-earned">解锁勋章：🧠 逻辑鬼才 · LOGIC GENIUS</p>';
      result.style.display = 'block';
      
      saveMedal(4);
      activateMedal(4);
      updateProgress(80, '4/5');
      
      setTimeout(function() {
        showFloatingComment('老哥：行，你比我想的聪明');
      }, 500);
      
      setTimeout(function() {
        transitionToLevel5();
      }, 2500);
    }, 500);
  } else {
    // Wrong
    btn.classList.add('wrong');
    incrementWrongCount();
    shakeScreen();
    
    hint.innerHTML = '⚠ 掉坑了<br><br>💡 提示：<br>1楼到2楼 = 第1段<br>2楼到3楼 = 第2段<br>……<br>那1楼到10楼一共几段？<br>不是10段哦。';
    
    setTimeout(function() {
      level4Answered = false;
      btn.classList.remove('wrong');
      btns.forEach(function(b) { b.disabled = false; });
    }, 1500);
  }
}

function transitionToLevel5() {
  // Special transition for final boss
  var loadingText = document.createElement('div');
  loadingText.className = 'loading-text font-mono';
  loadingText.style.cssText = 'position:fixed;bottom:100px;left:50%;transform:translateX(-50%);z-index:100;text-align:center;';
  document.body.appendChild(loadingText);
  
  var lines = [
    '>> ⚠ FINAL FIREWALL',
    '>> DIFFICULTY · MAX',
    '>> THIS IS THE LAST ONE',
    '>> PROVE YOURSELF',
    '>> LOADING...'
  ];
  
  var lineIndex = 0;
  
  // Purple glow effect
  flashScreen('purple', 0.5);
  
  function showNextLine() {
    if (lineIndex >= lines.length) {
      setTimeout(function() {
        loadingText.remove();
        saveProgress('level5');
        startScene('level5');
      }, 500);
      return;
    }
    
    loadingText.textContent = lines[lineIndex];
    
    // Shake on certain lines
    if (lineIndex === 0 || lineIndex === 1) {
      shakeScreen();
    }
    
    lineIndex++;
    setTimeout(showNextLine, 400);
  }
  
  setTimeout(showNextLine, 500);
}
