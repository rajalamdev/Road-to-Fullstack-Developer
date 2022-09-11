import './App.css';
import {Welcome, Welcomeh2} from './Welcome';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Welcome />
          {/* ada dua cara mengisi textContent */}
          <Welcomeh2 children="Welcome 2" />
          <Welcomeh2>Welcome 2</Welcomeh2>
          <Button>Click Me</Button>
      </header>
    </div>
  );
}

export default App;
