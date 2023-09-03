import { Component } from "react";

class EmployeeClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "Bangalore",
    };
    // binding is necessary to provide this context in callback
    this.changeAddress = this.changeAddress.bind(this);
  }
  changeAddress(event, val) {
    console.log("Change Address Event Triggered", event);
    this.setState({ address: val });
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        address: "Hyderabad",
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <h1>Employee Class Component</h1>
        <p>Name : {this.props.name}</p>
        <p>Designation : {this.props.designation}</p>
        <p>Age : {this.props.age}</p>
        <p>State :{this.state.address}</p>
        <button
          onClick={(event) => {
            this.changeAddress(event, "Chn");
          }}
        >
          Change Address1
        </button>
        {/* <button onClick={this.changeAddress.bind(this, "test")}>
          Change Address2
        </button> */}
      </div>
    );
  }
}
export default EmployeeClassComponent;
