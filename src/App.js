import './App.css';
import BlogDetails from './components/BlogDetails/BlogDetails';
import Create from './components/Create/Create';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />  
      <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
