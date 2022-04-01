import React, { useContext } from 'react';
import './DisplayBoxes.css';
import './Grid.css';
import { SelectedCoinContext } from '../../context/SelectedCoinContext'



const CoinDisplay = () => {
    const [selectedCoin, setSelectedCoin] = useContext(SelectedCoinContext);

    const coinSelectionHandler = (event) => {
        setSelectedCoin(event.target.textContent.split(" ")[0])
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

                        <li onClick={coinSelectionHandler} className="li">Bitcoin .... $42,848</li>
                        <li onClick={coinSelectionHandler} className="li">Etherium .... $3,000</li>
                        <li onClick={coinSelectionHandler} className="li">DogeCoin .... $0.17</li>

                    </ul>
                </div>
            </div>

        </div >

    );
};

export default CoinDisplay;