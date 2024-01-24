import { useState } from "react";
import Axios, { isCancel, AxiosError } from "axios";

export default function UserAdd() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const postDb = async (e) => {
    e.preventDefault();
    // Make a POST request to the server
    await Axios.post("/sample", { name, phone })
      .then(() => {
        console.log("THIS IS FRONTEND AXIOS " + name, phone);
        console.log("Success");
      })
      .catch((err) => {
        console.log("THIS IS FRONTEND AXIOS ERR " + name, phone);
        console.log(err);
      });
  };

  return (
    <div className="App">
      <form>
        <label>Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
        <label>Phone</label>
        <input type="text" onChange={(e) => setPhone(e.target.value)}></input>
        <button type="Submit" onClick={postDb}>
          ENTER
        </button>
      </form>
    </div>
  );
}
