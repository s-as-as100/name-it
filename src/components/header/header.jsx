import React from 'react'
import './../header/header.css';


// jsx is combvination of JS nd HTML
const Header = (props) => {
    return ( 
        <div className="head-container">
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
            className=" head-img"
             alt="img"/>
            <h1 className="head-text">{props.headerTitle}</h1>
        </div>
     );
}
 
export default Header;
// state is nothing is piece of data u  need be changed in future like  date / number anything
// props (parent--> child ( communication))
// props is communicate the date b/w parent to child 