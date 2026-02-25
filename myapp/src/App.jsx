import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Firstapp from './Components/Firstapp';
import Register from './Components/Mui/Register';
import Arrowfunction from './Components/ES7/Arrowfunction';
import Arraymethod from './Components/ES7/Arraymethod';
import BasicTable from './Components/Mui/BasicTable';
import Spreadoperator from './Components/ES7/Spreadoperator';
import MovieCard from './Components/Mui/MovieCard';
import Muiappbar from './Components/Mui/Muiappbar';
import Destructuring from './Components/ES7/Destructuring';
import Importmodule from './Components/ES7/Importmodule';
import Ternaryoperator from './Components/ES7/Ternaryoperator';
import Props from './Components/ES7/Props';
import HookUseState from './Components/Hook/HookUseState'
import Counter from './Components/Hook/Counter';
import Theme from './Components/Hook/Theme';
import HookUseEffect from './Components/Hook/HookUseEffect';
import ApiAxios from './Components/Hook/ApiAxios';
import AxiosTask from './Components/Hook/AxiosTask';
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Muiappbar/>
        <Routes>

          <Route path='/' element={<Firstapp/>} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/Arrowfunction' element={<Arrowfunction/>} />
          <Route path='/BasicTable' element={<BasicTable/>} />
          <Route path='/Arraymethod' element={<Arraymethod/>} />
          <Route path='/Spreadoperator' element={<Spreadoperator/>} />
          <Route path='/MovieCard' element={<MovieCard/>} />
          <Route path='/Destructuring' element={<Destructuring/>} />
          <Route path='/Importmodule' element={<Importmodule/>} />
          <Route path='/Ternaryoperator' element={<Ternaryoperator/>} />
          <Route path='/HookUseState' element={<HookUseState/>} />
          <Route path='/Counter' element={<Counter/>} />
          <Route path='/Theme' element={<Theme/>} />
          <Route path='/HookUseEffect' element={<HookUseEffect/>} />
          <Route path='/ApiAxios' element={<ApiAxios/>} />
          <Route path='/AxiosTask' element={<AxiosTask/>} />
          <Route path='/Props' element={<Props name="Rakshitha" />} />
          {/* <Route path='/Muiappbar' element={<Muiappbar/>} /> */}

          
        </Routes>
      </BrowserRouter>
    </div>
  )
}
