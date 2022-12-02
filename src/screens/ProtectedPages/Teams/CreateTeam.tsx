import React, { useEffect, useState } from "react";
import team from "../../../assets/team.png";
import { HiArrowCircleRight } from "react-icons/hi";
import useTeamStore from "../../../context/teamstore";
import TeamData from "../../../types/TeamInterface";
import axios from "axios";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

const CreateTeam = () => {
  const createTeam = async () => {
    const data = new FormData();
    const base64response = await fetch(teamData.mascot);

    const blob = await base64response.blob();

    const playerImages = await Promise.all(
      players.player.map((e) => fetch(e.profile)),
    );
    const blobs = await Promise.all(playerImages.map((e) => e.blob()));
    blobs.forEach((blob) => {
      data.append("player-images", blob);
    });
    data.append("team-image", blob);
    data.append("category", teamData.sports);
    data.append("teamName", teamData.name);
    data.append("description", teamData.description);
    const playersData: object[] = [];
    players.player.forEach((item) => {
      playersData.push({
        name: item.name,
        age: item.age,
      });
    });

    data.append("players", JSON.stringify(playersData));

    console.log(data.getAll("players"));

    var config = {
      method: "post",
      url: "http://localhost:3000/v1/team",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiYXNodWFzd2FsMzMzQGdtYWlsLmNvbSIsImlhdCI6MTY2NDc5MDcxMn0.mhbryG-j1ybJICMovY0KHknwdU_zOLHDJY3PkVN5uyw",
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        cleanTeamFromStore();
      })
      .catch(function (error) {
        console.log(error);
        toast(`${error.message}`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  const [playerImage, setPlayerImage] = useState<File | undefined | null>();
  const teamData: TeamData = useTeamStore((state) => ({
    name: state.team.name,
    description: state.team.description,
    sports: state.team.sports,
    mascot: state.team.mascot,
  }));
  const players = useTeamStore((state) => ({
    player: state.players,
  }));
  const addPlayer = useTeamStore((state) => state.addPlayer);
  const cleanTeamFromStore = useTeamStore((state) => state.cleanTeam);
  const [player, setPlayer] = useState({
    name: "",
    designation: "",
    age: "",
    profile:
      "https://t4.ftcdn.net/jpg/02/60/78/83/360_F_260788352_x5sSHM4DGvpjHj9wz8sFltzAPktQwJCj.jpg",
  });

  const addPlayerHandler = (e: any) => {
    e.preventDefault();
    addPlayer(player);
    setPlayer({
      name: "",
      designation: "",
      age: "",
      profile:
        "https://t4.ftcdn.net/jpg/02/60/78/83/360_F_260788352_x5sSHM4DGvpjHj9wz8sFltzAPktQwJCj.jpg",
    });
  };
  useEffect(() => {
    if (playerImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPlayer({ ...player, profile: reader.result as string });
      };
      reader.readAsDataURL(playerImage);
    } else {
      setPlayer({
        ...player,
        profile:
          "https://t4.ftcdn.net/jpg/02/60/78/83/360_F_260788352_x5sSHM4DGvpjHj9wz8sFltzAPktQwJCj.jpg",
      });
    }
  }, [playerImage]);
  return (
    <div className="p-[32px] space-y-8">
      <div className="flex space-x-[60px] w-full items-center">
        <div className="flex items-center w-1/4 space-x-[20px]">
          <img
            src={teamData.mascot.toString()}
            alt="team-img"
            className="rounded-full object-cover w-[80px] h-[80px]"
          />
          <div>
            <h3 className="text-[24px] font-[700]">{teamData.name}</h3>
            <p>{teamData.sports}</p>
          </div>
        </div>
        <div className="w-3/4">{teamData.description}</div>
      </div>
      <div className="flex space-x-4 w-full">
        <div className="flex w-1/2 rounded-[8px] justify-center items-center h-[600px] bg-[#FAFAFA] border-2 px-[16px] py-[12px] border-[#246BFD]">
          <form
            className="space-y-6 flex flex-col items-center"
            onSubmit={addPlayerHandler}
          >
            <label
              htmlFor="upload-profile"
              className=" text-white text-center  rounded-bl-full rounded-br-full"
            >
              <img
                src={player.profile}
                className="w-[200px] h-[200px] -z-10 rounded-full object-cover"
                alt="Player Image"
              />
            </label>
            <input
              type="file"
              id="upload-profile"
              className="hidden object-cover"
              onChange={(e: any) => {
                const file: File = e.target.files[0];
                if (file && file.type.substring(0, 5) === "image") {
                  setPlayerImage(file);
                } else {
                  setPlayerImage(null);
                }
              }}
            />
            <input
              value={player.name}
              className="border-[1px] border-[#246BFD] w-[468px] rounded-[4px] px-[16px] py-[12px] bg-white"
              type="text"
              placeholder="Player Name"
              onChange={(e) => setPlayer({ ...player, name: e.target.value })}
            />
            <input
              value={player.age}
              className="border-[1px] border-[#246BFD] w-[468px] rounded-[4px] px-[16px] py-[12px] bg-white"
              type="date"
              placeholder="Date Of Birth"
              onChange={(e) => setPlayer({ ...player, age: e.target.value })}
            />
            <input
              value={player.designation}
              className="border-[1px] border-[#246BFD] w-[468px] rounded-[4px] px-[16px] py-[12px] bg-white"
              type="text"
              placeholder="Player Position"
              onChange={(e) =>
                setPlayer({ ...player, designation: e.target.value })
              }
            />
            <button
              type="submit"
              className="bg-[#246BFD] px-[16px] py-[12px] flex space-x-3 items-center rounded-[4px] text-white font-[500]"
            >
              <span>Add Player</span>
              <HiArrowCircleRight />
            </button>
          </form>
        </div>
        {/* Player will be mapped here  */}
        <div className="flex flex-col w-1/2 rounded-[8px]  h-[600px] bg-[#FAFAFA] border-2 px-[16px] py-[12px] border-[#246BFD] space-y-4 ">
          <div className="flex justify-end">
            <button
              onClick={createTeam}
              className="bg-[#246BFD] text-white px-3 py-1 rounded-full"
            >
              Save Team
            </button>
          </div>
          <div className="space-y-6 flex flex-col items-center w-full overflow-y-auto">
            {/* Player Card Starts Here */}

            {players.player &&
              players.player.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-6 px-[15px] py-[18px] bg-[#f5f5f5] w-full"
                  >
                    <div className="p-[5px] border-[1px] rounded-full">
                      <img
                        src={value.profile}
                        alt="player-img"
                        className="rounded-full w-[38px] h-[38px] object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-[18px] font-[500] text-[#141414]">
                        {value.name}
                      </h3>
                      <p>{value.age}</p>
                    </div>
                  </div>
                );
              })}
            {/* Player Cards Ends Here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTeam;
