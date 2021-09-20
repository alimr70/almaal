import GreenBtn from "../GreedBtn";
import TitleAndDataRow from "../TitleAndDataRow";

const Accounts = () => {
  return (
    <>
      <TitleAndDataRow title="Monthly Paycheck" data="5,000" />
      <TitleAndDataRow title="Retirement Savings" data="0" />
      <TitleAndDataRow title="Stuff to buy" data="1,500" />
      <GreenBtn title="Transfer Balance Between Accounts" />
    </>
  );
};

export default Accounts;