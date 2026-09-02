// Scene: Minigame - Energy Collection

var minigameCanvas, minigameCtx;
var minigameActive = false;
var minigameTimer = 15;
var minigameScore = 0;
var minigameShipX = 0;
var minigameFallingItems = [];
var minigameInterval = null;
var minigameAnimFrame = null;

function initMinigameScene() {
  var alert = document.getElementById('minigame-alert');
  var hud = document.getElementById('game-hud');
  var canvas = document.getElementById('minigame-canvas');
  var result = document.getElementById('minigame-result');
  
  // Reset
  alert.style.display = 'block';
  hud.style.display = 'none';
  canvas.style.display = 'none';
  result.style.display = 'none';
  minigameActive = false;
  minigameTimer = 15;
  minigameScore = 0;
  minigameFallingItems = [];
  
  document.getElementById('btn-start-game').onclick = startMinigame;
}

function startMinigame() {
  var alert = document.getElementById('minigame-alert');
  var hud = document.getElementById('game-hud');
  var canvas = document.getElementById('minigame-canvas');
  
  alert.style.display = 'none';
  hud.style.display = 'flex';
  canvas.style.display = 'block';
  
  minigameCanvas = canvas;
  minigameCtx = canvas.getContext('2d');
  
  // Setup canvas
  var dpr = Math.min(window.devicePixelRatio, 2);
  minigameCanvas.width = window.innerWidth * dpr;
  minigameCanvas.height = window.innerHeight * dpr;
  minigameCanvas.style.width = window.innerWidth + 'px';
  minigameCanvas.style.height = window.innerHeight + 'px';
  minigameCtx.scale(dpr, dpr);
  
  minigameShipX = window.innerWidth / 2;
  minigameActive = true;
  
  // Touch/mouse control
  document.addEventListener('touchmove', handleMinigameTouch);
  document.addEventListener('mousemove', handleMinigameMouse);
  
  // Spawn items
  minigameInterval = setInterval(spawnMinigameItem, 400);
  
  // Timer
  var timerInterval = setInterval(function() {
    minigameTimer--;
    document.getElementById('game-timer').textContent = minigameTimer;
    
    if (minigameTimer <= 0) {
      clearInterval(timerInterval);
      endMinigame();
    }
  }, 1000);
  
  // Start animation
  animateMinigame();
}

function handleMinigameTouch(e) {
  if (!minigameActive) return;
  e.preventDefault();
  minigameShipX = e.touches[0].clientX;
}

function handleMinigameMouse(e) {
  if (!minigameActive) return;
  minigameShipX = e.clientX;
}

function spawnMinigameItem() {
  if (!minigameActive) return;
  
  var types = [
    { emoji: '⭐', score: 1, weight: 5 },
    { emoji: '💎', score: 2, weight: 3 },
    { emoji: '☄️', score: 0, weight: 2 }
  ];
  
  // Weighted random selection
  var totalWeight = types.reduce(function(sum, t) { return sum + t.weight; }, 0);
  var random = Math.random() * totalWeight;
  var selected = types[0];
  var cumulative = 0;
  
  for (var i = 0; i < types.length; i++) {
    cumulative += types[i].weight;
    if (random <= cumulative) {
      selected = types[i];
      break;
    }
  }
  
  minigameFallingItems.push({
    x: 50 + Math.random() * (window.innerWidth - 100),
    y: -30,
    type: selected,
    speed: 3 + Math.random() * 2
  });
}

function animateMinigame() {
  if (!minigameActive) return;
  
  var w = window.innerWidth;
  var h = window.innerHeight;
  
  minigameCtx.clearRect(0, 0, w, h);
  
  // Draw ship
  minigameCtx.font = '40px Arial';
  minigameCtx.textAlign = 'center';
  minigameCtx.fillText('🚀', minigameShipX, h - 60);
  
  // Update and draw items
  for (var i = minigameFallingItems.length - 1; i >= 0; i--) {
    var item = minigameFallingItems[i];
    item.y += item.speed;
    
    // Draw item
    minigameCtx.font = '30px Arial';
    minigameCtx.fillText(item.type.emoji, item.x, item.y);
    
    // Check collision
    var dist = distance(item.x, item.y, minigameShipX, h - 60);
    if (dist < 40) {
      if (item.type.score > 0) {
        minigameScore += item.type.score;
        document.getElementById('game-score').textContent = '⭐ ' + minigameScore;
        
        // Show floating score
        showMinigameFloatingScore(item.x, item.y, '+' + item.type.score);
      } else {
        // Meteor hit - flash red
        flashScreen('red', 0.2);
      }
      minigameFallingItems.splice(i, 1);
      continue;
    }
    
    // Remove if off screen
    if (item.y > h + 50) {
      minigameFallingItems.splice(i, 1);
    }
  }
  
  minigameAnimFrame = requestAnimationFrame(animateMinigame);
}

function showMinigameFloatingScore(x, y, text) {
  var el = document.createElement('div');
  el.textContent = text;
  el.style.cssText = 'position:fixed;left:' + x + 'px;top:' + y + 'px;color:var(--gold);font-size:20px;font-weight:bold;pointer-events:none;z-index:100;animation:fade-in 0.3s ease;';
  document.body.appendChild(el);
  
  setTimeout(function() {
    el.style.transform = 'translateY(-30px)';
    el.style.opacity = '0';
    el.style.transition = 'all 0.5s ease';
  }, 100);
  
  setTimeout(function() {
    el.remove();
  }, 600);
}

function endMinigame() {
  minigameActive = false;
  
  if (minigameInterval) clearInterval(minigameInterval);
  if (minigameAnimFrame) cancelAnimationFrame(minigameAnimFrame);
  
  document.removeEventListener('touchmove', handleMinigameTouch);
  document.removeEventListener('mousemove', handleMinigameMouse);
  
  var hud = document.getElementById('game-hud');
  var canvas = document.getElementById('minigame-canvas');
  var result = document.getElementById('minigame-result');
  
  hud.style.display = 'none';
  canvas.style.display = 'none';
  
  // Save score
  addGameScore(minigameScore);
  
  // Get rating
  var rating, ratingText;
  if (minigameScore <= 5) {
    rating = '😂';
    ratingText = '就这？算了，能量凑合够用。';
  } else if (minigameScore <= 15) {
    rating = '👍';
    ratingText = '还行，飞船充上电了。';
  } else if (minigameScore <= 25) {
    rating = '🚀';
    ratingText = '可以啊！天生宇航员。';
  } else {
    rating = '🤨';
    ratingText = '你开挂了吧';
  }
  
  result.innerHTML = 
    '<p style="font-size:48px;margin-bottom:16px;">' + rating + '</p>' +
    '<p style="font-size:24px;color:var(--gold);">收集：' + minigameScore + ' ⭐</p>' +
    '<p style="margin:16px 0;">' + ratingText + '</p>' +
    '<p>行，能量够了。继续。</p>' +
    '<button class="btn-primary" onclick="goToLevel3()" style="margin-top:20px;">⚡ 第三关</button>';
  result.style.display = 'block';
  
  setTimeout(function() {
    showFloatingComment('老哥：手速可以');
  }, 500);
}

function goToLevel3() {
  transitionToNextLevel('level3');
}
