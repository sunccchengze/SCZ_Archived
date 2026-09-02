// Utility Functions

// Show toast notification
function showToast(text, duration) {
  duration = duration || 2000;
  var container = document.getElementById('toast-container');
  var toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = text;
  toast.style.setProperty('--toast-duration', (duration / 1000) + 's');
  container.appendChild(toast);
  
  setTimeout(function() {
    toast.remove();
  }, duration + 300);
}

// Show floating comment
function showFloatingComment(text) {
  var comment = document.getElementById('floating-comment');
  comment.textContent = text;
  comment.classList.remove('animate');
  void comment.offsetWidth; // Trigger reflow
  comment.classList.add('animate');
  
  setTimeout(function() {
    comment.classList.remove('animate');
  }, 4000);
}

// Trigger screen shake
function shakeScreen() {
  document.body.classList.add('shake');
  setTimeout(function() {
    document.body.classList.remove('shake');
  }, 300);
}

// Flash screen with color
function flashScreen(color, duration) {
  duration = duration || 0.3;
  var flash = document.createElement('div');
  flash.style.cssText = 'position:fixed;inset:0;z-index:1000;pointer-events:none;background:' + 
    (color === 'white' ? 'rgba(255,255,255,0.8)' : 
     color === 'gold' ? 'rgba(251,191,36,0.4)' : 
     color === 'purple' ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.5)') + 
    ';animation:screen-flash ' + duration + 's ease forwards;';
  document.body.appendChild(flash);
  setTimeout(function() {
    flash.remove();
  }, duration * 1000);
}

// Show easter egg card
function showEasterEggCard(options) {
  var overlay = document.getElementById('easter-egg-overlay');
  var card = document.getElementById('easter-egg-card');
  
  card.innerHTML = 
    '<p style="font-size:48px;margin-bottom:16px;">' + (options.icon || '🎁') + '</p>' +
    '<h3 class="font-cn-title" style="font-size:18px;color:var(--gold);margin-bottom:12px;">' + options.title + '</h3>' +
    '<p style="font-size:14px;color:var(--silver-200);white-space:pre-line;line-height:1.7;">' + options.content + '</p>';
  
  overlay.classList.add('visible');
  
  var duration = options.duration || 3000;
  setTimeout(function() {
    overlay.classList.remove('visible');
  }, duration);
}

// Format time from milliseconds
function formatTime(ms) {
  var totalSeconds = Math.floor(ms / 1000);
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds % 60;
  return minutes + ' 分 ' + seconds + ' 秒';
}

// Delay helper
function delay(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}

// Generate random hex string
function randomHex(length) {
  var chars = '0123456789ABCDEF';
  var result = '';
  for (var i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Lerp function
function lerp(a, b, t) {
  return a + (b - a) * t;
}

// Clamp function
function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

// Distance between two points
function distance(x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

// Check if device is mobile
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
