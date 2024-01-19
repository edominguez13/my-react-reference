
import './App.css';

import StateObjectSingleKey from './components/StateObjectSingleKey';
import StateObjectMultiKey from './components/StateObjectMultiKey';
import GoalsListApp from './components/GoalsListApp';
import GiftCardPage from './components/GiftCardPage';
import UseEffectExample from './components/UseEffectExample';
import FetchRandomUser from './components/FetchRandomUser';
import UseReducerExample from './components/UseReducerExample';
import UseRefExample from './components/UseRefExample';
import CustomHookExample from './components/CustomHookExample';

function App() {
  return (
    <div className="App">
      {/* useState Examples: */}
        {/* Example of working State with complex data: Objects */}
      <StateObjectSingleKey />
      <StateObjectMultiKey />
      <GoalsListApp />
      <GiftCardPage />
      {/* useEffect Examples: */}
      <UseEffectExample />
      <FetchRandomUser />
      {/* useReducer Examples: */}
      <UseReducerExample />
      {/* useRef Examples: */}
      <UseRefExample />
      {/* Custom Hook Example: */}
      <CustomHookExample />
    </div>
  );
}

export default App;
