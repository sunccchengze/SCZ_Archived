// Scene: Password

var passwordWrongCount = 0;
var passwordCorrect = '0602';

function initPasswordScene() {
  var typewriterArea = document.getElementById('password-typewriter');
  var passwordArea = document.getElementById('password-area');
  var passwordInput = document.getElementById('password-input');
  var passwordError = document.getElementById('password-error');
  
  // Reset
  typewriterArea.innerHTML = '';
  passwordArea.classList.remove('visible');
  passwordInput.value = '';
  passwordError.textContent = '';
  passwordWrongCount = 0;
  
  // Start with black screen, then matrix rain
  setTimeout(function() {
    initMatrixRain();
  }, 2000);
  
  // Start typewriter after matrix starts
  setTimeout(function() {
    startPasswordTypewriter();
  }, 5000);
}

function startPasswordTypewriter() {
  var typewriterArea = document.getElementById('password-typewriter');
  var passwordArea = document.getElementById('password-area');
  
  var lines = [
    '⚠ 检测到一道加密星际信号',
    '',
    '信号来源：中国 · 西安 · 西安交通大学',
    '信号目标：中国 · 山东 · 日照',
    '信号距离：约 1,000 公里',
    '信号类型：绝密生日任务',
    '发送者代号：老哥',
    '接收者代号：孙鸣泽',
    '',
    '该信号已被加密，请验证身份以解锁。'
  ];
  
  var highlightWords = ['西安交通大学', '日照', '绝密', '老哥', '孙鸣泽'];
  
  typewriteLines(typewriterArea, lines, {
    speed: 50,
    lineDelay: 150,
    highlightWords: highlightWords,
    callback: function() {
      // Show password area after typing
      setTimeout(function() {
        passwordArea.classList.add('visible');
        document.getElementById('password-input').focus();
      }, 500);
    }
  });
}

function setupPasswordInput() {
  var passwordInput = document.getElementById('password-input');
  
  passwordInput.addEventListener('input', function(e) {
    // Only allow numbers
    this.value = this.value.replace(/[^0-9]/g, '');
    
    // Auto submit when 4 digits
    if (this.value.length === 4) {
      setTimeout(function() {
        checkPassword();
      }, 200);
    }
  });
  
  passwordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && this.value.length === 4) {
      checkPassword();
    }
  });
}

function checkPassword() {
  var passwordInput = document.getElementById('password-input');
  var passwordError = document.getElementById('password-error');
  var value = passwordInput.value;
  
  if (value === passwordCorrect) {
    // Correct!
    passwordInput.classList.remove('error');
    passwordInput.classList.add('success');
    passwordCorrectTransition();
  } else {
    // Wrong
    passwordWrongCount++;
    incrementWrongCount();
    
    passwordInput.classList.add('error');
    shakeScreen();
    
    setTimeout(function() {
      passwordInput.classList.remove('error');
    }, 300);
    
    // Error messages based on attempt
    var errorMessages = [
      '⚠ 密码错误 · 警告：再错3次本信号将自毁',
      '💡 提示：想想接收者最重要的日子',
      '💡 再提示：_月_日？（四个数字）',
      '💡 好吧最后提示：06__'
    ];
    
    if (passwordWrongCount <= 4) {
      passwordError.textContent = errorMessages[passwordWrongCount - 1];
    } else {
      // Give up, auto fill
      passwordError.textContent = '⚠ ……算了，密码是 0602，快进来吧 😂';
      setTimeout(function() {
        passwordInput.value = '0602';
        setTimeout(checkPassword, 500);
      }, 1000);
    }
    
    passwordInput.value = '';
    passwordInput.focus();
  }
}

function passwordCorrectTransition() {
  // Flash white
  flashScreen('white', 0.4);
  
  // Stop matrix rain and converge
  stopMatrixRain();
  
  // Data converge effect
  triggerDataConverge(1500, function() {
    // Save progress and go to DNA
    setState({ startTime: Date.now() });
    saveProgress('dna');
    startScene('dna');
  });
}

// Initialize input listener when DOM ready
document.addEventListener('DOMContentLoaded', function() {
  setupPasswordInput();
});
