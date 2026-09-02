// Effects Canvas - 特效层

var fxCanvas, fxCtx;
var particles = [];
var fireworks = [];
var lastFxFrame = 0;
var fxActive = true;

// Particle pool
var particlePool = [];
var POOL_SIZE = 200;

function initCanvasFx() {
  fxCanvas = document.getElementById('canvas-fx');
  fxCtx = fxCanvas.getContext('2d');
  
  resizeFxCanvas();
  window.addEventListener('resize', resizeFxCanvas);
  
  // Initialize particle pool
  for (var i = 0; i < POOL_SIZE; i++) {
    particlePool.push({
      alive: false,
      x: 0, y: 0,
      vx: 0, vy: 0,
      size: 2,
      alpha: 1,
      color: '#7dd3fc',
      gravity: 0,
      friction: 1,
      life: 0,
      maxLife: 60
    });
  }
  
  // Click particles
  document.addEventListener('click', function(e) {
    spawnClickParticles(e.clientX, e.clientY);
  });
  
  requestAnimationFrame(animateFx);
}

function resizeFxCanvas() {
  var dpr = Math.min(window.devicePixelRatio, 2);
  fxCanvas.width = window.innerWidth * dpr;
  fxCanvas.height = window.innerHeight * dpr;
  fxCanvas.style.width = window.innerWidth + 'px';
  fxCanvas.style.height = window.innerHeight + 'px';
  fxCtx.scale(dpr, dpr);
}

function getParticle() {
  for (var i = 0; i < particlePool.length; i++) {
    if (!particlePool[i].alive) {
      particlePool[i].alive = true;
      return particlePool[i];
    }
  }
  return null;
}

function spawnClickParticles(x, y) {
  var count = 8 + Math.floor(Math.random() * 5);
  var colors = ['#7dd3fc', '#38bdf8', '#c4b5fd'];
  
  for (var i = 0; i < count; i++) {
    var p = getParticle();
    if (!p) break;
    
    var angle = (Math.PI * 2 * i) / count + Math.random() * 0.3;
    var speed = 2 + Math.random() * 2;
    
    p.x = x;
    p.y = y;
    p.vx = Math.cos(angle) * speed;
    p.vy = Math.sin(angle) * speed;
    p.size = 2 + Math.random() * 2;
    p.alpha = 1;
    p.color = colors[Math.floor(Math.random() * colors.length)];
    p.gravity = 0.05;
    p.friction = 0.98;
    p.life = 0;
    p.maxLife = 40 + Math.random() * 20;
  }
}

function spawnGoldBurst(x, y, count) {
  count = count || 60;
  var colors = ['#fbbf24', '#fde68a', '#f59e0b'];
  
  for (var i = 0; i < count; i++) {
    var p = getParticle();
    if (!p) break;
    
    var angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
    var speed = 3 + Math.random() * 5;
    
    p.x = x;
    p.y = y;
    p.vx = Math.cos(angle) * speed;
    p.vy = Math.sin(angle) * speed;
    p.size = 3 + Math.random() * 3;
    p.alpha = 1;
    p.color = colors[Math.floor(Math.random() * colors.length)];
    p.gravity = 0.08;
    p.friction = 0.96;
    p.life = 0;
    p.maxLife = 60 + Math.random() * 30;
  }
}

function spawnStarVortex(duration) {
  // Pull stars toward center effect
  var centerX = window.innerWidth / 2;
  var centerY = window.innerHeight / 2;
  var startTime = Date.now();
  
  function animate() {
    var elapsed = Date.now() - startTime;
    if (elapsed > duration) return;
    
    // Add swirling particles
    for (var i = 0; i < 3; i++) {
      var p = getParticle();
      if (!p) continue;
      
      var angle = Math.random() * Math.PI * 2;
      var dist = 200 + Math.random() * 200;
      
      p.x = centerX + Math.cos(angle) * dist;
      p.y = centerY + Math.sin(angle) * dist;
      p.vx = (centerX - p.x) * 0.02;
      p.vy = (centerY - p.y) * 0.02;
      p.size = 2;
      p.alpha = 0.8;
      p.color = '#fde68a';
      p.gravity = 0;
      p.friction = 1;
      p.life = 0;
      p.maxLife = 30;
    }
    
    requestAnimationFrame(animate);
  }
  
  animate();
}

