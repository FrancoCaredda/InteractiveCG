import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./view/Layout";
import Learn from './view/Learn';
import FractalEditor from "./view/FractalEditor";
import ColorEditor from "./view/ColorEditor";
import MovementEditor from "./view/MovementEditor";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Learn />} />
          <Route path="fractal" element={<FractalEditor />} />
          <Route path="color" element={<ColorEditor />} />
          <Route path="movement" element={<MovementEditor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
