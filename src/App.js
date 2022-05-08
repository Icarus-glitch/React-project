import React from 'react';
import './App.css';
import ContactApp from './components/ContactApp';

function App() {
  return (
   <>
     <div className='App'>
       <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
        <a href='/' className='navbar-brand'>React with contact App</a>
       </nav>
       <ContactApp />
     </div>
   </>
  );
}

export default App;
