import React, { createContext, useState } from 'react';

export const PurchaseAmountContext = createContext();

export const PurchaseAmountProvider = props => {
    const [purchaseAmount, setPurchaseAmount] = useState();
    return (
        <PurchaseAmountContext.Provider value={[purchaseAmount, setPurchaseAmount]}>
            {props.children}
        </PurchaseAmountContext.Provider>
    );
};
