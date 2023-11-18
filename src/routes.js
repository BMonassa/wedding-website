import { Route, Routes } from "react-router-dom";
import Main from "./view/Main";
import GiftList from "./view/GiftList";
import Payment from "./view/Payment";
import About from "./view/About";
import FinalizePayment from "./view/FinalizePayment";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/GiftList" element={<GiftList />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="/About" element={<About />} />
      <Route path="/FinalizePayment" element={<FinalizePayment />} />
    </Routes>
  );
}
