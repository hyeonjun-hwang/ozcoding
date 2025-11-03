import Button from "./components/button.jsx";
import "./App.css";

function Header() {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      여기는 app이다
      <Header />
    </div>
  );
}

export default App;
