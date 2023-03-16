import Todos from "./components/Todos";

function App() {
  return (
    <div className="container w-50 mt-5">
      <div className="card">
        <div className="card-header">
          <h3>Todo</h3>
        </div>
        <div className="card-body">
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;
