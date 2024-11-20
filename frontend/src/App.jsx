import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import {useState} from 'react'
import Control from './pages/control/Control'
import Overlay from "./pages/match_progress/Overlay"

function App(){
    const [matchData, setMatchData]= useState([
      {game:1 , score: "3-1", team: "FL Poly Phoenixes", map: "Control"},
      {game:2 , score: "3-1", team: "FL Poly Phoenixes", map: "Escort"},
      {game:3 , score: "3-1", team: "FL Poly Phoenixes", map: "Hybrid"},
      {game:4 , score: "3-1", team: "FL Poly Phoenixes", map: "Clash"},
      {game:5 , score: "3-1", team: "FL Poly Phoenixes", map: "Push"},
      {game:6 , score: "3-1", team: "FL Poly Phoenixes", map: "Control"},
    ]);

    return (
    <Router>
      <div className= "min-h-screen bg-gray-900 text-white">
          <nav className="p-4 bg-gray-800">
            <Link to= "/overlay" className="mr-4">Overlay</Link>
            <Link to= "/control" className="mr-4">Control Page</Link>
          </nav>

          <Routes>
            <Route path="/overlay" element={ <Overlay matchData={matchData}/>}/>
            <Route path="/control" element={ <Control matchData={matchData} setMatchData={setMatchData}/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;