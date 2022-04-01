import './App.css';
import './components/DisplayBoxes/Grid.css';
import { Outlet, Link } from "react-router-dom"


import RenderDisplays from './components/DisplayBoxes/RenderDisplays';

function App() {
  return (
    <div>
      <h1>Sign Up</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/SignUp">Sign Up</Link> | {" "}

      </nav>
      <Outlet />
      <RenderDisplays />

    </div>
  );
}

export default App;
