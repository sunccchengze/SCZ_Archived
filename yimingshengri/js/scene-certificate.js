// Scene: Certificate

var egg3Found = false;

function initCertificateScene() {
  var state = getState();
  egg3Found = state.eggsFound.indexOf('egg3') !== -1;
  
  // Hide status bar and progress bar
  document.getElementById('status-bar').classList.remove('visible');
  document.getElementById('progress-bar').classList.remove('visible');
  
  // Update certificate data
  updateCertificateData();
  
  // Setup event listeners
  setupCertificateEvents();
}

function updateCertificateData() {
  var state = getState();
  
  // Time
  var totalTime = (state.endTime || Date.now()) - (state.startTime || Date.now());
  document.getElementById('cert-time').textContent = formatTime(totalTime);
  
  // Wrong count
  document.getElementById('cert-wrong').textContent = state.wrongCount;
  
  // Game score
  document.getElementById('cert-energy').textContent = state.gameScore;
  
  // Hidden medal line
  var hiddenMedalLine = document.getElementById('hidden-medal-line');
  if (state.hiddenCompleted) {
    hiddenMedalLine.innerHTML = '👑 超级天才 · GENIUS（隐藏成就）';
    hiddenMedalLine.style.color = 'var(--gold)';
  } else if (state.hiddenSkipped) {
    hiddenMedalLine.innerHTML = '❓ ???（你错过了一个秘密）';
    hiddenMedalLine.style.color = 'var(--silver-400)';
  }
  
  // Comment based on wrong count
  var comment = '';
  if (state.wrongCount === 0) {
    comment = '零失误。完美通关。没什么好说的。';
  } else if (state.wrongCount <= 3) {
    comment = '小磕小碰，不影响天才认证。';
  } else if (state.wrongCount <= 6) {
    comment = '绕了点路，但你到了。这就够了。';
  } else {
    comment = '一路撞墙但没放弃，这比聪明更牛。';
  }
  document.getElementById('cert-comment').textContent = comment;
}

function setupCertificateEvents() {
  // Share buttons
  var shareButtons = document.querySelectorAll('.share-btn');
  shareButtons.forEach(function(btn) {
    btn.onclick = function() {
      showToast('不管给谁，你哥都已经看到了 👀', 1500);
      setTimeout(function() {
        showToast('📸 长按证书截图保存', 3000);
      }, 1800);
    };
  });
  
  // Easter egg on issuer
  var issuer = document.getElementById('cert-issuer');
  issuer.onclick = function() {
    if (egg3Found) return;
    egg3Found = true;
    saveEasterEgg('egg3');
    showToast('该机构由你哥一人组成，经费为零，全靠爱发电', 3000);
  };
  
  // Retry link
  var retryLink = document.getElementById('retry-link');
  retryLink.onclick = function() {
    if (confirm('确定要重新挑战吗？所有进度将被清空。')) {
      clearAllData();
      location.reload();
    }
  };
  
  // Go to cake button
  document.getElementById('btn-to-cake').onclick = function() {
    saveProgress('cake');
    startScene('cake');
  };
}
