import React, { useState, useEffect } from "react";

export default function Photos() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/p", {
      headers: {
        "x-api-key": process.env.REACT_APP_API_KEY,
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center align-center items-center">
      <h1 className="text-5xl text-gray-800 font-mono mb-5">Photos</h1>
      <div className="grid grid-cols-3 gap-1 p-10 bg-gray-600 bg-opacity-40 w-10/12 rounded-2xl">
        {posts.map((post) => (
          <div>
            <div className="relative group h-52 w-auto overflow-hidden px-1 py-1">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:opacity-50 group-hover:filter group-hover:brightness-50 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex flex-col align-center items-center justify-center opacity-0 group-hover:opacity-100 duration-500">
                <h2 className="text-lg text-white font-mono text-center p-4 mb-4">
                  {post.title.toUpperCase()}
                </h2>
                <h2 className="text-lg text-white font-mono">
                  {post.date_created.toString().slice(0, 10)}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
