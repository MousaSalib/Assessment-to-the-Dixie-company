import React, { useState, useEffect } from "react";
import EditUserModal from "./EditUserModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./ChallengeTwo.css";

const ChallengeTwo = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://randomuser.me/api/?seed=dexi-interview&results=5"
      );
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    setLoading(false);
  };

  const loadMoreUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://randomuser.me/api/?seed=dexi-interview&results=5"
      );
      const data = await response.json();
      setUsers((prevUsers) => [...prevUsers, ...data.results]);
    } catch (error) {
      console.error("Error fetching more users:", error);
    }
    setLoading(false);
  };

  const handleEdit = (index, updatedUser) => {
    const updatedUsers = [...users];
    updatedUsers[index] = updatedUser;
    setUsers(updatedUsers);
  };

  return (
    <div className="challenge-container">
      <h2>Challenge 2</h2>
      <div className="user-table">
        {loading ? (
          <p>
            <FontAwesomeIcon icon={faSpinner} spin /> Loading...
          </p>
        ) : users.length === 0 ? (
          <p>No users available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.login.uuid}>
                  <td>{user.name.first}</td>
                  <td>{user.name.last}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="edit-button"
                      onClick={() => setEditingUser({ user, index })}
                    >
                      <FontAwesomeIcon icon={faEdit} /> Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <button className="load-more-button" onClick={loadMoreUsers}>
          <FontAwesomeIcon icon={faPlus} /> Load More
        </button>

        {editingUser && (
          <EditUserModal
            user={editingUser.user}
            onSave={(updatedUser) => {
              handleEdit(editingUser.index, updatedUser);
              setEditingUser(null);
            }}
            onCancel={() => setEditingUser(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ChallengeTwo;

// The below code is written, if you want to add only one user
//////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import EditUserModal from "./EditUserModal";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faEdit, faSpinner } from "@fortawesome/free-solid-svg-icons";
// import "./ChallengeTwo.css";

// const ChallengeTwo = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [editingUser, setEditingUser] = useState(null);
//   const [showLoadMore, setShowLoadMore] = useState(false);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         "https://randomuser.me/api/?seed=dexi-interview&results=5"
//       );
//       const data = await response.json();
//       setUsers(data.results);
//       setShowLoadMore(true);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//     setLoading(false);
//   };

//   const loadMoreUsers = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         "https://randomuser.me/api/?seed=dexi-interview&results=1" // Load only 1 user
//       );
//       const data = await response.json();
//       setUsers((prevUsers) => [...prevUsers, ...data.results]);
//     } catch (error) {
//       console.error("Error fetching more users:", error);
//     }
//     setLoading(false);
//   };

//   const handleEdit = (index, updatedUser) => {
//     const updatedUsers = [...users];
//     updatedUsers[index] = updatedUser;
//     setUsers(updatedUsers);
//   };

//   return (
//     <div className="user-table">
//       {loading ? (
//         <p>
//           <FontAwesomeIcon icon={faSpinner} spin /> Loading...
//         </p>
//       ) : users.length === 0 ? (
//         <p>No users available.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={user.login.uuid}>
//                 <td>{user.name.first}</td>
//                 <td>{user.name.last}</td>
//                 <td>{user.email}</td>
//                 <td>
//                   <button
//                     className="edit-button"
//                     onClick={() => setEditingUser({ user, index })}
//                   >
//                     <FontAwesomeIcon icon={faEdit} /> Edit
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//       {showLoadMore && (
//         <button className="load-more-button" onClick={loadMoreUsers}>
//           <FontAwesomeIcon icon={faPlus} /> Load More
//         </button>
//       )}

//       {editingUser && (
//         <EditUserModal
//           user={editingUser.user}
//           onSave={(updatedUser) => {
//             handleEdit(editingUser.index, updatedUser);
//             setEditingUser(null);
//           }}
//           onCancel={() => setEditingUser(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default ChallengeTwo;
