import "./App.css";
import Blog from "./Containers/Blog/Blog";
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Blog/>
    </div>
    </BrowserRouter>
  );
}

export default App;
