import "./App.css";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  // const person = { name: "Beka", age: 21 };
  const link = "https://www.google.com.br/";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        {/* <p>{person}</p> */}

        <p>{10}</p>
        <p>{"Hello,Beka"}</p>
        <p>{[1, 2, 3, 4, 5, 6]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}>Google</a>
      </div>
    </div>
  );
}
export default App;
