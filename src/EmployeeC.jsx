import { Component } from "react";

class EmployeeClassComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Employee Class Component</h1>
        <p>Name : {this.props.name}</p>
        <p>Designation : {this.props.designation}</p>
        <p>Age : {this.props.age}</p>
      </div>
    );
  }
}
export default EmployeeClassComponent;
