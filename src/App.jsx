import NoPage from "./pages/NoPage"
import Home from "./pages/Home"
import Country from "./pages/Country"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path=":country" element={<Country />} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
