import { useState } from "react";
import Button from "./Button";
const FormSplitBill = ({ selectedFriend, handleSplitBill }) => {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const friendBill = bill - yourExpense;

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !yourExpense) return;
    handleSplitBill(whoIsPaying === "user" ? friendBill : -yourExpense);
  }
  return (
    <div className="m-5 w-[420px] rounded-2xl border-2 border-slate-200 bg-slate-100 p-5">
      <h2 className="mb-3 text-center text-lg font-semibold uppercase text-slate-700">
        Split a bill with {selectedFriend.name}
      </h2>
      <div className="mb-3 flex items-center justify-between">
        <label>💰 Bill value</label>
        <input
          type="number"
          className="w-28 rounded-xl px-2 py-1 text-center text-slate-700"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </div>
      <div className="mb-3 flex items-center justify-between">
        <label>🧍‍♂️ Your expense</label>
        <input
          type="number"
          className="w-28 rounded-xl px-2 py-1 text-center text-slate-700"
          value={yourExpense}
          onChange={(e) =>
            setYourExpense(
              Number(e.target.value) > bill ? bill : Number(e.target.value)
            )
          }
        />
      </div>
      <div className="mb-3 flex items-center justify-between">
        <label>🧍 {selectedFriend.name}´s expense</label>
        <input
          type="number"
          value={friendBill}
          disabled
          className=" w-28 cursor-not-allowed rounded-xl bg-gray-200 px-2 py-1 text-center text-slate-700"
        />
      </div>

      <div className="mb-3 flex items-center justify-between">
        <label>Who is paying the bill?</label>
        <select
          className="w-28 rounded-xl px-2 py-1 text-center font-semibold text-slate-700"
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value={selectedFriend.name}>{selectedFriend.name}</option>
        </select>
      </div>
      <div className="text-right">
        <Button onClick={handleSubmit}>Split bill</Button>
      </div>
    </div>
  );
};

export default FormSplitBill;
