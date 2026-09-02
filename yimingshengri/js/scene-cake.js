// Scene: Cake and Candles

var candlesExtinguished = 0;
var totalCandles = 9;
var cakePhase = 'candles'; // 'candles' | 'blessing' | 'done'

function initCakeScene() {
  candlesExtinguished = 0;
  cakePhase = 'candles';
  
  var candlesRow = document.getElementById('candles-row');
  var blessingImage = document.getElementById('blessing-image');
  var continueBtn = document.getElementById('btn-continue-fireworks');
  var cakeContainer = document.getElementById('cake-container');
  var cakeIntro = document.getElementById('cake-intro');
  
  // Reset
  candlesRow.innerHTML = '';
  blessingImage.classList.remove('visible');
  blessingImage.style.display = 'none';
  continueBtn.style.display = 'none';
  cakeContainer.style.display = 'flex';
  cakeContainer.style.opacity = '1';
  cakeIntro.style.display = 'block';
  
  // Create 9 candles
  for (var i = 0; i < totalCandles; i++) {
    var candle = document.createElement('div');
    candle.className = 'candle';
    candle.setAttribute('data-index', i);
    
    var flame = document.createElement('div');
    flame.className = 'candle-flame';
    candle.appendChild(flame);
    
    candlesRow.appendChild(candle);
  }
  
  // Setup touch/mouse events for blowing candles
  setupCandleEvents();
}

function setupCandleEvents() {
  var candlesRow = document.getElementById('candles-row');
  
  // Touch move (swipe to blow)
  candlesRow.addEventListener('touchmove', function(e) {
    e.preventDefault();
    var touch = e.touches[0];
    checkCandleBlown(touch.clientX, touch.clientY);
  }, { passive: false });
  
  // Mouse move (drag to blow)
  var isMouseDown = false;
  
  candlesRow.addEventListener('mousedown', function() {
    isMouseDown = true;
  });
  
  document.addEventListener('mouseup', function() {
    isMouseDown = false;
  });
  
  candlesRow.addEventListener('mousemove', function(e) {
    if (isMouseDown) {
      checkCandleBlown(e.clientX, e.clientY);
    }
  });
}

function checkCandleBlown(x, y) {
  var candles = document.querySelectorAll('.candle');
  
  candles.forEach(function(candle) {
    if (candle.classList.contains('extinguished')) return;
    
    var rect = candle.getBoundingClientRect();
    var cx = rect.left + rect.width / 2;
    var cy = rect.top;
    
    // Check if touch/mouse is near the flame
    if (Math.abs(x - cx) < 25 && y < cy + 30 && y > cy - 40) {
      extinguishCandle(candle);
    }
  });
}

function extinguishCandle(candle) {
  if (candle.classList.contains('extinguished')) return;
  
  candle.classList.add('extinguished');
  candlesExtinguished++;
  
  var flame = candle.querySelector('.candle-flame');
  flame.classList.add('out');
  
  // Add smoke
  var smoke = document.createElement('div');
  smoke.className = 'candle-smoke';
  candle.appendChild(smoke);
  
  setTimeout(function() {
    smoke.remove();
  }, 1500);
  
  // Spawn small star particles
  var rect = candle.getBoundingClientRect();
  for (var i = 0; i < 3; i++) {
    var p = getParticle();
    if (!p) continue;
    
    p.x = rect.left + rect.width / 2;
    p.y = rect.top;
    p.vx = (Math.random() - 0.5) * 2;
    p.vy = -1 - Math.random() * 2;
    p.size = 2;
    p.alpha = 0.8;
    p.color = '#fde68a';
    p.gravity = -0.02;
    p.friction = 0.98;
    p.life = 0;
    p.maxLife = 40;
  }
  
  // Check if all candles are out
  if (candlesExtinguished >= totalCandles) {
    setTimeout(onAllCandlesOut, 800);
  }
}

function onAllCandlesOut() {
  cakePhase = 'blessing';
  
  var cakeContainer = document.getElementById('cake-container');
  var cakeIntro = document.getElementById('cake-intro');
  var blessingImage = document.getElementById('blessing-image');
  var continueBtn = document.getElementById('btn-continue-fireworks');
  
  // Fade out cake
  cakeContainer.style.transition = 'opacity 0.5s ease';
  cakeContainer.style.opacity = '0';
  cakeIntro.style.display = 'none';
  
  setTimeout(function() {
    cakeContainer.style.display = 'none';
    
    // Show blessing image
    blessingImage.style.display = 'block';
    setTimeout(function() {
      blessingImage.classList.add('visible');
    }, 50);
    
    // Show continue button after 3 seconds
    setTimeout(function() {
      continueBtn.style.display = 'inline-flex';
      continueBtn.style.animation = 'fade-in 0.5s ease';
      
      continueBtn.onclick = function() {
        // Fade out blessing and go to fireworks
        blessingImage.classList.remove('visible');
        continueBtn.style.display = 'none';
        
        setTimeout(function() {
          saveProgress('fireworks');
          startScene('fireworks');
        }, 1500);
      };
    }, 3000);
  }, 500);
}
