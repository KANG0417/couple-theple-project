import React from "react";
import { memo } from "react";
import { Routes, Route } from "react-router-dom";
import JoinView from "../views/JoinView";
import LoginView from "../views/LoginView";
import HomeView from "../views/HomeView";
import DateMonthView from "../views/DateMonthView";
import CounselingView from "../views/CounselingView";
import WeddingView from "../views/WeddingView";
// import ErrorView from "../views/ErrorView";

const Routing = ():JSX.Element => {
  return (
    <Routes>
      {/* <Route path="*" element={<ErrorView/>} /> */}
      <Route path="/join" element={<JoinView/>} />
      <Route path="/login" element={<LoginView/>} />
      <Route path="/home" element={<HomeView/>} />
      <Route path="/datemonth" element={<DateMonthView/>} />
      <Route path="/counseling" element={<CounselingView/>} />
      <Route path="/wedding" element={<WeddingView/>} />
    </Routes>
  );
};

export default memo(Routing);