import React from 'react';
import './App.css';
import Navbar from './components/navigation/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

export default function App() {
  const handleClick = (anchor, e) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
  };
  
  return (
    <>
      <main>
        <Navbar handleClick={handleClick} />
        <Main handleClick={handleClick} />
        <Footer />
      </main>
    </>
  );
}
