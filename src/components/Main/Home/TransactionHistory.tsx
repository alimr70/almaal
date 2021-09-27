import { useContext } from "react";
import { AccountsDataStore } from "../../../Contexts/Data Contexts/AccountsDataContext";
import { BudgetDataStore } from "../../../Contexts/Data Contexts/BudgetDataContext";
import { TransactionDataStore } from "../../../Contexts/Data Contexts/TransactionDataContext";
import { ITransaction } from "../../../Types";

const TransactionHistory = () => {
  const {TransactionDataState} = useContext(TransactionDataStore);
  return (
    <>
      <TransactionHistoryHeader />

      {TransactionDataState.map((el:ITransaction)=>{
        return <TransactionHistoryDataCard key={el.id} transaction={el} />
      })}
    </>
  );
}

const TransactionHistoryHeader = () => {
  return (
    <>
    <div className="flex justify-center">
      <p>Transaction History</p>
    </div>
  </>
  );
}

const TransactionHistoryDataCard: React.FC<{transaction: ITransaction}> = ({transaction}) => {
  const {accountId,amount,budgetCategoryId,isPlus,time} = transaction;
  const {AccountsDataState} = useContext(AccountsDataStore);
  const {BudgetDataState} = useContext(BudgetDataStore);

  const accountTitle = AccountsDataState.find((acc) => acc.id === accountId)?.title;
  const budgetCategoryTitle = BudgetDataState.categories.find((category) => category.id === budgetCategoryId)?.title;
  const redOrGreen = isPlus? "green" : "red";
  const minusOrPlus = isPlus? "+" : "";
  return(
    <>
      <div className="m-1 p-3 text-xl bg-gray-700">
        <div className="flex justify-between border-b-2 border-gray-800">
          <p>{new Date(time).toDateString()}</p>
          <p className={`text-${redOrGreen}-500`}>{minusOrPlus + amount}</p>
        </div>
        <div className="flex justify-between">
          <p>Acc: {accountTitle}</p>
          <p>Cat: {budgetCategoryTitle}</p>
        </div>
      </div>
    </>
  );
}


export default TransactionHistory;