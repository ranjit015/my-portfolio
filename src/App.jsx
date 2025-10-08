import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import ProjectPreview from "./pages/ProjectPreview";
import Viewall from "./pages/Viewall";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project-preview" element={<ProjectPreview />} />
          <Route path="/viewall" element={<Viewall />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
