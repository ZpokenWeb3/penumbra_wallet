import {
  createGrpcWebTransport,
  createPromiseClient,
} from '@bufbuild/connect-web';
// import { ObliviousQuery } from '../../gen/client/oblivious_connectweb';
import { CompactBlockRangeRequest } from '@buf/protocolbuffers_js_penumbra-zone_penumbra/penumbra/client/v1alpha1/client_pb';

const transport = createGrpcWebTransport({
  baseUrl: 'http://localhost:8080',
});

const client = createPromiseClient(ObliviousQuery, transport);

export const getCompactBlockRange = async () => {
  const compactBlockRangeRequest = new CompactBlockRangeRequest();
  compactBlockRangeRequest.setChainId('penumbra-testnet-harpalyke');
  compactBlockRangeRequest.setStartHeight(1);
  compactBlockRangeRequest.setEndHeight(10);
  compactBlockRangeRequest.setKeepAlive(false);
  console.log(compactBlockRangeRequest);
compactBlockRangeRequest()
  // try {
  //   for await (const response of client.compactBlockRange(
  //     compactBlockRangeRequest
  //   )) {
  //     console.log(response);
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
};
