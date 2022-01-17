import './ActionButtons.css';

const BuyButton = () => {

    const buyButtonHandler = () => {
        alert(`Are you sure you want to purchase $1 of Bitcoin?`)
    }

    return (
        <div className="action_button buy_but_hov" onClick={buyButtonHandler}>
            Buy
        </div>

    );

}

export default BuyButton;