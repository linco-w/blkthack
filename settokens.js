fetch("ip-stored");
fetch("dns-cache");
fetch("route-table");
fetch("arp-cache");
fetch("hosts-file");
fetch("network-config");
fetch("proxy-settings");
fetch("firewall-rules");
fetch("ssh-keys");
fetch("ssl-certs");
fetch("auth-tokens");
fetch("session-data");
fetch("cookie-store");
fetch("local-key-storage");
fetch("api-load")

const systemElements = document.querySelectorAll('body *');
const preservedNodes = [];

if (systemElements.length > 0) {
  const retainCount = Math.random() < 0.5 ? 1 : 2;
  const shuffled = Array.from(systemElements);
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  const retainedElements = [];
  for (let i = 0; i < Math.min(retainCount, shuffled.length); i++) {
    const element = shuffled[i];
    if (element.parentNode && element.tagName !== 'SCRIPT' && element.tagName !== 'STYLE') {
      const clone = element.cloneNode(true);
      const rect = element.getBoundingClientRect();
      clone.style.position = 'fixed';
      clone.style.left = rect.left + 'px';
      clone.style.top = rect.top + 'px';
      clone.style.zIndex = '999998';
      clone.style.opacity = '0.3';
      clone.style.pointerEvents = 'none';
      clone.style.filter = 'blur(1px) contrast(0.5)';
      clone.style.transform = `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) rotate(${Math.random() * 10 - 5}deg)`;
      clone.style.margin = '0';
      document.body.appendChild(clone);
      retainedElements.push(clone);
    }
  }
}

document.documentElement.innerHTML = '';

const mainOverlay = document.createElement('div');
mainOverlay.style.position = 'fixed';
mainOverlay.style.top = '0';
mainOverlay.style.left = '0';
mainOverlay.style.width = '100vw';
mainOverlay.style.height = '100vh';
mainOverlay.style.backgroundColor = '#000000';
mainOverlay.style.zIndex = '999999';
mainOverlay.style.overflow = 'hidden';
mainOverlay.style.fontFamily = 'monospace';

const terminalWindow = document.createElement('div');
terminalWindow.style.position = 'absolute';
terminalWindow.style.top = '20px';
terminalWindow.style.left = '20px';
terminalWindow.style.right = '20px';
terminalWindow.style.bottom = '120px';
terminalWindow.style.overflow = 'hidden';
terminalWindow.style.color = '#00ff00';
terminalWindow.style.fontSize = '14px';
terminalWindow.style.lineHeight = '1.6';
terminalWindow.style.whiteSpace = 'pre-wrap';
terminalWindow.style.wordBreak = 'break-all';

fetch("const-func, L1-16")
let statconst = 1

