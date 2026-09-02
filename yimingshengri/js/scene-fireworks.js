// Scene: Fireworks

var fireworkSequence = [
  { delay: 0, x: 0.3, color: '#7dd3fc', text: null },
  { delay: 800, x: 0.7, color: '#c4b5fd', text: null },
  { delay: 1500, x: 0.5, color: '#fbbf24', text: '生日快乐' },
  { delay: 2500, x: 0.3, color: '#7dd3fc', text: null },
  { delay: 3200, x: 0.6, color: '#fde68a', text: '9岁！' },
  { delay: 4000, x: 0.4, color: '#c4b5fd', text: null },
  { delay: 5000, x: 0.5, color: '#fbbf24', text: '乙鸣🎂' },
  { delay: 5500, x: 0.7, color: '#7dd3fc', text: null }
];

var fireworksStartTime = 0;

function initFireworksScene() {
  var btn = document.getElementById('btn-final-transmission');
  btn.style.display = 'none';
  
  // Start fireworks sequence
  fireworksStartTime = Date.now();
  startFireworksSequence();
}

function startFireworksSequence() {
  fireworkSequence.forEach(function(fw) {
    setTimeout(function() {
      var x = window.innerWidth * fw.x;
      var targetY = 100 + Math.random() * (window.innerHeight * 0.3);
      createFirework(x, targetY, fw.color, fw.text);
    }, fw.delay);
  });
  
  // Show button after fireworks
  var lastDelay = fireworkSequence[fireworkSequence.length - 1].delay;
  
  setTimeout(function() {
    // Wait for last firework to finish
    setTimeout(function() {
      var btn = document.getElementById('btn-final-transmission');
      btn.style.display = 'inline-flex';
      btn.style.animation = 'fade-in 0.5s ease';
      
      btn.onclick = function() {
        saveProgress('final');
        startScene('final');
      };
    }, 3000);
  }, lastDelay);
}
