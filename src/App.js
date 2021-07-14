import React from 'react';
import Content from './components/Content';
import Navbar from './components/Header/Navbar';
import './App.css';


function App() {
  return (
    <>
      <div className='App'>

        {window.location.pathname !== '/' ? <Navbar /> : null}

        <div className='Table'>
             
          <Content />
        </div>

      </div>
    </>
  )
}

export default App;
