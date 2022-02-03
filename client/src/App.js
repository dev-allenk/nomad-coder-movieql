import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/routes/Home"
import Detail from "./components/routes/Detail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
