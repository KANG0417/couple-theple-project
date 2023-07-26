import React from "react";
import { memo } from "react";
import { Routes, Route } from "react-router-dom";
import JoinView from "../views/JoinView";
import LoginView from "../views/LoginView";
import HomeView from "../views/HomeView";
import DateMonthView from "../views/DateMonthView";
import CounselingView from "../views/CounselingView";
import WeddingView from "../views/WeddingView";
import MypageView from "../views/MypageView";
import WriterView from "../views/WriterView";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView/>} />
      <Route path="/join" element={<JoinView/>} />
      <Route path="/login" element={<LoginView/>} />
      <Route path="/home" element={<HomeView/>} />
      <Route path="/datemonth" element={<DateMonthView/>} />
      <Route path="/counseling" element={<CounselingView/>} />
      <Route path="/wedding" element={<WeddingView/>} />
      <Route path="/mypage" element={<MypageView/>} />
      <Route path="/writer" element={<WriterView/>} />
    </Routes>
  );
};

export default memo(Routing);