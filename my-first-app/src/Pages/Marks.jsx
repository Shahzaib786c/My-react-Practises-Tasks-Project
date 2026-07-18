function Marks({ marksViews, setMarksViews }) {
  //Here we get 2 props from main component and use it here in my new button called Marksview  just for practise
  return (
    <div className="card">
      <h2>Marks</h2>

      <ul>
        <li>HTML : 90</li>

        <li>CSS : 88</li>

        <li>JavaScript : 95</li>

        <li>React : 91</li>
      </ul>

      <button
        className="view-btn"
        onClick={() => setMarksViews(marksViews + 1)}
      >
        How much time u visit your Marks
      </button>
      <h3>Marks View : {marksViews}</h3>
    </div>
  );
}
export default Marks;
