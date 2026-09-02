// Scene: Final Transmission

var egg4Found = false;
var climaxClickCount = 0;
var climaxClickTimer = null;

function initFinalScene() {
  var state = getState();
  egg4Found = state.eggsFound.indexOf('egg4') !== -1;
  
  var textArea = document.getElementById('final-text-area');
  var map = document.getElementById('china-map');
  var deliveryStatus = document.getElementById('delivery-status');
  
  // Reset
  textArea.innerHTML = '';
  map.style.display = 'none';
  deliveryStatus.style.display = 'none';
  
  // Start final text sequence
  setTimeout(startFinalText, 500);
}

function startFinalText() {
  var textArea = document.getElementById('final-text-area');
  
  var groups = [
    { lines: ['乙鸣。', '', '五关全过了。', '', '我就知道你行。'], style: 'normal' },
    { lines: ['你哥人在西安，今天没法回去。', '但这个东西，花了我一整个晚上。', '你觉得酷就行。'], style: 'normal' },
    { lines: ['9岁了啊。', '', '去年还8岁，一转眼就9了。', '明年就两位数了，离谱。'], style: 'normal' },
    { lines: ['没什么大道理要讲。', '就一句——', '', '以后想去哪就去哪，想干啥就干啥。', '你哥支持。'], style: 'normal' },
    { lines: ['好了。', '', '乙鸣！！', '9岁生日快乐！！！🎂🎉🚀'], style: 'climax' },
    { lines: ['—— 你哥', '2026.06.02', '西安交通大学'], style: 'signature' }
  ];
  
  typewriteGroups(textArea, groups, {
    groupDelay: 1200,
    callback: function() {
      // Setup climax easter egg
      setupClimaxEasterEgg();
      
      // Show map after delay
      setTimeout(showChinaMap, 3000);
    }
  });
}

function setupClimaxEasterEgg() {
  // Find the climax text
  setTimeout(function() {
    var climaxText = document.getElementById('climax-9-text');
    if (!climaxText) return;
    
    climaxText.onclick = function() {
      if (egg4Found) return;
      
      climaxClickCount++;
      
      if (climaxClickTimer) clearTimeout(climaxClickTimer);
      
      climaxClickTimer = setTimeout(function() {
        climaxClickCount = 0;
      }, 2000);
      
      if (climaxClickCount >= 3) {
        egg4Found = true;
        saveEasterEgg('egg4');
        spawnStarVortex(1000);
        climaxClickCount = 0;
      }
    };
  }, 100);
}

function showChinaMap() {
  var map = document.getElementById('china-map');
  var deliveryStatus = document.getElementById('delivery-status');
  var arcPath = document.getElementById('arc-path');
  var arcDot = document.getElementById('arc-dot');
  
  map.style.display = 'block';
  map.style.animation = 'fade-in 1s ease';
  
  // Animate arc path
  setTimeout(function() {
    arcPath.style.transition = 'stroke-dashoffset 2s ease';
    arcPath.style.strokeDashoffset = '0';
    
    // Animate dot along path
    animateArcDot();
  }, 500);
  
  // Show delivery status
  setTimeout(function() {
    deliveryStatus.style.display = 'block';
    deliveryStatus.style.animation = 'fade-in 1s ease';
  }, 2500);
  
  // Go to wish scene after delay
  setTimeout(function() {
    saveProgress('wish');
    startScene('wish');
  }, 7000);
}

function animateArcDot() {
  var arcDot = document.getElementById('arc-dot');
  var arcPath = document.getElementById('arc-path');
  
  // Simple animation using CSS
  arcDot.style.transition = 'none';
  arcDot.setAttribute('cx', '195');
  arcDot.setAttribute('cy', '180');
  
  // Animate along path
  var duration = 2000;
  var startTime = Date.now();
  
  // Key points along the arc
  var points = [
    { x: 195, y: 180 },
    { x: 220, y: 150 },
    { x: 250, y: 140 },
    { x: 280, y: 165 }
  ];
  
  function animate() {
    var elapsed = Date.now() - startTime;
    var progress = Math.min(elapsed / duration, 1);
    
    // Simple interpolation
    var idx = Math.min(Math.floor(progress * (points.length - 1)), points.length - 2);
    var localProgress = (progress * (points.length - 1)) - idx;
    
    var x = lerp(points[idx].x, points[idx + 1].x, localProgress);
    var y = lerp(points[idx].y, points[idx + 1].y, localProgress);
    
    arcDot.setAttribute('cx', x);
    arcDot.setAttribute('cy', y);
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }
  
  animate();
}
