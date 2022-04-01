
import './Grid.css';
import CoinDisplay from './CoinDisplay';
import PurchaseAmountDisplay from './PurchaseAmountDisplay'
import QueDisplay from './QueDisplay'
import TransactionHistoryDisplay from './TransactionHistoryDisplay';
import TotalInvesting from './TotalInvesting';
import NetTotal from './NetTotal';
import BuyButton from '../Buttons/BuyButton';
import SellButton from '../Buttons/SellButton';
import { SelectedCoinProvider } from '../../context/SelectedCoinContext';
import { PurchaseAmountProvider } from '../../context/PurchaseAmountContext';


function RenderDisplays() {
    return (
        <div>
            <div className="app_head"> Crypto Trading Bot </div>
            <div className="holder">

                <SelectedCoinProvider>
                    <PurchaseAmountProvider>
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
                    </PurchaseAmountProvider>
                </SelectedCoinProvider>

            </div>
        </div>
    )
}

export default RenderDisplays;