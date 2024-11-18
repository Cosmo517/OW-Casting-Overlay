import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import Control from './pages/control/Control'
import Overlay from "./pages/match_progress/Overlay"

const App = () => {
  return (
    <Router>
        {/* <nav>
          <Link to="control">Control Page</Link>
          <Link to="overlay">Overlay Page</Link>
        </nav> */}
      <Routes>
        <Route path='/overlay' element={<Overlay/>}/>
        <Route path='/control' element={<Control/>}/>
      </Routes>
    </Router>
  )
}

export default App;