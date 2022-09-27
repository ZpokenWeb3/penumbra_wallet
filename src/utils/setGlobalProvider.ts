// import { CompactBlockRangeRequest } from '../../gen/client/oblivious_pb';

export const setGlobalProvider = () => {
  class PenumbraInpageProvider {
    public isPenumbra: true;
    public chainId: string | null;
    constructor() {
      this.isPenumbra = true;
      this.chainId = null;
      this.request = this.request.bind(this);
    }

    request() {
    //   const compactBlockRangeRequest = new CompactBlockRangeRequest();
    }
  }

  const provider = new PenumbraInpageProvider();

  var handler = {
    deleteProperty: () => true,
  };
  const proxiedProvider = new Proxy(provider, handler);

  (window as any).penumbra = proxiedProvider;
  window.dispatchEvent(new Event('penumbra#initialized'));
  console.log((window as any).penumbra);
};
