import { useContext, useState } from "react";
import { isMobile } from "react-device-detect";
import {
  setInputValue,
  setShowNumPad,
} from "../../../Contexts/TransactionContext/TransactionActions";
import {
  TransactionContext,
  TransactionStore,
} from "../../../Contexts/TransactionContext/TransactionContext";
import GreenBtn from "../../GreedBtn";
import TitleAndDataRow from "../../TitleAndDataRow";

const Transaction = () => {
  return (
    <>
      <TransactionContext>
        <InsertAmount />
        <TitleAndDataRow title="Transfer" data="Select Account" />
        <TitleAndDataRow title="Category" data="Select Category" />
        <TitleAndDataRow title="Account" data="Monthly payroll" />
        <TitleAndDataRow title="Date" data="14 September 2021" />
        <GreenBtn title="Save Transaction" />
      </TransactionContext>
    </>
  );
};

const InsertAmount = () => {
  return (
    <>
      <div className="m-1 p-3 text-xl bg-white flex">
        <div className="flex items-center justify-center">
          {/* Switch */}
          <SwitchBtn />
        </div>
        <NumberInput />
      </div>
    </>
  );
};

const SwitchBtn = () => {
  const [plus, setPlus] = useState(false);
  let rightOrLeft = plus ? "full" : "0";
  let greenOrRed = plus ? "green" : "red";
  let plusOrMinus = plus ? "+" : "-";

  return (
    <>
      <div
        className={`m-1 h-8 w-14 rounded-sm bg-${greenOrRed}-500 cursor-pointer`}
        onClick={() => {
          setPlus(!plus);
        }}>
        <div
          className={`h-6 w-6 rounded-sm m-1 text-gray-900 bg-white flex items-center justify-center transition duration-200 ease-in transform translate-x-${rightOrLeft}`}>
          <p>{plusOrMinus}</p>
        </div>
      </div>
    </>
  );
};

const NumberInput = () => {
  const { TransactionState, transactionDispatch } =
    useContext(TransactionStore);
  const { showNumPad, inputValue } = TransactionState;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    transactionDispatch(setInputValue(e.target.value));
  };

  return (
    <>
      <input
        className="text-gray-900 w-full"
        type="text"
        name="amount"
        id="amount"
        onChange={(e) => {
          handleChange(e);
        }}
        value={inputValue}
        readOnly={isMobile}
        onFocus={() => {
          transactionDispatch(setShowNumPad(true));
        }}
      />
      {showNumPad && isMobile ? <NumPad /> : ""}
    </>
  );
};

const NumPad = () => {
  return (
    <>
      <div className="absolute left-0 bottom-0 z-50 w-full p-4 bg-gray-600 flex justify-center">
        <div className="grid grid-cols-4 grid-rows-4 w-full max-w-xl">
          <NumPadBtn num="7" />
          <NumPadBtn num="8" />
          <NumPadBtn num="9" />
          <div>&nbsp;</div>

          <NumPadBtn num="4" />
          <NumPadBtn num="5" />
          <NumPadBtn num="6" />
          <div>&nbsp;</div>

          <NumPadBtn num="1" />
          <NumPadBtn num="2" />
          <NumPadBtn num="3" />
          <div>&nbsp;</div>

          <NumPadBtn num="." />
          <NumPadBtn num="0" />
          <NumPadBtn num="Del" />
          <NumPadBtn num="Done" />
        </div>
      </div>
    </>
  );
};

const NumPadBtn: React.FC<{ num: string }> = ({ num }) => {
  const { TransactionState, transactionDispatch } =
    useContext(TransactionStore);
  const { inputValue } = TransactionState;
  return (
    <>
      <div
        onClick={() => {
          if (num === "Del") {
            transactionDispatch(
              setInputValue(inputValue.substring(0, inputValue.length - 1))
            );
          }
          if (num === "Done") {
            transactionDispatch(setShowNumPad(false));
          }
          transactionDispatch(setInputValue(inputValue + num));
        }}>
        <GreenBtn title={num} />
      </div>
    </>
  );
};

export default Transaction;
