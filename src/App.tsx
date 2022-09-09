import { ObliviousQueryClient } from './proto/oblivious_grpc_web_pb';
import Oblivious from './proto/oblivious_pb';
import { useEffect } from 'react';

export const client = new ObliviousQueryClient(
  'http://localhost:8080',
  null,
  null
);

function App() {
  const getCompactBlockRange = () => {
    const compactBlockRangeRequest = new (
      Oblivious as any
    ).CompactBlockRangeRequest();
    compactBlockRangeRequest.setChainId('penumbra-testnet-harpalyke');
    compactBlockRangeRequest.setStartHeight(20);
    compactBlockRangeRequest.setEndHeight(30);
    compactBlockRangeRequest.setKeepAlive(false);

    const stream = client.compactBlockRange(compactBlockRangeRequest);

    stream.on('error', (error: any) => {
      console.log({ error });
    });

    stream.on('data', (res: any) => {
      const height = res.getHeight();
      const notePayloads = res.getNotePayloadsList();
      const nullifiers = res.getNullifiersList();
      const blockRoot = res.getBlockRoot();
      const epochRoot = res.getEpochRoot();
      const quarantined = res.getQuarantined();
      const slashed = res.getSlashedList();
      const proposalStarted = res.getProposalStarted();
      const fmdParameters = res.getFmdParameters();

      console.log({
        height,
        nullifiers,
        notePayloads,
        blockRoot,
        epochRoot,
        quarantined,
        slashed,
        proposalStarted,
        fmdParameters,
      });
    });

    stream.on('status', (status: any) => {
      console.log(status);
    });

    stream.on('end', () => {
      console.log('stream ended!');
    });
  };

  useEffect(() => {
    getCompactBlockRange();
  }, []);

  return (
   <div>Stream</div>
  );
}

export default App;
