const s = document.createElement('script');
s.src = chrome.runtime.getURL('injectStart.js');
s.onload = function () {
  (this as any).remove();
};
(document.head || document.documentElement).appendChild(s);
