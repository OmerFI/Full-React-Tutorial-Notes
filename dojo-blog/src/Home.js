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