//import logo from './assets/logo.png'
import { MainPage } from './pages/MainPage'
import { ContractView } from './pages/ContractView'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/userContractView' element={<ContractView/>}/>
      </Routes>
    </Router>
  )
}

export default App