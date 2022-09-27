import { extensionApi } from '../utils/extensionApi';

injectScript();

function injectScript() {
  // try {
    // inject in-page script
    const s = document.createElement('script');
    s.src = extensionApi.runtime.getURL('inpage.js');
    s.onload = function () {
      (this as any).remove();
    };
    console.log(s);
    
    (document.head || document.documentElement).appendChild(s);
  // } catch (e) {
  //   console.error('Injection failed.', e);
  // }
}
