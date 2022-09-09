import logo from './logo.svg';
import './App.css';
import { ObliviousQueryClient } from './proto/oblivious_grpc_web_pb';
import s from './proto/oblivious_pb';
import { useEffect } from 'react';

export const client = new ObliviousQueryClient(
  'http://localhost:8080',
  null,
  null
);

function App() {
  const getBlock = () => {
    // const compactBlockRangeRequest = new (s as any).CompactBlockRangeRequest({
    //   chain_id: 'penumbra-testnet-harpalyke',
    //   end_height: '20',
    //   keep_alive: false,
    //   start_height: '10',
    // });
    const compactBlockRangeRequest = new (s as any).CompactBlockRangeRequest();
    compactBlockRangeRequest.setChainId('penumbra-testnet-harpalyke');
    compactBlockRangeRequest.setStartHeight(20);
    compactBlockRangeRequest.setEndHeight(30);
    compactBlockRangeRequest.setKeepAlive(false);

    console.log({compactBlockRangeRequest});

    const stream = client.compactBlockRange(compactBlockRangeRequest);
    stream.on('data', (response: any) => {
      console.log(response);
    });

    // stream.on('end',  () => {
    //   stream.end();
    // });
  };

  useEffect(() => {
    getBlock();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
