import React from "react";
import useResource from "./useResource";

const UserList = ({ users }) => {
  const usersItem = useResource(users)
  return (
    <ul>
      {usersItem.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  )
}

export default UserList;