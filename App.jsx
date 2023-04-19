import "./App.css";
import NavBar from "./NavBar/Navbar";
import Page2 from "./Page-2-Folder/Page2";
import Page3 from "./Page-3-Folder/Page3";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/Design" element={<Page3 />} />
          <Route path="/Chores" element={<Page2 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
