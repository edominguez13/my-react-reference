import logo from './logo.svg';
import './App.css';

import StateObjectSingleKey from './components/StateObjectSingleKey';
import StateObjectMultiKey from './components/StateObjectMultiKey';

function App() {
  return (
    <div className="App">
      {/* Example of working State with complex data: Objects */}
      <StateObjectSingleKey />
      <StateObjectMultiKey />
    </div>
  );
}

export default App;
