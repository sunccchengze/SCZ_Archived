// Scene: Medal Merge Ceremony

function initMergeScene() {
  var stage = document.getElementById('merge-stage');
  var stats = document.getElementById('merge-stats');
  var certLoading = document.getElementById('cert-loading');
  var hiddenPrompt = document.getElementById('hidden-prompt');
  
  // Reset
  stage.innerHTML = '';
  stats.style.display = 'none';
  certLoading.style.display = 'none';
  hiddenPrompt.style.display = 'none';
  
  // Hide progress bar for this scene
  document.getElementById('progress-bar').classList.remove('visible');
  
  // Start medal fly animation
  setTimeout(startMedalFly, 500);
}

function startMedalFly() {
  var stage = document.getElementById('merge-stage');
  var medals = ['🔭', '🌌', '💻', '🧠', '🏆'];
  var stageRect = stage.getBoundingClientRect();
  
  // Create medal elements
  medals.forEach(function(medal, i) {
    var el = document.createElement('div');
    el.className = 'merge-medal';
    el.textContent = medal;
    el.style.left = (20 + i * 60) + 'px';
    el.style.top = '80px';
    el.style.opacity = '0';
    stage.appendChild(el);
    
    // Fly in animation
    setTimeout(function() {
      el.style.opacity = '1';
      el.style.transform = 'scale(1.2)';
      
      // Add glow
      setTimeout(function() {
        el.style.transform = 'scale(1)';
        el.style.textShadow = '0 0 20px rgba(251, 191, 36, 0.5)';
      }, 200);
    }, i * 300);
  });
  
  // After all medals appear, start converging
  setTimeout(convergeMedals, 2000);
}

function convergeMedals() {
  var stage = document.getElementById('merge-stage');
  var medalEls = stage.querySelectorAll('.merge-medal');
  var stageRect = stage.getBoundingClientRect();
  var centerX = stageRect.width / 2 - 16;
  
  // Move to center
  medalEls.forEach(function(el, i) {
    el.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
    el.style.left = centerX + 'px';
    el.style.top = '80px';
  });
  
  // Merge explosion
  setTimeout(function() {
    // Flash and burst
    flashScreen('gold', 0.3);
    spawnGoldBurst(window.innerWidth / 2, stageRect.top + 80, 50);
    
    // Replace with single star
    stage.innerHTML = '';
    var star = document.createElement('div');
    star.className = 'merge-medal';
    star.textContent = '⭐';
    star.style.cssText = 'left:50%;top:60px;transform:translateX(-50%) scale(2);font-size:48px;text-shadow:0 0 30px rgba(251,191,36,0.8);';
    stage.appendChild(star);
    
    // Add waves
    for (var i = 0; i < 3; i++) {
      (function(delay) {
        setTimeout(function() {
          var wave = document.createElement('div');
          wave.style.cssText = 'position:absolute;left:50%;top:80px;width:20px;height:20px;border:2px solid var(--gold);border-radius:50%;transform:translateX(-50%);animation:gold-burst 0.8s ease forwards;';
          stage.appendChild(wave);
          setTimeout(function() { wave.remove(); }, 800);
        }, delay * 300);
      })(i);
    }
    
    // Add title
    setTimeout(function() {
      var title = document.createElement('p');
      title.className = 'font-cn-title';
      title.style.cssText = 'text-align:center;margin-top:120px;font-size:18px;color:var(--gold);animation:fade-in 0.5s ease;';
      title.innerHTML = '⭐ 星际探险家 · STAR EXPLORER<br><span class="font-label" style="font-size:12px;color:var(--silver-300);">一级认证</span>';
      stage.appendChild(title);
    }, 500);
    
    // Show stats
    setTimeout(showMergeStats, 1500);
  }, 1000);
}

function showMergeStats() {
  var stats = document.getElementById('merge-stats');
  stats.style.display = 'block';
  
  // After stats shown, start fake certificate loading
  setTimeout(startFakeCertLoading, 2000);
}

function startFakeCertLoading() {
  var stats = document.getElementById('merge-stats');
  var certLoading = document.getElementById('cert-loading');
  
  stats.style.display = 'none';
  certLoading.style.display = 'block';
  
  var progressFill = document.getElementById('fake-progress-fill');
  var progressText = document.getElementById('fake-progress-text');
  var progress = 0;
  
  var interval = setInterval(function() {
    progress += Math.random() * 8;
    
    if (progress > 87) {
      progress = 87;
      clearInterval(interval);
      
      // Glitch and reveal hidden level
      setTimeout(function() {
        flashScreen('purple', 0.3);
        shakeScreen();
        
        setTimeout(function() {
          certLoading.style.display = 'none';
          showHiddenPrompt();
        }, 500);
      }, 1000);
    }
    
    progressFill.style.width = progress + '%';
    progressText.textContent = Math.floor(progress) + '%';
  }, 300);
}

function showHiddenPrompt() {
  var hiddenPrompt = document.getElementById('hidden-prompt');
  hiddenPrompt.style.display = 'block';
  
  document.getElementById('btn-enter-hidden').onclick = function() {
    saveProgress('hidden');
    startScene('hidden');
  };
  
  document.getElementById('btn-skip-hidden').onclick = function() {
    setState({ hiddenSkipped: true });
    saveProgress('certificate');
    startScene('certificate');
  };
}
