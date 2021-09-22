import { useLocation, useHistory } from "react-router-dom";

const Header = () => {
  let { pathname } = useLocation();
  return (
    <header className="w-full max-w-xl justify-self-center">
      <nav className="w-full py-2 flex justify-between bg-blue-700 justify-self-center">
        {headerRoutes[pathname]}
      </nav>
    </header>
  );
};

const HomeHeader = () => {
  return (
    <>
      <h2 className="ml-2 text-2xl font-bold">Almaal</h2>
    </>
  );
};

const AccountsHeader = () => {
  return (
    <>
      <h2 className="ml-2 text-2xl font-bold">Accounts</h2>

      <div className="flex items-center">
        <div className="p-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path
              fillRule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

const HeaderWithBackBtn: React.FC<{title:string}> = ({title}) => {
  const {goBack} = useHistory();
  return (
    <>
      <div className="flex items-center">
      <div
        className="cursor-pointer"
        onClick={() => goBack()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h2 className="ml-2 text-2xl font-bold">{title}</h2>
      </div>
    </>
  );
};

const BudgetHeader = () => {
  return (
    <>
      <h2 className="ml-2 text-2xl font-bold">Sep 2021</h2>

      <div className="flex items-center">
        <div className="p-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-300"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="p-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-300"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </div>
      </div>
    </>
  );
};

const ReportsHeader = () => {
  return (
    <>
      <h2 className="ml-2 text-2xl font-bold">Reports</h2>
    </>
  );
};

const headerRoutes: { [key: string]: JSX.Element } = {
  "/": <HomeHeader />,
  "/zakat": <HeaderWithBackBtn title="zakat" />,
  "/sadaqah": <HeaderWithBackBtn title="Sadaqah" />,
  "/savings": <HeaderWithBackBtn title="Savings" />,
  "/accounts": <AccountsHeader />,
  "/transaction": <HeaderWithBackBtn title="Add Transaction" />,
  "/budget": <BudgetHeader />,
  "/reports": <ReportsHeader />,
};

export default Header;
