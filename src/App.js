import Form from "./Form";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((store) => store);
  console.log(state);
  return (
    <div className="app-wrapper">
      <Form />
    </div>
  );
}

export default App;
