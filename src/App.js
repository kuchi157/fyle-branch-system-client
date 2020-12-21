import React,{Fragment} from 'react';
import './App.css';

import CityDropdown from './components/CityDropdown';


function App() {
  return (<Fragment>
    <h1 className="m-2"> Bank Branches</h1>
      <CityDropdown></CityDropdown>
    
  </Fragment>
  );
}

export default App;
