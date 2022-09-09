import logo from './logo.svg';
import './App.css';
import { ObliviousQueryClient } from './proto/oblivious_grpc_web_pb';
import s from './proto/oblivious_pb';

export const client = new ObliviousQueryClient('http://localhost:8081', null, null);

function App() {
  const compactBlockRangeRequest = new (s as any).CompactBlockRangeRequest({
      chain_id: 'penumbra-testnet-harpalyke',
      end_height: '1000',
      keep_alive: false,
      start_height: '1',
  });
  console.log(compactBlockRangeRequest);


  client.compactBlockRange(compactBlockRangeRequest);

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
