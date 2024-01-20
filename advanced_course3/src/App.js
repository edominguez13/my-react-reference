// import './App.css';

import ComponentCompositionExample from './components/ComponentCompositionExample';
import LiveOrders from './components/LiveOrders';
import MouseTrackingHOC from './components/MouseTrackingHOC';
import RadioExample from './components/RadioExample';
import SpreadProps from './components/SpreadProps';



function App() {
  return (
    <div className="App">
      {/* Component composition example: */}
      <ComponentCompositionExample />
      {/* React API children and cloneElement example: */}
      <LiveOrders />
      <RadioExample />
      {/* Spread operator props example */}
      <SpreadProps />
      {/* Higher order components examples: */}
      <MouseTrackingHOC />
    </div>
  );
}

export default App;