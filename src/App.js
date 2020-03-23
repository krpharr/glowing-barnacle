import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Directory from "./pages/Directory";


function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Directory} />
    </Router>
  );
}

export default App;