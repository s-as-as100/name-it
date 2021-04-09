 import React from 'react';
  
 

import './App.css';
import Header from './components/header/header';
import SearchBox from './components/header/searchBox/searchBox';

 class App extends React.Component {
   state = {
     headerText: "Name It!",
     headerExpanded : true,
   }

   handleInputChange = (inputText) =>{
     this.setState({headerExpanded: !(inputText.length > 0 )})
   }

   render() {
     return (
       <React.Fragment>
         <Header
         headerExpanded ={this.state.headerExpanded}
         headerTitle= {this.state.headerText}/>
         <SearchBox onInputChange= {this.handleInputChange}/>
         
          
       </React.Fragment>
     )
   }
 }
 // this is refer to class 
 //
     
  
/* <h3>{this.state.headerText}</h3> 
         <button onClick 
         ={ () => {this.setState({headerText:"waaoo"})}}>Magic Happen!</button>  */
export default App;
