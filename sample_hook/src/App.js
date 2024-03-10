import React, { useState } from "react";
import "./App.css";

function App() {
  const [employeeName, setEmployeeName] = useState([
    { id: 1, name: "karthik" },
    { id: 2, name: "rambabu" },
    { id: 3, name: "rajesh" },
    { id: 4, name: "goutham" },
    { id: 5, name: "manvith" },
    { id: 6, name: "venkat" },
    { id: 7, name: "kruthvika" },
  ]);
  const [enable, setEnable] = useState(null);

  const handleChangeEmployeeName = (id) => {
    // Enable editing for the clicked employee
    setEnable(id);
  };

  const handleInputChange = (id, newName) => {
    // Update the name of the employee
    const updatedEmployees = employeeName.map((employee) =>
      employee.id === id ? { ...employee, name: newName } : employee
    );
    setEmployeeName(updatedEmployees);
    // Disable editing after name change
    // setEnable(null);
  };

  const handleEnableInput = () => {
    setEnable(null);
  };

  return (
    <div className="App">
      <h1>Employee Names</h1>
      <ul className="buttonList">
        {employeeName.map((employee) => (
          <li key={employee.id} className="list">
            <input
              value={employee.name}
              type="text"
              disabled={enable !== employee.id}
              onChange={(e) => handleInputChange(employee.id, e.target.value)}
              onBlur={handleEnableInput}
            />
            <button
              onClick={() => handleChangeEmployeeName(employee.id)}
              className="button"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
