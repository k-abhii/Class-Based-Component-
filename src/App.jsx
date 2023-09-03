import "./App.css";
import EmployeeClassComponent from "./EmployeeC";
import EmployeeEs5Component from "./EmployeeEs5";
import EmployeeEs6Component from "./EmployeeEs6";

function App() {
  
  const empT =  {name:"timothy", designation:"hr", age:"27"}
  return (
    <div>
      <EmployeeClassComponent name="David" designation="Developer" age="35" />
      <EmployeeEs5Component name="Maria" designation="Tester" age="23" />
      <EmployeeEs6Component {...empT} />
    </div>
  );
}

export default App;
