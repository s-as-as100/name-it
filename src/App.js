 import React from 'react';
  
 

import './App.css';
import Header from './components/header/header';
import SearchBox from './components/header/searchBox/searchBox';

 class App extends React.Component {
   state = {
     headerText: "Name It!"
   }
   render() {
     return (
       <React.Fragment>
         <Header headerTitle= {this.state.headerText}/>
         <SearchBox/>
         
          
       </React.Fragment>
     )
   }
 }
 // this is refer to class 
 //
     
  
{/* <h3>{this.state.headerText}</h3> 
         <button onClick 
         ={ () => {this.setState({headerText:"waaoo"})}}>Magic Happen!</button>  */}
export default App;
