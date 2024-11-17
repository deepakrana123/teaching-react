import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Ranjan from './Ranjan';
import Devendar from './Devendar';
import LoanApplication from './LoanApplication';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Ranjan/>} path='/ranjan'/>
        <Route element={<Devendar/>} path='/devendra/:paramterId/:devendraId'/>
        <Route element={<LoanApplication/>} path='/loanApplication/:id'/>
        <Route element={<Home/>} path="/"/>
      </Routes>
  
    </div>
  );
}

export default App;
