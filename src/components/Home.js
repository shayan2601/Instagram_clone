import React, { useEffect, useState } from "react";
import Story from "../components/Story";
import Posts from "../components/Posts";
import Widgets from "../components/Widgets";
import db from "./firebase";

const Home = () => {
  const [data, setData] = useState([]);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://jsonplaceholder.typicode.com/photos";
      const data = await fetch(url);
      const jsonData = await data.json();
      console.log(jsonData);
      setData(jsonData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPostData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);
  return (
    <div>
      <main className="flex mt-12 mx-auto">
        <div className="flex flex-col  gap-5 overflow-hidden">
          <div
            style={{ border: "1px solid lightgray" }}
            className="bg-white relative flex  max-w-2xl  p-4 scrollbar-hide overflow-x-auto"
          >
            <div className=" flex gap-4 ">
              {data.map(({ id, url }) => (
                <Story key={id} id={id} url={url} />
              ))}
            </div>
          </div>
          <div className="">
            {postData.map(({ id, post }) => (
              <Posts
                key={id}
                id={id}
                caption={post.caption}
                image={post.image}
              />
            ))}
          </div>
        </div>

        <div className="ml-10  lg:inline-flex ">
          <Widgets />
        </div>
      </main>
    </div>
  );
};

export default Home;
