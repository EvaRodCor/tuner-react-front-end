import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Edit from './Pages/Edit';
import Home from './Pages/Home';
import Index from './Pages/Index';
import New from './Pages/New';
import Redirect from './Pages/Redirect';
import Show from './Pages/Show';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/songs" element={<Index/>}/>
          <Route path="/songs/new" element={<New/>}/>
          <Route path="/songs/:id" element={<Show/>}/>
          <Route path="/songs/:id/edit" element={<Edit/>}/>
          <Route path="*" element={<Redirect/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
