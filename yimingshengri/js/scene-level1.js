// Scene: Level 1 - Star Map Decode

var level1Canvas, level1Ctx;
var level1Stars = [];
var ninePattern = [
  { rx: 0.5, ry: 0.15 }, { rx: 0.65, ry: 0.18 },
  { rx: 0.72, ry: 0.28 }, { rx: 0.65, ry: 0.38 },
  { rx: 0.5, ry: 0.42 }, { rx: 0.35, ry: 0.38 },
  { rx: 0.28, ry: 0.28 }, { rx: 0.35, ry: 0.18 },
  { rx: 0.65, ry: 0.5 }, { rx: 0.62, ry: 0.6 },
  { rx: 0.58, ry: 0.7 }, { rx: 0.52, ry: 0.78 }
];
var level1Solved = false;
var level1HintShown = false;

function initLevel1Scene() {
  level1Canvas = document.getElementById('level1-canvas');
  level1Ctx = level1Canvas.getContext('2d');
  
  // Reset
  level1Solved = false;
  level1HintShown = false;
  document.getElementById('level1-input').value = '';
  document.getElementById('level1-hint').textContent = '';
  document.getElementById('level1-result').style.display = 'none';
  
  setupLevel1Canvas();
  setupLevel1Input();
  animateLevel1();
}

function setupLevel1Canvas() {
  var rect = level1Canvas.getBoundingClientRect();
  var dpr = Math.min(window.devicePixelRatio, 2);
  
  level1Canvas.width = rect.width * dpr;
  level1Canvas.height = rect.height * dpr;
  level1Ctx.scale(dpr, dpr);
  
  var w = rect.width;
  var h = rect.height;
  
  level1Stars = [];
  
  // Background stars
  for (var i = 0; i < 30; i++) {
    level1Stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      size: 1,
      brightness: 0.2 + Math.random() * 0.3,
      isNine: false
    });
  }
  
  // "9" pattern stars
  ninePattern.forEach(function(p) {
    level1Stars.push({
      x: w * (0.2 + p.rx * 0.6),
      y: h * (0.1 + p.ry * 0.8),
      size: 3,
      brightness: 0.8,
      isNine: true,
      phase: Math.random() * Math.PI * 2
    });
  });
}

function animateLevel1() {
  if (level1Solved) return;
  
  var rect = level1Canvas.getBoundingClientRect();
  var w = rect.width;
  var h = rect.height;
  
  level1Ctx.fillStyle = 'rgba(5, 8, 15, 1)';
  level1Ctx.fillRect(0, 0, w, h);
  
  // Draw stars
  level1Stars.forEach(function(star) {
    var brightness = star.brightness;
    
    if (star.isNine) {
      star.phase += 0.02;
      brightness = 0.7 + 0.3 * Math.sin(star.phase);
    }
    
    level1Ctx.fillStyle = 'rgba(240, 241, 245, ' + brightness + ')';
    level1Ctx.beginPath();
    level1Ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    level1Ctx.fill();
    
    // Glow for 9 stars
    if (star.isNine) {
      var glow = level1Ctx.createRadialGradient(
        star.x, star.y, 0,
        star.x, star.y, star.size * 4
      );
      glow.addColorStop(0, 'rgba(125, 211, 252, ' + (brightness * 0.3) + ')');
      glow.addColorStop(1, 'transparent');
      level1Ctx.fillStyle = glow;
      level1Ctx.beginPath();
      level1Ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
      level1Ctx.fill();
    }
  });
  
  // Draw faint connecting lines between 9 stars
  var nineStars = level1Stars.filter(function(s) { return s.isNine; });
  level1Ctx.strokeStyle = 'rgba(125, 211, 252, ' + (level1HintShown ? 0.3 : 0.08) + ')';
  level1Ctx.lineWidth = 1;
  level1Ctx.beginPath();
  nineStars.forEach(function(star, i) {
    if (i === 0) {
      level1Ctx.moveTo(star.x, star.y);
    } else {
      level1Ctx.lineTo(star.x, star.y);
    }
  });
  level1Ctx.stroke();
  
  requestAnimationFrame(animateLevel1);
}

function setupLevel1Input() {
  var input = document.getElementById('level1-input');
  var submit = document.getElementById('level1-submit');
  
  submit.onclick = checkLevel1Answer;
  input.onkeypress = function(e) {
    if (e.key === 'Enter') checkLevel1Answer();
  };
}

function checkLevel1Answer() {
  var input = document.getElementById('level1-input');
  var hint = document.getElementById('level1-hint');
  var answer = input.value.trim().toLowerCase();
  
  var correctAnswers = ['9', '九', 'nine', '９'];
  
  if (correctAnswers.indexOf(answer) !== -1) {
    level1Correct();
  } else {
    incrementWrongCount();
    shakeScreen();
    input.classList.add('error');
    setTimeout(function() {
      input.classList.remove('error');
    }, 300);
    
    hint.innerHTML = '⚠ 没对<br><br>💡 看那些最亮的星星，<br>脑子里把它们连起来。<br>这个数字跟今天有关。';
    level1HintShown = true;
    input.value = '';
  }
}

function level1Correct() {
  level1Solved = true;
  
  var result = document.getElementById('level1-result');
  var input = document.getElementById('level1-input');
  var submit = document.getElementById('level1-submit');
  
  input.style.display = 'none';
  submit.style.display = 'none';
  document.getElementById('level1-hint').textContent = '';
  
  // Brighten 9 stars
  level1Stars.forEach(function(star) {
    if (star.isNine) star.brightness = 1;
  });
  
  result.innerHTML = 
    '<p style="font-size:24px;margin-bottom:16px;">🎯 解密成功！</p>' +
    '<p>是9。</p>' +
    '<p>今天你9岁，连星星都在给你排面。</p>' +
    '<p>第一道防火墙？秒了。</p>' +
    '<p class="medal-earned">解锁勋章：🔭 星图解读者 · STAR READER</p>';
  result.style.display = 'block';
  
  // Medal animation
  saveMedal(1);
  activateMedal(1);
  updateProgress(20, '1/5');
  
  // Floating comment
  setTimeout(function() {
    showFloatingComment('老哥：还行，热身而已');
  }, 1000);
  
  // Go to next level
  setTimeout(function() {
    transitionToNextLevel('level2');
  }, 2500);
}
