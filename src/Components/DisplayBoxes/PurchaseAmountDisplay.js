import './DisplayBoxes.css';
import './Grid.css';
import React, { useContext } from 'react';
import { PurchaseAmountContext } from '../../context/PurchaseAmountContext';

const PurchaseAmountDisplay = () => {

    const [purchaseAmount, setPurchaseAmount] = useContext(PurchaseAmountContext);

    const purchaseAmountHandler = (event) => {
        setPurchaseAmount(event.target.textContent)
    }

    console.log(purchaseAmount);
    return (

        <div className="wrapper_purchase_box">

            <div className="box">
                <div className="box_title">
                    Purchase Display
                </div>
                <div>
                    <ul className="ul">
                        <li className="li" onClick={purchaseAmountHandler}>$1</li>
                        <li className="li" onClick={purchaseAmountHandler}>$2</li>
                        <li className="li" onClick={purchaseAmountHandler}>$3</li>
                        <li className="li" onClick={purchaseAmountHandler}>$4</li>
                        <li className="li" onClick={purchaseAmountHandler}>$5</li>
                    </ul>

                </div>
            </div>

        </div>

    );
};

export default PurchaseAmountDisplay;