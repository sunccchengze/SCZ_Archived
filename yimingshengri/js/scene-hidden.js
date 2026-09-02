// Scene: Hidden Level

var hiddenAnswered = false;

function initHiddenScene() {
  hiddenAnswered = false;
  
  var options = document.getElementById('hidden-options');
  var hint = document.getElementById('hidden-hint');
  var result = document.getElementById('hidden-result');
  
  hint.textContent = '';
  result.style.display = 'none';
  
  var btns = options.querySelectorAll('.option-btn');
  btns.forEach(function(btn) {
    btn.classList.remove('selected', 'correct', 'wrong');
    btn.disabled = false;
    btn.onclick = function() {
      if (hiddenAnswered) return;
      selectHiddenOption(btn);
    };
  });
}

function selectHiddenOption(btn) {
  if (hiddenAnswered) return;
  hiddenAnswered = true;
  
  var value = btn.getAttribute('data-value');
  var hint = document.getElementById('hidden-hint');
  var result = document.getElementById('hidden-result');
  var options = document.getElementById('hidden-options');
  
  var btns = options.querySelectorAll('.option-btn');
  btns.forEach(function(b) { b.disabled = true; });
  
  if (value === 'C') {
    // Correct! Super celebration!
    btn.classList.add('correct');
    
    // Gold flash
    flashScreen('gold', 0.5);
    
    // Gold particle rain
    startGoldRain();
    
    setTimeout(function() {
      result.innerHTML = 
        '<p style="font-size:48px;margin-bottom:16px;">👑</p>' +
        '<p style="font-size:20px;color:var(--gold);margin-bottom:16px;">没什么好说的。你就是天才。</p>' +
        '<p>不是因为你选对了，</p>' +
        '<p>是因为你知道——</p>' +
        '<p>真正厉害的人不需要证明自己厉害。</p>' +
        '<p class="medal-earned" style="color:var(--gold);">🎖 隐藏成就：超级天才 · GENIUS · 终身认证</p>' +
        '<button class="btn-primary" onclick="goToCertificate()" style="margin-top:20px;">继续</button>';
      result.style.display = 'block';
      
      setState({ hiddenCompleted: true });
    }, 800);
  } else {
    // Wrong
    btn.classList.add('wrong');
    incrementWrongCount();
    shakeScreen();
    
    hint.innerHTML = '🤔 再看看题。<br><br>💡 左边、右边、还有地上。<br>题目里已经告诉你答案了。<br>秘密藏在最不起眼的地方。';
    
    setTimeout(function() {
      hiddenAnswered = false;
      btn.classList.remove('wrong');
      btns.forEach(function(b) { b.disabled = false; });
    }, 1500);
  }
}

function startGoldRain() {
  var duration = 3000;
  var startTime = Date.now();
  
  function spawnGold() {
    var elapsed = Date.now() - startTime;
    if (elapsed > duration) return;
    
    for (var i = 0; i < 2; i++) {
      var p = getParticle();
      if (!p) continue;
      
      p.x = Math.random() * window.innerWidth;
      p.y = -20;
      p.vx = (Math.random() - 0.5) * 2;
      p.vy = 2 + Math.random() * 2;
      p.size = 3 + Math.random() * 3;
      p.alpha = 0.8;
      p.color = Math.random() > 0.5 ? '#fbbf24' : '#fde68a';
      p.gravity = 0.02;
      p.friction = 0.99;
      p.life = 0;
      p.maxLife = 120;
    }
    
    requestAnimationFrame(spawnGold);
  }
  
  spawnGold();
}

function goToCertificate() {
  saveProgress('certificate');
  startScene('certificate');
}
