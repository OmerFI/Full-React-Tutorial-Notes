import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome Party", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  // useEffect(() => {
  //   console.log("use effect ran");
  //   console.log(blogs);
  // }, []);
  // what this does an empty dependency array is make sure that this hook
  // only runs the function after the first initial render.

  useEffect(() => {
    console.log("use effect ran");
    console.log(name);
  }, [name]); // this is a dependency.

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />{" "}
      {/*This is a prop*/}
      <button
        onClick={() => {
          setName("luigi");
        }}
      >
        change name
      </button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
