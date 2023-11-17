import logo from './logo.svg';
import './App.css';
import Fun from './day_2_cw/cw1';
import Cw2 from './day_2_cw/cw2';
import Pro from './day3cw/propsFunction';
import Defaultp from './day3cw/defaultProps';
import Proper from './day3cw/PropsCls';
import De from './day3cw/defaultClsprops';
import Stat from './day3cw/Statecls';
import Two from './day3cw/twoWayConcept';
import Parent from './day3cw/parentChild';
import Dynamic from './day3cw/DynamicRendering';
import Hooks from './day3cw/hooks';
import Name from './day 5/Componenet';
import ErrorBoundary from './day 5/ErrorBoundary';
import NameTry from './day 5/TryCatch';
import Comp from './day 5/ComponentDid';
import HoverCounter from './day 6/higherComp';
import ClickCounter from './day 6/ClickCounter';
import PropVal from './day 6/propType';
import Spread from './day 6/SpreadOp';

import Create from './day 6/createReff';
import UseEff from './day 6/UseEff';
function App() {
  const fun=(e)=>
  {
    // console.log(`Thank you for your support ${name}`)
    console.log(e);
    e.target.innerText="Clicked";
  }
  return (
    <div className="App">
    
      {/* <Fun />
      <Cw2 />
      <h1>To Do List</h1>
      <h3>lets make Money</h3>
      <button onClick={(e)=>fun(e)}>Click Me!!!</button> */}
       {/* <Pro name="Amreth" age="18" /> */}
      {/* <Pro name="Ajay" age={22} /> */}
      {/* < Defaultp age="20" /> */}
      {/* <Proper name="aakshara" clg="SKCET" /> */}
      {/* <De name="Ashwin" /> */}

     {/* <Stat /> */}
     {/* <Two /> */}
     {/* <Parent /> */}
     {/* <Dynamic /> */}
     {/* <Hooks /> */}

        {/* day 5 */}
          {/* <ErrorBoundary>
              <Name  name="harish"/>
          </ErrorBoundary> */}+

          {/* <NameTry name="ajay" /> */}
          {/* <Comp /> */}


          {/* day 6 */}
          {/* <HoverCounter />
          <ClickCounter />
          <PropVal name={12} />
          <Spread  title1="SKCET" type="password" placeholder="Enter"/> */}

          {/* <Create />
          <Hookspp /> */}
        

        <UseEff />
    </div>
  );
}
// import Pro from './day3cw/propsFunction';

export default App;
