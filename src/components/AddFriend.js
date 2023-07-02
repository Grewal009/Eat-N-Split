import Button from "./Button";

const AddFriend = () => {
  return (
    <div className="m-5 w-[400px] rounded-2xl border-2 border-slate-200 bg-slate-100 p-5">
      <div className="text-right"></div>
      <form className="font-medium text-slate-700">
        <div className="mb-3 flex items-center justify-between">
          <label className="">Friend name</label>
          <input type="text" className="w-56 rounded-xl px-2" />
        </div>

        <div className="flex items-center justify-between">
          <label className="">Image URL</label>
          <input type="text" className="w-56 rounded-xl px-2" />
        </div>
        <div className="mt-3 text-right">
          <Button>Add</Button>
        </div>
      </form>
    </div>
  );
};

export default AddFriend;
