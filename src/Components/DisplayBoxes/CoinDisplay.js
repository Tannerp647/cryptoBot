import './DisplayBoxes.css';
import './Grid.css'
import React, { useState } from 'react';


const CoinDisplay = () => {
    const [selectedCoin, setSelectedCoin] = useState();

    const coinSelectionHandler = () => {
        setSelectedCoin('Bitcoin1')
    }

    console.log(selectedCoin);
    return (

        <div className="wrapper_coin_box">

            <div className="box">
                <div className="box_title">
                    Coin Display
                </div>
                <div>
                    Coin name .. Current price
                    <ul>

                        <li onClick={coinSelectionHandler} className="box_hover ">Bitcoin .... $47,839</li>

                    </ul>
                </div>
            </div>

        </div>

    );
};

export default CoinDisplay;