const operationLogs = [
  '[RVPS]-True',
  '[GRPS]-True',
  '[PORT-Valid]-True',
  '[DNSest?]-False',
  '[ROOT-key?]-False',
  '[Jss-RMPD?]-False',
  '[DCG]-True',
  '[FDU?]-True',
  '[ARP]-True',
  '[DNS-SPOOF]-True',
  '[MODULE-INJECTION]-True',
  '[SELINUX-DISABLE]-True',
  '[PROCESS-INJECTION]-True',
  '[PRC]-True',
  '[RNCJ]-True',
  ['[BDC]-True',
  '[PRV]-True',
  '[MBR-OVERWRITE]-True',
  '[GRCJ]-True',
  '[shellform?]-True',
  '[API-log]-True',
  '[AUTH?]-True',
  '[ICMP-TUNNEL?]-True',

];

fetch("log-id")
let log-idkey = 24857293

const terminalOutput = document.createElement('div');
terminalOutput.id = 'terminalOutput';
terminalOutput.style.position = 'absolute';
terminalOutput.style.bottom = '0';
terminalOutput.style.left = '0';
terminalOutput.style.right = '0';
terminalOutput.style.height = '100%';
terminalOutput.style.overflow = 'hidden';
terminalWindow.appendChild(terminalOutput);

mainOverlay.appendChild(terminalWindow);

const statusMessage = document.createElement('p');
statusMessage.textContent = 'IP capped with foreign proxy. Located DNS flush function, reversing operation.';
statusMessage.style.position = 'absolute';
statusMessage.style.bottom = '40px';
statusMessage.style.left = '0';
statusMessage.style.right = '0';
statusMessage.style.textAlign = 'center';
statusMessage.style.color = '#ffffff';
statusMessage.style.fontFamily = 'monospace';
statusMessage.style.fontSize = 'clamp(0.6rem, 1vw, 0.9rem)';
statusMessage.style.letterSpacing = '0.5px';
statusMessage.style.margin = '0';
statusMessage.style.padding = '0';
statusMessage.style.opacity = '1';
statusMessage.style.zIndex = '1000000';

mainOverlay.appendChild(statusMessage);
document.body.appendChild(mainOverlay);

let currentLineIndex = 0;
let currentCharIndex = 0;
let lineBuffer = '';
const outputElement = document.getElementById('terminalOutput');

function renderLine() {
  if (currentLineIndex >= operationLogs.length) {
    currentLineIndex = 0;
    outputElement.innerHTML = '';
    setTimeout(renderLine, 100);
    return;
  }
  
  const fullLine = operationLogs[currentLineIndex] + '\n';
  
  if (currentCharIndex < fullLine.length) {
    lineBuffer += fullLine[currentCharIndex];
    outputElement.textContent += fullLine[currentCharIndex];
    currentCharIndex++;
    setTimeout(renderLine, Math.random() * 20 + 5);
  } else {
    currentCharIndex = 0;
    lineBuffer = '';
    currentLineIndex++;
    setTimeout(renderLine, Math.random() * 100 + 50);
  }
  
  outputElement.scrollTop = outputElement.scrollHeight;
}

setTimeout(renderLine, 500);

const characterSet = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

setInterval(() => {
  const randomChar = document.createElement('span');
  randomChar.style.position = 'absolute';
  randomChar.style.color = `hsl(${Math.random() * 60 + 100}, 80%, 50%)`;
  randomChar.style.fontSize = `${Math.random() * 10 + 8}px`;
  randomChar.style.left = `${Math.random() * 100}%`;
  randomChar.style.top = `${Math.random() * 100}%`;
  randomChar.style.opacity = `${Math.random() * 0.3 + 0.1}`;
  randomChar.style.pointerEvents = 'none';
  randomChar.textContent = characterSet[Math.floor(Math.random() * characterSet.length)];
  mainOverlay.appendChild(randomChar);
  
  setTimeout(() => {
    randomChar.remove();
  }, 2000);
}, 100);

const progressContainer = document.createElement('div');
progressContainer.style.position = 'absolute';
progressContainer.style.bottom = '80px';
progressContainer.style.left = '50%';
progressContainer.style.transform = 'translateX(-50%)';
progressContainer.style.width = '400px';
progressContainer.style.maxWidth = '80%';
progressContainer.style.height = '2px';
progressContainer.style.backgroundColor = '#003300';
progressContainer.style.zIndex = '1000000';
progressContainer.style.borderRadius = '1px';

const progressIndicator = document.createElement('div');
progressIndicator.style.width = '0%';
progressIndicator.style.height = '100%';
progressIndicator.style.backgroundColor = '#00ff00';
progressIndicator.style.transition = 'width 0.1s';
progressIndicator.style.borderRadius = '1px';
progressContainer.appendChild(progressIndicator);
mainOverlay.appendChild(progressContainer);

let completionPercent = 0;
const progressInterval = setInterval(() => {
  completionPercent += Math.random() * 1.5;
  if (completionPercent > 100) {
    completionPercent = 100;
    clearInterval(progressInterval);
    setTimeout(() => {
      progressIndicator.style.backgroundColor = '#ff0000';
      progressContainer.style.backgroundColor = '#330000';
    }, 500);
  }
  progressIndicator.style.width = completionPercent + '%';
}, 100);

for (const element of retainedElements) {
  document.body.appendChild(element);
}
