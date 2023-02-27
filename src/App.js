import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage/Home';
import ProjectsPage from './pages/ProjectsPage/Projects';
import ContactsPage from './pages/ContactsPage/Contacts';


import ProjectsPages from './pages/ProjectPage/ProjectsPages';
import ScrollToTop from './components/utills/scrollToTop';


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Header />
        
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/projects' element={<ProjectsPage />}></Route>
          <Route path='/project/:id' element={<ProjectsPages/>}></Route>
          <Route path='/contacts' element={<ContactsPage/>}></Route>
        </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
