import "./scoreboard.css";
const Scoreboard = (props) => {
  return (
    <div className="scbd">
      <div className="inscbd">
      <h2>{props.team}</h2>
      <h3>Score : {props.score}</h3>
      <button onClick={props.var}>+1</button>
      <button onClick={props.reset}>Reset</button>
      
      </div>
    </div>
  );
};

export default Scoreboard;