function animateFx(timestamp) {
  if (!fxActive) {
    requestAnimationFrame(animateFx);
    return;
  }
  
  fxCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  
  // Update and draw particles
  for (var i = 0; i < particlePool.length; i++) {
    var p = particlePool[i];
    if (!p.alive) continue;
    
    p.vy += p.gravity;
    p.vx *= p.friction;
    p.vy *= p.friction;
    p.x += p.vx;
    p.y += p.vy;
    p.life++;
    
    p.alpha = 1 - (p.life / p.maxLife);
    
    if (p.life >= p.maxLife || p.x < -50 || p.x > window.innerWidth + 50 ||
        p.y < -50 || p.y > window.innerHeight + 50) {
      p.alive = false;
      continue;
    }
    
    fxCtx.globalAlpha = p.alpha;
    fxCtx.fillStyle = p.color;
    fxCtx.beginPath();
    fxCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    fxCtx.fill();
  }
  
  // Update and draw fireworks
  for (var i = fireworks.length - 1; i >= 0; i--) {
    var fw = fireworks[i];
    if (!fw.alive) {
      fireworks.splice(i, 1);
      continue;
    }
    updateFirework(fw);
    drawFirework(fw);
  }
  
  fxCtx.globalAlpha = 1;
  
  requestAnimationFrame(animateFx);
}

// Firework System
function createFirework(x, targetY, color, text) {
  var fw = {
    alive: true,
    x: x,
    y: window.innerHeight + 20,
    targetY: targetY,
    color: color,
    text: text || null,
    phase: 'rising',
    speed: 4 + Math.random() * 2,
    particles: [],
    trailParticles: [],
    textPositions: null
  };
  
  if (text) {
    fw.textPositions = getTextParticlePositions(text, x, targetY);
  }
  
  fireworks.push(fw);
  return fw;
}

function getTextParticlePositions(text, centerX, centerY) {
  var offscreen = document.createElement('canvas');
  offscreen.width = 200;
  offscreen.height = 60;
  var ctx = offscreen.getContext('2d');
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 36px "ZCOOL QingKe HuangYou", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 100, 30);
  
  var imgData = ctx.getImageData(0, 0, 200, 60);
  var positions = [];
  
  for (var y = 0; y < 60; y += 3) {
    for (var x = 0; x < 200; x += 3) {
      if (imgData.data[(y * 200 + x) * 4 + 3] > 128) {
        positions.push({
          x: centerX + (x - 100) * 1.5,
          y: centerY + (y - 30) * 1.5
        });
      }
    }
  }
  
  return positions;
}

function updateFirework(fw) {
  if (fw.phase === 'rising') {
    fw.y -= fw.speed;
    
    // Trail particles
    if (Math.random() < 0.5) {
      fw.trailParticles.push({
        x: fw.x + (Math.random() - 0.5) * 4,
        y: fw.y,
        alpha: 1,
        size: 2
      });
    }
    
    // Update trail
    for (var i = fw.trailParticles.length - 1; i >= 0; i--) {
      fw.trailParticles[i].alpha -= 0.05;
      if (fw.trailParticles[i].alpha <= 0) {
        fw.trailParticles.splice(i, 1);
      }
    }
    
    if (fw.y <= fw.targetY) {
      explodeFirework(fw);
    }
  } else if (fw.phase === 'exploding') {
    fw.explodeTime++;
    
    // Update particles
    var allDead = true;
    fw.particles.forEach(function(p) {
      if (p.alpha <= 0) return;
      allDead = false;
      
      p.vy += p.gravity;
      p.vx *= p.friction;
      p.vy *= p.friction;
      
      // Text formation
      if (fw.text && fw.explodeTime > 30 && fw.explodeTime < 80 && p.targetX !== undefined) {
        p.vx += (p.targetX - p.x) * 0.05;
        p.vy += (p.targetY - p.y) * 0.05;
        p.vx *= 0.9;
        p.vy *= 0.9;
      }
      
      p.x += p.vx;
      p.y += p.vy;
      
      if (fw.explodeTime > 80) {
        p.alpha -= 0.02;
      }
    });
    
    if (allDead || fw.explodeTime > 150) {
      fw.alive = false;
    }
  }
}

