import React from 'react';
import './App.css';
import NavBar from './Components/Display/NavBar';
import Footer from './Components/Display/Footer';


class App extends React.Component{
  render(){
    return (
      <div>
        <NavBar />
        <Footer />
      </div>
    );
  }
}

export default App;
