import { Link } from "react-router-dom";
import TitleAndDataRow from "../../TitleAndDataRow";
import TransactionHistory from "./TransactionHistory";

const Home = () => {
  return (
    <>
      <div className="m-1 p-5 bg-blue-900">
        <p className="text-blue-200">Available Balance To Spare</p>
        <h1 className="text-4xl text-center">300</h1>
      </div>
      {/* <Link to="/zakat">
        <TitleAndDataRow title="Zakat" data="2,500" />
      </Link> */}
      <Link to="/sadaqah">
        <TitleAndDataRow title="Allah's Right" data="50" />
      </Link>
      <Link to="/savings">
        <TitleAndDataRow title="Savings" data="" />
      </Link>
      <Link to="/budget">
        <TitleAndDataRow title="Budget" data="5,000" />
      </Link>
      <TransactionHistory />
    </>
  );
};

export default Home;
