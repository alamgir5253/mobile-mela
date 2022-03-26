import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="state">
        <h3>How react work</h3>
        <p>
          React is a JavaScript library React is a component based First react
          render all the component and show data in real dom Besides react,
          create a virtual dom and store all data in the virtual dom. When we
          change any data (component, state etc…), react, create a new virtual
          dom and compare the new virtual dom with the old dom and find the
          changes, then show the changes data in real dom
        </p>
      </div>
      <div className="props">
        <h3>state</h3>
        <p>
          State can modified ( setState() ) Props can be used in class
          components You can declare state in component You can update state
        </p>
        <h3>props</h3>
        <p>
          Props cannot be modified Props can be used in class and function
          components You can pass props from parent component Props is read only
        </p>
      </div>
    </div>
  );
};

export default Footer;
