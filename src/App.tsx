import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App h-full main-layout-grid">
      <Router>
        <Header />
        <Main/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
