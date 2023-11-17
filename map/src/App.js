import logo from './logo.svg';
import './App.css';
import './Demo.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Full from './mapping/FirstCom';
import Li from './mapping/List';
import Key from './mapping/KeyVal';
import Style from './mapping/style';
import BasicButtons from './mapping/Demo';
function App() {
  return (
    <div className="App">
      {/* <Full />
      <Li /> */}
      <Key />
      <Style />
      <BasicButtons/>
    </div>
  );
}

export default App;
