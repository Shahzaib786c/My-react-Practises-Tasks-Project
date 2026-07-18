import { useState } from "react";
import "./movieticbook.css";
const Movieticbook = (props) => {
  const [sold, setsold] = useState(props.seats);
  return (
    <div>
      <div className="mt">
        <h1>{props.movie}</h1>
        <p>
          <strong>Price of Ticket: </strong>
          {props.price}
        </p>
        <p>
          <strong>Total Seats: </strong>
          {props.seats}
        </p>
        <h3 className="h76">
          Available Seats:<strong> {sold}</strong>
        </h3>

        {sold === 0 && <h2>House Full 🎬</h2>}

        <button
          onClick={() => {
            setsold(sold - 1);
          }}
          disabled={sold === 0}
        >
          Book Seats
        </button>
      </div>
    </div>
  );
};

export default Movieticbook;
