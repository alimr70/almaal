import { Route, Switch } from "react-router-dom";
import RootPage from "../pages/RootPage";
import TransactionPage from "../pages/TransactionPage";

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={RootPage} />
      <Route path="/transaction" component={TransactionPage} />
      <Route path="/" component={RootPage} />
    </Switch>
  );
}

export default AppRoutes;