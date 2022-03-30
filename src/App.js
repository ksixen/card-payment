import Form from "./components/Form";

import { Route, Routes } from "react-router-dom";
import CardsList from "./components/CardsList/CardsList";

function App() {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" exact element={<Form />} />
        <Route path="/cards" element={<CardsList />} />
      </Routes>
    </div>
  );
}

export default App;
