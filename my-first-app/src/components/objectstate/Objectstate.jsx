// import { useState } from "react";

// const Objectstate = () => {
//   const [user, setUser] = useState({
//     name: "Muhammad shahzaib",
//     age: 20,
//     city: "Lahore",
//   });

//   const [students] = useState([
//     { id: 1, name: "Muhammad shahzaib", marks: 85, course: "React" },
//     { id: 2, name: "Muhammad Ali", marks: 32, course: "React" },
//     { id: 3, name: "Muhammad shahzaib", marks: 85, course: "React" },
//   ]);

//   function havebirthday() {
//     setUser({
//       ...user,
//       age: user.age + 1,
//     });
//   }
//   return (
//     <div>
//       <h2>{user.name}</h2>
//       <p>Age: {user.age}</p>
//       <p>City: {user.city}</p>
//       <button onClick={havebirthday}>Have Birthday</button>

//       <div className="list">
//         {students.map((student) => (
//           <div className="card" key={student.id}>
//             <h3>{student.name}</h3>
//             <p>{student.marks}</p>
//           </div>
//         ))}

//       </div>

//       <div className="mapfilter">



//       </div>
//     </div>



//   );
// };

// export default Objectstate;
