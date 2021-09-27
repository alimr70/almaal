import { useContext, useEffect } from "react";
import { isMobile } from "react-device-detect";
import {
  setInputValue,
  setShowNumPad,
  toggleIsPlus,
  changeSelectedDate,
  changeSelectedOption,
} from "../../../Contexts/UI Contexts/TransactionUiContext/TransactionUiActions";
import {
  TransactionUiContext,
  TransactionUiStore,
} from "../../../Contexts/UI Contexts/TransactionUiContext";
import GreenBtn from "../../GreedBtn";
import TitleAndDataRow from "../../TitleAndDataRow";
import { BudgetDataStore } from "../../../Contexts/Data Contexts/BudgetDataContext";
import { IAccountsDataState, IBudgetDataState, ITransaction } from "../../../Types";
import { AccountsDataStore } from "../../../Contexts/Data Contexts/AccountsDataContext";
import { TransactionDataStore } from "../../../Contexts/Data Contexts/TransactionDataContext";
import { addTransaction } from "../../../Contexts/Data Contexts/TransactionDataContext/TransactionDataActions";
import { useHistory } from "react-router";
import { addOrSubtractAccountAmount } from "../../../Contexts/Data Contexts/AccountsDataContext/AccountsDataActions";
import { addOrSubtractCategoryAvailableToSpend } from "../../../Contexts/Data Contexts/BudgetDataContext/BudgetDataActions";

const Transaction = () => {
  const {AccountsDataState} = useContext(AccountsDataStore);
  const {BudgetDataState} = useContext(BudgetDataStore);
  return (
    <>
      <TransactionUiContext>
        <InsertAmount />
        <TitleAndDataRow title="Category">
          <SelectOptions state={BudgetDataState.categories} stateType="Category" />
        </TitleAndDataRow>
        <TitleAndDataRow title="Account">
          <SelectOptions state={AccountsDataState} stateType="Account" />
        </TitleAndDataRow>
        <TitleAndDataRow title="Date">
          <SelectDate />
        </TitleAndDataRow>
        <SaveTransaction />
      </TransactionUiContext>
    </>
  );
};

const SelectOptions: React.FC<{state: IBudgetDataState["categories"] | IAccountsDataState, stateType: "Category" | "Account"}> = ({state, stateType}) => {
  const {transactionUiDispatch} = useContext(TransactionUiStore);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    transactionUiDispatch(changeSelectedOption(stateType, e.target.value));
  }
  return (
    <>
      <select name="selectCategory" id="selectCategory" className="bg-gray-500"
        onChange={(e)=>{
          handleChange(e)
        }}
      >
        <option value="">Select {stateType}</option>
        {
          state.map((el)=>{
            return <option key={el.id} value={el.id}>{el.title}</option>
          })
        }
      </select>
    </>
  );
}

const SelectDate = () => {
  const todayDate = new Date(Date.now()).toISOString().split("T")[0];
  const {TransactionUiState, transactionUiDispatch} = useContext(TransactionUiStore);
  const {transactionSelectedDate} = TransactionUiState;
  useEffect(()=>{
    transactionUiDispatch(changeSelectedDate(todayDate));
  },[todayDate, transactionUiDispatch])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    transactionUiDispatch(changeSelectedDate(e.target.value));
  }

  return (
    <>
      <input type="date" className="bg-gray-500" value={transactionSelectedDate}
      onChange={(e)=> {handleChange(e)}} />
    </>
  );
}

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
  const { TransactionUiState, transactionUiDispatch } =
    useContext(TransactionUiStore);
  const { isPlus } = TransactionUiState;
  let rightOrLeft = isPlus ? "full" : "0";
  let greenOrRed = isPlus ? "green" : "red";
  let plusOrMinus = isPlus ? "+" : "-";

  return (
    <>
      <div
        className={`m-1 h-8 w-14 rounded-sm bg-${greenOrRed}-500 cursor-pointer`}
        onClick={() => {
          transactionUiDispatch(toggleIsPlus(!isPlus));
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
  const { TransactionUiState, transactionUiDispatch } =
    useContext(TransactionUiStore);
  const { showNumPad, inputValue } = TransactionUiState;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    transactionUiDispatch(setInputValue(e.target.value));
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
          transactionUiDispatch(setShowNumPad(true));
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
  const { TransactionUiState, transactionUiDispatch } =
    useContext(TransactionUiStore);
  const { inputValue } = TransactionUiState;
  return (
    <>
      <div
        onClick={() => {
          if (num === "Del") {
            transactionUiDispatch(
              setInputValue(inputValue.substring(0, inputValue.length - 1))
            );
          }
          if (num === "Done") {
            transactionUiDispatch(setShowNumPad(false));
          }
          transactionUiDispatch(setInputValue(inputValue + num));
        }}>
        <GreenBtn title={num} />
      </div>
    </>
  );
};

const SaveTransaction = () => {
  const history = useHistory();
  const {transactionDataDispatch} = useContext(TransactionDataStore);
  const {accountsDataDispatch} = useContext(AccountsDataStore);
  const {TransactionUiState} = useContext(TransactionUiStore);
  const {BudgetDataState, budgetDataDispatch} = useContext(BudgetDataStore);
  const {inputValue, isPlus, transactionSelectedAccount, transactionSelectedCategory, transactionSelectedDate} = TransactionUiState;

  const transformedToNumber = isPlus? +inputValue : +`-${inputValue}`;

  const Transaction: ITransaction = {
    id: `${Date.now()}`,
    amount: transformedToNumber,
    budgetCategoryId: transactionSelectedCategory,
    accountId: transactionSelectedAccount,
    isPlus,
    time: new Date(transactionSelectedDate).valueOf(),
  } 

  const handleClick = () => {
    const {categories} = BudgetDataState;
    const targetCategory = categories.find(cat => cat.id === Transaction.budgetCategoryId);

    if(!Transaction.amount || !Transaction.budgetCategoryId || !Transaction.accountId){return};
    transactionDataDispatch(addTransaction(Transaction));
    
    if(targetCategory?.group !== "builtIn"){
      if(isPlus){
        accountsDataDispatch(addOrSubtractAccountAmount(transactionSelectedAccount, -transformedToNumber));
        budgetDataDispatch(addOrSubtractCategoryAvailableToSpend(Transaction.budgetCategoryId, transformedToNumber));
      } else {
        budgetDataDispatch(addOrSubtractCategoryAvailableToSpend(Transaction.budgetCategoryId, transformedToNumber));
      }
    } else {
      accountsDataDispatch(addOrSubtractAccountAmount(transactionSelectedAccount, transformedToNumber));
    }

    history.push("/");
  }

  return (
    <div
      className="m-auto mb-0"
      onClick={()=>{
        handleClick();
      }}
    >
      <GreenBtn title="Save Transaction" />
    </div>
  );
}

export default Transaction;
