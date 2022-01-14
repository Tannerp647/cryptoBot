
import './Grid.css';
import CoinDisplay from './CoinDisplay';
import PurchaseAmountDisplay from './PurchaseAmountDisplay'
import QueDisplay from './QueDisplay'
import TransactionHistoryDisplay from './TransactionHistoryDisplay';
import TotalInvesting from './TotalInvesting';
import NetTotal from './NetTotal';
import BuyButton from '../Buttons/BuyButton';
import SellButton from '../Buttons/SellButton';


function RenderDisplays() {
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
                    <SellButton />
                    <TotalInvesting />
                    <NetTotal />
                </div>

            </div>
        </div>
    )
}

export default RenderDisplays;