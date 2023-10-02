import { UserStorage } from './context/userContext';
import Home from './pages/home/home-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <UserStorage>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </UserStorage>
  );
}

export default App;
