// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import Axios from "axios";

// export default function UserList() {
//   const [userData, setUserData] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     Axios.get(`http://localhost:3001/list/${id}`)
//       .then((res) => {
//         setUserData(res.data);
//         console.log(res.data)
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//       });
//   }, [id]);

//   return (
//     <div className="container">
//       <p>User Details</p>
//         <div className="card-crud">
//           {
//             userData.map((val) => {
//               return (
//                 <div className="card-crud" key={val.idusers}>
//                   <p>{val.idusers}</p>
//                   <p>{val.name}</p>
//                   <p>{val.phone}</p>
//                   <button>
//                     <Link to={`/list`}>Back to List</Link>
//                   </button>
//                   <button>
//                     <Link to={`/document/${val.idusers}`}>Add</Link>
//                   </button>
//                 </div>
//               );
//             })
//           }
//         </div>

//       <p>Documents</p>
//       {userData.length > 0 ? 
//       userData.map((doc) => {
//         return (
//           <div className="card-crud" key={doc.iddocuments}>
//             <p>ID: {doc.idusers}</p>
//             <p>Document: {doc.doc_name}</p>
//           </div>
//         );
//       }
//       ) : (
//         <p>No documents found</p>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";

export default function UserList() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true); // loading state to true when fetching data
    Axios.get(`http://localhost:3001/list/${id}`)
      .then((res) => {
        setUserData(res.data);
        console.log(res.data);
        setLoading(false); // loading state to false after data is fetched
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false); // loading state to false on error
      });
  }, [id]);

  return (
    <div className="container">
      <p>User Details</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-crud">
          <p>{userData.idusers}</p>
          <p>{userData.name}</p>
          <p>{userData.phone}</p>
          <button>
            <Link to={`/list`}>Back to List</Link>
          </button>
          <button>
            <Link to={`/document/${userData.idusers}`}>Add Document</Link>
          </button>
        </div>
      )}

      <p>Documents</p>
      {loading ? (
        <p>Loading...</p>
      ) : userData.documents && userData.documents.length > 0 ? (
        userData.documents.map((doc) => (
          <div className="card-crud" key={doc.id_doc}>
            <p>Document ID: {doc.id_doc}</p>
            <p>Document Name: {doc.doc_name}</p>
          </div>
        ))
      ) : (
        <p>No documents found</p>
      )}
    </div>
  );
}
