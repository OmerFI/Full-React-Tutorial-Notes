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