import React from 'react';
// import ParentBook from './Components/ParentBook';
import './Styles/parentbook.css';

import './Styles/App.css'
import Footer from './Components/Footer';
// import Home from './Components/Home';
import Header from './Components/Header';


function App() {
  return (
    <React.Fragment>
       <div className="wrapper">
       <Header/>
      {/* <Loader/> */}
      {/* <Room/> */}
      {/* <ParentBook/> */}
      {/* <Home/> */}
      
      <Footer/>

       </div>
    </React.Fragment>
  );
}

export default App;
