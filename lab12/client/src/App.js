import './App.css';
import CreatePart from './components/CreatePart';
import GetPart from './components/GetPart';
import DeletePart from './components/DeletePart';

function App() {
  return (
    <div className="App">
      <CreatePart />
      <GetPart />
      <DeletePart />
    </div>
  );
}

export default App;
