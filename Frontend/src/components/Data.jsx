import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Data.css";

function Data() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://clumisness-catalogue.onrender.com/getUsers")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const updateUser = (userId, updatedUserData) => {
    axios
      .put(
        `https://clumisness-catalogue.onrender.com/updateUser/${userId}`,
        updatedUserData
      )
      .then((result) => {
        console.log(result);
        alert("User details updated successfully!");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (userId) => {
    axios
      .delete(`https://clumisness-catalogue.onrender.com/deleteUser/${userId}`)
      .then((result) => {
        console.log(result);
        window.location.reload();
        alert("User deleted successfully!");
      })
      .catch((err) => {
        console.log(err);
        alert("User no longer exists.");
        window.location.reload();
      });
  };

  // Function to handle editing username
  const handleEdit = (index, field, value) => {
    const updatedUsers = [...users];
    updatedUsers[index][field] = value;
    setUsers(updatedUsers);
  };

  // Function to toggle edit mode
  const toggleEditMode = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].editMode = !updatedUsers[index].editMode;
    setUsers(updatedUsers);
  };

  return (
    <div>
      <div className="mongo-container">
        {users.map((user, index) => (
          <div className="mongo-data" key={index}>
            <p>
              Username:{" "}
              {user.editMode ? (
                <input
                  type="text"
                  value={user.Username}
                  onChange={(e) =>
                    handleEdit(index, "Username", e.target.value)
                  }
                />
              ) : (
                user.Username
              )}
            </p>
            <p>Email: {user.Email}</p>
            <div className="buttons">
              <button
                className="update"
                onClick={() => {
                  if (user.editMode) {
                    updateUser(user._id, { Username: user.Username });
                  }
                  toggleEditMode(index);
                }}
              >
                {user.editMode ? "Save" : "Edit"}
              </button>
              <button className="delete" onClick={() => deleteUser(user._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Data;
