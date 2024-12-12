import React, { useRef, useState } from "react";

function SignUp() {
  let FisrtNameInputRef = useRef();
  let LastNameInputRef = useRef();
  let MobileInputREf = useRef();
  let EmailInputRef = useRef();
  let StateInputRef = useRef();
  let [Score, setscore] = useState(0);
  let [Balls, setball] = useState(0);
  let [Fours, setfours] = useState(0);
  let [Sixes, setsixes] = useState(0);
  let [Wickets, setwicket] = useState(0);
  let [Noballs, setnoballs] = useState(0);
  return (
    <div>
      <form>
        <h1 className="head">Sign Up</h1>
        <h2 style={{ fontSize: "15px" }}>It's quick and easy</h2>
        <hr></hr>
        <div>
          <label className="fontSize">First Name:</label>
          <input
            type="text"
            placeholder="Enter your First Name"
            ref={FisrtNameInputRef}
          ></input>
        </div>
        <div>
          <label className="fontSize">Last Name:</label>
          <input
            type="text"
            placeholder="Enter your last Name"
            ref={LastNameInputRef}
          ></input>
        </div>
        <div>
          <label className="fontSize">Mobile No:</label>
          <input
            type="number"
            placeholder="Enter your Mobile No"
            ref={MobileInputREf}
          ></input>
        </div>
        <div>
          <label className="fontSize">Email:</label>
          <input
            type="email"
            placeholder="Enter your Email"
            ref={EmailInputRef}
          ></input>
        </div>
        <div>
          <label className="fontSize">Gender:</label>
          <input type="radio" name="gender"></input>
          <label className="genderW">Female</label>
          <input type="radio" name="gender"></input>
          <label className="genderW">Male</label>
        </div>
        <div>
          <label className="fontSize">States:</label>
          <select
            ref={StateInputRef}
            onChange={(eventObj) => {
              console.log(eventObj.target.value);
              let SelectedState = eventObj.target.value;
              switch (SelectedState) {
                case "Andhra Pradesh":
                  console.log("Amaravati");

                  break;
                case "Arunachal Pradesh":
                  console.log("Itanagar");
                  break;
                case "Arunachal Pradesh":
                  console.log("Itanagar");
                  break;
                case "Assam":
                  console.log("Dispur");
                  break;
                case "Bihar":
                  console.log("Patna");
                  break;
                case "Chhattisgarh":
                  console.log("Raipur");
                  break;
                case "Goa":
                  console.log("Panaji");
                  break;
                case "Gujarat":
                  console.log("Gandhinagar");
                  break;
                case "Haryana":
                  console.log("Chandigarh");
                  break;
                case "Himachal Pradesh":
                  console.log("Shimla");
                  break;
                case "Jharkhand":
                  console.log("Ranchi");
                  break;
                case "Karnataka":
                  console.log("Bengaluru");
                  break;
                case "Kerala":
                  console.log("Thiruvananthapuram");
                  break;
                case "Madhya Pradesh":
                  console.log("Bhopal");
                  break;
                case "Maharashtra":
                  console.log("Mumbai");
                  break;
                case "Manipur":
                  console.log("Imphal");
                  break;
                case "Meghalaya":
                  console.log("Shillong");
                  break;
                case "Mizoram":
                  console.log("Aizawl");
                  break;
                case "Nagaland":
                  console.log("Kohima");
                  break;
                case "Odisha":
                  console.log("Bhubaneswar");
                  break;
                case "Punjab":
                  console.log("Chandigarh");
                  break;
                case "Rajasthan":
                  console.log("Jaipur");
                  break;
                case "Sikkim":
                  console.log("Gangtok");
                  break;
                case "Tamil Nadu":
                  console.log("Chennai");
                  break;
                case "Telangana":
                  console.log("Hyderabad");
                  break;
                case "Tripura":
                  console.log("Agartala");
                  break;
                case "Ittar Pradesh":
                  console.log("Lucknow");
                  break;
                case "Uttarkhand":
                  console.log("Dehradun");
                  break;

                default:
                  break;
              }
            }}
          >
            <option>Select State</option>
            <option>Andhra Pradesh</option>
            <option>Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>Chhattisgarh</option>
            <option>Goa</option>
            <option>Gujarat</option>
            <option>Haryana</option>
            <option>Himanchal Pradesh</option>
            <option>Jharkhand</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Madhya Pradesh</option>
            <option>Maharashtra</option>
            <option>Manipur</option>
            <option>Meghalaya</option>
            <option>Mizoram</option>
            <option>Nagaland</option>
            <option>Odisha</option>
            <option>Punjab</option>
            <option>Rajasthan</option>
            <option>Sikkim</option>
            <option>Tamil Nadu</option>
            <option>Telangana</option>
            <option>Tripura</option>
            <option>Uttar Pradesh</option>
            <option>Uttarkhand</option>
            <option>West Bengal</option>
          </select>
        </div>
        <button
          type="button"
          onClick={() => {
            let FirstName = FisrtNameInputRef.current.value;
            let LastName = LastNameInputRef.current.value;
            let Mobile = Number(MobileInputREf.current.value);
            let Email = EmailInputRef.current.value;
            let State = StateInputRef.current.value;
            alert(
              `${FirstName} ${LastName} From ${State} with Mobile No:${Mobile} and Email:${Email}`
            );
          }}
        >
          Sign Up
        </button>
      </form>
      <hr></hr>
      <h1>Score:{Score}/{Wickets}</h1>
      <h1>Balls:{Balls}</h1>
      <h1>Fours:{Fours}</h1>
      <h1>Sixes:{Sixes}</h1>
      <h1>Wickets:{Wickets}</h1>
      <h1>Noballs:{Noballs}</h1>
      <button
        type="button"
        onClick={() => {
          setscore(Score+1);
          setball(Balls+1);
        }}
      >
        Single
      </button>
      <button
        type="button"
        onClick={() => {
          setscore(Score + 2);
          setball(Balls + 1);
        }}
      >
        Double
      </button>
      <button
        type="button"
        onClick={() => {
          setscore(Score +4);
          setfours(Fours + 1);
          setball(Balls + 1);
        }}
      >
        Fours
      </button>
      <button
        type="button"
        onClick={() => {
          setscore(Score + 6);
          setsixes(Sixes + 1);
          setball(Balls + 1);
        }}
      >
        Sixes
      </button>
      <button
        type="button"
        onClick={() => {
          setwicket(Wickets + 1);
          setball(Balls + 1);

        }}
      >
        Wickets
      </button>
      <button
        type="button"
        onClick={() => {
          setnoballs(Noballs + 1);
        }}
      >
        No Balls
      </button>
    </div>
  );
}

export default SignUp;
