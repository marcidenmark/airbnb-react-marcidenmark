import React from "react";

//class with a single method, render
class Hello extends React.Component {
 	render(){
  		return <div>Hello {this.props.firstName} + {this.props.lastName}!</div>
   	}
}
export default Hello;
//Render creates a string that will be html
