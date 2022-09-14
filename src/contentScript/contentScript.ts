import { getCompactBlockRange } from '../utils/getCompactBlockRange';

const injectContent = `${getCompactBlockRange()}
`;

let s: any = document.createElement('script');
s.type = 'text/javascript';
const scriptNode = document.createTextNode(injectContent);
s.appendChild(scriptNode);
(document.head || document.documentElement).appendChild(s);
s.parentNode.removeChild(s);

var port: any;

function setupPortIfNeeded() {
  if (!port && chrome && chrome.runtime) {
    port = chrome.runtime.connect('', { name: 'content' });
    port.postMessage({ action: 'init' });
    port.onDisconnect.addListener(() => {
      port = null;
      window.removeEventListener('message', handleMessageEvent, false);
    });
  }
}

function sendGRPCNetworkCall(data: any) {
  setupPortIfNeeded();
  if (port) {
    port.postMessage({
      action: 'gRPCNetworkCall',
      target: 'panel',
      data,
    });
  }
}

function handleMessageEvent(event: any) {
  if (event.source != window) return;
  if (event.data.type && event.data.type == '__GRPCWEB_DEVTOOLS__') {
    sendGRPCNetworkCall(event.data);
  }
}

window.addEventListener('message', handleMessageEvent, false);
