import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import './App.scss';
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import BooksPage from "./pages/BooksPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import BookPage from "./pages/BookPage";
import LogIn from "./components/LogIn/LogIn";


function App() {

  return (
   <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/faq" element={<FAQPage />}/>
      <Route path="/contacts" element={<ContactPage />}/>
      <Route path="/books" element={<BooksPage />}/>
      <Route path="/books/children" element={<BooksPage />}/>
      <Route path="/books/young-adult" element={<BooksPage />}/>
      <Route path="/book/:id" element={<BookPage />} />
      <Route path="/admin" element={<LogIn />} />
      <Route path="/*" element={<NotFoundPage />}/>
    </Routes>
    <Footer />
   </BrowserRouter>
  );
}

export default App;
