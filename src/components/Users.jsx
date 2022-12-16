import { useState, useEffect } from "react";
import ListUser from "./ListUser";
import axios from "axios";

import "./users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const users = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(users.data);
    };
    getData();
  }, []);

  return (
    <div className="users">
      {users ? (
        <div>
          <ListUser users={users} />
        </div>
      ) : (
        "No Users"
      )}
    </div>
  );
};

export default Users;
