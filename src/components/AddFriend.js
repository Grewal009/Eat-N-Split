import { useState } from "react";
import Button from "./Button";

const AddFriend = ({ onClick, addHandler }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const id = crypto.randomUUID();
  function onChangeName(e) {
    setName(e.target.value);
  }
  function onChangeImage(e) {
    setImage("https://i.pravatar.cc/48" + id);
  }
  function onSubmitHandler(e) {
    e.preventDefault();

    if (!name || !image) {
      return;
    }
    console.log(name, image);

    const newFriend = {
      name,
      image: `https://i.pravatar.cc/48?=${id}`,
      balance: 0,
      id,
    };

    addHandler(newFriend);

    console.log(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <div className="m-5 w-[420px] rounded-2xl border-2 border-slate-200 bg-slate-100 p-5">
      <div className="text-right"></div>
      <form onSubmit={onSubmitHandler} className="font-medium text-slate-700">
        <div className="mb-3 flex items-center justify-between">
          <label className="">Friend name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => onChangeName(e)}
            className="w-56 rounded-xl px-2 py-1 text-slate-700"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => onChangeImage(e)}
            className="w-56 rounded-xl px-2 py-1 text-slate-700"
          />
        </div>
        <div className="mt-3 text-right">
          <Button>Add</Button>
          <Button onClick={onClick}>Close</Button>
        </div>
      </form>
    </div>
  );
};

export default AddFriend;
