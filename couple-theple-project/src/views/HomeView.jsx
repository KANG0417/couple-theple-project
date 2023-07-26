import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const HomeView = () => {

  const navigate = useNavigate();
  const sessionStorage = window.sessionStorage;

  console.log("test", JSON.parse(sessionStorage.getItem("loginUser")));

  let userinfo = JSON.parse(sessionStorage.getItem("loginUser"));

  const [user, setUser] = useState(userinfo !== null ? userinfo : "");
  
  /**let userinfo2 = user;
  userinfo2.hi = "hi";
  setUser(userinfo2);*/

  console.log(user);
  
  return (
    <>
    <div className="flex justify-center">
      <div className="carousel w-3/6">
        <div id="item1" className="carousel-item w-full">
          <img src="https://visitgangnam.net/wp-content/uploads/2022/08/2-%E1%84%8F%E1%85%A9%E1%84%8B%E1%85%A6%E1%86%A8%E1%84%89%E1%85%B3-2-scaled.jpg" className="w-full" />
        </div> 
        <div id="item2" className="carousel-item w-full">
          <img src="https://a.cdn-hotels.com/gdcs/production195/d158/5430f599-4c72-4d16-b597-c2f33670c781.jpg?impolicy=fcrop&w=1600&h=1066&q=medium" className="w-full" />
        </div> 
        <div id="item3" className="carousel-item w-full">
          <img src="https://a.cdn-hotels.com/gdcs/production141/d343/bea501c7-7552-4e84-aca5-f99b5aacb8aa.jpg?impolicy=fcrop&w=1600&h=1066&q=medium" className="w-full" />
        </div> 
        <div id="item4" className="carousel-item w-full">
          <img src="https://a.cdn-hotels.com/gdcs/production171/d861/f7e98a8f-2619-43e1-b9d2-571b7f39de47.jpg?impolicy=fcrop&w=1600&h=1066&q=medium" className="w-full" />
        </div>
      </div> 
    </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a> 
        <a href="#item2" className="btn btn-xs">2</a> 
        <a href="#item3" className="btn btn-xs">3</a> 
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </>
  )
};

export default HomeView;