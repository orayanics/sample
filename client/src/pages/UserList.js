import React, { useEffect } from "react";
import Axios from "axios";

export default function UserList() {
  const [res, setResponse] = React.useState([]);

  // res into list

  useEffect(() => {
    Axios.get("http://localhost:3001/list")
      .then(function (response) {
        // handle success
        setResponse(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  });
  return (
    <div>
      <p>UserList</p>
      {res.map((val, key) => {
        return (
          <div>
            <p>{val.name}</p>
            <p>{val.phone}</p>
          </div>
        );
      })}
    </div>
  );
}
