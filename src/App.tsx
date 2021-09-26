import { BrowserRouter as Router } from "react-router-dom";
import { AccountsDataContext } from "./Contexts/Data Contexts/AccountsDataContext";
import { BudgetDataContext } from "./Contexts/Data Contexts/BudgetDataContext";
import { TransactionDataContext } from "./Contexts/Data Contexts/TransactionDataContext";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="App h-full main-layout-grid">
      <Router>
        <TransactionDataContext>
          <AccountsDataContext>
            <BudgetDataContext>
              <AppRoutes />
            </BudgetDataContext>
          </AccountsDataContext>
        </TransactionDataContext>
      </Router>
    </div>
  );
}

export default App;
