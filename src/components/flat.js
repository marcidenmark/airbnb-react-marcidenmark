import React from "react";
import "./flat.css";

class Flat extends React.Component {
 render(){
  const title =
   this.props.flat.name +
   + " - " +
   this.props.flat.imageUrl +
   this.props.flat.price +
   this.props.flat.priceCurrency +
   this.props.flat.lat +
   this.props.flat.lng;

  const style = {
   backgroundImage: "url('" + this.props.flat.imageUrl + "')"
   // //instead let's use template literals from es6!
   // backgroundImage: `url('$this.props.flat.imageUrl}')`

  };

  return (
   <div className= "flat">
    <div className="flat-picture"> </div>
    <div className="flat-title">
     {title}
    </div>
   </div>
   );
 }
}

export default Flat;
