import './DisplayBoxes.css';
import './Grid.css';
import React, { useState } from 'react';

const PurchaseAmountDisplay = () => {

    const [purchaseAmount, setPurchaseAmount] = useState();

    const purchaseAmountHandler = () => {
        setPurchaseAmount('$1')
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
                        <li className="li">$2</li>
                        <li className="li">$3</li>
                        <li className="li">$4</li>
                        <li className="li">$5</li>
                    </ul>

                </div>
            </div>

        </div>

    );
};

export default PurchaseAmountDisplay;