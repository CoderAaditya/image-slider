import React, { useState } from 'react';
import logo from '../assets/logo.png';
import dog from '../assets/dog-slimer.png';
import goldenr from '../assets/goldenr-slim.png';
import logo1 from '../assets/googleplay.png'; 
import logo2 from '../assets/appstore.png'; 
import './home.css'
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [dog, goldenr];

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };
  
  
  const pageStyle = {
    overflow: 'hidden',
    backgroundColor: '#FDE3D9',
    minHeight: '100vh',
  };
  const navbarStyle = {
    position: 'sticky',
    top: 0,
    backgroundColor: 'transparent',
    color: 'white !important',
    padding: '10px',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const logoImageStyle = {
    width: '100px',
    height: '40px',
    marginRight: '10px',
  };

  const bodyStyle = {
    display: 'flex',
    paddingTop: '60px',
    display: 'flex',
    alignItems: 'flex-start',
    padding: '20px',
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const leftContentStyle = {
    flex: 1,
    paddingRight: '20px',
    maxHeight: '50vh',
    overflowY: 'auto',
    marginTop: '20px',
    minHeight: '100vh'
  };

  const rightContentStyle = {
    flex: 1,
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  };
  const rightImageStyle = {
    width: '100%', 
    height: '100%', 
    objectFit: 'cover', 
  };

  const menuLinkStyle = { 
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
    margin: '0 10px',
  };

  const glogoStyle = {
    width: '90px',
    height: '40px',
    marginRight: '10px',
  };

  const alogoStyle = {
    width: '90px',
    height: '30px',
    marginRight: '10px',
  };
  const sliderContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
  };
  
  const prevButtonStyle = {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
    zIndex: 2,
  };
  
  const nextButtonStyle = {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
    zIndex: 2,
  };
  return (
    <div style={pageStyle}>
      <header style={navbarStyle} className="navbar">
        <div style={logoStyle} className="navbar-logo">
          <img src={logo} alt="Logo" style={logoImageStyle} />
        </div>
        <nav className="navbar-menu">
          <span>
            <a href="/about" style={menuLinkStyle} >
              About
            </a>
          </span>
          <span>
            <a href="/blog" style={menuLinkStyle}>
              Blog
            </a>
          </span>
          <span>
            <a href="/career" style={menuLinkStyle}>
              Career
            </a>
          </span>
          <span>
            <a href="/contact" style={menuLinkStyle}>
              Contact
            </a>
          </span>
        </nav>
      </header>
      <div style={bodyStyle}>
        <div style={leftContentStyle}>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ab similique
            doloribus autem ipsa consequuntur aspernatur iusto aliquid, nobis at! Nesciunt,
            earum voluptas saepe esse ex libero odit facilis temporibus!
          </p>
          <div style={logoContainerStyle}>
          <img src={logo1} alt="Google Play" style={glogoStyle} />
            <img src={logo2} alt="App Store" style={alogoStyle} />
          </div>
        </div>
        <div style={rightContentStyle}>
          <div style={sliderContainerStyle} className="slider-container">
            <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} style={rightImageStyle}/>
            <button onClick={handlePrev} style={prevButtonStyle}>Prev</button>
            <button onClick={handleNext} style={nextButtonStyle}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
