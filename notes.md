# Full Modern React Tutorial

## Creating a React Application

```bash
npx create-react-app dojo-blog
```

#### Directory Listing:

- node_modules: dependencies directory
- public: dışarıya açık, websitesinde gözüken kısım
- src: kod kısmı

---

index.html dosyası içinde şöyle bir kısım var:

```html
<div id="root"></div>
```

tüm kodlarımız `root` id'si olan bu div'e inject ediliyor.

---

Projeyi ilk kurduğumuzda `node_modules` şeklinde bir klasör oluşturuyor. Bu klasör tüm proje gereksinimliliklerini içeriyor. Eğer bu klasörü silersek projeyi çalıştıramayız.

GitHub'a proje yüklerken bu `node_modules` klasörü .gitignore dosyası içinde olduğundan yüklenmez. Eğer GitHub'dan bir proje indirip `npm run start` ile çalıştırmaya kalkarsak hata `node_modules` klasörü olmayacağından dolayı hata alırız.

`node_modules` klasörünü manuel olarak yüklemek için aşağıdaki komutu çalıştırıyoruz:

```bash
npm install
```

Projeyi başlatmak için:

```bash
npm run start
```

## Video 3 - Components & Templates

![React-Components.png](note-imgs/React-Components.png)

![React-Components-2.png](note-imgs/React-Components-2.png)

src/App.js

```js
// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
      </div>
    </div>
  );
}

export default App;
```

## Video 4 - Dynamic Values in Templates

```js
// import logo from './logo.svg';
import "./App.css";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  // const person = { name: 'yoshi', age: 30 };
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>

        {/* <p>{ person }</p> */}

        <p>{10}</p>
        <p>{"hello, ninjas"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
```

## Video 5 - Multiple Components

![](note-imgs/Component-Tree.png)

App.js

```js
// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  // const person = { name: 'yoshi', age: 30 };
  const link = "http://www.google.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
```

Navbar.js

```js
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
```

Home.js

```js
const Home = () => {
  return (
    <div className="home">
      <h2>Homepage</h2>
    </div>
  );
};

export default Home;
```

Kurduğumuz eklenti ile `sfc` yazarak hızlı bir şekilde component setup'ı yapabiliyoruz.

## Video 6 - Adding Styles

index.css

```css
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

/* base styles */
* {
  margin: 0;
  font-family: "Quicksand";
  color: #333;
}
.navbar {
  padding: 20px;
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  border-bottom: 1px solid #f2f2f2;
}
.navbar h1 {
  color: #f1356d;
}
.navbar .links {
  margin-left: auto;
}
.navbar a {
  margin-left: 16px;
  text-decoration: none;
  padding: 6px;
}
.navbar a:hover {
  color: #f1356d;
}
.content {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
}
```

Navbar.js

```js
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="link">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
        {/* Inline Styling */}
        {/* <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px'
                }}>New Blog</a> */}
        {/* Inline Styling */}
      </div>
    </nav>
  );
};

export default Navbar;
```

## Video 7 - Click Events

Home.js

```js
const Home = () => {
  // otomatik olarak event object verilir fonksiyona
  const handleClick = (e) => {
    console.log("hello, ninjas");
  };

  const handleClickAgain = (name, e) => {
    console.log("hello " + name, e.target); // DOM eğitimindeki gibi
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain("mario", e)}>
        Clicke me again
      </button>
    </div>
  );
};

export default Home;
```

## Video 8 - useState Hook

When we need a reactive value something that might change at some point we use the `useState` hook to do that.

Aldığımız destructured listin ilk elemanı, verdiğimiz değişken; ikincisi ise onu değiştiren fonksiyon.

```js
import { useState } from 'react';

const [name, setName] = useState('mario');
const [age, setAge] = useState(25);
```

Home.js
```js
import { useState } from 'react';

const Home = () => {
  // let name = 'mario';
  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);

  // otomatik olarak event object verilir fonksiyona
  const handleClick = (e) => {
    // name = 'luigi';
    // console.log(name) // luigi yazdırmasına rağmen, template'de update yapmıyor
    
    setName('luigi'); // this value is reactive
    setAge(30);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
```

## Video 10 - Outputting Lists

Home.js
```js
import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome Party", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3},
  ]);
  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
```

index.css (added)
```css
/* blog previews / list */
.blog-preview {
  padding: 10px 16px;
  margin: 20px 0;
  border-bottom: 1px solid #fafafa;
}
.blog-preview:hover {
  box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
}
.blog-preview h2 {
  font-size: 20px;
  color: #f1356d;
  margin-bottom: 8px;
}
```

## Video 11 - Props

Django'da, templatelere parametre göndermek ile çok benzer şeyler. Bir component'dan diğerine parametre göndermek için kullanılıyor.

Home.js
```js
import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome Party", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3},
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" /> {/*This is a prop*/}
    </div>
  );
};

export default Home;
```

BlogList.js
```js
// const BlogList = (props) => {
  // const blogs = props.blogs;
  // const title = props.title;
const BlogList = ({blogs, title}) => {


  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
```

## Video 12 - Reusing Components

Home.js
```js
import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome Party", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3},
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" /> {/*This is a prop*/}
      <BlogList blogs={blogs.filter((blog) => {return blog.author === "mario"})} title="Mario's Blogs!" /> {/*This is a prop*/}
    </div>
  );
};

export default Home;
```

## Video 13 - Functions as Props

Home.js
```js
import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome Party", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3},
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} /> {/*This is a prop*/}
    </div>
  );
};

export default Home;
```

BlogList.js
```js
const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
```

## Video 14 - useEffect Hook

useEffect hook is a way to run code on every render.

Home.js
```js
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome Party", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3},
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
  });

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} /> {/*This is a prop*/}
    </div>
  );
};

export default Home;
```

## Video 15 - useEffect Dependencies

Home.js
```js
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
```

## Video 16 - Using JSON Server

To start the json server:
```powershell
npx json-server --watch data/db.json --port 8000
```

This JSON server provides us some endpoints:

![JSON_Server_Endpoints.png](note-imgs/JSON_Server_Endpoints.png)

## Video 17 - Fetching Data with useEffect

Home.js
```js
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
```

