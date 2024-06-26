import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer";

import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import LoginScreen from "./Screens/LoginScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import RegisterScreen from "./Screens/RegisterScreen";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<HomeScreen/>} exact/>
      <Route path="/product/:id" element={<ProductScreen/>}/>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path='/shipping' element={<ShippingScreen/>}/>
      <Route path='/register' element={<RegisterScreen/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
