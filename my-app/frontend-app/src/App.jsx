import React from "react";
import Products from "./components/Products";
import ProductCard from "./components/ProductCard";
import "./components/productStylings.css";
import Nav from "./components/Nav";

// import DisplayMyDetails from "./components/DisplayMyDetails";

const App = () => {
  // let details = {
  //   Name: "G.Deekshitha",
  //   rollNumber: "23NR1A0557",
  //   collegename: "BITS",
  //   course: "Computer Science",
    
  // };
  // let Role = "Student";

  return (
    <>
    <Nav/>
    <Products/>
    </>
  )
  //   <>
  //   <DisplayMyDetails fullDetails={details} role={Role} /></>
      
    

};

export default App;

