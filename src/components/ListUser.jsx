import { useState } from "react";
import User from "./User";

import "./listuser.css";

const ListUser = (props) => {
  const [activeId, setActiveId] = useState(-1);
  const users = props.users;
  const handleChangeActiveID = (id) => setActiveId(id);

  return (
    <div>
      <h3>Users number: {users.length}</h3>
      {users.map((user) => {
        return (
          <User
            key={user.id}
            user={user}
            activeId={activeId}
            handleChangeActiveID={handleChangeActiveID}
          />
        );
      })}
    </div>
  );
};

export default ListUser;
