import React from 'react'
import './../header/header.css';


// jsx is combvination of JS nd HTML
const Header = ({headerTitle, headerExpanded}) => {
    return ( 
        <div className="head-container">
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
            className={`head-img ${
                headerExpanded
            ?  `head-image-expanded` 
          : `head-image-contracted`
        } `}
             alt="img"/>
            <h1 className= {`head-text ${
                headerExpanded
            ?  `head-text-expanded` 
          : `head-text-contracted`
        } `}>{headerTitle}</h1>
        </div>
     );
}
 
export default Header;
// state is nothing is piece of data u  need be changed in future like  date / number anything
// props (parent--> child ( communication))
// props is communicate the date b/w parent to child 
// ` template literals are used to allow us to inject are variable inside are strings`