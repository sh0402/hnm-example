import "./App.scss";
import "material-icons/iconfont/material-icons.css";
import { useEffect, useState, Navigate } from "react";
import { Routes, Route } from "react-router-dom";

import { Nav } from "./components/Nav";
import { Products } from "./components/Products";
import { Login } from "./components/Login";
import { Detail } from "./components/Detail";

import { PrivateRoute } from "./components/PrivateRoute";

// 1. 전체 상품페이지, 로그인 페이지, 상품 상세페이지
// 1-1. 네비게이션 바
// 2. 전체 상품페이지 > 전체 상품을 볼수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품 디테일 눌렀으나 로그인이 안됐을 경우 로그인 페이지가 먼저 나온다.
// 5. 로그인이 되어있을 경우에는 상품 디테일을 볼수 있다.
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 7. 로그아웃이 되면 상품 디테일 페이지를 볼수 없다. 다시 로그인 페이지로 간다.
// 8. 상품을 검색할 수 있다.

function App() {
  const [auth, setAuth] = useState(false); // true일때 로그인이 됨
  const [showLogin, setShowLogin] = useState(false);

  const openModalLogin = () => {
    setShowLogin(!showLogin);
  };
  const closeModalLogin = () => {
    setShowLogin(false);
  };

  useEffect(() => {
    console.log("Auth", auth);
  }, [auth]);

  return (
    <div className="App">
      <div className="container m-auto">
        <Nav
          auth={auth}
          setAuth={setAuth}
          showLogin={showLogin}
          onShow={openModalLogin}
          onHide={closeModalLogin}
        />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route
            path="/product/:id"
            element={
              <PrivateRoute
                auth={auth}
                setAuth={setAuth}
                setShowLogin={setShowLogin}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
