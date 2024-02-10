import { useState } from "react";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function UserAdd() {
  const [content, setContent] = useState("");
  const { id } = useParams();
  const userId = parseInt(id,10);
  const navigate = useNavigate();
 console.log("ID User:", id);
 
  const postDb = async (e) => {
    e.preventDefault();
    // Make a POST request to the server
    await Axios.post(`http://localhost:3001/document/${id}`, {
      content,
      userId
    })
      .then(() => {
        console.log("THIS IS FRONTEND AXIOS " + content, userId);
        console.log("Success");
        navigate("/list");
      })
      .catch((err) => {
        console.log("THIS IS FRONTEND AXIOS ERR " + content);
        console.log(err);
      });
  };

  return (
    <div className="App">
      <form onSubmit={postDb}>
        <label>Content</label>
        <input type="text" onChange={(e) => setContent(e.target.value)}></input>
        <label>User Id: {id}</label>
        <button type="Submit">ADD DOCUMENT</button>
      </form>
    </div>
  );
}
