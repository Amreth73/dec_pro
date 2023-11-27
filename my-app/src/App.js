import logo from './logo.svg';
import './App.css';
import FunctionEx1 from './Components/Fuctional_components';
import NestedComponents from './Components/NestedComponents';
import Arrow from './Components/Arrow';
import ClassComponent from './Components/ClassComponent';
import AxiosGet from './axx/AxiosGet';
import AxiosPost from './axx/AxiosPost';
import AxiosDel from './axx/AxiosDel';
import AxiosPut from './axx/AxiosPut';
function App() {
  return(
    <div className='App'>
    {/* <FunctionEx1/>
    <NestedComponents />
    <Arrow />
    <ClassComponent /> */}


    <AxiosGet />
    <AxiosPost />
    <br></br>
    <AxiosDel />
    <br></br>
    <AxiosPut />
    </div>
  )
}

export default App;
