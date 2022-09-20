import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import './App.scss';


function App() {
  return (
   <BrowserRouter>
    <Header />
    <Routes>
      <Route to="/"/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
