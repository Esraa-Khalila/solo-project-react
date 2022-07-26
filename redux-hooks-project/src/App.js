import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Dashboard from "./Components/Dashboard";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import SignIn from "./Components/SignIn";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";


function App() {

  return (
    <div className="App">
      {/* <Home /> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
    

          {/* Appointment us page */}
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="cloth/:id" element={<Edit />} />
          <Route path="login" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
      <>
      <BrowserRouter>
       
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Appointment us page */}
       
        </Routes>
      </BrowserRouter>
      </>
    </div>
  );
}

export default App;
