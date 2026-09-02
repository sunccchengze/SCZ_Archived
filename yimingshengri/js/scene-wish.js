// Scene: Wish

var egg5Found = false;

function initWishScene() {
  var state = getState();
  egg5Found = state.eggsFound.indexOf('egg5') !== -1;
  
  var trigger = document.getElementById('egg5-trigger');
  var wishCard = document.getElementById('wish-card');
  var wishSuccess = document.getElementById('wish-success');
  var endingText = document.getElementById('ending-text');
  
  // Reset
  trigger.style.display = 'block';
  wishCard.style.display = 'none';
  wishSuccess.style.display = 'none';
  endingText.style.display = 'none';
  document.getElementById('wish-input').value = '';
  
  // Easter egg trigger
  trigger.onclick = function() {
    if (!egg5Found) {
      egg5Found = true;
      saveEasterEgg('egg5');
    }
    
    trigger.style.display = 'none';
    wishCard.style.display = 'block';
  };
  
  // Send wish button
  document.getElementById('btn-send-wish').onclick = sendWish;
}

async function sendWish() {
  var wishInput = document.getElementById('wish-input');
  var wish = wishInput.value.trim();
  
  if (!wish) {
    showToast('写点什么再发送吧', 1500);
    return;
  }
  
  var btn = document.getElementById('btn-send-wish');
  btn.disabled = true;
  btn.textContent = '发送中...';
  
  try {
    var state = getState();
    var response = await fetch(CONFIG.WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        wish: wish,
        timestamp: new Date().toISOString(),
        gameData: {
          totalTime: (state.endTime || Date.now()) - (state.startTime || Date.now()),
          wrongCount: state.wrongCount,
          gameScore: state.gameScore,
          hiddenCompleted: state.hiddenCompleted,
          eggsFound: state.eggsFound
        }
      })
    });
    
    var data = await response.json();
    
    if (response.ok && data.ok) {
      setState({ wishSent: true, wish: wish });
      showWishSuccess(false);
    } else {
      throw new Error(data.error || 'send_failed');
    }
  } catch (e) {
    console.error('Wish send error:', e);
    setState({ wish: wish });
    showWishSuccess(true);
  }
}

function showWishSuccess(isFallback) {
  var wishCard = document.getElementById('wish-card');
  var wishSuccess = document.getElementById('wish-success');
  
  wishCard.style.display = 'none';
  wishSuccess.style.display = 'block';
  
  var html = '<p style="font-size:32px;margin-bottom:16px;">✨</p>';
  
  if (isFallback) {
    html += '<p style="font-size:18px;color:var(--gold);">愿望已记录！</p>';
    html += '<p>收到了。尽力。</p>';
    html += '<p class="voucher-code">GG-LOVES-YIMING-0602</p>';
    html += '<p style="font-size:13px;color:var(--silver-400);">（截图保存，见面时出示）</p>';
    html += '<p style="font-size:13px;color:var(--cyan-glow);margin-top:12px;">📸 把愿望截图发给你哥，他才看得到。</p>';
  } else {
    html += '<p style="font-size:18px;color:var(--gold);">愿望已发送至西安！</p>';
    html += '<p>收到了。尽力。</p>';
    html += '<p class="voucher-code">GG-LOVES-YIMING-0602</p>';
    html += '<p style="font-size:13px;color:var(--silver-400);">（截图保存，见面时出示）</p>';
  }
  
  wishSuccess.innerHTML = html;
  
  // Show ending after delay
  setTimeout(showEnding, 3000);
}

function showEnding() {
  var endingText = document.getElementById('ending-text');
  endingText.style.display = 'block';
  
  var lines = [
    '好了，这个页面到头了。',
    '',
    '乙鸣，9岁快乐。',
    '下次见。👊'
  ];
  
  var html = '';
  var lineIndex = 0;
  
  function addLine() {
    if (lineIndex >= lines.length) {
      // Add final icon
      setTimeout(function() {
        endingText.innerHTML += '<p class="ending-icon">🌌</p>';
      }, 500);
      return;
    }
    
    var line = lines[lineIndex];
    if (line === '') {
      html += '<p>&nbsp;</p>';
    } else {
      html += '<p>' + line + '</p>';
    }
    endingText.innerHTML = html;
    
    lineIndex++;
    setTimeout(addLine, 600);
  }
  
  addLine();
}
