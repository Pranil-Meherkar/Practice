import "../App.css";
import PrevValueExample from "./PrevValueExample";
import Homepage from "./Homepage";
import HOCExample from "./HOCExample";
import PromiseExample from "./PromiseExample";
import { Routes, Route } from "react-router-dom";
import PureComponentExample from "./PureComponentExample";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/prev-value-example" element={<PrevValueExample />} />
        <Route path="/hoc-example" element={<HOCExample />} />
        <Route path="/promise-example" element={<PromiseExample />} />
        <Route
          path="/pure-component-example"
          element={<PureComponentExample />}
        />
      </Routes>
    </>
  );
}

export default App;
