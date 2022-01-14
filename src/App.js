import './App.css';
import './Components/Grid.css';
import CoinDisplay from './Components/CoinDisplay';
import PurchaseAmountDisplay from './Components/PurchaseAmountDisplay'
import QueDisplay from './Components/QueDisplay'
import TransactionHistoryDisplay from './Components/TransactionHistoryDisplay';
import BuyButton from './Components/Buttons/BuyButton'
import TotalInvesting from './Components/TotalInvesting';
import SellButton from './Components/Buttons/SellButton';
import NetTotal from './Components/NetTotal';

function App() {
  return (
    <div>
      <div className="app_head"> Crypto Trading Bot </div>
      <div className="holder">
        <CoinDisplay />
        <PurchaseAmountDisplay />
        <QueDisplay />
        <TransactionHistoryDisplay />
        <div className="nested_grid">
          <BuyButton />
          <TotalInvesting />
          <SellButton />
          <NetTotal />

        </div>
      </div>



    </div>
  );
}

export default App;
