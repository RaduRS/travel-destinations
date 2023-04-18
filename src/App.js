import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const dataInfo = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className="App">
      <Navbar />
      <section className="card-list">{dataInfo}</section>
    </div>
  );
}

export default App;
