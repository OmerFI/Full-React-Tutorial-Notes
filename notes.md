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

![](note-imgs/React-Components.png)

![](note-imgs/React-Components-2.png)

src/App.js
```js
// import logo from './logo.svg';
import './App.css';

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
import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  // const person = { name: 'yoshi', age: 30 };
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>

        {/* <p>{ person }</p> */}

        <p>{ 10 }</p>
        <p>{ "hello, ninjas" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10}</p>

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
```

