import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoginPopup } from "./LoginPopup";

export const Nav = ({ showLogin, auth, setAuth, onShow, onHide }) => {
  const navigate = useNavigate();
  const menuList = ["Women", "Divided", "Men", "Baby", "Kids", "Sports"];

  const goToLogin = () => {
    if (auth) {
      setAuth(false);
    } else {
      navigate("/login");
    }
  };

  const search = (e) => {
    if (e.key === "Enter") {
      console.log("we click this key", e.key);
      let keyword = e.target.value;
      console.log("keyword", keyword);
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <>
      <div className="nav-bar">
        <div className="nav-left">
          <span className="material-icons-outlined">menu</span>
        </div>

        <div className="nav-center">
          <div className="logo" onClick={() => navigate("/")}>
            LOGO
          </div>
        </div>

        <div className="nav-right" onClick={goToLogin}>
          <span className="material-icons-outlined">account_circle</span>
          <span>{auth ? "로그아웃" : "로그인"}</span>
        </div>
      </div>

      <div className="menu-list">
        <ul>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="search-bar">
          <span className="material-icons-outlined">search</span>
          <input
            type="text"
            placeholder="제품 검색"
            onKeyPress={(e) => search(e)}
          />
        </div>
      </div>

      {showLogin ? <LoginPopup onHide={onHide} setAuth={setAuth} /> : null}
    </>
  );
};
