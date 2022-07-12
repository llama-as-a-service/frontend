import ViewLayout from "./components/ViewLayout/ViewLayout"
import Routes from "./components/Routes/Routes.js"
import './App.css';

import { BrowserRouter as Router } from "react-router-dom"
import { createBrowserHistory } from "history"
const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <ViewLayout>
          <Routes />
        </ViewLayout>
      </div>
    </Router>
  );
}

export default App;