function explodeFirework(fw) {
  fw.phase = 'exploding';
  fw.explodeTime = 0;
  
  var count = fw.text ? Math.max(fw.textPositions.length, 50) : 50;
  
  for (var i = 0; i < count; i++) {
    var angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.3;
    var speed = 2 + Math.random() * 3;
    
    var particle = {
      x: fw.x,
      y: fw.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      size: 2 + Math.random(),
      color: fw.color,
      gravity: 0.03,
      friction: 0.98
    };
    
    if (fw.textPositions && i < fw.textPositions.length) {
      particle.targetX = fw.textPositions[i].x;
      particle.targetY = fw.textPositions[i].y;
    }
    
    fw.particles.push(particle);
  }
}

function drawFirework(fw) {
  if (fw.phase === 'rising') {
    // Draw trail
    fw.trailParticles.forEach(function(p) {
      fxCtx.globalAlpha = p.alpha;
      fxCtx.fillStyle = fw.color;
      fxCtx.beginPath();
      fxCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      fxCtx.fill();
    });
    
    // Draw head
    fxCtx.globalAlpha = 1;
    fxCtx.fillStyle = fw.color;
    fxCtx.beginPath();
    fxCtx.arc(fw.x, fw.y, 4, 0, Math.PI * 2);
    fxCtx.fill();
    
    // Glow
    var glow = fxCtx.createRadialGradient(fw.x, fw.y, 0, fw.x, fw.y, 20);
    glow.addColorStop(0, fw.color);
    glow.addColorStop(1, 'transparent');
    fxCtx.fillStyle = glow;
    fxCtx.beginPath();
    fxCtx.arc(fw.x, fw.y, 20, 0, Math.PI * 2);
    fxCtx.fill();
  } else if (fw.phase === 'exploding') {
    fw.particles.forEach(function(p) {
      if (p.alpha <= 0) return;
      
      fxCtx.globalAlpha = p.alpha;
      fxCtx.fillStyle = p.color;
      fxCtx.beginPath();
      fxCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      fxCtx.fill();
    });
  }
}

// Wormhole transition effect
function triggerWormholeTransition(duration, callback) {
  var startTime = Date.now();
  var centerX = window.innerWidth / 2;
  var centerY = window.innerHeight / 2;
  
  function animate() {
    var elapsed = Date.now() - startTime;
    var progress = Math.min(elapsed / duration, 1);
    
    // Pull effect - spawn particles moving toward center
    if (progress < 0.8) {
      for (var i = 0; i < 5; i++) {
        var p = getParticle();
        if (!p) continue;
        
        var angle = Math.random() * Math.PI * 2;
        var dist = 300 + Math.random() * 200;
        
        p.x = centerX + Math.cos(angle) * dist;
        p.y = centerY + Math.sin(angle) * dist;
        
        var speed = 5 + progress * 10;
        p.vx = (centerX - p.x) / dist * speed;
        p.vy = (centerY - p.y) / dist * speed;
        p.size = 1.5;
        p.alpha = 0.8;
        p.color = '#7dd3fc';
        p.gravity = 0;
        p.friction = 1;
        p.life = 0;
        p.maxLife = 40;
      }
    }
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      if (callback) callback();
    }
  }
  
  animate();
}

// Data stream convergence effect
function triggerDataConverge(duration, callback) {
  var startTime = Date.now();
  var centerX = window.innerWidth / 2;
  var centerY = window.innerHeight / 2;
  
  function animate() {
    var elapsed = Date.now() - startTime;
    var progress = Math.min(elapsed / duration, 1);
    
    for (var i = 0; i < 3; i++) {
      var p = getParticle();
      if (!p) continue;
      
      var edge = Math.floor(Math.random() * 4);
      switch (edge) {
        case 0: p.x = Math.random() * window.innerWidth; p.y = 0; break;
        case 1: p.x = window.innerWidth; p.y = Math.random() * window.innerHeight; break;
        case 2: p.x = Math.random() * window.innerWidth; p.y = window.innerHeight; break;
        case 3: p.x = 0; p.y = Math.random() * window.innerHeight; break;
      }
      
      var angle = Math.atan2(centerY - p.y, centerX - p.x);
      var speed = 8 + progress * 8;
      
      p.vx = Math.cos(angle) * speed;
      p.vy = Math.sin(angle) * speed;
      p.size = 1.5;
      p.alpha = 0.6;
      p.color = '#38bdf8';
      p.gravity = 0;
      p.friction = 1;
      p.life = 0;
      p.maxLife = 30;
    }
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      // Final burst
      spawnGoldBurst(centerX, centerY, 40);
      if (callback) callback();
    }
  }
  
  animate();
}
