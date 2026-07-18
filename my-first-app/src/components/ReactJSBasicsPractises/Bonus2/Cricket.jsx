import "./cricket.css";
const Cricket = (props) => {
  return (
    <>
      <div className="main">
        <h1>Scoreboard: {props.run}</h1>
      </div>

      <div className="btngroup">
        <button onClick={props.var}>+1</button>
        <button onClick={props.two}>+2</button>
        <button onClick={props.four}>+4</button>
        <button onClick={props.six}>+6</button>
        <button onClick={props.out}>Out</button>
        <button onClick={props.reset}>Reset</button>
      </div>
    </>
  );
};

export default Cricket;
