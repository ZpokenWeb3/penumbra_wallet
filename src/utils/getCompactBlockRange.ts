import { createGrpcWebTransport, createPromiseClient } from '@bufbuild/connect-web';
import { ObliviousQuery } from '../../gen/client/oblivious_connectweb';
import { CompactBlockRangeRequest } from '../../gen/client/oblivious_pb';

const transport = createGrpcWebTransport({
  baseUrl: 'http://localhost:8080',
});

const client = createPromiseClient(ObliviousQuery, transport);


export const getCompactBlockRange = async () => {
  const compactBlockRangeRequest = new CompactBlockRangeRequest();
  compactBlockRangeRequest.chainId = 'penumbra-testnet-harpalyke';
  compactBlockRangeRequest.startHeight = 1 as any;
  compactBlockRangeRequest.endHeight = 2 as any;
  compactBlockRangeRequest.keepAlive = false;

  try {
    for await (const response of client.compactBlockRange(
      compactBlockRangeRequest
    )) {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
};