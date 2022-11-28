import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Hello from "./components/hello/Hello";
import Auth from "./components/auth/Auth";
import New from "./pages/new/New";
import NavbarBuyer from './components/Header/NavbarBuyer'
import Footer from './components/Footer/Footer'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
   
    <div className={darkMode ? "app dark" : "app"}>
      
      <BrowserRouter>
      <NavbarBuyer/>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path='Hello' element={<Hello/>}/>

            <Route path='Auth' element={<Auth/>}/>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
                
                />
            </Route>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    
   
  );
}

export default App;
