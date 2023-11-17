import logo from './logo.svg';
import './App.css';
import FunctionEx1 from './Components/Fuctional_components';
import NestedComponents from './Components/NestedComponents';
import Arrow from './Components/Arrow';
import ClassComponent from './Components/ClassComponent';
function App() {
  return(
    <div className='App'>
    <FunctionEx1/>
    <NestedComponents />
    <Arrow />
    <ClassComponent />
    </div>
  )
}

export default App;
