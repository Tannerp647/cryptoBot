import './App.css';
import './Components/DisplayBoxes/Grid.css';
import CoinDisplay from './Components/DisplayBoxes/CoinDisplay';
import PurchaseAmountDisplay from './Components/DisplayBoxes/PurchaseAmountDisplay'
import QueDisplay from './Components/DisplayBoxes/QueDisplay'
import TransactionHistoryDisplay from './Components/DisplayBoxes/TransactionHistoryDisplay';
import TotalInvesting from './Components/DisplayBoxes/TotalInvesting';
import NetTotal from './Components/DisplayBoxes/NetTotal';
import BuyButton from './Components/Buttons/BuyButton'
import SellButton from './Components/Buttons/SellButton';

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
