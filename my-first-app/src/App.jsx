import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
// import Footer from "./components/Footer/Footer";
import Studentprofile from "./components/Studentprofile/Studentprofile";
import Counter from "./components/ReactJSBasicsPractises/Counter/Counter";
import Light from "./components/ReactJSBasicsPractises/Light/Light";
import Stdprofile from "./components/ReactJSBasicsPractises/Stdprofile/Stdprofile";
import Usercard from "./components/ReactJSBasicsPractises/Usercard/Usercard";
import Product from "./components/ReactJSBasicsPractises/Productcard/Product";
import Employee from "./components/Employeecard/Employee";
import Like from "./components/ReactJSBasicsPractises/LikeButton/Like";
import Theme from "./components/Theme/Theme";
import Scoreboard from "./components/Scoreboard/Scoreboard";
// import Objectstate from "./components/objectstate/Objectstate";
import Movieticbook from "./components/ReactJSBasicsPractises/MovieTicket/Movieticbook";
import Traffic from "./components/ReactJSBasicsPractises/Bonus1/Traffic";
import Cricket from "./components/ReactJSBasicsPractises/Bonus2/Cricket";
function App() {
  const [likecount, setlikeCount] = useState(0);
  const [currenttheme, setcurrentTheme] = useState(false);
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [score, setScore] = useState(0);
  function theme() {
    setcurrentTheme(!currenttheme);
  }

  function addlikes() {
    setlikeCount(likecount + 1);
  }
  function teamA() {
    setTeamAScore(teamAScore + 1);
  }
  function teamB() {
    setTeamBScore(teamBScore + 1);
  }
  function addone() {
    setScore(score + 1);
  }
  function addtwo() {
    setScore(score + 2);
  }
  function addfour() {
    setScore(score + 4);
  }
  function addsix() {
    setScore(score + 6);
  }
  function Out() {
    alert("Player is Out");
  }

  return (
    <div
      style={{
        backgroundColor: currenttheme ? "black" : "white",
      }}
    >
      <Navbar />
      {/* <Footer /> */}
      <Studentprofile />
      <div className="TF">Counter Excercise 1</div>
      <Counter />
      <div className="TF">Light Excercise 2</div>
      <Light />
      <div className="TF">Student Profile Excercise 3</div>
      <Stdprofile />
      <div className="TF">UserCard Excercise 4</div>
      <div className="UC7">
        <Usercard
          name="Muhammad Shahzaib"
          age={23}
          city="Lahore"
          course="IBM Full Stack JS Developer"
        />
        <Usercard
          name="Muhammad Waqar"
          age={25}
          city="NewYork"
          course="Artificial Intelligence"
        />
        <Usercard
          name="Muhammad Ali"
          age={29}
          city="JalalpurJattah"
          course="Machine Learning"
        />
        <Usercard
          name="Muhammad Riaz"
          age={31}
          city="phentresdorp"
          course="Data Scientisi"
        />
        <Usercard
          name="Muhammad Zaib"
          age={24}
          city="Faislabad"
          course="E-Commerce Specialist"
        />
      </div>
      <div className="TF">ProductCard Excercise 5</div>
      <div className="PC9">
        <Product
          product="T-Shirt"
          image="https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnR8ZW58MHx8MHx8fDA%3D"
          price={2500}
          rating="5 ⭐⭐⭐⭐⭐"
        />
        <Product
          product="shorts"
          image="https://plus.unsplash.com/premium_photo-1779687723019-b9e96b08c59b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyb3dzZXJ8ZW58MHx8MHx8fDA%3D"
          price={2000}
          rating="5 ⭐⭐⭐"
        />
        <Product
          product="Mens-Tie"
          image="https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGllfGVufDB8fDB8fHww"
          price={1300}
          rating="5 ⭐⭐"
        />

        <Product
          product="Scarf"
          image="https://plus.unsplash.com/premium_photo-1782377059656-8686c34fa12a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjYXJmfGVufDB8fDB8fHww"
          price={800}
          rating="5 ⭐⭐⭐"
        />
        <Product
          product="Dress-Pent"
          image="https://plus.unsplash.com/premium_photo-1782483123717-8fb2f658090d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RHJlc3MlMjBwZW50fGVufDB8fDB8fHww"
          price={2300}
          rating="5 ⭐⭐⭐⭐⭐"
        />
        <Product
          product="Mens-Inner"
          image="https://plus.unsplash.com/premium_photo-1727942419322-0f09fd3b31e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWVucyUyMGlubmVyfGVufDB8fDB8fHww"
          price={500}
          rating="5 ⭐⭐⭐⭐"
        />
      </div>

      <div className="TF">Employee Card Excercise 6</div>
      <div className="EC3">
        <Employee
          no="Employe1"
          name="Muhammad Ali"
          designation="Clerk"
          department="Arfa"
          salary={50000}
        />
        <Employee
          no="Employe2"
          name="Muhammad Shahzaib"
          designation="Junior Developer"
          department="EXD"
          salary={50000}
        />
        <Employee
          no="Employe3"
          name="Muhammad Riaz"
          designation="Manager"
          department="Software House"
          salary={50000}
        />
        <Employee
          no="Employe4"
          name="Muhammad Waqar"
          designation="AI Professional"
          department="Arfa"
          salary={50000}
        />
      </div>
      <div className="TF">Likes Count Excercise 7</div>
      <Like
        addlikes={addlikes}
        // increase={likecount}
      />
      <div className="lc">
        <h1>{likecount}</h1>
      </div>
      <div className="TF">Theme Switcher Excercise 8</div>

      <Theme theme={theme} />
      <div className="ct">
        <h1>{currenttheme ? "Dark Theme" : "Light Theme"}</h1>
      </div>

      <div className="TF">Scoreboaard Card Excercise 9</div>
      <div className="SB">
        <Scoreboard
          team="Team A"
          score={teamAScore}
          // increase={() => setTeamAScore(teamAScore + 1)}
          var={teamA}
          reset={() => setTeamAScore(0)}
        />

        <Scoreboard
          team="Team B"
          score={teamBScore}
          // increase={() => setTeamBScore(teamBScore + 1)}
          var={teamB}
          reset={() => setTeamBScore(0)}
        />
        {/* <Objectstate /> */}
      </div>
      <div className="TF">Movie Ticket book Excercise 10</div>

      <div className="MT">
        <Movieticbook movie="Avengers: Endgame" price={1200} seats={5} />
        <Movieticbook movie="Lucifier" price={1300} seats={6} />
        <Movieticbook movie="Agent" price={1400} seats={7} />
        <Movieticbook movie="The Witchers" price={1500} seats={8} />
        <Movieticbook movie="Infinite" price={1600} seats={9} />
        <Movieticbook movie="Mother of Dragon " price={1700} seats={10} />
        <Movieticbook movie="Games Of Thrones" price={1800} seats={25} />
      </div>
      <div className="TF">Bonus Task 1 Excercise 11</div>

      <Traffic />
      <div className="TF">Bonus Task 2 Excercise 12</div>

      <Cricket
        run={score}
        var={addone}
        two={addtwo}
        four={addfour}
        six={addsix}
        out={Out}
        reset={() => setScore(0)}
      />
    </div>
  );
}
export default App;
