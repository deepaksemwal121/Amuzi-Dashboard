import React, {
  ChangeEventHandler,
  ReactFragment,
  useEffect,
  useState,
} from "react";
import { MdAddToQueue, MdClose } from "react-icons/md";

interface ModalType {
  title: string;
  component: React.ReactNode;
  headTitle: string;
}

const Modal = ({ title, component, headTitle }: ModalType) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsOpen(true)}
        className="bg-[#246BFD] text-white flex p-3 rounded-[16px] drop-shadow text-[16px] font-[600] space-x-3 items-center"
      >
        <MdAddToQueue size={20} /> <span>{title}</span>
      </div>

      {isOpen && (
        <div className="fixed h-screen  flex items-center justify-center top-0 left-0 z-[1] bg-[#33333] backdrop-blur-sm text-white  w-screen">
          <div className="bg-white w-[800px] h-[650px] p-8 rounded text-black space-y-[24px] ">
            <div className="flex justify-between border-b-[2px] py-2 ">
              <p className="text-[30px] font-semibold">{headTitle}</p>
              <MdClose
                size={25}
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
              />
            </div>
            {/* @Body Starts Here@  */}
            {component}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
