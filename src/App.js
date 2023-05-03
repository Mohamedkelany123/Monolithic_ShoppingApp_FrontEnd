import React from 'react';
import './App.css';
import Login  from './admin/Login';
import ListAdmins from './list/ListAdmins';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import ListProducts from './sell/ListProducts'
import LoginSell from './sell/LoginSell'
import Home from './home/home'
import RegisterSell from './admin/sellingcompany';
import RegisterShip from './admin/shippingcompany';
import List from './list/List';
import ListCustomers from './list/ListCustomers';
import ListSelling from './list/ListSelling';
import ListShipping from './list/ListShipping';
import ListPrevious from './sell/ListPrevious';
import ListSell from './sell/ListSell';
import LogoutSell from './sell/LogoutSell';
import CreateProduct from './sell/AddProduct';
import RegisterCustomer from './customer/RegisterCustomer';
import LoginCustomer from './customer/LoginCustomer';
import ListProductsCustomer from './customer/ListProductsCustomer';
import ListNotifications from './customer/ListNiotifications';
import LogoutCustomer from './customer/LogoutCustomer';
import ViewPastOrders from './customer/ViewPastOrders';
import ViewCurrentOrders from './customer/ViewCurrentOrders';
import LoginShip from './ship/Loginship';
import LogoutShip from './ship/Logoutship';
import SendNotification from './ship/SendNotification';
import ListPending from './ship/ListPending';
import ListShip from './ship/ListShip';
import ListProcessing from './ship/ListProcessing';
import ListShipped from './ship/ListShipped';
import ProcessOrder from './ship/ProcessOrder';
import SetShipOrder from './ship/SetShipOrder';

function App() {
  return (
   
  <div>
  <Router>
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route  path="/adminlogin" element={<Login/>} />
    <Route  path="/selllogin" element={<LoginSell/>} />
    <Route  path="/listadmins" element={<ListAdmins/>} />
    <Route  path="/listproduct" element={<ListProducts/>} />
    <Route  path="/listprevious" element={<ListPrevious/>} />
    <Route  path="/sellregister" element={<RegisterSell/>} />
    <Route  path="/shipregister" element={<RegisterShip/>} />
    <Route  path="/Sendnoti" element={<SendNotification/>} />
    <Route  path="/list" element={<List/>} />
    <Route  path="/listsell" element={<ListSell/>} />
    <Route  path="/listcustomers" element={<ListCustomers/>} />
    <Route  path="/listselling" element={<ListSelling/>} />
    <Route  path="/listshipping" element={<ListShipping/>} />
    <Route  path="/logoutsell" element={<LogoutSell/>} />
    <Route  path="/logoutship" element={<LogoutShip/>} />
    <Route  path="/logoutcustomer" element={<LogoutCustomer/>} />
    <Route  path="/addproduct" element={<CreateProduct/>} />
    <Route  path="/registercustomer" element={<RegisterCustomer/>} />
    <Route  path="/customerlogin" element={<LoginCustomer/>} />
    <Route  path="/listallproducts" element={<ListProductsCustomer/>} />
    <Route  path="/listnotifications" element={<ListNotifications/>} />
    <Route  path="/viewpast" element={<ViewPastOrders/>} />
    <Route  path="/viewcurrent" element={<ViewCurrentOrders/>} />
    <Route  path="/shiplogin" element={<LoginShip/>} />
    <Route  path="/listpending" element={<ListPending/>} />
    <Route  path="/listship" element={<ListShip/>} />
    <Route  path="/listprocessing" element={<ListProcessing/>} />
    <Route  path="/listshipped" element={<ListShipped/>} />
    <Route  path="/processorder" element={<ProcessOrder/>} />
    <Route  path="/set" element={<SetShipOrder/>} />
    </Routes>
  </Router>
  </div>
  
  );

}

export default App;
