import { MdOutlineExpandMore, MdSearch } from "react-icons/md";
import "./component.css";

const Utility = () => {
  return (
    <div className=" py-[24px] flex items-center justify-between relative">
      <div className="search-wrapper">
        <input
          className="search-input focus:outline-none "
          type="text"
          placeholder="Quick Search"
        />
        <MdSearch />
      </div>
      <div className="flex space-x-[12px]">
        <div className="filter">
          <p>Sports</p>
          <MdOutlineExpandMore />
          {/* <div className="bg-white shadow absolute z-10 top-[80%] filter ">
            <div>Hello I am a sub </div>
          </div> */}
        </div>

        <div className="filter">
          <p>Date Range</p>
          <MdOutlineExpandMore />
        </div>
        <div className="filter">
          <p>Status</p>
          <MdOutlineExpandMore />
        </div>
      </div>
    </div>
  );
};

export default Utility;
