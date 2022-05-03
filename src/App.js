import './App.css';
import { Main } from './components/Main/Main';
import { NavBar } from './components/NavBar/NavBar';
import { SideBar } from './components/SideBar/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <NavBar/>
        <Main/>
    </>

  );
}

export default App;
