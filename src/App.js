
import AllRouters from './AllRouters/AllRouters';
import './App.css';
import { UserProvider } from './Components/Userprovider';



function App() {
  return (
    <>
    <UserProvider>
 <AllRouters/>
 </UserProvider>
  </>
  );
}

export default App;
