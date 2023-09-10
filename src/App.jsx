import './App.css';
import {Link,BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Super from './pages/Super';
import RQsuper from './pages/RQsuper';


function App() {
 
  return (
  
  <BrowserRouter>
    <div className='App-header'>
      <nav>
        <ul>
          <li>
            <Link to='/' className='font-bold text-lg text-red-500'>Home</Link>
          </li>
          <li>
            <Link to='/super'  className='font-bold text-lg text-red-500'>SuperHeroes</Link>
          </li>
          <li>
            <Link to='/rqsuper'  className='font-bold text-lg text-red-500'>RQ superheroes</Link>
          </li>
        </ul>
      </nav>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/super" element={<Super/>}/>
      <Route path="/rqsuper" element={<RQsuper/>}/>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
