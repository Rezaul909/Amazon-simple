import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import OrderReview from "./components/OrderReview/OrderReview";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/Shop" element={<Shop></Shop>}></Route>
        <Route
          path="/OrderReview"
          element={<OrderReview></OrderReview>}
        ></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
