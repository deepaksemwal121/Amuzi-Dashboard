import axios from "axios";
import React, { useState } from "react";
import Button from "../../../../components/Button";
import { Base64ToBlob } from "../../../../utils/Base64blobConverter";

const RegisterNewScreen = () => {
  const [srceenData, setScreenData] = useState({
    name: "",
    color: "",
    icon: "https://exaktusa.com/wp-content/uploads/Icon-Placeholder.png",
  });

  const handleIconUpload = (e: any) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setScreenData({ ...srceenData, icon: reader.result as string });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleAddScreen = async (e: any) => {
    e.preventDefault();
    console.log("Clicked");
    const icon = await Base64ToBlob(srceenData.icon);
    const data = new FormData();
    data.append("name", srceenData.name);
    data.append("colorScheme", srceenData.color);
    data.append("icon", icon);

    // API CALL STARTS HERE
    try {
      const response = await axios.post(
        "http://localhost:3000/v1/screen",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiYXNodWFzd2FsMzMzQGdtYWlsLmNvbSIsImlhdCI6MTY2NDc5MDcxMn0.mhbryG-j1ybJICMovY0KHknwdU_zOLHDJY3PkVN5uyw",
          },
        },
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className="space-y-4 py-2" onSubmit={handleAddScreen}>
        <input
          type="text"
          placeholder="Enter Screen Name"
          className="w-full p-4 shadow-sm border-gray-300 border-2 rounded"
          onChange={(e) =>
            setScreenData({ ...srceenData, name: e.target.value })
          }
        />
        <div className="space-x-4 flex items-center ">
          <label>Select Color Scheme</label>
          <input
            type="color"
            placeholder="Enter Screen Name"
            className=" shadow-sm rounded-full p-2 h-[50px] w-[50px]"
            onChange={(e) => {
              setScreenData({ ...srceenData, color: e.target.value });
            }}
          />
          <p>{srceenData.color}</p>
        </div>
        <div>
          <label
            htmlFor="upload-screen-icon"
            className=" text-white text-center  rounded-bl-full rounded-br-full"
          >
            <img
              src={srceenData.icon}
              style={{ background: srceenData.color }}
              className="w-[200px] h-[200px] -z-10 rounded-full object-cover"
              alt="Player Image"
            />
          </label>
          <input
            type="file"
            id="upload-screen-icon"
            className="hidden object-cover"
            onChange={handleIconUpload}
          />
          <button type="submit" className="bg-green-200 p-4">
            {" "}
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterNewScreen;
