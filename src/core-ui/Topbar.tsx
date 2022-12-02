import Button from "../components/Button";
import Modal from "../components/Modal";
import "./core.css";
const Topbar = () => {
  return (
    <div className="flex items-center static py-[18px] justify-between h-[75px] w-full topbar px-[32px] ">
      <div className=" py-[18px] items-center flex  font-[500]">
        <div className="bg-[#94DD26] px-[16px] py-[8px] rounded-tl-[12px] text-white rounded-bl-[12px]">
          Sports
        </div>
        <div className="bg-[#eee] px-[16px] py-[8px] rounded-tr-[12px] rounded-br-[12px] text-[#808080]">
          Entertainment
        </div>
      </div>
    </div>
  );
};

export default Topbar;
