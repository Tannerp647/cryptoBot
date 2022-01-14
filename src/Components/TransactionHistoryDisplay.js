import './TransactionHistoryDisplay.css';
import './Grid.css'

const TransactionHistoryDisplay = () => {

    return (

        <div className="wrapper_transaction_box">
            <div className="transaction_history_box">
                <div className="transaction_history_box_title">
                    Transaction History
                </div>
                <div>
                    buy/sell $ amount coinTicker price and date
                </div>
            </div>

        </div>

    );

}

export default TransactionHistoryDisplay;