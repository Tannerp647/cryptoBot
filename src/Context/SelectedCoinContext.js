import React, { createContext, useState } from 'react';

export const SelectedCoinContext = createContext();

export const SelectedCoinProvider = props => {
    const [selectedCoin, setSelectedCoin] = useState();
    return (
        <SelectedCoinContext.Provider value={[selectedCoin, setSelectedCoin]}>
            {props.children}
        </SelectedCoinContext.Provider>
    );
};
