import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

interface PlayListID {
  playlist_id: string;
}
const GetAllVideos = ({ playlist_id }: PlayListID) => {
  const [videoArray, setVideoArray] = useState<string[]>([]);
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const getVideosFromJWCDN = async (playlist_id: string) => {
      try {
        const res = await axios.get(
          `https://cdn.jwplayer.com/v2/playlists/${playlist_id}`,
        );
        const { playlist: playlists } = res.data;
        setVideoArray(
          playlists.map((playlist: { image: string }) => playlist.image),
        );
      } catch (err) {
        console.log(err);
      }
    };
    getVideosFromJWCDN(playlist_id);
  }, []);

  return (
    <div className="">
      <Slider {...settings}>
        {videoArray.map((item, index) => {
          return (
            <div key={index} className="p-1">
              <img
                src={item}
                className="rounded"
                width={200}
                height={100}
                alt="Video"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default GetAllVideos;
