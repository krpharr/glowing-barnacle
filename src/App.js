import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Directory from "./pages/Directory";
import EmployeeProfile from "./pages/EmployeeProfile";


function App() {
  return (
    <Router>
      <Route exact path="/" component={Directory} />
      <Route exact path="/employee/:id" component={EmployeeProfile} />
    </Router>
  );
}

export default App;