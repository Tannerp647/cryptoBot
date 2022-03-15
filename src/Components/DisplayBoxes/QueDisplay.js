import { useContext } from 'react';
import './DisplayBoxes.css';
import './Grid.css'
import { SelectedCoinContext } from '../../Context/SelectedCoinContext'
import { PurchaseAmountContext } from '../../Context/PurchaseAmountContext'
import React from 'react';


const QueDisplay = () => {
    const [selectedCoin] = useContext(SelectedCoinContext);
    const [purchaseAmount] = useContext(PurchaseAmountContext);

    return (
        <div className="wrapper_que_box">

            <div className="box">
                <div className="box_title">
                    Que Display
                </div>
                <div>
                    Coin name - sell/buy $ amount @ coin price
                </div>
                <div>
                    <ul>
                        <li>{selectedCoin} {purchaseAmount} </li>
                    </ul>
                </div>
            </div>

        </div>

    );
};


export default QueDisplay;