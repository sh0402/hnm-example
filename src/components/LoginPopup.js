import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginPopup = ({ onHide, setAuth }) => {
  const navigate = useNavigate();
  const loginUser = (e) => {
    console.log("login user function issue");
    e.preventDefault();

    setAuth(true);
    onHide()
  };
  return (
    <div className="modal">
      <form action="" onSubmit={(e) => loginUser(e)}>
        <div className="modal-container">
          <div className="modal-header">
            <h5>로그인</h5>
            <button onClick={onHide}>X</button>
          </div>

          <div className="modal-body">
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
          </div>

          <div className="modal-footer">
            <div className="button-group">
              <button type="submit">로그인</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
