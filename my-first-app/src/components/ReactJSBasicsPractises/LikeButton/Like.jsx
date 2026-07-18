import "./like.css";
const Like = (props) => {
  return (
    <div className="like">
      <button onClick={() => props.addlikes()}>Like 👍</button>
      {/* <h1>{props.increase}</h1> */}
    </div>
  );
};

export default Like;
