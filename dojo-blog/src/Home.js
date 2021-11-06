import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState("mario");

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // setBlogs(res.blogs);
        console.log(res);
        setBlogs(res);
      });
  }, []);
  // [] means only ever fire this function once on the initial render not whenever the data changes

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* buradaki && işareti, önce soldaki kısma bakıyor eğer false ise sağı
      hiç evaluate etmiyor soldakini işliyor eğer true ise sadece sağdakini
      evaluate ediyor*/}
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
