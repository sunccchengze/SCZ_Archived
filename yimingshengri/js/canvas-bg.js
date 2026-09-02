// Background Canvas - 星空背景

var bgCanvas, bgCtx;
var bgStars = [];
var nebulae = [];
var mouseGlow = { x: 0, y: 0, targetX: 0, targetY: 0 };
var lastBgFrame = 0;
var matrixRain = null;

function initCanvasBg() {
  bgCanvas = document.getElementById('canvas-bg');
  bgCtx = bgCanvas.getContext('2d');
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Mouse/touch tracking for glow
  document.addEventListener('mousemove', function(e) {
    mouseGlow.targetX = e.clientX;
    mouseGlow.targetY = e.clientY;
  });
  
  document.addEventListener('touchmove', function(e) {
    mouseGlow.targetX = e.touches[0].clientX;
    mouseGlow.targetY = e.touches[0].clientY;
  });
  
  // Initialize center position
  mouseGlow.x = window.innerWidth / 2;
  mouseGlow.y = window.innerHeight / 2;
  mouseGlow.targetX = mouseGlow.x;
  mouseGlow.targetY = mouseGlow.y;
  
  initStars();
  initNebulae();
  
  requestAnimationFrame(animateBg);
}

function resizeCanvas() {
  var dpr = Math.min(window.devicePixelRatio, 2);
  bgCanvas.width = window.innerWidth * dpr;
  bgCanvas.height = window.innerHeight * dpr;
  bgCanvas.style.width = window.innerWidth + 'px';
  bgCanvas.style.height = window.innerHeight + 'px';
  bgCtx.scale(dpr, dpr);
  
  // Reinitialize on resize
  initStars();
  initNebulae();
}

function initStars() {
  bgStars = [];
  var isMobileDevice = window.innerWidth < 768;
  
  // L1: Far stars (static)
  var farCount = isMobileDevice ? 100 : 200;
  for (var i = 0; i < farCount; i++) {
    bgStars.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 1,
      brightness: 0.2 + Math.random() * 0.3,
      layer: 1,
      twinkleSpeed: 0,
      twinklePhase: 0
    });
  }
  
  // L2: Mid stars (twinkle)
  var midCount = isMobileDevice ? 40 : 60;
  for (var i = 0; i < midCount; i++) {
    bgStars.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 1.5 + Math.random() * 0.5,
      brightness: 0.4 + Math.random() * 0.3,
      layer: 2,
      twinkleSpeed: 0.3 + Math.random() * 0.5,
      twinklePhase: Math.random() * Math.PI * 2
    });
  }
  
  // L3: Near stars (drift slowly)
  var nearCount = isMobileDevice ? 10 : 20;
  for (var i = 0; i < nearCount; i++) {
    bgStars.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 2 + Math.random(),
      brightness: 0.6 + Math.random() * 0.3,
      layer: 3,
      twinkleSpeed: 0.2 + Math.random() * 0.3,
      twinklePhase: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.1
    });
  }
}

function initNebulae() {
  nebulae = [];
  var colors = [
    'rgba(56, 189, 248, 0.03)',
    'rgba(124, 58, 237, 0.02)',
    'rgba(196, 181, 253, 0.02)'
  ];
  
  for (var i = 0; i < 3; i++) {
    nebulae.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: window.innerWidth * (0.3 + Math.random() * 0.2),
      color: colors[i % colors.length],
      phase: Math.random() * Math.PI * 2,
      speed: 0.0003 + Math.random() * 0.0002
    });
  }
}

