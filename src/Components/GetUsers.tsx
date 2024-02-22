import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USER } from "@/GraphQl/Queries";

const GetUsers = () => {
  const [apiData, setApiData] = useState([]);
  const { error, loading, data } = useQuery(LOAD_USER);
  useEffect(() => {
    setApiData(data);
  }, [data]);
  console.log(apiData, "apidata");

  return <div>GetUsers</div>;
};

export default GetUsers;
