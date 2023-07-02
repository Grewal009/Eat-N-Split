const FormSplitBill = () => {
  return (
    <div className="m-5 w-[420px] rounded-2xl border-2 border-slate-200 bg-slate-100 p-5">
      <h2 className="mb-3 text-center text-lg font-semibold uppercase text-slate-700">
        Split a bill with X
      </h2>
      <div className="mb-3 flex items-center justify-between">
        <label>💰 Bill value</label>
        <input
          type="number"
          className="w-28 rounded-xl px-2 py-1 text-center text-slate-700"
        />
      </div>
      <div className="mb-3 flex items-center justify-between">
        <label>🧍‍♂️ Your expense</label>
        <input
          type="number"
          className="w-28 rounded-xl px-2 py-1 text-center text-slate-700"
        />
      </div>
      <div className="mb-3 flex items-center justify-between">
        <label>🧍 X´s expense</label>
        <input
          type="number"
          disabled
          className=" w-28 cursor-not-allowed rounded-xl bg-gray-200 px-2 py-1 text-center text-slate-700"
        />
      </div>

      <div className="mb-3 flex items-center justify-between">
        <label>Who is paying the bill?</label>
        <select className="w-28 rounded-xl px-2 py-1 text-center font-semibold text-slate-700">
          <option value="user">You</option>
          <option value="y">y</option>
          <option value="z">z</option>
        </select>
      </div>
    </div>
  );
};

export default FormSplitBill;
