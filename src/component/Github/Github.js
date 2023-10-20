import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hidayat78")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white">
      <h1>Github Follower:{data.followers}</h1>
      <h1>Github name: {data.name}</h1>
      <h1>Github name: {data.id}</h1>
      <img src={data.avatar_url} alt="gitpic" height={200} width={200} />
    </div>
  );
};

export default Github;
