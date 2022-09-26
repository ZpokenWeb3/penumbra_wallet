import react from 'react';
class MetaMaskInpageProvider {
  constructor() {
    this.isPenumbra = true;
  }
}
let web3Shim = { currentProvider: MetaMaskInpageProvider };
var handler = {
  get: function (target, name) {
    return name in target ? target[name] : 37;
  },
};
web3Shim = new Proxy(web3Shim, handler);

Object.defineProperty(window, 'penumbra', {
  value: web3Shim,
  enumerable: false,
  configurable: true,
  writable: true,
});
