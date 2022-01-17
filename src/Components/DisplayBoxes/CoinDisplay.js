import React, { useState, useContext } from 'react';
import './DisplayBoxes.css';
import './Grid.css';
import { SelectedCoinContext } from '../../Context/SelectedCoinContext'



const CoinDisplay = () => {
    const [selectedCoin, setSelectedCoin] = useContext(SelectedCoinContext);

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
                    <ul className="ul">

                        <li onClick={coinSelectionHandler} className="li">Bitcoin .... $47,839</li>

                    </ul>
                </div>
            </div>

        </div >

    );
};

export default CoinDisplay;