import React, { useState } from "react";
import { Link } from "react-router-dom";
import { firebaseAuth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const sessionStorage = window.sessionStorage;
  let userinfo = JSON.parse(sessionStorage.getItem("loginUser"));
  const [user, setUser] = useState(userinfo !== null ? userinfo : null);

  const menus = [
    { name: 'home', title: '홈' },
    { name: 'datemonth', title: '이달의 데이트' },
    { name: 'counseling', title: '연애상담/썸' },
    { name: 'wedding', title: '결혼정보' },
  ];

  const onLogOutClick = () => {
    firebaseAuth.signOut();
    sessionStorage.removeItem("loginUser");
    navigate("/home");
  };

  const logoutbt = () => {
    return (
      <button onClick={onLogOutClick}>LogOut</button>
    );
  }
  
  return (
    <>
      <div>
        {user !== null ? user.email : ''}
        {/* {user !== null ? logoutbt : ''} */}

      </div>
      <div className="tabs bg-white flex mt-4 sticky top-0 justify-center">
        {menus.map((menu) => {
          return (
            <Link to={`/${menu.name}`} key={menu.name}
            className="tab text-black border-black hover:text-red-500 hover:border-red-500 tab-bordered pb-10">
            {menu.title}
            </Link>
            );
          })}
        <Link to="/login" className="flex-end tab pb-10 tab-bordered text-black border-black hover:border-red-500 hover:text-red-500">로그인</Link>
        <Link to="/join" className="flex-end tab pb-10 tab-bordered text-black border-black  hover:text-red-500  hover:border-red-500">회원가입</Link>
      </div>
    </>
  )
};

export default Nav;