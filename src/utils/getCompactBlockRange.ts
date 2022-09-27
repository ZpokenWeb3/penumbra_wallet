import {
  createGrpcWebTransport,
  createPromiseClient,
} from '@bufbuild/connect-web';
import { CompactBlockRangeRequest } from '@buf/bufbuild_connect-web_penumbra-zone_penumbra/penumbra/client/v1alpha1/client_pb';
import { ObliviousQuery } from '@buf/bufbuild_connect-web_penumbra-zone_penumbra/penumbra/client/v1alpha1/client_connectweb';


const transport = createGrpcWebTransport({
  baseUrl: 'http://testnet.penumbra.zone:8080',
});

const client = createPromiseClient(ObliviousQuery, transport);

export const getCompactBlockRange = async () => {
  const compactBlockRangeRequest = new CompactBlockRangeRequest();
  compactBlockRangeRequest.chainId = 'penumbra-testnet-isonoe';
  compactBlockRangeRequest.startHeight = 1 as any;
  compactBlockRangeRequest.endHeight = 10 as any;
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
