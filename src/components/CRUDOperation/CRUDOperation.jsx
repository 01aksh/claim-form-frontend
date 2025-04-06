import { useState } from "react";
import CustomInput from "../CustomInput/CustomInput";

const CRUDOperation = () => {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState({
    id: "",
    name: "",
    age: "",
  });

  // Handle input changes
  const handleUserChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddUser = () => {
    if (!user.name || !user.age) {
      alert("Please enter a name and age");
      return;
    }

    // If the user is being edited (i.e. the user.id is set), update the user list
    if (user.id) {
      setUserList((prev) =>
        prev.map((u) =>
          u.id === user.id ? { ...u, name: user.name, age: user.age } : u
        )
      );
    } else {
      // Add new user to the list
      setUserList((prev) => [
        ...prev,
        { name: user.name, age: user.age, id: userList.length + 1 },
      ]);
    }

    // Reset the form
    setUser({ name: "", age: "", id: "" });
  };

  // Delete a user from the list
  const onUserDelete = (id) => {
    const filteredUsers = userList.filter((user) => user.id !== id);
    setUserList(filteredUsers);
  };

  // Set user details for editing
  const onUserEdit = (id) => {
    const userToEdit = userList.find((user) => user.id === id);
    setUser(userToEdit);
  };

  return (
    <div>
      <h1>Welcome to the React App</h1>
      <div>
        <CustomInput
          name="name"
          placeholder="Enter Name"
          type="text"
          handleChange={handleUserChange}
          value={user.name}
        />
        <br />
        <CustomInput
          name="age"
          placeholder="Enter Age"
          type="text"
          value={user.age}
          handleChange={handleUserChange}
        />
      </div>
      <div>
        <button onClick={handleAddUser} className="p-2 mx-4 bg-red-400">
          {user.id ? "Update" : "Add"} {/* Dynamic button text */}
        </button>
      </div>
      <div>
        <h2>User List</h2>
        <div className="flex flex-col gap-2">
          {userList.length > 0 ? (
            userList.map((user, index) => (
              <div key={user.id} className="flex gap-2">
                <span>{index + 1}</span>
                <span>{user.name}</span>
                <span>{user.age}</span>
                <button
                  className="p-2 bg-green-500"
                  onClick={() => onUserEdit(user.id)}
                >
                  Edit
                </button>
                <button
                  className="p-2 bg-yellow-500"
                  onClick={() => onUserDelete(user.id)}
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p>Empty List</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CRUDOperation;
