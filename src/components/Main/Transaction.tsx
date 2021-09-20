import GreenBtn from "../GreedBtn";
import TitleAndDataRow from "../TitleAndDataRow";

const Transaction = () => {
  return (
    <>
      <div className="m-1 text-xl bg-gray-700 flex justify-between">
        <div className="pl-2 flex flex-col font-bold text-2xl">
          <div className="flex items-baseline">
            <input type="radio" name="operation" id="plus" value="plus" />
            <label htmlFor="plus">+</label>
          </div>
          <div className="flex items-baseline">
            <input type="radio" name="operation" id="minus" value="minus" />
            <label htmlFor="minus">-</label>
          </div>
        </div>
        <input className="p-3" type="number" name="amount" id="amount" />
      </div>
      <TitleAndDataRow title="Transfer" data="Select Account" />
      <TitleAndDataRow title="Category" data="Select Category" />
      <TitleAndDataRow title="Account" data="Monthly payroll" />
      <TitleAndDataRow title="Date" data="14 September 2021" />
      <GreenBtn title="Save Transaction" />
    </>
  );
};

export default Transaction;