import logo from './logo.svg';
import './index.css';
import { Link } from "react-router-dom"
import { Navbar } from './Pages/Navbar';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (

    <div>
      <Navbar />
      <Link to="/BlogPage">
       <button>
     Go to BLog Page
      </button>
      </Link>
      <div>
      <button className="btn btn-primary">Click me</button>
    </div>
      </div>
//     <div>
//       <div id="stars"></div>
// <div id="stars2"></div>
// <div id="stars3"></div>
// <div id="title">

// </div>
//     </div>
  );
}

export default App;
