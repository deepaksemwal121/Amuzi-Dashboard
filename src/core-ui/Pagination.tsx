import React from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import "./core.css";

const Pagination = () => {
  return (
    <div className="absolute left-0 bottom-0 bg-[#f1f5f8] p-[32px] w-full pagination">
      <div className="border-t-[1px] justify-between pt-[32px] flex items-center w-full justify-betweenr">
        <div>
          <button className="bg-white px-[14px] rounded-[8px] flex items-center justify-between space-x-[12px] py-[8px]">
            <MdArrowBack />
            <span>Previous</span>
          </button>
        </div>
        <div className="flex items-center space-x-[17.5px]  text-[#667085]">
          <div className="bg-[#246BFD26] flex items-center justify-center w-[40px] h-[40px] text-[#246BFD] rounded-[8px]">
            1
          </div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
        <div>
          <button className="bg-white px-[14px] rounded-[8px] flex items-center justify-between space-x-[12px] py-[8px]">
            <span>Next</span>
            <MdArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
