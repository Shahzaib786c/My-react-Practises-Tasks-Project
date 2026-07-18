import "./Employee.css";
const Employee = (props) => {
  return (
    <div className="ec">
      <div className="card5">
        <h2>
          <strong>{props.no}</strong>
        </h2>
        <h1>{props.name}</h1>
        <p>
          <strong>Designation:</strong> {props.designation}
        </p>
        <p><strong>Department:</strong> {props.department}</p>
        <p><strong>Salary:</strong> {props.salary}</p>
      </div>
    </div>
  );
};

export default Employee;
