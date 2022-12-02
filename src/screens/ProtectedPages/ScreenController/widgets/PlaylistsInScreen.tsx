import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete, MdDragHandle } from "react-icons/md";
import Slider from "react-slick";

interface PlayListID {
  playlist_id: string;
}

interface PlayList {
  playlist_name: string;
  images: string[];
}

const PlaylistsInScreen = ({ playlist_id }: PlayListID) => {
  const [screenPlaylist, setScreenPlaylist] = useState<PlayList>({
    playlist_name: "",
    images: [],
  });

  useEffect(() => {
    const getPlayListFromJWP = async (playlist_id: string) => {
      try {
        const response = await axios.get(
          `https://cdn.jwplayer.com/v2/playlists/${playlist_id}`,
        );
        const { playlist: playlists } = response.data;
        setScreenPlaylist({
          playlist_name: response.data.title,
          images: playlists.map(
            (playlist: { image: string }) => playlist.image,
          ),
        });
      } catch (err) {
        console.log(err);
      }
    };
    getPlayListFromJWP(playlist_id);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    centerMode: false,
  };
  return (
    <div
      draggable
      className="bg-[#111111]  rounded w-full mt-4 flex items-center  text-white group "
    >
      <div className=" w-1/12 flex justify-center items-center ">
        <MdDragHandle color="gray" size={22} className="cursor-move" />
        <input
          type="checkbox"
          className={` h-7 w-7 text-sm opacity-30 checked:opacity-100 hidden checked:block group-hover:block`}
          style={{ borderRadius: "20px" }}
        />
      </div>
      <div className="flex flex-col w-3/12 p-2 ">
        <div className="w-4/5">
          <p className="text-lg font-semibold">
            {screenPlaylist.playlist_name}
          </p>
        </div>
      </div>
      <div className="w-7/12">
        <div className="">
          <Slider {...settings}>
            {screenPlaylist.images.map((item, index) => {
              return (
                <div key={index} className="p-1 flex items-start">
                  <div className="">
                    <img
                      src={item}
                      className="rounded"
                      width={200}
                      height={90}
                      alt="Video"
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="w-1/12 h-full  group-hover:flex hidden     ">
        <div className="flex space-x-4 justify-between items-center ">
          <MdDelete size={24} color="darkred" />
          <p className="text-red-800  font-semibold">Delete</p>
        </div>
      </div>
    </div>
  );
};

export default PlaylistsInScreen;
