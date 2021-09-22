import { useLocation } from "react-router-dom";
import Sadaqah from "./Home/Sadaqah";
import Savings from "./Home/Savings";
import Zakat from "./Home/Zakat";
import Accounts from "./Accounts";
import Home from "./Home";
import Transaction from "./Transaction";
import Budget from "./Budget";
import Reports from "./Reports";

const Main = () => {
  let {pathname} = useLocation();
  return (
    <main className="h-full w-full max-w-xl justify-self-center flex flex-col overflow-x-auto">
      {mainRoutes[pathname]}
    </main>
  );
};

const mainRoutes: {[key: string]: JSX.Element;} = {
  "/": <Home />,
  "/zakat": <Zakat />,
  "/sadaqah": <Sadaqah />,
  "/savings": <Savings />,
  "/accounts": <Accounts />,
  "/transaction": <Transaction />,
  "/budget": <Budget />,
  "/reports": <Reports />
}

export default Main;
