import { useState } from "react";
import Axios from "axios";
import Navbar from "../components/navbar";
export default function UserAdd() {
  Axios.defaults.baseURL = "http://localhost:6936";

  const [name, setName] = useState("");
  const [property_location, setPropertyLocation] = useState("");
  const [client_bank_name, setClientBankName] = useState("");
  const [client_bank_address, setClientBankAddress] = useState("");
  const [isValid, setIsValid] = useState(true);

  const postDb = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !property_location ||
      !client_bank_name ||
      !client_bank_address
    ) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    await Axios.post("http://localhost:6936/add", {
      name,
      property_location,
      client_bank_name,
      client_bank_address,
    })
      .then(() => {
        console.log(
          "THIS IS FRONTEND AXIOS " + name,
          property_location,
          client_bank_name,
          client_bank_address
        );
        console.log("Success");
      })
      .catch((err) => {
        console.log(
          "THIS IS FRONTEND AXIOS ERR " + name,
          property_location,
          client_bank_name,
          client_bank_address
        );
        console.log(err);
      });
  };

  return (
    <div className="container_main">
      {" "}
      <Navbar></Navbar>
      <div className="container">
        {!isValid && (
          <div className="alert">
            <span className="closebtn" onClick={() => setIsValid(true)}>
              &times;
            </span>
            <p>Please fill out all fields.</p>
          </div>
        )}
        <div className="card">
          <h1 className="title">Add a Client</h1>
          <div className="App">
            <form onSubmit={postDb}>
              <h3 className="input_title">Client Name</h3>
              <input
                className="input"
                type="text"
                onChange={(e) => setName(e.target.value)}
              ></input>
              <h3 className="input_title">Property Location</h3>
              <input
                className="input"
                type="text"
                onChange={(e) => setPropertyLocation(e.target.value)}
              />{" "}
              <h3 className="input_title">Client Bank Name</h3>
              <input
                className="input"
                type="text"
                onChange={(e) => setClientBankName(e.target.value)}
              />
              <h3 className="input_title">Client Bank Address</h3>
              <input
                className="input"
                name="query"
                type="text"
                onChange={(e) => setClientBankAddress(e.target.value)}
              />
              <div className="btn2">
                <button
                  type="submit"
                  className="btn submit"
                  disabled={!isValid}
                >
                  Submit
                </button>
                <button className="btn cancel ">Cancel</button>
                {/* btn2 */}{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
