import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({ setAuth }) => {
  const navigate = useNavigate();
  const loginUser = (e) => {
    console.log("login user function issue");
    e.preventDefault();

    setAuth(true);
    navigate('/')
  };

  return (
    <form onSubmit={(e) => loginUser(e)}>
      <div className="flex flex-col gap-4">
        <div className="input-group">
          <div className="input-item">
            <span className="label">이메일</span>
            <input type="email" />
          </div>
          <span className="error-msg"></span>
        </div>

        <div className="input-group">
          <div className="input-item">
            <span className="label">비밀번호</span>
            <input type="password" />
          </div>
          <span className="error-msg"></span>
        </div>

        <div className="button-group">
          <button type="submit">로그인</button>
        </div>
      </div>
    </form>
  );
};
