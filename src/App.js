import Onboarding from "./pages/Onboarding";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import Viewpost from "./pages/Viewpost";
import Viewprofile from "./pages/Viewprofile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Onboarding />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/viewpost/:postid' element={<Viewpost />} />
        <Route path='/viewprofile/:username' element={<Viewprofile />} />
      </Routes>
    </div>
  );
}

export default App;
