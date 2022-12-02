import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { MdAddToQueue, MdSubscriptions } from "react-icons/md";
import Modal from "../../../components/Modal";
import Utility from "../../../components/Utility";
import Pagination from "../../../core-ui/Pagination";
import AllScreensHeader from "./widgets/AllScreensHeader";
import RegisterNewScreen from "./widgets/RegisterNewScreen";
import ScreenCard from "./widgets/ScreenCard";

const ScreenController = () => {
  const [allScreens, setAllScreens] = useState([]);

  const getAllScreens = async () => {
    try {
      const res = await axios.get("http://localhost:3000/v1/screen", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiYXNodWFzd2FsMzMzQGdtYWlsLmNvbSIsImlhdCI6MTY2NDc5MDcxMn0.mhbryG-j1ybJICMovY0KHknwdU_zOLHDJY3PkVN5uyw",
        },
      });
      setAllScreens(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllScreens();
  }, []);

  const dragItem = useRef<any>(null);
  const dragOverItem = useRef<any>(null);

  const sortScreenOnDragEnd = () => {
    //Duplicate of All Screens
    let mutableScreens = [...allScreens];

    // Remove and Save Dragged Item

    const draggedItemContent = mutableScreens.splice(dragItem.current, 1)[0];

    //Change Postion of the Dragged Content

    mutableScreens.splice(dragOverItem.current, 0, draggedItemContent);

    //Reset The Drag Position

    dragItem.current = null;
    dragOverItem.current = null;

    //Update All the Screens
    setAllScreens(mutableScreens);
  };

  return (
    <div className="p-[32px] overflow-y-hidden">
      <div className=" flex justify-between items-center">
        <h2 className="text-[24px] font-[700] flex space-x-4 items-center">
          <MdSubscriptions size={26} />
          <span>Screen Manager</span>
        </h2>
        <Modal
          title="Create New Screen"
          component={<RegisterNewScreen />}
          headTitle="Add New Screen"
        />
      </div>
      {/* <Utility /> */}
      <div>
        <AllScreensHeader />
        {allScreens.map(
          (
            item: {
              name: string;
              icon: string;
              playlists: string[];
              live: boolean;
              colorScheme: string;
              _id: string;
            },
            index: number,
          ) => {
            return (
              <div
                key={index}
                draggable
                onDragStart={(e) => {
                  dragItem.current = index;
                }}
                onDragEnter={(e) => (dragOverItem.current = index)}
                onDragEnd={sortScreenOnDragEnd}
                onDragOver={(e) => e.preventDefault()}
              >
                <ScreenCard
                  screenName={item.name}
                  screenId={item._id}
                  icon={item.icon}
                  playlistCount={item.playlists}
                  status={item.live}
                  colorScheme={item.colorScheme}
                />
              </div>
            );
          },
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default ScreenController;
