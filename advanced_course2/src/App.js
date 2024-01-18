import logo from './logo.svg';
import './App.css';

import StateObjectSingleKey from './components/StateObjectSingleKey';
import StateObjectMultiKey from './components/StateObjectMultiKey';
import GoalsListApp from './components/GoalsListApp';
import GiftCardPage from './components/GiftCardPage';

function App() {
  return (
    <div className="App">
      {/* Example of working State with complex data: Objects */}
      <StateObjectSingleKey />
      <StateObjectMultiKey />
      <GoalsListApp />
      <GiftCardPage />
    </div>
  );
}

export default App;
