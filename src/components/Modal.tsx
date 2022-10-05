import React, { useState } from "react";
import { MdClose, MdCloseFullscreen } from "react-icons/md";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className="cursor-pointer px-[16px] py-[8px] bg-[#246BFD] text-white font-semibold rounded-[16px] "
        onClick={() => setIsOpen(true)}
      >
        Create Tournament
      </div>
      {isOpen && (
        <div className="fixed h-screen  flex items-center justify-center top-0 left-0 z-[1] bg-[#33333] backdrop-blur-sm text-white  w-screen">
          <div className="bg-white w-[800px] h-[500px] p-8 rounded text-black space-y-[24px] ">
            <div className="flex justify-between border-b-[2px] py-2 ">
              <p className="text-[30px] font-semibold">Create A Tournament</p>
              <MdClose
                size={25}
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
              />
            </div>
            <div>Body</div>
            <div className="flex justify-end space-x-[12px] border-t-[2px] py-2 ">
              <button className="bg-green-500 px-[28px] py-[7px] rounded text-white text-[20px] font-semibold">
                Save
              </button>
              <button className="bg-red-500 px-[28px] py-[7px] rounded text-white text-[20px] font-semibold">
                Discard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
