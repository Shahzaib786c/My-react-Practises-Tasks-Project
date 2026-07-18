import "./theme.css";
const Theme = (props) => {
  return (
    <div className="btn">
      <button onClick={() => props.theme()}>Click to Change the Theme </button>
    </div>
  );
};

export default Theme;



