import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdClose, MdSearch } from "react-icons/md";
import { useParams } from "react-router-dom";
import ToggleButton from "../../../components/ToggleButton";
import GetAllVideos from "./widgets/GetAllVideos";
import PlaylistsInScreen from "./widgets/PlaylistsInScreen";

interface ScreenData {
  screenName: string;
  iconImage: string;
  status: boolean;
  playListInScreen: string[];
  color: string;
}

const ManagePlaylists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [isAddPlaylists, setIsAddPlaylists] = useState(false);
  const [newPlayListsAdded, setNewPlayListsAdded] = useState<string[]>([]);
  const [screenData, setScreenData] = useState<ScreenData>({
    screenName: "",
    iconImage: "",
    status: false,
    playListInScreen: [],
    color: "",
  });

  const { screenID } = useParams();

  const onPlaylsitAddToScreen = async () => {
    const data = {
      screenId: screenID,
      playlists: newPlayListsAdded,
    };

    try {
      const res = await axios.patch(
        "http://localhost:3000/v1/screen/add-playlists",
        data,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiYXNodWFzd2FsMzMzQGdtYWlsLmNvbSIsImlhdCI6MTY2NDc5MDcxMn0.mhbryG-j1ybJICMovY0KHknwdU_zOLHDJY3PkVN5uyw",
          },
        },
      );
      alert(res.data.message);
      setIsAddPlaylists(!isAddPlaylists);
      getScreenInfo();
    } catch (error) {
      console.log(error);
    }
  };
  const playListSelector = (playlist_id: string) => {
    console.log(playlist_id);
    if (newPlayListsAdded.includes(playlist_id)) {
      const indexElement = newPlayListsAdded.findIndex(
        (item) => item == playlist_id,
      );
      newPlayListsAdded.splice(indexElement, 1);
    } else {
      setNewPlayListsAdded([...newPlayListsAdded, playlist_id]);
    }
  };

  const getScreenInfo = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/v1/screen/${screenID}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiYXNodWFzd2FsMzMzQGdtYWlsLmNvbSIsImlhdCI6MTY2NDc5MDcxMn0.mhbryG-j1ybJICMovY0KHknwdU_zOLHDJY3PkVN5uyw",
          },
        },
      );
      setScreenData({
        screenName: response.data.name,
        iconImage: response.data.icon,
        status: response.data.live,
        playListInScreen: response.data.playlists,
        color: response.data.colorScheme,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getAllPlaylists = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/v1/jwp/get-playlists?title=&page=1&pageLength=10",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiYXNodWFzd2FsMzMzQGdtYWlsLmNvbSIsImlhdCI6MTY2NDc5MDcxMn0.mhbryG-j1ybJICMovY0KHknwdU_zOLHDJY3PkVN5uyw",
          },
        },
      );
      const playlistsRes = response.data.playlists;
      setPlaylists(playlistsRes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPlaylists();
    getScreenInfo();
  }, []);

  return (
    <div className="p-[32px] w-full overflow-y-hidden overflow-x-hidden">
      <div className=" flex justify-between items-center">
        <div className=" flex space-x-4 items-center w-2/3">
          <img
            src={screenData.iconImage}
            className="w-[80px] h-[80px] rounded-full"
            style={{ background: screenData.color }}
            alt="screenICon"
          />
          <input
            type="text"
            className="text-[24px] font-[700] w-2/4 bg-[#f1f5f9] border-b-2 p-2 focus:ring-0 focus:outline-none focus:bg-[#e2e5e8]"
            value={screenData.screenName}
          />
        </div>
        <div className="flex space-x-4 items-center w-1/3 justify-end">
          <p className=" bg-slate-200 font-semibold text-xl rounded p-4">
            Screen Status :
            {screenData.status ? (
              <span className="text-lg  text-green-500 font-semibold ">
                Live
              </span>
            ) : (
              <span className="text-lg text-gray-500 font-semibold ">
                Draft
              </span>
            )}
          </p>
          <div
            className="bg-[#246BFD] text-white drop-shadow cursor-pointer font-semibold p-3 rounded-full"
            onClick={() => setIsAddPlaylists(!isAddPlaylists)}
          >
            Add PlayList
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-3 ">
        {screenData.playListInScreen?.map((item: any, index: number) => {
          return <PlaylistsInScreen playlist_id={item} />;
        })}
      </div>
      {isAddPlaylists && (
        <div className="absolute duration-300 delay-200 ease-linear top-0 right-0 p-4  w-[1000px] flex flex-col justify-items-end h-screen bg-gray-200 z-50">
          <div className="flex justify-between py-2 ">
            <h3 className="text-[24px] font-semibold">Add Playlist</h3>
            <MdClose
              size={20}
              className="cursor-pointer"
              onClick={() => setIsAddPlaylists(false)}
            />
          </div>
          <hr color="white" />
          <div className="w-full mt-4 flex justify-between ">
            <div className="px-2 flex space-x-2 items-center w-3/4">
              <MdSearch size={24} />
              <input
                placeholder="Search Playlist"
                type="text"
                className="w-full focus:ring-0 focus:outline-none rounded italic bg-transparent p-2 focus:bg-gray-100"
              />
            </div>
            <div className=" w-1/4 flex justify-center">
              <button
                onClick={onPlaylsitAddToScreen}
                className="bg-[#246BFD] mx-auto text-white p-3 font-medium rounded-full"
              >
                Add To Screen
              </button>
            </div>
          </div>
          <div className="overflow-y-scroll mt-4 ">
            {playlists?.map(
              (
                item: {
                  id: string;
                  metadata: {
                    title: string;
                  };
                },
                index,
              ) => {
                if (!screenData.playListInScreen.includes(item.id)) {
                  return (
                    <div
                      className="bg-[#111111] rounded w-full mt-4 flex items-center text-white group "
                      key={index}
                    >
                      <div className=" w-1/12 flex justify-center items-center">
                        <input
                          onChange={() => playListSelector(item.id)}
                          type="checkbox"
                          className={` h-7 w-7 text-sm opacity-30 checked:opacity-100 hidden checked:block group-hover:block
                      `}
                          style={{ borderRadius: "20px" }}
                        />
                      </div>
                      <div className="flex flex-col w-3/12 p-2 ">
                        <div className="w-4/5">
                          <p className="text-lg font-semibold">
                            {item.metadata.title}
                          </p>
                        </div>
                      </div>
                      <div className="w-8/12">
                        <GetAllVideos playlist_id={item.id} />
                      </div>
                    </div>
                  );
                }
              },
            )}
          </div>
          <div className="flex justify-between mt-4 p-4">
            <div className="bg-white p-3"> Back</div>
            <div className="bg-white p-3">Next</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagePlaylists;
