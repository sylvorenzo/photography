import InitialComponent from "./components/Initial";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Wedding from "./components/wedding";
import Graduation from "./components/graduation";
import Events from "./components/events";
export default function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element ={<InitialComponent/>}></Route>
        <Route path="/wedding" element = {<Wedding/>}></Route>
        <Route path="/graduation" element = {<Graduation/>}></Route>
        <Route path="/events" element = {<Events/>}></Route>
      </Routes>
      
    </Router>
    
  );
}


