import React, { useState } from "react";

import ResourceList from "./ResourceList";
import UserList from "./UserList";


const App = () => {
  const [resource, setResource] = useState("posts");
  // useState will return two array [CurrentValue, SetCurrentValue(f)].. we name first array as resource and second as setResource.
  // const color =[red,yellow]
  // instead of myColor = color[0];
  // [myColorOne, myColorTwo] = color;

  return (
    <div className="ui container">
      <div>
        <button onClick={() => setResource("posts")}>Post</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
      <ResourceList resource={resource} />
      <UserList users="users" />
    </div>
  )

}

export default App;