// Scene: Level 2 - Cosmic Quiz

var level2Answered = false;

function initLevel2Scene() {
  level2Answered = false;
  
  var options = document.getElementById('level2-options');
  var hint = document.getElementById('level2-hint');
  var result = document.getElementById('level2-result');
  
  // Reset
  hint.textContent = '';
  result.style.display = 'none';
  
  // Reset option buttons
  var btns = options.querySelectorAll('.option-btn');
  btns.forEach(function(btn) {
    btn.classList.remove('selected', 'correct', 'wrong');
    btn.disabled = false;
    btn.onclick = function() {
      if (level2Answered) return;
      selectLevel2Option(btn);
    };
  });
}

function selectLevel2Option(btn) {
  if (level2Answered) return;
  level2Answered = true;
  
  var value = btn.getAttribute('data-value');
  var hint = document.getElementById('level2-hint');
  var result = document.getElementById('level2-result');
  var options = document.getElementById('level2-options');
  
  // Disable all buttons
  var btns = options.querySelectorAll('.option-btn');
  btns.forEach(function(b) { b.disabled = true; });
  
  if (value === 'C') {
    // Correct
    btn.classList.add('correct');
    
    setTimeout(function() {
      result.innerHTML = 
        '<p style="font-size:24px;margin-bottom:16px;">🌅 × 16！</p>' +
        '<p>空间站每90分钟绕地球一圈，</p>' +
        '<p>一天16次日出。</p>' +
        '<p>你以后要是当了宇航员，</p>' +
        '<p>记得替你哥多看几次。</p>' +
        '<p class="medal-earned">解锁勋章：🌌 宇宙探索者 · COSMIC EXPLORER</p>';
      result.style.display = 'block';
      
      saveMedal(2);
      activateMedal(2);
      updateProgress(40, '2/5');
      
      setTimeout(function() {
        showFloatingComment('老哥：有点东西啊');
      }, 500);
      
      setTimeout(function() {
        transitionToNextLevel('minigame');
      }, 2500);
    }, 500);
  } else {
    // Wrong
    btn.classList.add('wrong');
    incrementWrongCount();
    shakeScreen();
    
    hint.innerHTML = '⚠ 偏了<br><br>💡 空间站绕地球一圈只要90分钟。<br>一天24小时能绕多少圈？<br>每圈一次日出。';
    
    // Allow retry after delay
    setTimeout(function() {
      level2Answered = false;
      btn.classList.remove('wrong');
      btns.forEach(function(b) { b.disabled = false; });
    }, 1500);
  }
}
