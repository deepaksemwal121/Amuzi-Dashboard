import React, { ChangeEventHandler, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import useTeamStore from "../context/store";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [teamMascot, setTeamMascot] = useState<File | undefined | null>();
  const [team, setTeam] = useState({
    name: "",
    sports: "",
    description: "",
    mascot:
      "https://banksiafdn.com/wp-content/uploads/2019/10/placeholde-image-600x600.jpg",
  });

  useEffect(() => {
    if (teamMascot) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTeam({ ...team, mascot: reader.result as string });
      };
      reader.readAsDataURL(teamMascot);
    } else {
      setTeam({
        ...team,
        mascot:
          "https://banksiafdn.com/wp-content/uploads/2019/10/placeholde-image-600x600.jpg",
      });
    }
  }, [teamMascot]);

  const addTeam = useTeamStore((state) => state.addTeam);

  const onSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(team);
    if (!team.name || !team.description || !team.sports || !team.mascot)
      return alert("Please Fill all the fields");

    addTeam({
      name: team.name,
      sports: team.sports,
      description: team.description,
      mascot: team.mascot,
    });
  };

  return (
    <div>
      <div
        className="cursor-pointer px-[16px] py-[8px] bg-[#246BFD] text-white font-semibold rounded-[16px] "
        onClick={() => setIsOpen(true)}
      >
        Create Team
      </div>
      {isOpen && (
        <div className="fixed h-screen  flex items-center justify-center top-0 left-0 z-[1] bg-[#33333] backdrop-blur-sm text-white  w-screen">
          <div className="bg-white w-[800px] h-[650px] p-8 rounded text-black space-y-[24px] ">
            <div className="flex justify-between border-b-[2px] py-2 ">
              <p className="text-[30px] font-semibold">Create A Team</p>
              <MdClose
                size={25}
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
              />
            </div>
            {/* @Body Starts Here@  */}
            <form
              className="space-y-4 py-2"
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSave(e)}
            >
              <div className="space-y-6">
                <input
                  value={team.name}
                  onChange={(e) => setTeam({ ...team, name: e.target.value })}
                  placeholder="Enter Team Name"
                  className="w-full p-4 shadow-sm border-gray-300 border-2 rounded"
                />
                <select
                  className="w-full p-4 shadow-sm bg-white border-gray-300 border-2 rounded"
                  name="sports"
                  id="sports"
                  value={team.sports}
                  onChange={(e) => setTeam({ ...team, sports: e.target.value })}
                >
                  <option defaultValue="Select Sports">Select Sports</option>
                  <option value="Football">Football</option>
                  <option value="Futsal">Futsal</option>
                  <option value="Kabadi">Kabadi</option>
                  <option value="Basketball">BasketBall</option>
                  <option value="Basketball">Atheletics</option>
                  <option value="Basketball">Other</option>
                </select>

                <textarea
                  value={team.description}
                  onChange={(e) =>
                    setTeam({ ...team, description: e.target.value })
                  }
                  className="w-full p-4 shadow-sm border-gray-300 border-2 rounded"
                  placeholder="Enter Team Description"
                />
                <div className="flex space-x-4 items-center">
                  <img
                    src={team.mascot}
                    alt="placeholder-team"
                    height={80}
                    width={80}
                    className="rounded-full object-cover"
                  />
                  <div className="flex flex-col w-full">
                    <label htmlFor="team-img">Upload Team Mascot</label>
                    <input
                      onChange={(e: any) => {
                        const file: File = e.target.files[0];
                        if (file && file.type.substring(0, 5) === "image") {
                          setTeamMascot(file);
                        } else {
                          setTeamMascot(null);
                        }
                      }}
                      id="team-img"
                      className="w-full shadow-sm border-gray-300 border-2 rounded"
                      type="file"
                      accept="image/*"
                    />
                    <p className="text-xs italic">
                      Select 512px * 512px Image{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-[12px] border-t-[2px] py-4  ">
                <button
                  type="submit"
                  className="bg-green-600 px-[28px] py-[7px] rounded text-white text-[20px] font-semibold"
                >
                  Save
                </button>
                <button className="bg-red-600 px-[28px] py-[7px] rounded text-white text-[20px] font-semibold">
                  Discard
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
