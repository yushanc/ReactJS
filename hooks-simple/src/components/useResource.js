import { useState, useEffect } from "react";
import JSON from "../Apis/jSON";

const useResource = (resource) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const respond = await JSON.get(`/${resource}`);
    setResources(respond.data);
  };

  useEffect(() => {
    fetchResource(resource)
  }, [resource]);
  // if initial value is same as new value, the function won't be call
  // useEffect(()=>{}) : Called multiple time
  // useEffect(()=>{},[]) :Called once
  // useEffect(()=>{},[different values]): call when value changes
  //*** useEffect(()=>{},[{color:red}]): call even it is the same object. React see object as same object
  return resources;

}

export default useResource;