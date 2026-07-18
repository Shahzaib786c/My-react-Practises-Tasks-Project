import "./Usercard.css";

const Usercard = (props) => {
  return (
    <div className="uc">
      <div className="card2">
        <h2>{props.name}</h2>
        <p>
          <strong>Age :</strong> {props.age}
        </p>
        <p>
          <strong>City :</strong> {props.city}
        </p>
        <p>
          <strong>Course :</strong> {props.course}
        </p>
      </div>
    </div>
  );
};

export default Usercard;
