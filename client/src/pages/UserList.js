import React, { useEffect } from "react";
import Axios from "axios";

export default function UserList() {
  const [users, setUsers] = React.useState([]);

  // FETCH DATA ONCE
  useEffect(() => {
    fetchData();
  }, []);

  // PUT INTO FUNCTION GET USERS
  const fetchData = async () => {
    try {
      const response = await Axios.get("http://localhost:3001/list");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // DELETE ONCLICK HANDLER
  const deleteData = async (id) => {
    try {
      const response = await Axios.delete(
        `http://localhost:3001/list/delete/${id}`
      );
      fetchData();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // UPDATE ONLCICK HANDLER

  return (
    <div className="container">
      <p>UserList</p>
      {users.map((val, key) => {
        return (
          <div className="card-crud" key={val.idusers}>
            <p>{val.idusers}</p>
            <p>{val.name}</p>
            <p>{val.phone}</p>

            <button>Update</button>
            <button onClick={() => deleteData(val.idusers)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