function animateBg(timestamp) {
  // 30fps limit
  if (timestamp - lastBgFrame < 33) {
    requestAnimationFrame(animateBg);
    return;
  }
  lastBgFrame = timestamp;
  
  bgCtx.fillStyle = '#05080f';
  bgCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  
  // Update mouse glow position (lerp)
  mouseGlow.x = lerp(mouseGlow.x, mouseGlow.targetX, 0.05);
  mouseGlow.y = lerp(mouseGlow.y, mouseGlow.targetY, 0.05);
  
  // Draw nebulae
  nebulae.forEach(function(nebula) {
    nebula.phase += nebula.speed;
    var offsetX = Math.sin(nebula.phase) * 30;
    var offsetY = Math.cos(nebula.phase * 0.7) * 20;
    
    var gradient = bgCtx.createRadialGradient(
      nebula.x + offsetX, nebula.y + offsetY, 0,
      nebula.x + offsetX, nebula.y + offsetY, nebula.radius
    );
    gradient.addColorStop(0, nebula.color);
    gradient.addColorStop(1, 'transparent');
    
    bgCtx.fillStyle = gradient;
    bgCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  });
  
  // Draw stars
  bgStars.forEach(function(star) {
    var brightness = star.brightness;
    
    if (star.twinkleSpeed > 0) {
      star.twinklePhase += star.twinkleSpeed * 0.02;
      brightness *= 0.5 + 0.5 * Math.sin(star.twinklePhase);
    }
    
    if (star.layer === 3) {
      star.x += star.vx;
      star.y += star.vy;
      
      if (star.x < 0) star.x = window.innerWidth;
      if (star.x > window.innerWidth) star.x = 0;
      if (star.y < 0) star.y = window.innerHeight;
      if (star.y > window.innerHeight) star.y = 0;
    }
    
    var alpha = Math.floor(brightness * 255);
    bgCtx.fillStyle = 'rgba(240, 241, 245, ' + brightness + ')';
    bgCtx.beginPath();
    bgCtx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    bgCtx.fill();
    
    // Add glow for larger stars
    if (star.size > 2) {
      var glowGradient = bgCtx.createRadialGradient(
        star.x, star.y, 0,
        star.x, star.y, star.size * 3
      );
      glowGradient.addColorStop(0, 'rgba(125, 211, 252, ' + (brightness * 0.3) + ')');
      glowGradient.addColorStop(1, 'transparent');
      bgCtx.fillStyle = glowGradient;
      bgCtx.beginPath();
      bgCtx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
      bgCtx.fill();
    }
  });
  
  // Draw mouse glow
  var glowGradient = bgCtx.createRadialGradient(
    mouseGlow.x, mouseGlow.y, 0,
    mouseGlow.x, mouseGlow.y, 180
  );
  glowGradient.addColorStop(0, 'rgba(125, 211, 252, 0.06)');
  glowGradient.addColorStop(1, 'transparent');
  bgCtx.fillStyle = glowGradient;
  bgCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  
  // Draw matrix rain if active
  if (matrixRain && matrixRain.active) {
    drawMatrixRain();
  }
  
  requestAnimationFrame(animateBg);
}

// Matrix Rain Effect
function initMatrixRain() {
  var columnCount = Math.floor(window.innerWidth / 20);
  var columns = [];
  
  var chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン生日快乐孙鸣泽9西安日照';
  
  for (var i = 0; i < columnCount; i++) {
    columns.push({
      x: i * 20 + 10,
      y: Math.random() * -500,
      speed: 3 + Math.random() * 4,
      chars: [],
      charCount: 10 + Math.floor(Math.random() * 15)
    });
    
    // Generate initial chars
    for (var j = 0; j < columns[i].charCount; j++) {
      columns[i].chars.push(chars.charAt(Math.floor(Math.random() * chars.length)));
    }
  }
  
  matrixRain = {
    active: true,
    columns: columns,
    chars: chars,
    opacity: 1,
    startTime: Date.now()
  };
}

function drawMatrixRain() {
  if (!matrixRain) return;
  
  var elapsed = Date.now() - matrixRain.startTime;
  
  // Fade out after 3 seconds
  if (elapsed > 3000) {
    matrixRain.opacity = Math.max(0, 1 - (elapsed - 3000) / 1000);
    if (matrixRain.opacity <= 0) {
      matrixRain.active = false;
      return;
    }
  }
  
  matrixRain.columns.forEach(function(col) {
    col.y += col.speed;
    
    if (col.y > window.innerHeight + 300) {
      col.y = Math.random() * -300;
    }
    
    // Randomly change chars
    if (Math.random() < 0.02) {
      var idx = Math.floor(Math.random() * col.chars.length);
      col.chars[idx] = matrixRain.chars.charAt(Math.floor(Math.random() * matrixRain.chars.length));
    }
    
    // Draw chars
    col.chars.forEach(function(char, i) {
      var y = col.y + i * 18;
      if (y < 0 || y > window.innerHeight) return;
      
      var alpha = (1 - i / col.chars.length) * matrixRain.opacity;
      if (i === 0) {
        bgCtx.fillStyle = 'rgba(125, 211, 252, ' + alpha + ')';
        bgCtx.font = 'bold 14px "Share Tech Mono", monospace';
      } else {
        bgCtx.fillStyle = 'rgba(56, 189, 248, ' + (alpha * 0.7) + ')';
        bgCtx.font = '14px "Share Tech Mono", monospace';
      }
      bgCtx.fillText(char, col.x, y);
    });
  });
}

function stopMatrixRain() {
  if (matrixRain) {
    matrixRain.active = false;
  }
}
