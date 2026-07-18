function Detail({ views }) {
  //Curently we r using single props because we applied cunt on the main tab or button which is Details we 
  // Here we recieve 2 props from main component which is student profile{ views, setViews }  inside function parameter to increatse the profile view then u have to add here
  // if u want to access it in diff file through button then it word
  return (
    <div className="card">
      <h2>Student Details</h2>

      <p>
        <strong>Name :</strong> Shahzaib
      </p>

      <p>
        <strong>Roll No :</strong> 22-SE-123
      </p>

      <p>
        <strong>Class :</strong> BS Software Engineering
      </p>

      {/* <button className="view-btn" onClick={() => setViews(views + 1)}>
        View Profile
      </button> */}

      <h3>Profile Views : {views}</h3>
    </div>
  );
}

export default Detail;
