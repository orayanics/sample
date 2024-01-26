import React, { useEffect } from "react";
import Axios from "axios";

export default function UserList() {
  useEffect(() => {
    Axios.get("http://localhost:3001/list")
      .then(function (response) {
        // handle success
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
  return <div>UserList</div>;
}
