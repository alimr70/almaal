import { useLocation } from "react-router-dom";
import Sadaqah from "../components/Main/HomeComponents/Sadaqah";
import Savings from "../components/Main/HomeComponents/Savings";
import Zakat from "../components/Main/HomeComponents/Zakat";
import Accounts from "./Main/Accounts";
import Home from "./Main/Home";
import Transaction from "./Main/Transaction";
import Budget from "./Main/Budget";
import Reports from "./Main/Reports";

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
  "/zakat": <Sadaqah />,
  "/sadaqah": <Savings />,
  "/savings": <Zakat />,
  "/accounts": <Accounts />,
  "/transaction": <Transaction />,
  "/budget": <Budget />,
  "/reports": <Reports />
}

export default Main;
