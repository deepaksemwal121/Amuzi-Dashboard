import Logo from "../assets/logo.png";
import {
  MdAdsClick,
  MdArticle,
  MdBadge,
  MdCasino,
  MdContactSupport,
  MdGroups,
  MdLocalAtm,
  MdMilitaryTech,
  MdOutlineDashboard,
  MdQueryStats,
  MdSettings,
  MdSubscriptions,
  MdSupervisorAccount,
} from "react-icons/md";
import "./core.css";

const Sidebar = () => {
  return (
    <div className="h-screen flex flex-col bg-[#141414] w-[280px] pr-[10px]">
      <div className="brand px-[60px] py-[18px] h-[75px] border-b-[1px] border-[#282828]">
        <img src={Logo} width={110} height={50.7} />
      </div>
      <div className="navigation text-white px-[42px] pt-[40px]">
        <div className="space-y-[24px] ">
          <div className="flex items-center space-x-[16px] hover:text-[#94DD26]">
            <MdOutlineDashboard size={16} />
            <p className="text-[16px] font-[500] leading-[22.4px]">Dashboard</p>
          </div>
          <div className="flex items-center space-x-[16px] hover:text-[#94DD26]">
            <MdSubscriptions size={16} />
            <p className="text-[16px] font-[500] leading-[22.4px]">
              Screen Manager
            </p>
          </div>
          <div className="flex items-center space-x-[16px]">
            <MdCasino color="#94DD26" size={16} />
            <p className="text-[16px] text-[#94DD26] font-[500] leading-[22.4px]">
              Tournaments
            </p>
          </div>
          <div className="flex items-center space-x-[16px] hover:text-[#94DD26]">
            <MdQueryStats size={16} />
            <p className="text-[16px] font-[500] leading-[22.4px]">Analytics</p>
          </div>{" "}
          <div className="flex items-center space-x-[16px] hover:text-[#94DD26]">
            <MdArticle size={16} />
            <p className="text-[16px] font-[500] leading-[22.4px]">Articles</p>
          </div>
          <div className="flex items-center space-x-[16px] hover:text-[#94DD26]">
            <MdGroups size={16} />
            <p className="text-[16px] font-[500] leading-[22.4px]">Community</p>
          </div>
          <div className="flex items-center space-x-[16px] hover:text-[#94DD26]">
            <MdMilitaryTech size={16} />
            <p className="text-[16px] font-[500] leading-[22.4px]">Rewards</p>
          </div>{" "}
          <div className="flex items-center space-x-[16px] hover:text-[#94DD26]">
            <MdBadge size={16} />
            <p className="text-[16px] font-[500] leading-[22.4px]">Teams</p>
          </div>
          <div className="bg-[#282828] h-[1px] mr-[42px]"></div>
        </div>
      </div>
      <div className="navigation text-white pl-[42px] pt-[40px]">
        <div className="space-y-[24px] ">
          <div className="flex items-center space-x-[16px] hover:text-[#94DD26]">
            <MdAdsClick size={16} />
            <p className="text-[16px] font-[500] leading-[22.4px]">
              Ads Manager
            </p>
          </div>
          <div className="flex items-center space-x-[16px] hover:text-[#94DD26]">
            <MdLocalAtm size={16} />
            <p className="text-[16px] font-[500] leading-[22.4px]">
              Subscriptions
            </p>
          </div>
          <div className="flex items-center space-x-[16px] hover:text-[#94DD26]">
            <MdSupervisorAccount size={16} />
            <p className="text-[16px] font-[500] leading-[22.4px]">
              Manage Users
            </p>
          </div>
          <div className="bg-[#282828] h-[1px] mr-[42px]"></div>
        </div>
      </div>
      <div className="navigation text-white pl-[42px] pt-[40px]">
        <div className="space-y-[24px] ">
          <div className="flex items-center space-x-[16px] hover:text-[#94DD26]">
            <MdSettings size={16} />
            <p className="text-[16px] font-[500] leading-[22.4px]">Settings</p>
          </div>
          <div className="flex items-center space-x-[16px] hover:text-[#94DD26]">
            <MdContactSupport size={16} />
            <p className="text-[16px] font-[500] leading-[22.4px] ">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
