// Scene: Level 5 - Final Boss

var level5Answered = false;

function initLevel5Scene() {
  level5Answered = false;
  
  var options = document.getElementById('level5-options');
  var hint = document.getElementById('level5-hint');
  var result = document.getElementById('level5-result');
  
  hint.textContent = '';
  result.style.display = 'none';
  
  var btns = options.querySelectorAll('.option-btn');
  btns.forEach(function(btn) {
    btn.classList.remove('selected', 'correct', 'wrong');
    btn.disabled = false;
    btn.onclick = function() {
      if (level5Answered) return;
      selectLevel5Option(btn);
    };
  });
}

function selectLevel5Option(btn) {
  if (level5Answered) return;
  level5Answered = true;
  
  var value = btn.getAttribute('data-value');
  var hint = document.getElementById('level5-hint');
  var result = document.getElementById('level5-result');
  var options = document.getElementById('level5-options');
  
  var btns = options.querySelectorAll('.option-btn');
  btns.forEach(function(b) { b.disabled = true; });
  
  if (value === 'B') {
    // Correct! Epic celebration!
    btn.classList.add('correct');
    
    // Gold flash
    flashScreen('gold', 0.5);
    
    // Gold particle burst
    setTimeout(function() {
      spawnGoldBurst(window.innerWidth / 2, window.innerHeight / 2, 60);
    }, 200);
    
    setTimeout(function() {
      result.innerHTML = 
        '<p style="font-size:24px;margin-bottom:16px;">🏆 最终防火墙 —— 已击穿！</p>' +
        '<p>超过第2名，你就取代了他的位置。</p>' +
        '<p>所以你是第2名，不是第1名。</p>' +
        '<p>很多人都会选第1名。</p>' +
        '<p>你没上当。</p>' +
        '<p style="margin-top:16px;color:var(--gold);">乙鸣，五关全过了。</p>' +
        '<p style="color:var(--gold);">你是真的有东西。</p>' +
        '<p class="medal-earned">解锁勋章：🏆 终极破译者 · ULTIMATE DECODER</p>';
      result.style.display = 'block';
      
      // Save end time
      setState({ endTime: Date.now() });
      
      saveMedal(5);
      activateMedal(5);
      updateProgress(100, '5/5');
      
      setTimeout(function() {
        showFloatingComment('老哥：我弟是天才。就这么定了。');
      }, 1000);
      
      setTimeout(function() {
        saveProgress('merge');
        startScene('merge');
      }, 4000);
    }, 800);
  } else {
    // Wrong
    btn.classList.add('wrong');
    incrementWrongCount();
    shakeScreen();
    
    hint.innerHTML = '⚠ 再想想<br><br>💡 提示：<br>"超过第2名"，<br>你取代了谁的位置？<br>你现在站在谁原来站的地方？';
    
    setTimeout(function() {
      level5Answered = false;
      btn.classList.remove('wrong');
      btns.forEach(function(b) { b.disabled = false; });
    }, 1500);
  }
}
