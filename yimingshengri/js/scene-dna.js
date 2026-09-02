// Scene: DNA Scan

var scanProgress = 0;
var scanInterval = null;
var isScanning = false;
var scanComplete = false;

function initDnaScene() {
  var scanArea = document.getElementById('scan-area');
  var scanStatus = document.getElementById('scan-status');
  var scanProgressFill = document.getElementById('scan-progress-fill');
  var profileCard = document.getElementById('profile-card');
  var scanData = document.getElementById('scan-data');
  
  // Reset
  scanProgress = 0;
  isScanning = false;
  scanComplete = false;
  scanArea.classList.remove('complete', 'scanning');
  scanProgressFill.style.width = '0%';
  scanStatus.textContent = '> AWAITING INPUT...';
  profileCard.classList.remove('visible');
  profileCard.style.display = 'none';
  
  // Add floating data bits
  scanData.innerHTML = '';
  for (var i = 0; i < 6; i++) {
    var bit = document.createElement('span');
    bit.className = 'scan-data-bit';
    bit.textContent = randomHex(8);
    bit.style.left = (10 + Math.random() * 80) + '%';
    bit.style.top = (10 + Math.random() * 80) + '%';
    bit.style.transform = 'rotate(' + (Math.random() * 30 - 15) + 'deg)';
    scanData.appendChild(bit);
  }
  
  // Touch/mouse events
  scanArea.addEventListener('mousedown', startScanning);
  scanArea.addEventListener('mouseup', stopScanning);
  scanArea.addEventListener('mouseleave', stopScanning);
  scanArea.addEventListener('touchstart', startScanning);
  scanArea.addEventListener('touchend', stopScanning);
}

function startScanning(e) {
  if (scanComplete) return;
  e.preventDefault();
  
  isScanning = true;
  var scanArea = document.getElementById('scan-area');
  scanArea.classList.add('scanning');
  
  scanInterval = setInterval(updateScan, 50);
}

function stopScanning() {
  if (scanComplete) return;
  
  isScanning = false;
  var scanArea = document.getElementById('scan-area');
  scanArea.classList.remove('scanning');
  
  if (scanInterval) {
    clearInterval(scanInterval);
    scanInterval = null;
  }
  
  document.getElementById('scan-status').textContent = '> AWAITING INPUT...';
}

function updateScan() {
  if (!isScanning || scanComplete) return;
  
  scanProgress += 1.5;
  
  var scanProgressFill = document.getElementById('scan-progress-fill');
  var scanStatus = document.getElementById('scan-status');
  
  scanProgressFill.style.width = Math.min(scanProgress, 100) + '%';
  
  // Update status text based on progress
  if (scanProgress < 33) {
    scanStatus.textContent = '> SCANNING BIOMETRIC SIGNATURE...';
  } else if (scanProgress < 66) {
    scanStatus.textContent = '> COMPARING DNA SEQUENCE...';
  } else {
    scanStatus.textContent = '> MATCH RATE: ' + Math.floor(90 + scanProgress * 0.1) + '.' + Math.floor(Math.random() * 100).toString().padStart(2, '0') + '%';
  }
  
  // Update floating data bits
  var bits = document.querySelectorAll('.scan-data-bit');
  if (scanProgress > 66) {
    bits.forEach(function(bit) {
      if (Math.random() < 0.3) {
        bit.textContent = randomHex(8);
      }
    });
  }
  
  if (scanProgress >= 100) {
    completeScan();
  }
}

function completeScan() {
  scanComplete = true;
  isScanning = false;
  
  if (scanInterval) {
    clearInterval(scanInterval);
    scanInterval = null;
  }
  
  var scanArea = document.getElementById('scan-area');
  var scanStatus = document.getElementById('scan-status');
  var dnaDesc = document.getElementById('dna-desc');
  var scanProgressBar = document.getElementById('scan-progress-bar');
  
  scanArea.classList.remove('scanning');
  scanArea.classList.add('complete');
  scanStatus.textContent = '> MATCH RATE: 99.97% ✓';
  scanStatus.style.color = 'var(--success)';
  
  // Green wave effect
  flashScreen('green', 0.3);
  
  // Hide scan elements, show profile card
  setTimeout(function() {
    scanArea.style.display = 'none';
    scanProgressBar.style.display = 'none';
    scanStatus.style.display = 'none';
    dnaDesc.style.display = 'none';
    
    showProfileCard();
  }, 800);
}

function showProfileCard() {
  var profileCard = document.getElementById('profile-card');
  profileCard.style.display = 'block';
  
  // Animate rows appearing one by one
  var rows = profileCard.querySelectorAll('.profile-row');
  rows.forEach(function(row, index) {
    row.style.opacity = '0';
    row.style.animation = 'row-fade-in 0.3s ease forwards';
    row.style.animationDelay = (index * 0.1) + 's';
  });
  
  setTimeout(function() {
    profileCard.classList.add('visible');
  }, 50);
  
  // Accept button
  var btnAccept = document.getElementById('btn-accept');
  btnAccept.onclick = function() {
    saveProgress('briefing');
    startScene('briefing');
  };
}
