// Typewriter Effect

var typewriterQueue = [];
var isTyping = false;

function typewrite(element, text, speed, callback) {
  speed = speed || 60;
  var index = 0;
  var cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  
  element.textContent = '';
  element.appendChild(cursor);
  
  function type() {
    if (index < text.length) {
      cursor.before(text.charAt(index));
      index++;
      setTimeout(type, speed);
    } else {
      if (callback) callback();
    }
  }
  
  type();
}

function typewriteLines(container, lines, options) {
  options = options || {};
  var speed = options.speed || 60;
  var lineDelay = options.lineDelay || 100;
  var highlightWords = options.highlightWords || [];
  var callback = options.callback;
  
  container.innerHTML = '';
  var lineIndex = 0;
  
  function processLine() {
    if (lineIndex >= lines.length) {
      // Add final cursor
      var finalCursor = document.createElement('span');
      finalCursor.className = 'typewriter-cursor';
      container.appendChild(finalCursor);
      if (callback) callback();
      return;
    }
    
    var lineText = lines[lineIndex];
    var lineEl = document.createElement('p');
    lineEl.className = 'typewriter-line';
    
    // Check for highlights
    var isHighlight = false;
    highlightWords.forEach(function(word) {
      if (lineText.indexOf(word) !== -1) {
        isHighlight = true;
      }
    });
    if (isHighlight) {
      lineEl.classList.add('highlight');
    }
    
    container.appendChild(lineEl);
    
    var charIndex = 0;
    
    function typeChar() {
      if (charIndex < lineText.length) {
        lineEl.textContent += lineText.charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, speed);
      } else {
        lineIndex++;
        setTimeout(processLine, lineDelay);
      }
    }
    
    if (lineText === '') {
      lineEl.innerHTML = '&nbsp;';
      lineIndex++;
      setTimeout(processLine, lineDelay);
    } else {
      typeChar();
    }
  }
  
  processLine();
}

function typewriteGroups(container, groups, options) {
  options = options || {};
  var speed = options.speed || 60;
  var groupDelay = options.groupDelay || 800;
  var callback = options.callback;
  
  var groupIndex = 0;
  
  function processGroup() {
    if (groupIndex >= groups.length) {
      if (callback) callback();
      return;
    }
    
    var group = groups[groupIndex];
    var groupEl = document.createElement('div');
    groupEl.className = 'final-text-group';
    if (group.style) {
      groupEl.classList.add(group.style);
    }
    groupEl.style.opacity = '0';
    container.appendChild(groupEl);
    
    // Fade in group
    setTimeout(function() {
      groupEl.style.opacity = '1';
      groupEl.style.transition = 'opacity 0.5s ease';
    }, 50);
    
    // Add lines
    group.lines.forEach(function(line) {
      var p = document.createElement('p');
      if (line === '' || line === '\n') {
        p.innerHTML = '&nbsp;';
      } else if (group.style === 'climax' && line.indexOf('9岁生日快乐') !== -1) {
        p.className = 'climax-text';
        p.id = 'climax-9-text';
        p.textContent = line;
      } else {
        p.textContent = line;
      }
      groupEl.appendChild(p);
    });
    
    groupIndex++;
    setTimeout(processGroup, groupDelay);
  }
  
  processGroup();
}
