import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import './App.scss';
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";


function App() {
  return (
   <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />}/>
    </Routes>
    <Footer />
   </BrowserRouter>
  );
}

export default App;
