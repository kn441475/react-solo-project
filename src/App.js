import Homepage from "./pages/Homepage";
import Moviespage from './pages/Moviespage'
import MovieInfopage from './pages/MovieInfopage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Homepage />}/>
        <Route path="/movies" element={<Moviespage />}/>
        <Route path='/movies/:id' element={<MovieInfopage />}/>
       </Routes>
    </div>
    </Router>
  );
}

export default App;
