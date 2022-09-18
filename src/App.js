import React from 'react';
import ReactDOM from "react-dom/client";
import './App.css';
import Scroll from './pages/Scroll';
import PriceList from './component/PackageSection';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import { Homeregister } from './component/Homeregister';
import {Login} from './pages/Login';
import {CostomerDetail} from './pages/CostomerDetail';
import {SignOut} from './component/SignOut';
import {CustomerUpdate} from './component/CustomerUpdate';
import SearchTable from './pages/SearchTable';
import Regs from './pages/Regs';
import { AdminDashboard } from './pages/AdminDashboard';
import { UsersDashboard } from './pages/UsersDashboard';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Order } from './pages/Order';
import RegAdmin from './pages/RegAdmin';
import { NewsContextProvider } from './blog/NewsContext';
import Content from "./blog/Content";
import { WasherDashboard } from './pages/WasherDashboard';

function App() {
  return (
   <Router>
       <Routes> 
    <Route exact path="/" element={<Scroll/>}/>
    <Route path="/feed" element={<Homeregister/>} />
    <Route path="/profile" element={<CostomerDetail/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/out" element={<SignOut/>} />
    <Route path="/chek" element={<PriceList/>} />
    <Route path="/searchtable" element={<SearchTable/>} />
    <Route path="/adash" element={<AdminDashboard/>} />
    <Route path="/reg" element={<Regs/>} />
    <Route path="/customerupdate" element={<CustomerUpdate/>} />
    <Route path="/order" element={<Order/>} />
    <Route path="/udash" element={<UsersDashboard/>} />
    <Route path="/adminreg" element={<RegAdmin/>} />
    <Route path="/blogs" element={<NewsContextProvider><Content/></NewsContextProvider>}/>
    <Route path="/washerlogin" element={<WasherDashboard/>} />
    

    </Routes>
    </Router>
  );
}

export default App;
