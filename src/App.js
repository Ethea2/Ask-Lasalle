import Onboarding from "./pages/Onboarding";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import Viewpost from "./pages/Viewpost";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Onboarding />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/viewpost/:postid' element={<Viewpost />} />
      </Routes>
    </div>
  );
}

export default App;
