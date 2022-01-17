import React, { useContext } from 'react';
import { SelectedCoinContext } from '../../Context/SelectedCoinContext'
import './ActionButtons.css';

const BuyButton = () => {
    const [selectedCoin, setSelectedCoin] = useContext(SelectedCoinContext);

    const buyButtonHandler = () => {
        alert(`Are you sure you want to purchase $1 of ${selectedCoin} ? `)
    }

    return (
        <div className="action_button buy_but_hov" onClick={buyButtonHandler}>
            Buy
        </div>

    );

}

export default BuyButton;