import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTimes } from "@fortawesome/free-solid-svg-icons";

const EditUserModal = ({ user, onSave, onCancel }) => {
  const [firstName, setFirstName] = useState(user.name.first);
  const [lastName, setLastName] = useState(user.name.last);
  const [email, setEmail] = useState(user.email);

  const handleSave = () => {
    onSave({
      ...user,
      name: { ...user.name, first: firstName, last: lastName },
      email,
    });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit User</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
        >
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="submit" className="save-button">
            <FontAwesomeIcon icon={faSave} /> Save
          </button>
          <button type="button" className="cancel-button" onClick={onCancel}>
            <FontAwesomeIcon icon={faTimes} /> Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
