import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ListPage from './pages/ListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/loginPage';
import CreateAccount from './pages/CreateAccount';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <div id="page-body">
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/articles" element={<ListPage/>} />
        <Route path="/articles/:articleId" element={<ArticlePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/create-account" element={<CreateAccount/>} />
        <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
