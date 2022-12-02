import axios from "axios";
import React, { useEffect, useState } from "react";
import Utility from "../../../components/Utility";
import Pagination from "../../../core-ui/Pagination";
import CommunityCard from "./widgets/CommunityCard";
import CommunityDashboradHeader from "./widgets/CommunityDashboradHeader";

const CommunityDashboard = () => {
  const [communities, setCommunities] = useState([]);

  const getAllCommunities = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/v1/community/requested-communities?skip=0",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiYXNodWFzd2FsMzMzQGdtYWlsLmNvbSIsImlhdCI6MTY2NDc5MDcxMn0.mhbryG-j1ybJICMovY0KHknwdU_zOLHDJY3PkVN5uyw",
          },
        },
      );
      setCommunities(res.data);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    getAllCommunities();
  }, []);

  return (
    <div className="p-[32px] overflow-y-hidden">
      <h2 className="text-[24px] font-[700]">Communities</h2>
      <Utility />
      <CommunityDashboradHeader />
      <div className="space-y-[12px]">
        {communities.map((item: any, index: number) => {
          return (
            <CommunityCard
              key={index}
              id={item._id}
              name={item.name}
              category={item.category}
              image={item.image}
              approvalStatus={item.approvalStatus}
            />
          );
        })}
      </div>
      <Pagination />
    </div>
  );
};

export default CommunityDashboard;
