import axios from "axios";
import React, { useState } from "react";

const TemporaryData = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    categoryID: "",
    subCategories: "",
  });
  const [file, setFile] = useState<Blob | string>();

  console.log(file);
  const [subCategoriesList, setSubCategoriesList] = useState<string[]>([]);

  const createImagePost = async (e: any) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", form.title);
    data.append("content", form.content);
    data.append("image", file);
    data.append("categoryId", form.categoryID);
    data.append("subCategoriesIds", JSON.stringify(subCategoriesList));
    console.log(data);

    console.log(
      data.get("title"),
      data.get("content"),
      data.get("image"),
      data.get("categoryId"),
      data.getAll("subCategoriesIds"),
    );

    try {
      const res = await axios.post(
        "http://localhost:3000/v1/xclusive/create-image-post",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiYXNodWFzd2FsMzMzQGdtYWlsLmNvbSIsImlhdCI6MTY2NDc5MDcxMn0.mhbryG-j1ybJICMovY0KHknwdU_zOLHDJY3PkVN5uyw",
          },
        },
      );
      console.log(res.status);
      alert("success");
    } catch (error) {
      console.log(error);
      alert("fail");
    }
  };

  return (
    <div className="p-8">
      <form
        onSubmit={createImagePost}
        className="bg-white rounded-lg p-4 flex flex-col space-y-4 "
      >
        <input
          type="text"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="p-4 border-[1px]"
          placeholder="Enter Title"
        />
        <input
          type="file"
          className="p-4 "
          onChange={(e) => setFile(e.target.files[0])}
        />
        <textarea
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          placeholder="Enter Contet"
          rows={10}
          className="border-[1px] p-4"
        />
        <input
          className="border-[1px] p-4"
          onChange={(e) => setForm({ ...form, categoryID: e.target.value })}
          placeholder="enter category Id"
        />
        <div className="flex flex-col">
          <div className="flex space-x-4">
            <input
              value={form.subCategories}
              type="text"
              className="p-4 border-[1px]"
              placeholder="Add Sub Catgories"
              onChange={(e) =>
                setForm({ ...form, subCategories: e.target.value })
              }
            />
            <div
              onClick={() => {
                setSubCategoriesList([
                  ...subCategoriesList,
                  form.subCategories,
                ]);
                setForm({ ...form, subCategories: "" });
              }}
              className="bg-blue-500 p-4 text-white"
            >
              Add
            </div>
          </div>
          <div>
            {subCategoriesList.map((item, index) => {
              return <div key={index}>{item} </div>;
            })}
          </div>
        </div>
        <button type="submit" className="bg-black text-white w-[50%] p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TemporaryData;
