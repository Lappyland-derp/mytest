import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer";

import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import LoginScreen from "./Screens/LoginScreen";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<HomeScreen/>} exact/>
      <Route path="/product/:id" element={<ProductScreen/>}/>
      <Route path='/login' element={<LoginScreen/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
