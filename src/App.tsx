import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="App h-full main-layout-grid">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
