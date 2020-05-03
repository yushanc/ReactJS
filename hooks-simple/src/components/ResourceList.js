import React from "react";
import useResource from "./useResource";

const ResourceList = ({ resource }) => {

  return (<ul>{useResource(resource).map(item => <li key={item.id}>{item.title}</li>)}</ul>)

}

export default ResourceList;